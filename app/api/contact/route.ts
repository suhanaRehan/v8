import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LEN = { name: 200, email: 200, company: 200, phone: 50, service: 200, message: 5000 }

// Server-only client using the service role key, so it can insert into
// contact_submissions even though that table has no public RLS policies.
// Created lazily (inside the request handler, not at module load) —
// creating it at import time makes Next.js's build-time page data
// collection crash with "supabaseUrl is required" whenever the env vars
// aren't visible during the build step, even if they're set correctly
// for the deployed runtime.
function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  // Supabase's Vercel integration names this SUPABASE_SERVICE_ROLE_KEY.
  // SUPABASE_SECRET_KEY is kept as a fallback in case you're using the
  // newer publishable/secret key naming instead.
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured on the server.')
  }
  return createClient(url, key)
}

export async function POST(request: NextRequest) {
  try {
    // Limit each IP to 5 submissions per 10 minutes. Prevents the form
    // being used for DB/email spam scripts.
    const ip = getClientIp(request)
    if (!rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const body = await request.json()
    const { name, email, company, phone, service, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Name, email, phone, and message are required.' }, { status: 400 })
    }

    if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    for (const [field, value] of Object.entries({ name, email, company, phone, service, message })) {
      const max = MAX_LEN[field as keyof typeof MAX_LEN]
      if (typeof value === 'string' && value.length > max) {
        return NextResponse.json({ error: `${field} is too long.` }, { status: 400 })
      }
    }

    let supabaseAdmin
    try {
      supabaseAdmin = getSupabaseAdmin()
    } catch (configErr) {
      console.error('Contact API configuration error:', configErr)
      return NextResponse.json({ error: 'Server is not configured to accept submissions right now.' }, { status: 500 })
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from('contact_submissions')
      .insert({ name, email, company: company || null, phone, service: service || null, message })

    if (dbError) {
      console.error('Failed to save contact submission:', dbError)
      return NextResponse.json({ error: 'Failed to save your message. Please try again.' }, { status: 500 })
    }

    // 2. Email notification (only runs if RESEND_API_KEY and CONTACT_NOTIFY_EMAIL are set)
    const resendApiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL

    if (resendApiKey && notifyEmail) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Resend's onboarding domain works without verifying your own
            // domain, but only delivers to the email you signed up with.
            // Once you verify a domain in Resend, change this to something
            // like "Contact Form <contact@yourdomain.com>".
            from: 'Contact Form <onboarding@resend.dev>',
            to: notifyEmail,
            subject: `New contact form submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`,
          }),
        })

        if (!emailRes.ok) {
          // Don't fail the whole request if email fails — the submission
          // is already safely saved in Supabase.
          console.error('Resend email failed:', await emailRes.text())
        }
      } catch (emailErr) {
        console.error('Email notification error:', emailErr)
      }
    } else {
      console.warn('RESEND_API_KEY or CONTACT_NOTIFY_EMAIL not set — skipping email notification.')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
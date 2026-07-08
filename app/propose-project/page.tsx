'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { categories } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import PhoneInput from '@/components/ui/PhoneInput'
import { supabase } from '@/lib/supabase'

export default function ProposeProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budgetRange: '',
    timeline: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Pull in saved details for logged-in users so they don't have to
  // re-type name/email/company/phone on every form on the site.
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const authUser = data.user
      if (!authUser) return
      setFormData((prev) => ({
        ...prev,
        name: prev.name || authUser.user_metadata?.name || '',
        email: prev.email || authUser.email || '',
        company: prev.company || authUser.user_metadata?.company || '',
        phone: prev.phone || authUser.user_metadata?.phone || '',
      }))
    })
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      setFormData({
        name: '', email: '', company: '', phone: '', service: '', budgetRange: '', timeline: '', description: '',
      })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      console.error('Proposal submission failed:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40'
  const labelClass = 'block text-sm font-medium mb-2'

  return (
    <div>
      <PageHero
        eyebrow="Start a Project"
        title="Propose your project"
        description="Tell us what you're building. Share a few details below and our team will put together a tailored proposal — usually within one business day."
        primaryCta={{ label: 'Contact Us Instead', href: '/contact' }}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <Reveal>
            <div>
              <h2 className="text-xl font-bold mb-8">What happens next</h2>
              <div className="space-y-6">
                {[
                  { title: 'We review your brief', desc: 'Our team reads through your project details within 1 business day.' },
                  { title: 'A discovery call', desc: 'We schedule a short call to clarify scope, goals, and constraints.' },
                  { title: 'You get a proposal', desc: 'A tailored scope, timeline, and estimate — no obligation.' },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-brand-500">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 surface-card p-6">
                <p className="text-sm text-ink-soft leading-relaxed">
                  Prefer to just ask a question first?{' '}
                  <Link href="/contact" className="text-brand-500 hover:text-brand-600 font-medium">
                    Contact us
                  </Link>{' '}
                  instead, or check our{' '}
                  <Link href="/faq" className="text-brand-500 hover:text-brand-600 font-medium">
                    FAQ
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="surface-card p-6 sm:p-8">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} /> Thanks! Your proposal request has been submitted. We'll be in touch soon.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      required className={inputClass} placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      required className={inputClass} placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      className={inputClass} placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <PhoneInput
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      required
                      selectClassName="px-3 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                      inputClassName={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Service Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a service</option>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.shortName}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} className={inputClass}>
                      <option value="">Select a range</option>
                      <option value="under-10k">Under $10k</option>
                      <option value="10k-50k">$10k – $50k</option>
                      <option value="50k-150k">$50k – $150k</option>
                      <option value="150k-plus">$150k+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass}>
                      <option value="">Select a timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1–3 months</option>
                      <option value="3-6-months">3–6 months</option>
                      <option value="6-plus-months">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Project Description *</label>
                  <textarea
                    name="description" value={formData.description} onChange={handleChange}
                    required rows={6} className={inputClass}
                    placeholder="Tell us about your project — goals, current setup, and anything else that helps us scope it accurately."
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {loading ? 'Submitting...' : 'Submit Proposal'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}

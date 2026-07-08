'use client'

import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react'
import { categories } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import PhoneInput from '@/components/ui/PhoneInput'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // If the person is already logged in, pull their saved details in so
  // they don't have to retype name/email/company/phone every time they
  // fill out a form — they only need to add the message itself.
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
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
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us about your goals, environment, and timeline. Our team typically responds within one business day with clear next steps."
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb w-[320px] h-[320px] bg-brand-500/8 -left-20 top-0 animate-glow-pulse" />
          <div className="glow-orb w-[280px] h-[280px] bg-accent-cyan/8 right-0 bottom-0 animate-float" />
        </div>
        <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">Our team is online now</span>
              </div>
              <h2 className="text-xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-500/10 text-brand-500 dark:text-brand-300 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Phone</h3>
                    <p className="text-sm text-ink-soft">+1 (437) 799-8442</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-500/10 text-brand-500 dark:text-brand-300 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <p className="text-sm text-ink-soft break-all">info@securespheresoftwaresolutions.com</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-500/10 text-brand-500 dark:text-brand-300 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Address</h3>
                    <p className="text-sm text-ink-soft">
                      Toronto, ON<br />Serving Canada, the United States &amp; India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 surface-card glow-ring p-5 sm:p-6">
                <h3 className="font-semibold text-sm mb-3">Response Times</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  <strong className="text-ink">Business hours:</strong> 1-2 hours<br />
                  <strong className="text-ink">After hours:</strong> Next business day
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="surface-card glow-ring p-5 sm:p-8">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="flex-shrink-0" /> Thank you for your message — we will be in touch soon.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    required
                    selectClassName="px-3 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    inputClassName="px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  >
                    <option value="">Select a service</option>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.shortName}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary btn-shine w-full disabled:opacity-50">
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}

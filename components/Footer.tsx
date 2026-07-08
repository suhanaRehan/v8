'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { categories } from '@/lib/services-data'

function XLogo({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb w-[420px] h-[420px] bg-brand-500/20 -left-32 -top-32 animate-glow-pulse" />
        <div className="glow-orb w-[380px] h-[380px] bg-accent-cyan/10 right-0 bottom-0 animate-float" />
        <div className="absolute inset-0 gradient-mesh-bg opacity-60" />
      </div>

      <div className="relative">
        <div className="container-page py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/logo.png"
                  alt="Secure Sphere"
                  width={72}
                  height={72}
                  className="object-contain transition-all h-12 w-auto"
                />
                <span className="font-display font-bold text-lg text-white">
                  Secure <span className="gradient-text">Sphere</span>
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed max-w-xs text-navy-300">
                Enterprise cybersecurity, AI, cloud, software development, and managed IT services &mdash;
                delivered with the precision demanded by regulated, high-stakes organizations.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a href="tel:+14377998442" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={15} className="text-brand-400 flex-shrink-0" /> +1 (437) 799-8442
                </a>
                <a
                  href="mailto:info@securespheresoftwaresolutions.com"
                  className="flex items-center gap-3 hover:text-white transition-colors break-all"
                >
                  <Mail size={15} className="text-brand-400 flex-shrink-0" /> info@securespheresoftwaresolutions.com
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-brand-400 flex-shrink-0" /> Toronto, ON &middot; Serving Canada, the United States &amp; India
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-navy-300 hover:text-white hover:border-brand-400/50 hover:shadow-[0_0_16px_-2px_rgba(31,109,255,0.6)] transition-all duration-300"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-navy-300 hover:text-white hover:border-brand-400/50 hover:shadow-[0_0_16px_-2px_rgba(31,109,255,0.6)] transition-all duration-300"
                >
                  <XLogo size={14} />
                </a>
                <a
                  href="mailto:info@securespheresoftwaresolutions.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-navy-300 hover:text-white hover:border-brand-400/50 hover:shadow-[0_0_16px_-2px_rgba(31,109,255,0.6)] transition-all duration-300"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/services/${cat.slug}`} className="text-sm hover:text-white transition-colors">
                      {cat.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="text-sm hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-white mb-4">Stay in the loop</h4>
              <p className="text-sm text-navy-300 mb-4">Security insights and product updates, roughly once a month. No spam.</p>
              {subscribed ? (
                <p className="text-sm text-brand-300 font-medium">Thanks — you&apos;re subscribed.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 min-w-0 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-navy-400 focus:outline-none focus:border-brand-400/60 focus:ring-1 focus:ring-brand-400/40 transition-colors"
                  />
                  <button type="submit" className="btn-primary btn-shine btn-sm flex-shrink-0">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-navy-400">
              &copy; {new Date().getFullYear()} Secure Sphere Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/privacy" className="text-xs text-navy-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-navy-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

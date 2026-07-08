'use client'

import Link from 'next/link'
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, User, LogOut, Phone, Menu, X } from 'lucide-react'
import { categories } from '@/lib/services-data'
import { supabase } from '@/lib/supabase'
import ThemeToggle from './ThemeToggle'

// Every non-service page on the site, shown in the drawer
const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false)
  const [drawerExpanded, setDrawerExpanded] = useState<string | null>(null)
  const [authName, setAuthName] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', escHandler)
    return () => document.removeEventListener('keydown', escHandler)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const authUser = data.user
      setAuthName(authUser ? (authUser.user_metadata?.name ?? authUser.email ?? 'Account') : null)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthName(session?.user ? (session.user.user_metadata?.name ?? session.user.email ?? 'Account') : null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setAuthName(null)
    setDrawerOpen(false)
    router.push('/')
  }

  const servicesActive = pathname.startsWith('/services')

  return (
    <div ref={navRef} className="relative z-50">
      <div className={`sticky z-50 transition-all duration-500 ease-out ${scrolled ? 'top-3' : 'top-0'}`}>
        <div className={`transition-all duration-500 ease-out mx-auto ${scrolled ? 'max-w-6xl px-4' : 'max-w-full px-0'}`}>
          <nav
            className={`transition-all duration-500 ease-out ${
              scrolled
                ? 'rounded-2xl bg-surface/75 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.25)]'
                : 'rounded-none bg-surface/40 backdrop-blur-md border-b border-white/5'
            }`}
          >
            <div className={`container-page grid grid-cols-[auto_1fr_auto] items-center gap-4 transition-all duration-500 ${scrolled ? 'h-14' : 'h-[4.5rem]'}`}>
              {/* Logo — left (inline, blends with nav) */}
              <Link href="/" className="flex items-center gap-0 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Secure Sphere"
                  width={88}
                  height={88}
                  className={`object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'}`}
                  priority
                />
                <span className="font-display font-bold text-base tracking-tight hidden sm:inline text-ink">
                  Secure <span className="gradient-text">Sphere</span>
                </span>
              </Link>

              {/* Primary nav — centered in the middle of the bar */}
              <div className="hidden lg:flex items-center justify-center gap-0.5">
                <Link
                  href="/"
                  className={`nav-link text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    pathname === '/' ? 'text-brand-600 dark:text-brand-300 active' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={`nav-link text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    servicesActive ? 'text-brand-600 dark:text-brand-300 active' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className={`nav-link text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    pathname === '/about' ? 'text-brand-600 dark:text-brand-300 active' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  About Us
                </Link>
              </div>

              {/* Utilities — right, menu icon sits at the very corner */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 justify-self-end">
                <div className="hidden lg:flex items-center gap-3">
                  {authName ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-1.5 text-sm px-2 py-2 rounded-lg text-ink-soft hover:text-ink transition-colors whitespace-nowrap max-w-[110px] truncate"
                      >
                        <User size={14} className="flex-shrink-0" />
                        <span className="truncate">{authName}</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-1.5 text-sm px-2 py-2 rounded-lg text-ink-soft hover:text-ink transition-colors whitespace-nowrap"
                        title="Log Out"
                      >
                        <LogOut size={14} />
                      </button>
                    </>
                  ) : (
                    <Link href="/auth/login" className="text-sm font-medium text-ink-soft hover:text-ink whitespace-nowrap">
                      Sign In
                    </Link>
                  )}
                  <Link href="/propose-project" className="btn-primary btn-shine btn-sm whitespace-nowrap">
                    Book Consultation
                  </Link>
                </div>

                <ThemeToggle />

                {/* Menu icon — rightmost corner, opens the full-site drawer */}
                <button
                  aria-expanded={drawerOpen}
                  aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setDrawerOpen((v) => !v)}
                  className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-colors flex-shrink-0 ${
                    drawerOpen ? 'text-brand-600 dark:text-brand-300 border-brand-400/50 bg-brand-50 dark:bg-brand-900/30' : 'text-ink-soft border-hairline hover:text-ink'
                  }`}
                >
                  <Menu size={17} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Scrim */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Full-site drawer — every page and every service, one tap away */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[90vw] max-w-sm bg-surface border-l border-hairline shadow-[-20px_0_60px_-20px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline flex-shrink-0">
            <span className="font-display font-bold text-base text-ink">Site menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-soft hover:text-ink border border-hairline"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink-faint mb-2">Pages</p>
            <div className="space-y-0.5 mb-6">
              {pageLinks.map((l) => {
                const isActive = pathname === l.href
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`block text-sm font-medium px-2.5 py-2.5 rounded-lg transition-colors ${
                      isActive ? 'text-brand-600 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30' : 'text-ink-soft hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {l.label}
                  </Link>
                )
              })}
            </div>

            <div className="border-t border-hairline pt-5">
              <button
                onClick={() => setDrawerServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-ink-faint mb-2 px-0.5"
              >
                Services
                <ChevronDown
                  size={14}
                  className="transition-transform"
                  style={{ transform: drawerServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              {drawerServicesOpen && (
                <div className="space-y-1">
                  {categories.map((cat) => {
                    const Icon = (Icons as any)[cat.icon]
                    return (
                      <div key={cat.slug}>
                        <button
                          onClick={() => setDrawerExpanded(drawerExpanded === cat.slug ? null : cat.slug)}
                          className="w-full flex items-center justify-between gap-2 text-sm font-semibold px-2.5 py-2.5 rounded-lg text-ink hover:bg-ink/5"
                        >
                          <span className="flex items-center gap-2">
                            {Icon && <Icon size={15} className="text-brand-500 flex-shrink-0" strokeWidth={1.8} />}
                            {cat.navLabel}
                          </span>
                          <ChevronDown
                            size={13}
                            className="text-ink-faint transition-transform flex-shrink-0"
                            style={{ transform: drawerExpanded === cat.slug ? 'rotate(180deg)' : 'rotate(0)' }}
                          />
                        </button>
                        {drawerExpanded === cat.slug && (
                          <div className="pl-9 pb-2 space-y-0.5">
                            <Link
                              href={`/services/${cat.slug}`}
                              onClick={() => setDrawerOpen(false)}
                              className="block text-xs py-1.5 px-2 rounded-md text-brand-600 dark:text-brand-400 font-medium"
                            >
                              Category overview
                            </Link>
                            {cat.subServices.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${cat.slug}/${s.slug}`}
                                onClick={() => setDrawerOpen(false)}
                                className="block text-xs py-1.5 px-2 rounded-md text-ink-soft hover:text-ink"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 border-t border-hairline px-5 py-4 space-y-3">
            <a href="tel:+14377998442" className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <Phone size={14} className="text-brand-500" /> +1 (437) 799-8442
            </a>
            <div className="flex items-center gap-2">
              {authName ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setDrawerOpen(false)}
                    className="btn-secondary btn-sm flex-1 justify-center"
                  >
                    <User size={14} /> {authName}
                  </Link>
                  <button onClick={handleLogout} className="btn-secondary btn-sm" title="Log Out">
                    <LogOut size={14} />
                  </button>
                </>
              ) : (
                <Link href="/auth/login" onClick={() => setDrawerOpen(false)} className="btn-secondary btn-sm flex-1 justify-center">
                  Sign In
                </Link>
              )}
              <Link href="/propose-project" onClick={() => setDrawerOpen(false)} className="btn-primary btn-shine btn-sm flex-1 justify-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { ArrowRight, ArrowUpRight, Quote, CheckCircle2, Layers } from 'lucide-react'
import { categories } from '@/lib/services-data'
import { caseStudies } from '@/lib/case-studies-data'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import AnimatedStats from '@/components/ui/AnimatedStats'
import ContactCTA from '@/components/ui/ContactCTA'
import HeroCarousel from '@/components/ui/HeroCarousel'
import VerticalNav from '@/components/ui/VerticalNav'

export const metadata: Metadata = {
  title: 'Enterprise Cybersecurity, Software & AI Solutions',
  description:
    'Secure Sphere delivers enterprise cybersecurity, software development, AI agents, and IT managed services for organizations across Canada and the United States that demand reliability and measurable outcomes.',
  alternates: { canonical: '/' },
}

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '12+', label: 'Years in Business' },
  { value: '24/7', label: 'Support' },
]

const testimonials = [
  {
    quote: 'Secure Sphere rebuilt our threat detection stack in under a quarter without a single day of downtime. Their engineers think like operators, not just consultants.',
    name: 'VP of Infrastructure',
    org: 'Regional Financial Institution',
  },
  {
    quote: 'We finally have one accountable partner across cloud, security, and custom development instead of three vendors pointing fingers at each other.',
    name: 'CTO',
    org: 'Mid-Market Healthcare Network',
  },
  {
    quote: 'The zero-trust rollout was the smoothest infrastructure migration we have ever run. Communication was constant and the documentation was excellent.',
    name: 'Director of IT',
    org: 'Logistics Operator',
  },
  {
    quote: 'Their AI team shipped a production fraud-detection model that paid for the entire engagement within the first two months of deployment.',
    name: 'Head of Risk',
    org: 'Insurance Provider',
  },
]

const securitySolutions = [
  {
    icon: 'Radar',
    title: 'Managed Detection & Response',
    description: '24/7 threat monitoring and response backed by a dedicated SOC and real-time telemetry.',
  },
  {
    icon: 'Fingerprint',
    title: 'Zero Trust Network Access',
    description: 'Identity-based access controls that verify every request, on every network, every time.',
  },
  {
    icon: 'CloudCog',
    title: 'Cloud Security Posture Mgmt',
    description: 'Continuous misconfiguration and compliance scanning across AWS, Azure, and GCP.',
  },
  {
    icon: 'KeyRound',
    title: 'Identity & Access Management',
    description: 'Enterprise SSO, MFA, and least-privilege governance across your entire application estate.',
  },
  {
    icon: 'Laptop2',
    title: 'Endpoint Protection',
    description: 'Next-gen EDR deployed and tuned across every device, workstation, and server you operate.',
  },
  {
    icon: 'Siren',
    title: 'Incident Response Retainer',
    description: 'Guaranteed-response forensics and remediation on standby before you ever need it.',
  },
]

const partnerLogos = [
  'AWS Advanced Partner', 'Microsoft Solutions Partner', 'Google Cloud Partner', 'CrowdStrike Elite Partner',
  'Palo Alto NextWave Partner', 'Okta Partner Network', 'End2End Solutions', 'HashiCorp Partner',
]

const sectionNavItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'security', label: 'Security' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

export default function Home() {
  return (
    <div>
      <VerticalNav items={sectionNavItems} />

      {/* Hero — single carousel for the whole page, rotating enterprise messaging */}
      <div id="hero">
        <HeroCarousel />
      </div>

      {/* Stats */}
      <section id="stats" className="relative border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb w-[320px] h-[320px] bg-brand-500/10 -left-20 -top-24 animate-glow-pulse" />
          <div className="glow-orb w-[280px] h-[280px] bg-accent-cyan/10 right-0 -bottom-20 animate-float" />
        </div>
        <div className="relative container-page py-14">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">Live numbers, updated in real time</span>
          </div>
          <AnimatedStats stats={stats} />
        </div>
      </section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What We Do"
          title="Capabilities built for enterprise scale"
          description="Comprehensive solutions engineered for the unique demands of modern enterprises, from boardroom strategy to production code."
          cta={{ label: 'All Services', href: '/services' }}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon]
            return (
              <Reveal key={cat.slug} delay={i * 70}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="card-glass glow-ring rounded-2xl p-6 h-full flex flex-col group"
                >
                  <div className="flex items-start justify-between">
                    {Icon && (
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                    )}
                    <span className="badge-tag">{cat.subServices.length} services</span>
                  </div>
                  <h3 className="mt-5 font-semibold text-ink">{cat.shortName}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{cat.tagline}.</p>

                  <div className="mt-4 pt-4 border-t border-hairline">
                    <ul className="space-y-1.5">
                      {cat.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-ink-soft leading-snug">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand-500 dark:text-brand-300" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1" />

                  <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-ink-faint">
                      <Layers size={12} />
                      {cat.deliveryModel}
                    </span>
                    <span className="badge-pill !py-0.5 !text-[10px]">{cat.supportBadge}</span>
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Case studies */}
      <Section id="case-studies" muted>
        <SectionHeading
          eyebrow="Client Work"
          title="Selected case studies"
          description="A sample of the systems we've designed, built, and operate for clients across regulated and high-availability industries."
          cta={{ label: 'View All Projects', href: '/case-studies' }}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 90}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="card-glass rounded-2xl overflow-hidden h-full flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="badge-tag">{cs.tag}</span>
                    <span className="text-xs text-ink-faint">{cs.subtag}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-ink leading-snug">{cs.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{cs.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                    Read case study
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Security Solutions */}
      <Section id="security" muted className="relative overflow-hidden">
        <div className="absolute -right-24 top-10 glow-orb w-[360px] h-[360px] bg-brand-500/10 animate-glow-pulse pointer-events-none" />
        <SectionHeading
          eyebrow="Security Solutions"
          title="Defense-in-depth, built for regulated industries"
          description="A layered security portfolio designed to prevent, detect, and respond &mdash; not just check a compliance box."
          cta={{ label: 'Explore Security Services', href: '/services/cyber-security' }}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securitySolutions.map((s, i) => {
            const Icon = (Icons as any)[s.icon]
            return (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card-glass glow-ring rounded-2xl p-6 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                    {Icon && <Icon size={20} strokeWidth={1.8} />}
                  </div>
                  <h3 className="mt-5 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{s.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <SectionHeading eyebrow="Client Testimonials" title="What our clients say" center />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="card-glass rounded-2xl p-7 h-full flex flex-col">
                <Quote className="text-brand-400" size={24} />
                <p className="mt-4 text-sm text-ink-soft leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-hairline">
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-faint">{t.org}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <SectionHeading
          eyebrow="How We Engage"
          title="A consistent delivery model across every discipline"
          description="Whatever the engagement, you can expect the same disciplined approach: understand, design, build, and operate."
          center
        />
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-border" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {[
              { n: '01', t: 'Understand', d: 'We learn your environment, constraints, and what success actually looks like.' },
              { n: '02', t: 'Design', d: 'We architect a solution scoped to your risk tolerance, timeline, and budget.' },
              { n: '03', t: 'Build', d: 'We deliver in iterative, demonstrable increments with continuous feedback.' },
              { n: '04', t: 'Operate', d: 'We support, monitor, and optimize so the solution keeps performing after launch.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative">
                  <div
                    className="w-[3.25rem] h-[3.25rem] rounded-2xl flex items-center justify-center font-bold text-white relative z-10"
                    style={{ background: 'linear-gradient(135deg, #1f6dff, #0c1f52)', boxShadow: '0 8px 20px -6px rgba(31,109,255,0.5)' }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-semibold text-lg text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" muted>
        <SectionHeading eyebrow="Certified Partners &amp; Alliances" title="Backed by industry-leading platforms" center />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partnerLogos.map((p) => (
            <span key={p} className="text-sm sm:text-base font-display font-semibold text-ink-soft whitespace-nowrap">
              {p}
            </span>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-900 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="glow-orb w-[300px] h-[300px] bg-brand-500/25 -left-20 -top-20 animate-glow-pulse" />
            <div className="glow-orb w-[260px] h-[260px] bg-accent-cyan/15 right-0 bottom-0 animate-float" />
          </div>
          <div className="relative p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div>
                <span className="eyebrow text-brand-400">Strategic Partnership</span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white max-w-lg">
                  In partnership with End2End Solutions
                </h3>
                <p className="mt-4 text-navy-200 max-w-lg leading-relaxed">
                  Secure Sphere is a certified partner of End2End Solutions, extending our clients&rsquo; access to a
                  broader portfolio of enterprise IT capabilities &mdash; including procurement, infrastructure
                  deployment, and vendor management &mdash; without adding complexity to the engagement.
                </p>
                <Link href="/contact" className="btn-primary mt-8">
                  Talk to Our Team <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-10 sm:p-12">
                <Quote className="text-brand-400" size={30} />
                <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-white">
                  The teams we work best with treat technology as a strategic capability, not a cost center. That is
                  the standard we build to on every engagement.
                </p>
                <p className="mt-6 text-sm text-navy-300">Secure Sphere Engineering Leadership</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <div id="contact">
        <ContactCTA />
      </div>
    </div>
  )
}

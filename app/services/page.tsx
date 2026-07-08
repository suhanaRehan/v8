import type { Metadata } from 'next'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Lightbulb,
  Activity,
  HeartHandshake,
  Search,
  ClipboardList,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
  DollarSign,
  TrendingUp,
  Trophy,
  Users2,
  Gauge,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import { categories } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ContactCTA from '@/components/ui/ContactCTA'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Services | Cybersecurity, Software, AI & IT Solutions',
  description:
    'Explore Secure Sphere\u2019s full range of enterprise technology services across cybersecurity, software development, AI solutions, and managed IT.',
  alternates: { canonical: '/services' },
}

const totalSubServices = categories.reduce((sum, c) => sum + c.subServices.length, 0)

const quickStats = [
  { value: `${categories.length}`, label: 'Core disciplines' },
  { value: `${totalSubServices}+`, label: 'Specialized services' },
  { value: '24/7', label: 'Support & monitoring' },
  { value: '12+', label: 'Years delivering' },
]

const categoryAccents = ['from-brand-500/25 to-transparent', 'from-accent-cyan/25 to-transparent', 'from-brand-400/25 to-transparent', 'from-accent-cyan/20 to-transparent', 'from-brand-500/20 to-transparent']

const whyChooseUs = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Senior engineers and architects who have delivered systems across cybersecurity, software, AI, and cloud for organizations of every size.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description: 'Every engagement bakes in secure defaults, threat modeling, and compliance awareness from the first architecture decision.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description: 'We apply new tools and techniques where they create real value, not novelty for its own sake.',
  },
  {
    icon: Activity,
    title: 'Reliability at Scale',
    description: 'Monitoring, redundancy, and rigorous testing keep your systems dependable long after launch day.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Delivery',
    description: 'Transparent communication and shared milestones mean you always know where your project stands.',
  },
]

const deliveryProcess = [
  { icon: Search, title: 'Discovery', description: 'We learn your goals, constraints, and technical environment before proposing a solution.' },
  { icon: ClipboardList, title: 'Planning', description: 'We define scope, milestones, and success criteria so expectations are clear from day one.' },
  { icon: Code2, title: 'Development', description: 'We build in focused iterations, with regular demos so you can see progress firsthand.' },
  { icon: FlaskConical, title: 'Testing', description: 'We validate functionality, performance, and security before anything reaches production.' },
  { icon: Rocket, title: 'Deployment', description: 'We ship with a clear rollout plan and monitoring in place from the first release.' },
  { icon: LifeBuoy, title: 'Ongoing Support', description: 'We stay involved after launch, with maintenance and improvements as your needs evolve.' },
]

const businessBenefits = [
  { icon: DollarSign, title: 'Lower Total Cost', description: 'Right-sized architecture and proactive maintenance reduce rework and long-term operating costs.' },
  { icon: TrendingUp, title: 'Faster Time to Market', description: 'Structured delivery and reusable engineering practices get your product to users sooner.' },
  { icon: ShieldCheck, title: 'Reduced Risk', description: 'Security and compliance are addressed early, avoiding costly fixes and exposure later.' },
  { icon: Trophy, title: 'Competitive Advantage', description: 'Modern, well-engineered systems help you outpace competitors still running on legacy tooling.' },
  { icon: Users2, title: 'Dedicated Partnership', description: 'A consistent team that understands your business, not a rotating cast of unfamiliar contractors.' },
  { icon: Gauge, title: 'Measurable Outcomes', description: 'Clear metrics and reporting tie every engagement back to the business results that matter.' },
]

const servicesFaqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We partner with organizations of all sizes, from growing startups to established enterprises, across industries including finance, healthcare, retail, and technology.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer: 'Timelines vary by scope. A focused security assessment might take a few weeks, while a full platform build can span several months. We provide a detailed timeline during the planning phase.',
  },
  {
    question: 'Do you offer support after a project is delivered?',
    answer: 'Yes. Ongoing support and monitoring are part of our standard delivery process, and we offer flexible maintenance plans tailored to your system\u2019s needs.',
  },
  {
    question: 'Can you work with our existing technology stack?',
    answer: 'In most cases, yes. We assess your current environment during discovery and design our approach to integrate with, rather than replace, systems that are working well.',
  },
  {
    question: 'How do you ensure the security of our data and systems?',
    answer: 'We apply secure-by-design principles throughout development, including threat modeling, access controls, encryption, and regular security testing before and after deployment.',
  },
  {
    question: 'What does the pricing structure look like?',
    answer: 'Pricing depends on scope and engagement type, whether fixed-price, time and materials, or retainer-based. We provide a clear proposal after understanding your requirements.',
  },
  {
    question: 'Do you provide dedicated teams or project-based staffing?',
    answer: 'Both are available. Some clients prefer a dedicated team embedded in their organization, while others need project-based delivery for a defined scope of work.',
  },
  {
    question: 'How do we get started?',
    answer: 'Reach out through our contact page or request a proposal. We will schedule a discovery call to understand your goals and outline recommended next steps.',
  },
]

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five disciplines. One accountable partner."
        description="Every engagement draws on the same engineering rigor, whether you need a security program, a modernized platform, an AI capability, cloud infrastructure, or day-to-day IT reliability."
        image="/images/it-services.jpg"
        imageAlt="Enterprise consulting team reviewing technology strategy and reporting"
      />

      {/* Quick stats strip */}
      <section className="relative border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb w-[280px] h-[280px] bg-brand-500/10 -left-16 -top-16 animate-glow-pulse" />
          <div className="glow-orb w-[240px] h-[240px] bg-accent-cyan/10 right-0 -bottom-16 animate-float" />
        </div>
        <div className="relative container-page py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {quickStats.map((s) => (
              <Reveal key={s.label}>
                <div className="card-glass rounded-2xl p-5 text-center">
                  <div className="stat-number text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-ink-soft mt-1">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="End-to-End Technology Services"
              title="Enterprise capability, delivered by one accountable partner"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 text-sm sm:text-base text-ink-soft leading-relaxed">
              <p>
                Secure Sphere provides end-to-end technology services that span the full lifecycle of a system,
                from initial architecture and secure coding through deployment, monitoring, and continuous
                improvement. Rather than handing off between specialists, one accountable team carries your
                project from concept to production and beyond.
              </p>
              <p>
                Our disciplines, cybersecurity, software development, AI solutions, cloud infrastructure, and
                managed IT, are designed to work together. A security assessment informs how we architect your
                platform; an AI capability is built on infrastructure we already know is reliable. That
                integration reduces handoff risk and keeps every part of your technology stack speaking the
                same language.
              </p>
              <p>
                Whether you need a single focused engagement or an ongoing technology partner, our approach
                stays the same: understand your business first, then engineer a solution that fits it.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section muted className="relative overflow-hidden">
        <div className="absolute -left-24 bottom-0 glow-orb w-[340px] h-[340px] bg-brand-500/8 animate-float pointer-events-none" />
        <SectionHeading eyebrow="Our Disciplines" title="Five core service areas" center />
        <div className="mt-12 grid sm:grid-cols-2 gap-8 relative">
          {categories.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon]
            return (
              <Reveal key={cat.slug} delay={i * 100}>
                <Link href={`/services/${cat.slug}`} className="surface-card surface-card-hover glow-ring p-8 h-full flex flex-col group relative overflow-hidden">
                  <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br ${categoryAccents[i % categoryAccents.length]} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative flex items-start justify-between">
                    {Icon && (
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-500/10 text-brand-500 dark:text-brand-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    )}
                    <span className="badge-tag">{cat.subServices.length} services</span>
                  </div>
                  <h2 className="relative mt-6 text-xl font-bold">{cat.name}</h2>
                  <p className="relative mt-3 text-sm text-ink-soft leading-relaxed">{cat.description}</p>

                  <div className="relative mt-5 pt-5 border-t border-hairline">
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {cat.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-ink-soft leading-snug">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand-500 dark:text-brand-300" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1" />

                  <div className="relative mt-6 pt-5 border-t border-hairline flex items-center justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-ink-faint">
                      <Layers size={12} />
                      {cat.deliveryModel}
                    </span>
                    <span className="badge-pill !py-0.5 !text-[10px]">{cat.supportBadge}</span>
                  </div>

                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 dark:text-brand-300">
                    Explore {cat.shortName}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Why Choose Secure Sphere */}
      <Section>
        <SectionHeading eyebrow="Why Choose Secure Sphere" title="What sets our engagements apart" center />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="surface-card surface-card-hover p-6 h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                  <item.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Service Delivery Process */}
      <Section muted>
        <SectionHeading eyebrow="How We Work" title="Our service delivery process" center />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryProcess.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-500/10 text-brand-500 dark:text-brand-300">
                  <step.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-semibold text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Business Benefits */}
      <Section>
        <SectionHeading eyebrow="Business Benefits" title="The impact on your business" center />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessBenefits.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="surface-card surface-card-hover p-6 h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                  <item.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section muted>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
        <div className="mt-10 max-w-3xl mx-auto">
          <Reveal>
            <FAQAccordion items={servicesFaqs} />
          </Reveal>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}

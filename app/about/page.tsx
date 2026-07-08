import {
  ShieldCheck,
  Cpu,
  Workflow,
  MessageSquare,
  Handshake,
  Lightbulb,
  Eye,
  Layers,
  BadgeCheck,
  RefreshCw,
  Target,
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ContactCTA from '@/components/ui/ContactCTA'

export const metadata = {
  title: 'About Us | Secure Sphere',
  description:
    'Secure Sphere is a technology partner built by experienced engineers, delivering secure, scalable, and intelligent software solutions.',
}

const whyChooseUs = [
  {
    icon: Cpu,
    title: 'Experienced Engineers',
    description:
      'Our team is made up of senior developers and architects who have worked on production systems at meaningful scale, not generalists learning on the job.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-First Development',
    description:
      'Security is built into our process from the first architecture decision, not bolted on after launch as an afterthought.',
  },
  {
    icon: Layers,
    title: 'Modern Technology Stack',
    description:
      'We build with current, well-supported tools and frameworks, chosen for your specific requirements rather than habit.',
  },
  {
    icon: Workflow,
    title: 'Agile Delivery',
    description:
      'Work is broken into clear milestones with regular check-ins, so you always know what has shipped and what is next.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description:
      'No black-box progress reports. You get direct access to the people building your project and honest updates on risk and status.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description:
      'We aim to be the team you call for the next project too, which means we optimize for your long-term success, not a single invoice.',
  },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay current with emerging tools and techniques, and apply them where they genuinely add value.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear scope, clear timelines, and honest communication about risk, tradeoffs, and progress.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'We build systems that behave predictably in production, not just in a demo.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality',
    description: 'Code review, testing, and thoughtful architecture are standard practice, not optional extras.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Our engineers invest in staying sharp, so the advice and tooling we bring stays current.',
  },
  {
    icon: Target,
    title: 'Customer Success',
    description: 'We measure our work by the outcomes it creates for your business, not just what was delivered.',
  },
]

const process = [
  { title: 'Discovery', description: 'We learn your goals, constraints, and technical environment before proposing a solution.' },
  { title: 'Planning', description: 'We define scope, milestones, and success criteria so expectations are clear from day one.' },
  { title: 'Design', description: 'We map out architecture and user experience decisions before writing production code.' },
  { title: 'Development', description: 'We build in focused iterations, with regular demos so you can see progress firsthand.' },
  { title: 'Testing', description: 'We validate functionality, performance, and security before anything reaches production.' },
  { title: 'Deployment', description: 'We ship with a clear rollout plan and monitoring in place from day one.' },
  { title: 'Continuous Support', description: 'We stay involved after launch, with maintenance and improvements as your needs evolve.' },
]

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Building reliable digital solutions for modern businesses."
        description="Secure Sphere is a technology partner for organizations that need software, security, and infrastructure they can depend on. Based in Toronto, we serve clients across Canada, the United States, and India, combining engineering discipline with a straightforward way of working."
        primaryCta={{ label: 'Talk to Our Team', href: '/contact' }}
        image="/images/team-dashboard.jpg"
        imageAlt="Secure Sphere engineers reviewing systems together"
      />

      {/* Our Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeading eyebrow="Our Story" title="Why we started Secure Sphere" />
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 text-sm sm:text-base text-ink-soft leading-relaxed">
              <p>
                Secure Sphere was founded to solve a problem we kept seeing repeat itself across the industry:
                technology projects that looked good in a pitch deck but fell apart once real users, real data, and
                real security requirements entered the picture.
              </p>
              <p>
                Our founding team brings experience working on enterprise-scale systems, where reliability and
                security are not optional. We built Secure Sphere around that same standard of engineering
                excellence, applied to organizations of every size.
              </p>
              <p>
                Rather than chasing every new trend, we focus on doing the fundamentals well: clear scoping, solid
                architecture, secure defaults, and honest communication throughout the engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section muted>
        <div className="grid sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="surface-card p-8 h-full">
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                Deliver secure, scalable, and intelligent software solutions that create measurable business value.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface-card p-8 h-full">
              <h3 className="text-lg font-semibold">Our Vision</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                Become a trusted global technology partner, helping businesses innovate with confidence.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeading eyebrow="Why Choose Us" title="What sets our engagements apart" center />
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

      {/* Leadership Philosophy */}
      <Section muted>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow">Leadership Philosophy</span>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink">
              Our engineering team includes experienced senior developers, architects, cybersecurity specialists,
              DevOps engineers, AI engineers, and cloud experts who have contributed to products and enterprise
              systems across multiple industries.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <SectionHeading eyebrow="Our Values" title="How we operate, every engagement" center />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => (
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

      {/* Development Process */}
      <Section muted>
        <SectionHeading eyebrow="How We Work" title="Our development process" center />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white bg-brand-500"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-semibold text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA
        title="Ready to work with a team that treats your project like it matters?"
        description="Tell us about your goals and we'll help you figure out the right path forward."
      />
    </div>
  )
}

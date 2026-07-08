import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies-data'
import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ContactCTA from '@/components/ui/ContactCTA'

export const metadata: Metadata = {
  title: 'Case Studies | Client Work',
  description:
    'See how Secure Sphere has helped clients across financial services, healthcare, and logistics modernize platforms, integrate data, and build reliable systems.',
  alternates: { canonical: '/case-studies' },
}

export default function CaseStudiesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Work"
        title="Selected case studies"
        description="A closer look at the systems we've designed, built, and operate for clients across regulated and high-availability industries."
        secondaryCta={{ label: 'View Our Services', href: '/services' }}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="surface-card surface-card-hover overflow-hidden h-full flex flex-col group"
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

      <ContactCTA
        title="Have a similar challenge?"
        description="Tell us about your environment and goals, and we'll show you how we'd approach it."
      />
    </>
  )
}

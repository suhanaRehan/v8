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
  title: 'Portfolio | Our Work',
  description:
    'A visual look at the platforms, integrations, and systems Secure Sphere has delivered for clients across financial services, healthcare, and logistics.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Portfolio"
        description="A visual look at platforms we've delivered for clients across regulated and high-availability industries. Explore a project to see the full case study."
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
      />

      <Section>
        <div className="grid sm:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="relative block rounded-2xl overflow-hidden group h-80 sm:h-96"
              >
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/20">
                      {cs.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-semibold text-xl text-white leading-snug">{cs.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="text-lg font-bold text-white">{m.value}</div>
                        <div className="text-xs text-navy-200">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 group-hover:text-white">
                    View project
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA
        title="Like what you see?"
        description="Tell us about your project and we'll show you how we'd bring it to life."
      />
    </>
  )
}

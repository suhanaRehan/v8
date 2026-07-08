import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ChevronRight, Quote } from 'lucide-react'
import { allCaseStudyParams, caseStudies, getCaseStudy } from '@/lib/case-studies-data'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import CheckList from '@/components/ui/CheckList'
import ContactCTA from '@/components/ui/ContactCTA'

export function generateStaticParams() {
  return allCaseStudyParams()
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | Case Study`,
    description: cs.description,
    keywords: [cs.title, cs.industry, ...cs.servicesUsed],
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.description,
      url: `/case-studies/${cs.slug}`,
      type: 'article',
      images: [{ url: cs.image }],
    },
  }
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) notFound()

  const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2)

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-hairline">
        <div className="container-page py-3 flex items-center gap-1.5 text-xs text-ink-faint overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight size={12} />
          <Link href="/case-studies" className="hover:text-brand-500">Case Studies</Link>
          <ChevronRight size={12} />
          <span className="text-ink-soft">{cs.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative border-b border-hairline bg-bg-soft">
        <div className="container-page pt-16 pb-14 sm:pt-20 sm:pb-16">
          <Reveal>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge-tag">{cs.tag}</span>
              <span className="text-xs text-ink-faint">{cs.subtag}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-4xl text-ink">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">{cs.summary}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px max-w-3xl rounded-2xl overflow-hidden border border-hairline">
              {[
                { label: 'Client', value: cs.client },
                { label: 'Industry', value: cs.industry },
                { label: 'Location', value: cs.location },
                { label: 'Duration', value: cs.duration },
              ].map((f) => (
                <div key={f.label} className="bg-surface px-5 py-4">
                  <div className="text-xs text-ink-faint">{f.label}</div>
                  <div className="mt-1 text-sm font-semibold text-ink">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Section>
        <Reveal>
          <div className="relative h-64 sm:h-80 lg:h-[26rem] rounded-2xl overflow-hidden">
            <Image src={cs.image} alt={cs.title} fill className="object-cover" priority />
          </div>
        </Reveal>
      </Section>

      {/* Challenge */}
      <Section muted>
        <SectionHeading eyebrow="The Challenge" title="Where the client started" />
        <Reveal delay={80}>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-3xl">{cs.challenge}</p>
        </Reveal>
      </Section>

      {/* Solution */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our Approach" title="What we built" />
            <Reveal delay={80}>
              <p className="mt-6 text-ink-soft leading-relaxed">{cs.solution}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <div className="surface-card p-7">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-ink-faint mb-4">
                  Services Involved
                </h3>
                <ul className="space-y-3">
                  {cs.servicesUsed.map((s) => (
                    <li key={s} className="text-sm text-ink-soft flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Solution points */}
      <Section muted>
        <SectionHeading eyebrow="In Detail" title="How we got there" />
        <div className="mt-10">
          <CheckList items={cs.solutionPoints} />
        </div>
      </Section>

      {/* Results & metrics */}
      <Section>
        <SectionHeading eyebrow="The Outcome" title="Results" />
        <Reveal delay={80}>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-3xl">{cs.results}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cs.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div className="surface-card p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-brand-500">{m.value}</div>
                <div className="mt-2 text-xs text-ink-faint leading-relaxed">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      {cs.testimonial && (
        <Section muted>
          <Reveal>
            <div className="surface-card p-8 sm:p-12 max-w-3xl mx-auto text-center">
              <Quote className="mx-auto text-brand-500" size={28} />
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink font-medium">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <div className="font-semibold text-sm text-ink">{cs.testimonial.author}</div>
                <div className="text-xs text-ink-faint mt-0.5">{cs.testimonial.role}</div>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* Related case studies */}
      {related.length > 0 && (
        <Section>
          <SectionHeading eyebrow="More Client Work" title="Related case studies" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={i * 100}>
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="surface-card surface-card-hover overflow-hidden h-full flex flex-col group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="badge-tag w-fit">{c.tag}</span>
                    <h3 className="mt-4 font-semibold text-ink leading-snug">{c.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                      Read case study
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <ContactCTA
        title="Have a similar challenge?"
        description="Tell us about your environment and goals, and our team will outline a clear path forward."
      />
    </>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  cta,
}: {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
  cta?: { label: string; href: string }
}) {
  if (cta && !center) {
    return (
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">{title}</h2>
            {description && <p className="mt-4 text-ink-soft leading-relaxed">{description}</p>}
          </div>
          <Link href={cta.href} className="btn-secondary flex-shrink-0">
            {cta.label} <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal className={center ? 'text-center' : ''}>
      <div className={center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">{title}</h2>
        {description && <p className="mt-4 text-ink-soft leading-relaxed">{description}</p>}
      </div>
    </Reveal>
  )
}

export function Section({
  children,
  className = '',
  id,
  muted = false,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  muted?: boolean
}) {
  return (
    <section id={id} className={`section-pad ${muted ? 'bg-bg-soft' : ''} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}

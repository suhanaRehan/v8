import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: 'Schedule a Consultation', href: '/contact' },
  secondaryCta,
  stats,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: { label: string; value: string }[]
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="relative border-b border-hairline bg-bg-soft overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-bg pointer-events-none" />
      <div className="relative container-page pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className={image ? 'grid lg:grid-cols-2 gap-12 lg:gap-10 items-center' : ''}>
          <div>
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`mt-5 font-bold tracking-tight leading-[1.08] text-ink ${
                  image ? 'text-4xl sm:text-5xl lg:text-[3.1rem]' : 'text-4xl sm:text-5xl lg:text-6xl max-w-4xl'
                }`}
              >
                {title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={`mt-6 text-lg text-ink-soft leading-relaxed ${image ? 'max-w-xl' : 'max-w-2xl'}`}>
                {description}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <ArrowRight size={16} />
                </Link>
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-secondary">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </Reveal>
            {stats && stats.length > 0 && (
              <Reveal delay={320}>
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-px max-w-2xl rounded-2xl overflow-hidden border border-hairline">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-surface px-5 py-5">
                      <div className="text-2xl font-bold text-navy-900 dark:text-white">{s.value}</div>
                      <div className="text-xs text-ink-faint mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {image && (
            <Reveal delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-hairline shadow-card-hover glow-ring">
                  <Image
                    src={image}
                    alt={imageAlt ?? eyebrow}
                    width={1200}
                    height={1000}
                    className="w-full h-[20rem] sm:h-[24rem] lg:h-[26rem] object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

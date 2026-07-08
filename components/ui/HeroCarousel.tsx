'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { categories } from '@/lib/services-data'

const AUTOPLAY_MS = 2200

const categoryImages: Record<string, string> = {
  'cyber-security': '/images/cybersecurity.jpg',
  'software-development': '/images/software-dev.jpg',
  'ai-solutions': '/images/ai.jpg',
  'cloud-solutions': '/images/cloud.jpg',
  'it-solutions': '/images/it-services.jpg',
}

const slides = categories.map((cat) => ({
  slug: cat.slug,
  eyebrow: cat.shortName,
  title: cat.tagline,
  description: cat.description,
  image: categoryImages[cat.slug] ?? '/images/cybersecurity.jpg',
}))

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const goTo = (i: number) => setActive(((i % slides.length) + slides.length) % slides.length)
  const next = () => goTo(active + 1)
  const prev = () => goTo(active - 1)

  return (
    <section
      className="relative border-b border-hairline overflow-hidden bg-navy-900"
      aria-roledescription="carousel"
      aria-label="Our service categories"
    >
      {/* Slides */}
      <div className="relative h-[34rem] sm:h-[30rem] lg:h-[32rem]">
        {slides.map((s, i) => (
          <div
            key={s.slug}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? 'auto' : 'none' }}
            aria-hidden={active !== i}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={i === 0}
              className="object-cover transition-transform duration-[3500ms] ease-out"
              style={{ transform: active === i ? 'scale(1.06)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/75 to-navy-900/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/20" />

            <div className="relative h-full container-page flex items-center">
              <div className="max-w-2xl">
                <span className="eyebrow text-brand-300">
                  {s.eyebrow}
                </span>
                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.85rem] font-bold leading-[1.12] tracking-tight text-white">
                  {s.title}
                </h1>
                <p className="mt-6 text-base sm:text-lg text-navy-100/90 leading-relaxed max-w-xl">
                  {s.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={`/services/${s.slug}`} className="btn-primary btn-shine">
                    Explore {s.eyebrow} <ArrowRight size={16} />
                  </Link>
                  <Link href="/propose-project" className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous category"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white items-center justify-center transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next category"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white items-center justify-center transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.eyebrow} slide`}
            className="relative h-1.5 rounded-full bg-white/25 overflow-hidden transition-all duration-300"
            style={{ width: active === i ? '2.25rem' : '0.9rem' }}
          >
            {active === i && (
              <span
                key={`${s.slug}-${active}`}
                className="absolute inset-0 bg-white rounded-full origin-left"
                style={{ animation: `carouselProgress ${AUTOPLAY_MS}ms linear forwards` }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes carouselProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}

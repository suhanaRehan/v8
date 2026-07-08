'use client'

import { useEffect, useRef, useState } from 'react'

// A deliberately subtle animation: a gentle opacity + upward fade,
// triggered the first time the element scrolls into view (rather than
// firing all at once on page load). This keeps the effect noticeable as
// the user scrolls through the page without ever feeling like flashy
// motion. Elements already in the viewport on first paint (e.g. above
// the fold) reveal almost immediately, so the initial load still feels
// instant. `delay` (ms) lets call sites stagger sibling elements.
export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who prefer reduced motion by showing content immediately.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    let timer: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  )
}

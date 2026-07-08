'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = { value: string; label: string }

// Ease-out-cubic — fast start, gentle settle.
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

// Splits a display value like "150+", "99.9%", "24/7", "12+" into a
// numeric portion to animate and a suffix to keep static.
function parseValue(raw: string) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { hasNumber: false as const, target: 0, decimals: 0, suffix: raw }
  const numStr = match[1]
  const suffix = match[2] ?? ''
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { hasNumber: true as const, target: parseFloat(numStr), decimals, suffix }
}

function CountUpNumber({ value, start, duration = 1500 }: { value: string; start: boolean; duration?: number }) {
  const parsed = parseValue(value)
  const [display, setDisplay] = useState(parsed.hasNumber ? (parsed.decimals ? '0' : '0') : value)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start || !parsed.hasNumber) return
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = parsed.target * eased
      setDisplay(parsed.decimals ? current.toFixed(parsed.decimals) : Math.round(current).toString())
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  if (!parsed.hasNumber) return <>{value}</>
  return (
    <>
      {display}
      {parsed.suffix}
    </>
  )
}

export default function AnimatedStats({ stats }: { stats: Stat[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  // Once the entrance transition finishes, drop the inline transform so the
  // card's own CSS :hover transform (translateY(-6px)) can take over cleanly
  // — an inline style would otherwise always win over the stylesheet hover.
  const [entranceDone, setEntranceDone] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect() // play once
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const lastCardDelay = (stats.length - 1) * 130
    const timer = setTimeout(() => setEntranceDone(true), lastCardDelay + 600 + 50)
    return () => clearTimeout(timer)
  }, [visible, stats.length])

  return (
    <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className="card-glass rounded-2xl p-6 text-center lg:text-left"
          style={
            entranceDone
              ? undefined
              : {
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease-out ${i * 130}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 130}ms`,
                }
          }
        >
          <div className="stat-number text-3xl sm:text-4xl font-bold gradient-text">
            <CountUpNumber value={value} start={visible} duration={1500} />
          </div>
          <div className="text-sm text-ink-soft mt-1.5">{label}</div>
        </div>
      ))}
    </div>
  )
}

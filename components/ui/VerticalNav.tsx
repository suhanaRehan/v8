'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type NavItem = { id: string; label: string }

export default function VerticalNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const [collapsed, setCollapsed] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [items])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:flex fixed top-1/2 -translate-y-1/2 right-5 z-40 flex-col items-end"
    >
      <div
        className={`card-glass rounded-2xl py-3 transition-all duration-300 ease-out ${
          collapsed ? 'px-2' : 'px-3'
        }`}
      >
        <button
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? 'Expand section navigation' : 'Collapse section navigation'}
          className="w-6 h-6 mb-2 mx-auto flex items-center justify-center rounded-md text-ink-faint hover:text-ink transition-colors"
        >
          {collapsed ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>
        <ul className="flex flex-col gap-1.5">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="flex items-center justify-end">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center gap-2.5 py-1"
                  aria-current={isActive ? 'true' : undefined}
                >
                  {!collapsed && (
                    <span
                      className={`text-xs font-medium whitespace-nowrap transition-colors ${
                        isActive ? 'text-brand-600 dark:text-brand-300' : 'text-ink-faint group-hover:text-ink-soft'
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                  <span
                    className="rounded-full transition-all duration-300 flex-shrink-0"
                    style={{
                      width: isActive ? '18px' : '6px',
                      height: '6px',
                      background: isActive ? 'linear-gradient(90deg, #1f6dff, #22d3ee)' : 'rgb(var(--border))',
                    }}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

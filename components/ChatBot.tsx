'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MessageCircle, X, Send, Sparkles, ArrowRight } from 'lucide-react'
import { findBestAnswer, starterQuestions } from '@/lib/chatbotData'

interface Message {
  id: number
  role: 'bot' | 'user'
  text: string
  href?: string
}

const GREETING: Message = {
  id: 0,
  role: 'bot',
  text: "Hi! I'm the Secure Sphere assistant. Ask me about our services, pricing, or how to get started \u2014 or tap a question below.",
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [showStarters, setShowStarters] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(1)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  const respond = (question: string) => {
    const trimmed = question.trim()
    if (!trimmed) return

    const userMsg: Message = { id: idRef.current++, role: 'user', text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setShowStarters(false)

    setTimeout(() => {
      const match = findBestAnswer(trimmed)
      const botMsg: Message = match
        ? { id: idRef.current++, role: 'bot', text: match.answer, href: match.href }
        : {
            id: idRef.current++,
            role: 'bot',
            text:
              "I don't have a ready answer for that yet. For anything specific, our team can help directly \u2014 reach out through the contact page and we'll get back to you within one business day.",
            href: '/contact',
          }
      setMessages((prev) => [...prev, botMsg])
    }, 400)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    respond(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end">
      {open && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm h-[520px] max-h-[70vh] bg-surface border border-hairline rounded-2xl shadow-card-hover flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-navy-900 text-white px-4 py-3.5 flex items-center gap-2.5 flex-shrink-0">
            <span className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles size={15} className="text-brand-300" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">Secure Sphere Assistant</p>
              <p className="text-xs text-navy-300 leading-tight">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
            >
              <X size={17} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-surface-2">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-brand-500 text-white rounded-br-sm'
                      : 'bg-surface border border-hairline text-ink rounded-bl-sm'
                  }`}
                >
                  <p>{m.text}</p>
                  {m.href && (
                    <Link
                      href={m.href}
                      onClick={() => setOpen(false)}
                      className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${
                        m.role === 'user' ? 'text-white underline' : 'text-brand-600 dark:text-brand-400'
                      }`}
                    >
                      Take me there <ArrowRight size={11} />
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {showStarters && (
              <div className="flex flex-wrap gap-2 pt-1">
                {starterQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => respond(q)}
                    className="text-xs font-medium px-3 py-2 rounded-full border border-hairline bg-surface text-ink-soft hover:text-ink hover:border-brand-400 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-hairline bg-surface flex-shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 text-sm bg-surface-2 rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-brand-400 text-ink placeholder:text-ink-faint"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
              className="w-10 h-10 flex-shrink-0 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:hover:bg-brand-500 text-white flex items-center justify-center transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="w-14 h-14 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-card-hover flex items-center justify-center transition-all hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}

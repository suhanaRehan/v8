import Link from 'next/link'
import { ArrowRight, CalendarClock } from 'lucide-react'
import Reveal from './Reveal'

export default function ContactCTA({
  title = 'Ready to discuss your project?',
  description = 'Talk to our team about your goals, timeline, and technical environment. We will respond within one business day with next steps.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center bg-navy-900">
            <div className="relative">
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <CalendarClock size={22} className="text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto">{title}</h2>
              <p className="mt-4 text-navy-200 max-w-xl mx-auto leading-relaxed">{description}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Talk to an Expert
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/propose-project"
                  className="btn px-6 py-3 text-sm border border-white/25 text-white hover:bg-white/10"
                >
                  Request a Proposal
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

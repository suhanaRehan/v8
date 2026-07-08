import * as Icons from 'lucide-react'
import Reveal from './Reveal'

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon?: string
  title: string
  description: string
  delay?: number
}) {
  const Icon = icon ? (Icons as any)[icon] : null
  return (
    <Reveal delay={delay}>
      <div className="surface-card surface-card-hover p-6 h-full">
        {Icon && (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-500 dark:text-brand-300 dark:from-brand-400/30 dark:to-brand-400/5 border border-brand-500/20 dark:border-brand-400/30 group-hover:border-brand-500/40 transition-colors">
            <Icon size={22} strokeWidth={1.8} />
          </div>
        )}
        <h3 className="font-semibold text-base text-ink group-hover:text-brand-600 transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{description}</p>
      </div>
    </Reveal>
  )
}

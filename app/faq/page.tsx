import PageHero from '@/components/ui/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactCTA from '@/components/ui/ContactCTA'
import { faqCategories } from '@/lib/faqData'

export const metadata = {
  title: 'FAQ | Secure Sphere',
  description:
    "Frequently asked questions about Secure Sphere's cyber security, software development, AI solutions, and IT services.",
}

export default function FAQPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        description="Answers to common questions about our services. Can't find what you're looking for? Reach out and we'll help directly."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Propose a Project', href: '/propose-project' }}
      />

      <Section>
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-14">
            {faqCategories.map((cat) => (
              <a key={cat.slug} href={`#${cat.slug}`} className="badge-pill hover:text-brand-500 hover:border-brand-400/50 transition-colors">
                {cat.title}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="space-y-16 max-w-3xl">
          {faqCategories.map((cat) => (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <SectionHeading title={cat.title} />
              <div className="mt-6">
                <FAQAccordion items={cat.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCTA
        title="Still have questions?"
        description="Our team is happy to walk you through anything specific to your project."
      />
    </div>
  )
}

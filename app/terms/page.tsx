import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: 'Terms of Service | Secure Sphere',
  description: "The terms and conditions governing use of Secure Sphere's website and services.",
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: "By accessing or using Secure Sphere's website or services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.",
  },
  {
    title: '2. Our Services',
    body: 'Secure Sphere provides cyber security, software development, AI solutions, and IT solutions services. Specific engagements, including scope, deliverables, timelines, and pricing, are governed by a separate agreement or statement of work signed between Secure Sphere and the client.',
  },
  {
    title: '3. Use of the Website',
    body: 'You agree to use this website only for lawful purposes and not to attempt to interfere with its normal operation, gain unauthorized access to any systems, or misuse any forms or submission features.',
  },
  {
    title: '4. Proposals and Inquiries',
    body: 'Submitting a project proposal or contact form through our website does not create a binding contract. Any engagement begins only once both parties sign a separate agreement outlining scope, fees, and terms.',
  },
  {
    title: '5. Intellectual Property',
    body: 'All content on this website, including text, graphics, logos, and design, is the property of Secure Sphere or its licensors and may not be copied, reproduced, or used without permission, except as permitted by law.',
  },
  {
    title: '6. Third-Party Links',
    body: 'Our website may contain links to third-party sites. We are not responsible for the content, policies, or practices of any third-party website.',
  },
  {
    title: '7. Limitation of Liability',
    body: 'Secure Sphere is not liable for any indirect, incidental, or consequential damages arising from your use of this website. Our services are provided on an "as-is" basis unless otherwise agreed in a signed contract.',
  },
  {
    title: '8. Changes to These Terms',
    body: 'We may revise these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.',
  },
  {
    title: '9. Governing Law',
    body: "These terms are governed by the laws applicable to Secure Sphere's place of business, without regard to conflict-of-law principles.",
  },
  {
    title: '10. Contact Us',
    body: 'If you have any questions about these Terms of Service, please reach out via our Contact page.',
  },
]

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: July 1, 2026"
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      <Section>
        <div className="max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <h2 className="text-lg sm:text-xl font-bold mb-3">{s.title}</h2>
              <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  )
}

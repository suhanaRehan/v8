import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: 'Privacy Policy | Secure Sphere',
  description: 'How Secure Sphere collects, uses, and protects your information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, email address, company, phone number, and project details when you submit a contact form, a project proposal, or otherwise communicate with us. We also automatically collect limited technical information, such as browser type and general usage data, to help us operate and improve our website.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information we collect to respond to inquiries, prepare proposals, deliver our services, communicate with you about your projects, and improve our website and offerings. We do not sell your personal information to third parties.',
  },
  {
    title: '3. How We Share Information',
    body: 'We may share information with service providers who help us operate our business (such as hosting, database, and email delivery providers), or when required by law. Any third party we work with is only given access to the information necessary to perform their function.',
  },
  {
    title: '4. Data Storage and Security',
    body: 'Information submitted through our forms is stored in secured, access-controlled databases. We apply reasonable administrative, technical, and physical safeguards to protect your information, though no method of transmission or storage is ever completely secure.',
  },
  {
    title: '5. Data Retention',
    body: 'We retain the information you provide for as long as necessary to fulfill the purposes described in this policy, respond to your inquiries, or comply with legal obligations, after which it is deleted or anonymized.',
  },
  {
    title: '6. Your Rights',
    body: 'You may request access to, correction of, or deletion of the personal information we hold about you by contacting us. We will respond to legitimate requests within a reasonable timeframe.',
  },
  {
    title: '7. Cookies',
    body: 'Our website may use cookies or similar technologies to support basic functionality, remember your theme preference, and understand how visitors use our site. You can control cookies through your browser settings.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.',
  },
  {
    title: '9. Contact Us',
    body: 'If you have questions about this Privacy Policy or how we handle your information, please reach out via our Contact page.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
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

export interface FAQCategory {
  slug: string
  title: string
  items: { question: string; answer: string }[]
}

export const faqCategories: FAQCategory[] = [
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    items: [
      {
        question: 'What does your cyber security assessment include?',
        answer:
          'We evaluate your identity and access controls, network and cloud infrastructure, data protection practices, and compliance posture, then deliver a prioritized report of risks and remediation steps.',
      },
      {
        question: 'Do you help with compliance frameworks like SOC 2, ISO 27001, or GDPR?',
        answer:
          'Yes. Our governance, risk, and compliance team helps you map controls to the frameworks you need, prepare for audits, and maintain compliance on an ongoing basis.',
      },
      {
        question: 'Can you monitor our systems 24/7?',
        answer:
          'Yes, our managed security services include round-the-clock threat detection and response, so incidents are caught and contained outside of business hours too.',
      },
      {
        question: 'How quickly can you respond to a security incident?',
        answer:
          'Our managed detection and response team typically begins triage within minutes of an alert. Exact response times depend on your service tier and are defined in your SLA.',
      },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    items: [
      {
        question: 'What technologies do you build with?',
        answer:
          'We work across modern web and mobile stacks — including React, Next.js, Node.js, Python, and native mobile frameworks — and choose the right tools for your specific requirements rather than a one-size-fits-all stack.',
      },
      {
        question: 'Can you take over an existing codebase?',
        answer:
          'Yes, we regularly take on legacy migrations and ongoing development for existing products. We start with a technical audit so you know exactly what you\'re working with before we begin.',
      },
      {
        question: 'Do you offer ongoing maintenance after launch?',
        answer:
          'Yes, we offer maintenance and support retainers that cover bug fixes, dependency updates, monitoring, and small feature iterations after your product ships.',
      },
      {
        question: 'How is a custom software project priced?',
        answer:
          'Pricing depends on scope, complexity, and timeline. Smaller builds are often fixed-price, while larger or evolving projects typically run on a time-and-materials or dedicated team basis. We\'ll recommend the right model after scoping your project.',
      },
    ],
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    items: [
      {
        question: 'What can an AI agent actually do for my business?',
        answer:
          'AI agents can automate repetitive workflows, answer customer questions, process documents, generate reports, and connect to your existing tools to take action — not just answer questions.',
      },
      {
        question: 'Do you build on top of existing LLM providers?',
        answer:
          'Yes, we integrate with leading LLM providers and can also fine-tune or self-host models where data residency or cost requirements call for it.',
      },
      {
        question: 'How do you handle data privacy when using AI models?',
        answer:
          'We design data flows to minimize what\'s sent to third-party models, apply redaction where appropriate, and can architect fully private or on-premises deployments for sensitive workloads.',
      },
      {
        question: 'Can AI agents integrate with our current software?',
        answer:
          'Yes, we build integrations with common business tools such as CRMs, ticketing systems, and internal databases, so agents can read and act on your real data.',
      },
    ],
  },
  {
    slug: 'it-solutions',
    title: 'IT Solutions',
    items: [
      {
        question: 'Do you support hybrid or multi-cloud environments?',
        answer:
          'Yes, we design and manage infrastructure across AWS, Azure, Google Cloud, and on-premises environments, including hybrid setups that bridge the two.',
      },
      {
        question: 'What does your managed IT service include?',
        answer:
          'Managed services typically include 24/7 help desk support, infrastructure monitoring, patching, and backup and disaster recovery, scoped to what your team needs.',
      },
      {
        question: 'Can you help us migrate off legacy infrastructure?',
        answer:
          'Yes, cloud migration and modernization is one of our core services. We assess your current environment, plan a phased migration, and minimize downtime along the way.',
      },
      {
        question: 'Do you offer disaster recovery and backup planning?',
        answer:
          'Yes, we design backup and disaster recovery plans with defined recovery time and recovery point objectives so you know exactly what to expect if something goes wrong.',
      },
    ],
  },
  {
    slug: 'general',
    title: 'General',
    items: [
      {
        question: 'How do I get started with Secure Sphere?',
        answer:
          'The fastest way is to submit a project proposal or contact us directly. We\'ll schedule a discovery call to understand your goals before proposing a scope and timeline.',
      },
      {
        question: 'Do you work with startups as well as large enterprises?',
        answer:
          'Yes, we work with organizations of all sizes, from early-stage startups to large enterprises, and tailor our engagement model accordingly.',
      },
      {
        question: 'Where is your team located?',
        answer:
          'We operate as a distributed team and work with clients across time zones, with overlapping hours available for meetings and support.',
      },
      {
        question: 'What is your typical engagement model?',
        answer:
          'Most engagements start with a scoping phase, followed by either a fixed-scope project or an ongoing dedicated team arrangement, depending on your needs.',
      },
    ],
  },
]

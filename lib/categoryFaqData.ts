export interface CategoryFAQItem {
  question: string
  answer: string
}

export const categoryFaqs: Record<string, CategoryFAQItem[]> = {
  'cyber-security': [
    {
      question: 'What cybersecurity services do you provide?',
      answer:
        'We provide identity and access management, data protection, vulnerability management, managed security monitoring, cloud and infrastructure security, governance and compliance, and incident response — scoped to your environment and risk profile.',
    },
    {
      question: 'How do you protect sensitive business data?',
      answer:
        'We combine encryption, access controls, network segmentation, and continuous monitoring with a data classification process, so sensitive information is identified, protected, and only accessible to the people and systems that need it.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work across finance, healthcare, retail, logistics, SaaS, and manufacturing, adapting our approach to the regulatory and operational requirements specific to each sector.',
    },
    {
      question: 'Do you provide security assessments?',
      answer:
        'Yes. We run structured assessments covering identity, network, cloud, and application layers, and deliver a prioritized report of findings with clear remediation guidance.',
    },
    {
      question: 'What is vulnerability management?',
      answer:
        'Vulnerability management is the ongoing process of identifying, prioritizing, and remediating security weaknesses across your systems before they can be exploited, rather than treating security as a one-time project.',
    },
    {
      question: 'How often should security audits be performed?',
      answer:
        'Most organizations benefit from a full audit annually, with lighter reviews on a quarterly basis and continuous automated scanning in between. The right cadence depends on your industry, compliance requirements, and how often your environment changes.',
    },
    {
      question: 'Can you secure cloud infrastructure?',
      answer:
        'Yes, we secure environments across AWS, Azure, and Google Cloud, including identity policies, network configuration, workload protection, and continuous posture monitoring for hybrid and multi-cloud setups.',
    },
    {
      question: 'Do you offer managed security services?',
      answer:
        'Yes, our managed security services include round-the-clock threat monitoring, detection, and response, so incidents are caught and contained even outside business hours.',
    },
    {
      question: 'How quickly can you respond to incidents?',
      answer:
        'Our detection and response team typically begins triage within minutes of an alert. Exact response times are defined by your service tier and documented in your SLA.',
    },
    {
      question: 'How do you ensure compliance?',
      answer:
        'We map your existing controls against the frameworks that matter to you, such as SOC 2, ISO 27001, HIPAA, or GDPR, close the gaps, and help you maintain evidence and readiness for ongoing audits.',
    },
    {
      question: 'Do you support operational technology and industrial environments?',
      answer:
        'Yes, we assess and secure OT and industrial control systems with approaches tailored to environments where uptime and safety are critical, alongside standard IT security practices.',
    },
    {
      question: 'What happens after an assessment is complete?',
      answer:
        'You receive a prioritized report and can choose to have our team implement the recommended fixes, hand it to your internal team, or move into an ongoing managed security engagement.',
    },
  ],
  'software-development': [
    {
      question: 'How do you manage software projects?',
      answer:
        'We use an agile process with clear milestones, regular demos, and transparent communication, so you always know what is being built, what is next, and how the project is tracking against scope and timeline.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We work across modern web and mobile stacks, including React, Next.js, Node.js, Python, and native mobile frameworks, choosing the right tools for your specific requirements rather than defaulting to one stack.',
    },
    {
      question: 'Can you modernize legacy software?',
      answer:
        'Yes, we regularly take on legacy modernization projects. We start with a technical audit of the existing system so you know exactly what you are working with before any migration begins.',
    },
    {
      question: 'Do you provide maintenance?',
      answer:
        'Yes, we offer maintenance and support retainers that cover bug fixes, dependency updates, monitoring, and small feature iterations after your product ships.',
    },
    {
      question: 'How long does development take?',
      answer:
        'Timelines depend on scope and complexity. Smaller features can ship in a few weeks, while full product builds typically take a few months. We provide a detailed timeline after scoping your project.',
    },
    {
      question: 'Can you integrate third-party APIs?',
      answer:
        'Yes, we regularly integrate payment providers, CRMs, analytics platforms, and other third-party services into custom software, handling authentication, data mapping, and error handling along the way.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'We combine automated testing, code review, and staged environments with manual QA before release, so issues are caught early rather than in production.',
    },
    {
      question: 'Do you develop scalable applications?',
      answer:
        'Yes, we design architecture with scale in mind from the start, using patterns and infrastructure choices that let your application grow with your user base without a costly rebuild.',
    },
    {
      question: 'Do you offer cloud-native solutions?',
      answer:
        'Yes, we build applications designed to run natively on cloud platforms, using containers, managed services, and infrastructure-as-code so deployments are repeatable and environments stay consistent.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We build software for startups and enterprises across fintech, healthcare, logistics, e-commerce, and B2B SaaS, adapting our approach to each industry\'s technical and compliance requirements.',
    },
    {
      question: 'Can you take over development mid-project?',
      answer:
        'Yes, we can join an in-progress project. We begin with a code and process review to understand what exists and identify any risks before contributing new work.',
    },
    {
      question: 'How is pricing structured?',
      answer:
        'Smaller, well-defined builds are often fixed-price, while larger or evolving projects typically run on a time-and-materials or dedicated team basis. We recommend the right model after scoping your project.',
    },
  ],
  'ai-solutions': [
    {
      question: 'What AI solutions do you provide?',
      answer:
        'We build intelligent automation, machine learning models, AI agents, generative AI applications, and the data engineering pipelines that support them, tailored to specific business workflows rather than generic tooling.',
    },
    {
      question: 'What can an AI agent actually do for my business?',
      answer:
        'AI agents can automate repetitive workflows, answer customer questions, process documents, generate reports, and connect to your existing tools to take action, not just answer questions.',
    },
    {
      question: 'Do you build on top of existing LLM providers?',
      answer:
        'Yes, we integrate with leading LLM providers and can also fine-tune or self-host models where data residency, latency, or cost requirements call for it.',
    },
    {
      question: 'How do you handle data privacy when using AI models?',
      answer:
        'We design data flows to minimize what is sent to third-party models, apply redaction where appropriate, and can architect fully private or on-premises deployments for sensitive workloads.',
    },
    {
      question: 'Can AI agents integrate with our current software?',
      answer:
        'Yes, we build integrations with common business tools such as CRMs, ticketing systems, and internal databases, so agents can read and act on your real data.',
    },
    {
      question: 'Do you build custom machine learning models?',
      answer:
        'Yes, for problems where off-the-shelf models fall short, we design, train, and validate custom models on your data, and set up the pipelines needed to keep them accurate over time.',
    },
    {
      question: 'How accurate are the AI systems you build?',
      answer:
        'Accuracy depends on the use case and available data. We define measurable success criteria upfront, evaluate models against them, and are transparent about tradeoffs between accuracy, cost, and speed.',
    },
    {
      question: 'Can you help us prepare our data for AI use?',
      answer:
        'Yes, data engineering is often the first step. We assess your data sources, build pipelines to clean and structure the data, and set up the infrastructure needed to support reliable AI systems.',
    },
    {
      question: 'Do AI systems require ongoing maintenance?',
      answer:
        'Yes, models and agents benefit from monitoring and periodic retraining as your data and business needs evolve. We offer ongoing support plans to keep systems performing as expected.',
    },
    {
      question: 'Is generative AI right for our use case?',
      answer:
        'It depends on the problem. We assess whether generative AI, traditional machine learning, or simple automation is the right fit, and recommend the approach that solves your problem most reliably.',
    },
    {
      question: 'How long does an AI project typically take?',
      answer:
        'A focused proof of concept can take a few weeks, while a production-ready system with integrations typically takes a few months. We scope a realistic timeline after understanding your requirements.',
    },
    {
      question: 'Do you offer AI strategy consulting?',
      answer:
        'Yes, for teams still evaluating where AI fits, we offer advisory engagements to identify high-value use cases, assess feasibility, and build a practical roadmap before committing to development.',
    },
  ],
  'it-solutions': [
    {
      question: 'What IT solutions do you provide?',
      answer:
        'We provide infrastructure management, cloud migration, managed IT support, and backup and disaster recovery planning, scoped to whether you need full outsourcing or support alongside an internal team.',
    },
    {
      question: 'Do you support hybrid or multi-cloud environments?',
      answer:
        'Yes, we design and manage infrastructure across AWS, Azure, Google Cloud, and on-premises environments, including hybrid setups that bridge the two.',
    },
    {
      question: 'What does your managed IT service include?',
      answer:
        'Managed services typically include help desk support, infrastructure monitoring, patching, and backup and disaster recovery, scoped to what your team needs and available around the clock where required.',
    },
    {
      question: 'Can you help us migrate off legacy infrastructure?',
      answer:
        'Yes, cloud migration and modernization is one of our core services. We assess your current environment, plan a phased migration, and minimize downtime along the way.',
    },
    {
      question: 'Do you offer disaster recovery and backup planning?',
      answer:
        'Yes, we design backup and disaster recovery plans with defined recovery time and recovery point objectives, so you know exactly what to expect if something goes wrong.',
    },
    {
      question: 'How do you handle IT infrastructure monitoring?',
      answer:
        'We set up continuous monitoring across servers, networks, and applications, with alerting configured to catch issues before they affect users, and clear escalation paths when something needs attention.',
    },
    {
      question: 'Can you support a fully remote or distributed team?',
      answer:
        'Yes, we design IT environments for distributed teams, including secure remote access, endpoint management, and support coverage across time zones.',
    },
    {
      question: 'Do you help with IT budgeting and planning?',
      answer:
        'Yes, we help assess your current infrastructure spend and plan upgrades or migrations in a way that aligns with your budget and growth plans, avoiding unnecessary over-provisioning.',
    },
    {
      question: 'What is your approach to minimizing downtime during migrations?',
      answer:
        'We use phased migration plans, parallel environments, and rollback procedures, so critical systems stay available throughout the transition rather than requiring a single risky cutover.',
    },
    {
      question: 'Do you provide help desk support for end users?',
      answer:
        'Yes, our managed IT plans can include tiered help desk support for your team, handling everything from password resets to more complex troubleshooting.',
    },
    {
      question: 'Can you work alongside our existing internal IT team?',
      answer:
        'Yes, we regularly work as an extension of internal teams, taking on specific projects or providing overflow support rather than replacing existing staff.',
    },
    {
      question: 'How do you ensure IT infrastructure stays secure?',
      answer:
        'We apply security best practices to infrastructure by default, such as patch management and access controls, and can coordinate directly with our cybersecurity team for deeper security work when needed.',
    },
  ],
}

export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudy {
  slug: string
  tag: string
  subtag: string
  title: string
  description: string
  image: string
  client: string
  industry: string
  location: string
  duration: string
  servicesUsed: string[]
  summary: string
  challenge: string
  solution: string
  solutionPoints: string[]
  results: string
  metrics: CaseStudyMetric[]
  testimonial?: { quote: string; author: string; role: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'core-banking-platform-modernization',
    tag: 'Financial Services',
    subtag: 'Cloud · Custom Software',
    title: 'Core Banking Platform Modernization',
    description:
      'Migrated a regional bank\u2019s on-prem core system to AWS, reducing infrastructure costs by 34% and cutting release cycles from quarterly to bi-weekly.',
    image: '/images/bank-office.jpg',
    client: 'Regional Retail Bank',
    industry: 'Financial Services',
    location: 'Ontario, Canada',
    duration: '9 months',
    servicesUsed: ['Cloud Solutions', 'Custom Software Development', 'Cyber Security'],
    summary:
      'A regional retail bank was running its core banking system on aging on-premises infrastructure, which limited its ability to ship new features and made every release a high-risk, quarterly event.',
    challenge:
      'The bank\u2019s core platform had been extended for over a decade on physical servers nearing end of life. Every release required a full weekend change window, regression testing was largely manual, and scaling for seasonal transaction spikes meant over-provisioning hardware that sat idle the rest of the year. Leadership needed a modernization path that would not put customer-facing banking services at risk during the transition.',
    solution:
      'We ran a phased migration that re-platformed the core system onto AWS while keeping the bank fully operational throughout. Rather than a risky big-bang cutover, we built a parallel cloud environment, validated transaction parity against the legacy system, and moved workloads over in stages behind a feature-flagged routing layer.',
    solutionPoints: [
      'Re-architected the core banking application into containerized services deployed on AWS ECS',
      'Built an automated CI/CD pipeline with staged rollouts, replacing manual quarterly release windows',
      'Implemented infrastructure-as-code so environments could be reproduced and scaled on demand',
      'Ran a dual-write validation period to confirm transaction parity before decommissioning legacy servers',
      'Layered in enhanced monitoring, encryption at rest, and access controls to strengthen the security posture during the move',
    ],
    results:
      'The bank now ships updates every two weeks instead of once a quarter, with far less manual regression testing. Infrastructure costs dropped as the team moved from fixed over-provisioned hardware to elastic cloud capacity, and the bank gained the ability to scale automatically during peak transaction periods.',
    metrics: [
      { label: 'Infrastructure cost reduction', value: '34%' },
      { label: 'Release cycle', value: 'Quarterly → Bi-weekly' },
      { label: 'Migration downtime', value: 'Zero' },
      { label: 'Uptime since launch', value: '99.95%' },
    ],
    testimonial: {
      quote:
        'The team moved us off infrastructure that was over a decade old without a single disruption to customer-facing banking services. We now ship in weeks, not quarters.',
      author: 'VP of Technology',
      role: 'Regional Retail Bank',
    },
  },
  {
    slug: 'patient-data-integration-hub',
    tag: 'Healthcare',
    subtag: 'Data & Integration · Security',
    title: 'Patient Data Integration Hub',
    description:
      'Built a HIPAA-compliant data integration layer connecting EHR systems across a multi-site Ontario health network, enabling real-time patient access.',
    image: '/images/team-dashboard.jpg',
    client: 'Multi-Site Health Network',
    industry: 'Healthcare',
    location: 'Ontario, Canada',
    duration: '7 months',
    servicesUsed: ['Data Engineering', 'Cyber Security', 'Custom Software Development'],
    summary:
      'A multi-site Ontario health network needed clinicians at any location to see a complete, up-to-date patient record, but each site ran a different electronic health record (EHR) system with no shared integration layer.',
    challenge:
      'Patient data was siloed across separate EHR systems at each site, so a patient seen at one location could have their history unavailable, delayed, or incomplete at another. Manual record transfers introduced delays and risk. Any integration layer also had to meet strict HIPAA and PHIPA data protection requirements while giving clinicians fast, reliable access.',
    solution:
      'We designed and built a HIPAA-compliant integration hub that connects each site\u2019s EHR system through standardized HL7/FHIR interfaces, normalizes patient records into a unified view, and makes that view available to clinicians in real time without duplicating or exposing more data than necessary.',
    solutionPoints: [
      'Built HL7/FHIR-based connectors for each site\u2019s existing EHR system',
      'Designed a normalized patient data model to reconcile records across sites',
      'Implemented field-level encryption, audit logging, and role-based access controls',
      'Delivered a real-time patient lookup interface for clinical staff',
      'Ran a compliance review against HIPAA and PHIPA requirements before go-live',
    ],
    results:
      'Clinicians across the network can now pull a unified patient record in real time regardless of which site originally captured it, cutting down on delays and duplicate data entry, while every access event is logged for compliance and audit purposes.',
    metrics: [
      { label: 'Sites connected', value: '6' },
      { label: 'Record lookup time', value: '< 2 sec' },
      { label: 'Data access', value: 'Real-time' },
      { label: 'Compliance', value: 'HIPAA / PHIPA' },
    ],
    testimonial: {
      quote:
        'For the first time, our clinicians see one consistent patient record no matter which site they\u2019re working from. The security review process was thorough and gave our compliance team real confidence.',
      author: 'Director of Clinical Systems',
      role: 'Multi-Site Health Network',
    },
  },
  {
    slug: 'real-time-fleet-management-system',
    tag: 'Logistics & Supply Chain',
    subtag: 'Custom Software · Managed IT',
    title: 'Real-Time Fleet Management System',
    description:
      'Delivered a custom fleet tracking and dispatch platform for a cross-border logistics operator, processing 2M+ telemetry events per day with 99.97% uptime.',
    image: '/images/ops-center.jpg',
    client: 'Cross-Border Logistics Operator',
    industry: 'Logistics & Supply Chain',
    location: 'Canada & United States',
    duration: '11 months',
    servicesUsed: ['Custom Software Development', 'Managed IT', 'Cloud Solutions'],
    summary:
      'A cross-border logistics operator needed real-time visibility into its fleet across two countries, but was relying on a patchwork of spreadsheets, driver phone calls, and a legacy dispatch tool that couldn\u2019t keep up with volume.',
    challenge:
      'Dispatchers had no live view of vehicle location, delays, or capacity, which meant reactive routing decisions and frequent missed delivery windows. The operator needed a system that could ingest telemetry from thousands of vehicles across the US-Canada border, process it in real time, and hand dispatchers the tools to act on it immediately, all without downtime that would stall shipments.',
    solution:
      'We built a custom fleet tracking and dispatch platform from the ground up, designed to ingest high-volume telemetry streams and surface live fleet status, routing, and exceptions to dispatchers on a single operations dashboard.',
    solutionPoints: [
      'Built a real-time telemetry ingestion pipeline handling GPS, fuel, and status data from onboard devices',
      'Designed a live dispatch dashboard showing fleet position, ETAs, and exceptions across both countries',
      'Implemented automated alerting for delays, route deviations, and maintenance flags',
      'Deployed on redundant cloud infrastructure to meet a high-availability uptime target',
      'Set up managed IT support and monitoring for ongoing 24/7 operational reliability',
    ],
    results:
      'Dispatchers now have live visibility into the entire fleet and can proactively reroute around delays instead of reacting to missed windows. The platform reliably processes millions of telemetry events daily with minimal downtime, even during peak cross-border shipping volume.',
    metrics: [
      { label: 'Telemetry events processed', value: '2M+ / day' },
      { label: 'System uptime', value: '99.97%' },
      { label: 'Vehicles tracked', value: '800+' },
      { label: 'On-time delivery improvement', value: '+18%' },
    ],
    testimonial: {
      quote:
        'We went from phone calls and spreadsheets to a live operations dashboard our dispatchers actually rely on every day. The platform hasn\u2019t missed a beat, even at peak volume.',
      author: 'Director of Operations',
      role: 'Cross-Border Logistics Operator',
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function allCaseStudyParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

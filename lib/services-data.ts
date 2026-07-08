export interface ProcessStep {
  title: string
  description: string
}

export interface QuestionnaireField {
  question: string
  type: 'text' | 'select' | 'textarea'
  options?: string[]
  placeholder?: string
}

export interface SubService {
  slug: string
  title: string
  shortDescription: string
  heroTagline: string
  whatIs: string
  whyNeeded: string
  whatWeProvide: string[]
  keyFeatures: string[]
  benefits: string[]
  process: ProcessStep[]
}

export interface ServiceCategory {
  slug: string
  name: string
  shortName: string
  navLabel: string
  tagline: string
  description: string
  highlights: string[]
  deliveryModel: string
  supportBadge: string
  icon: string
  stats: { label: string; value: string }[]
  questionnaire: QuestionnaireField[]
  subServices: SubService[]
}

export const categories: ServiceCategory[] = [
  // ─────────────────────────────────────────── CYBER SECURITY ───────────────────────────────────────────
  {
    slug: 'cyber-security',
    name: 'Cyber Security Services',
    shortName: 'Cyber Security',
    navLabel: 'Cyber Security',
    tagline: 'Intelligence-driven security for the modern enterprise',
    description:
      'We protect enterprise assets, ensure regulatory compliance, and mitigate digital risk with security programs built on continuous monitoring, identity governance, and AI-assisted threat intelligence. From zero-trust architecture to 24/7 threat detection, our team embeds security into every layer of your technology stack. The result is a defensible security posture that satisfies auditors, regulators, and your own peace of mind.',
    highlights: [
      '24/7 threat monitoring and incident response',
      'Zero-trust identity and access architecture',
      '15+ compliance frameworks supported (SOC 2, HIPAA, PCI-DSS)',
      'AI-assisted threat detection and triage',
      'Cloud, hybrid, and OT security coverage',
      'Vendor and third-party risk management',
    ],
    deliveryModel: 'Managed Security & Advisory',
    supportBadge: '24/7 SOC Monitoring',
    icon: 'ShieldCheck',
    stats: [
      { label: 'Threats monitored', value: '24/7' },
      { label: 'Mean detection time', value: '<5 min' },
      { label: 'Compliance frameworks', value: '15+' },
    ],
    questionnaire: [
      { question: 'What best describes your current security posture?', type: 'select', options: ['No formal program', 'Basic controls in place', 'Established program, needs maturing', 'Advanced, seeking optimization'] },
      { question: 'Which compliance or regulatory frameworks apply to your business?', type: 'text', placeholder: 'e.g. GDPR, HIPAA, SOC 2, PCI-DSS' },
      { question: 'Do you currently have 24/7 security monitoring in place?', type: 'select', options: ['Yes, in-house', 'Yes, outsourced', 'Partial coverage', 'No coverage'] },
      { question: 'What is your primary environment?', type: 'select', options: ['On-premises', 'Cloud-native', 'Hybrid', 'Multi-cloud'] },
      { question: 'Have you experienced a security incident in the last 12 months?', type: 'select', options: ['Yes, significant', 'Yes, minor', 'No', 'Unsure'] },
      { question: 'What outcome matters most to your organization right now?', type: 'textarea', placeholder: 'e.g. passing an audit, reducing breach risk, securing a cloud migration' },
    ],
    subServices: [
      {
        slug: 'identity-access-management',
        title: 'Identity and Access Management',
        shortDescription: 'Robust authentication, role-based access, and privileged account governance.',
        heroTagline: 'Control exactly who can reach what, every time.',
        whatIs:
          'Identity and Access Management (IAM) is the discipline of governing digital identities and the permissions attached to them, so that every employee, partner, and system account has precisely the access it needs and nothing more. Our IAM practice spans authentication, authorization, lifecycle management, and privileged access controls across cloud and on-premises systems.',
        whyNeeded:
          'Compromised credentials remain one of the leading causes of enterprise breaches. As organizations adopt more SaaS applications and distributed teams, manually managed access quickly becomes inconsistent, over-permissioned, and difficult to audit, creating an expanding attack surface that attackers actively target.',
        whatWeProvide: [
          'Single sign-on (SSO) and multi-factor authentication (MFA) rollout',
          'Role-based and attribute-based access control (RBAC/ABAC) design',
          'Privileged Access Management (PAM) for administrative and service accounts',
          'Automated joiner-mover-leaver identity lifecycle workflows',
          'Directory consolidation and federation across cloud and legacy systems',
          'Access certification and periodic entitlement review programs',
        ],
        keyFeatures: [
          'Centralized identity governance dashboard',
          'Just-in-time privileged access elevation',
          'Adaptive, risk-based authentication policies',
          'Full audit trail for every access decision',
          'Integration with existing HR and IT service management systems',
        ],
        benefits: [
          'Significantly reduced credential-based breach risk',
          'Faster onboarding and offboarding with fewer manual errors',
          'Simplified audits with always-current access records',
          'Lower help desk burden from self-service access requests',
          'Consistent policy enforcement across every application',
        ],
        process: [
          { title: 'Identity Assessment', description: 'We map existing identities, entitlements, and authentication methods to surface gaps and excess privilege.' },
          { title: 'Architecture Design', description: 'We design an IAM architecture aligned to your applications, compliance needs, and growth plans.' },
          { title: 'Implementation & Migration', description: 'We deploy SSO, MFA, and access controls in stages to avoid disrupting daily operations.' },
          { title: 'Governance & Optimization', description: 'We establish ongoing access reviews and refine policies as your organization evolves.' },
        ],
      },
      {
        slug: 'data-protection-privacy',
        title: 'Data Protection and Privacy',
        shortDescription: 'Encryption, data loss prevention, and global privacy compliance.',
        heroTagline: 'Safeguard sensitive data wherever it lives or travels.',
        whatIs:
          'Data Protection and Privacy services secure sensitive information throughout its lifecycle, from creation to storage, transmission, and deletion, while ensuring your handling practices align with regulations such as GDPR and CCPA. This combines encryption, classification, data loss prevention (DLP), and privacy governance into a single coherent program.',
        whyNeeded:
          'Regulators are imposing larger penalties for mishandled personal data, and customers increasingly choose vendors based on demonstrated data stewardship. Without classification and DLP controls, sensitive data routinely leaks through email, file shares, and unmanaged endpoints without anyone noticing.',
        whatWeProvide: [
          'Data discovery and classification across structured and unstructured stores',
          'Encryption at rest and in transit, including key management',
          'Data Loss Prevention (DLP) policy design and enforcement',
          'Privacy impact assessments and regulatory gap analysis',
          'Data retention, minimization, and secure disposal programs',
          'Consent and subject-rights request workflow design',
        ],
        keyFeatures: [
          'Automated sensitive-data discovery and tagging',
          'Policy-based DLP across endpoint, network, and cloud',
          'Centralized encryption key lifecycle management',
          'Privacy regulation mapping (GDPR, CCPA, and beyond)',
          'Real-time alerts on anomalous data movement',
        ],
        benefits: [
          'Reduced exposure to regulatory fines and litigation',
          'Stronger customer trust through demonstrable data stewardship',
          'Faster, less stressful response to data subject requests',
          'Clear visibility into where sensitive data actually resides',
          'Lower likelihood of accidental or malicious data exfiltration',
        ],
        process: [
          { title: 'Discovery & Classification', description: 'We locate and categorize sensitive data across your systems and third-party tools.' },
          { title: 'Risk & Compliance Mapping', description: 'We assess exposure against applicable privacy regulations and internal policy.' },
          { title: 'Control Implementation', description: 'We deploy encryption, DLP, and retention controls tailored to each data category.' },
          { title: 'Monitoring & Reporting', description: 'We maintain continuous oversight and provide audit-ready reporting on demand.' },
        ],
      },
      {
        slug: 'vulnerability-management',
        title: 'Vulnerability Management',
        shortDescription: 'Continuous scanning, risk assessment, and proactive remediation.',
        heroTagline: 'Find weaknesses before attackers do.',
        whatIs:
          'Vulnerability Management is the ongoing process of identifying, prioritizing, and remediating security weaknesses across networks, applications, and endpoints before they can be exploited. Rather than a one-time scan, it is a continuous cycle of discovery, risk scoring, and verified remediation.',
        whyNeeded:
          'New vulnerabilities are disclosed daily, and attackers automate scanning for unpatched systems within hours of disclosure. Organizations without a structured program accumulate unmanaged risk that grows silently until it is exploited.',
        whatWeProvide: [
          'Continuous internal and external vulnerability scanning',
          'Risk-based prioritization tied to business criticality',
          'Patch management coordination and remediation tracking',
          'Configuration and hardening reviews against industry benchmarks',
          'Executive and technical reporting on risk trends',
          'Exception handling and compensating control guidance',
        ],
        keyFeatures: [
          'Automated, scheduled scanning across hybrid environments',
          'CVSS and business-context risk scoring',
          'Remediation SLAs with tracked accountability',
          'Integration with ticketing and DevOps pipelines',
          'Trend dashboards for leadership visibility',
        ],
        benefits: [
          'Materially smaller attack surface over time',
          'Faster, evidence-based remediation prioritization',
          'Improved standing in security questionnaires and audits',
          'Reduced likelihood of breach via known, unpatched flaws',
          'Clear accountability between security and IT operations teams',
        ],
        process: [
          { title: 'Asset & Scope Mapping', description: 'We inventory systems, applications, and cloud assets to define complete scan coverage.' },
          { title: 'Continuous Scanning', description: 'We run scheduled and ad-hoc scans across your environment to surface new exposures.' },
          { title: 'Risk Prioritization', description: 'We score findings by exploitability and business impact, not raw vulnerability count.' },
          { title: 'Remediation & Verification', description: 'We track fixes to completion and verify closure with re-testing.' },
        ],
      },
      {
        slug: 'managed-security-services',
        title: 'Managed Security Services',
        shortDescription: '24/7 monitoring, threat detection, and expert incident response.',
        heroTagline: 'A security team that never sleeps, so you can.',
        whatIs:
          'Managed Security Services (MSS) extend your organization with a dedicated team and toolset that monitors, detects, and responds to threats around the clock. It covers everything from log monitoring and alert triage to coordinated incident response, without the cost of building an in-house 24/7 operation.',
        whyNeeded:
          'Attacks happen at all hours, and most internal teams lack the staffing or specialized tooling to maintain continuous coverage. Delayed detection is one of the strongest predictors of breach severity and cost.',
        whatWeProvide: [
          '24/7 security event monitoring and alert triage',
          'Security Information and Event Management (SIEM) operation',
          'Threat hunting led by experienced analysts',
          'Incident response coordination and containment',
          'Monthly risk and posture reporting for stakeholders',
          'Tooling integration across endpoint, network, and cloud telemetry',
        ],
        keyFeatures: [
          'Round-the-clock human-led monitoring, not just automated alerts',
          'Defined incident response runbooks and escalation paths',
          'Correlated visibility across the full technology stack',
          'Proactive threat hunting beyond reactive alerting',
          'Transparent reporting on detection and response metrics',
        ],
        benefits: [
          'Dramatically reduced time to detect and contain threats',
          'Predictable security operations cost versus building in-house',
          'Access to specialized analyst expertise on demand',
          'Reduced alert fatigue for internal IT staff',
          'Stronger resilience during after-hours and holiday periods',
        ],
        process: [
          { title: 'Onboarding & Integration', description: 'We connect your log sources, endpoints, and cloud platforms into our monitoring stack.' },
          { title: 'Baseline & Tuning', description: 'We establish behavioral baselines and tune detection rules to your environment.' },
          { title: 'Continuous Monitoring', description: 'Our analysts monitor, triage, and investigate alerts around the clock.' },
          { title: 'Response & Reporting', description: 'We coordinate containment for real incidents and deliver regular posture reports.' },
        ],
      },
      {
        slug: 'cyber-ai-solutions',
        title: 'Cyber AI Solutions',
        shortDescription: 'AI and machine learning to predict, detect, and neutralize threats.',
        heroTagline: 'Outpace attackers with machine-speed defense.',
        whatIs:
          'Cyber AI Solutions apply machine learning and behavioral analytics to security operations, enabling detection of subtle anomalies and emerging attack patterns that signature-based tools routinely miss. AI augments human analysts rather than replacing them, surfacing the threats that matter most.',
        whyNeeded:
          'Modern attacks increasingly use techniques designed to evade static, rule-based defenses. As alert volumes grow beyond what teams can manually review, AI-assisted triage becomes essential to separate genuine threats from noise.',
        whatWeProvide: [
          'Behavioral anomaly detection across users and entities (UEBA)',
          'AI-assisted alert triage and prioritization',
          'Machine learning models for malware and phishing detection',
          'Automated threat intelligence correlation',
          'Adaptive detection tuning that learns from analyst feedback',
          'Model governance to keep detection logic explainable',
        ],
        keyFeatures: [
          'Continuous behavioral baselining of users and systems',
          'Reduced false-positive rates through learned context',
          'Natural language summarization of complex incidents',
          'Integration with existing SIEM and SOAR platforms',
          'Ongoing model retraining as your environment changes',
        ],
        benefits: [
          'Faster identification of novel and evasive threats',
          'Less analyst time spent triaging false positives',
          'Earlier detection of insider and account-takeover risk',
          'Scalable detection that grows with data volume',
          'Clearer, faster decision-making during live incidents',
        ],
        process: [
          { title: 'Data Pipeline Setup', description: 'We connect relevant telemetry sources to feed detection models reliably.' },
          { title: 'Model Selection & Training', description: 'We select and train models suited to your threat landscape and data quality.' },
          { title: 'Integration with SOC Workflow', description: 'We embed AI-driven insights directly into analyst triage and response tools.' },
          { title: 'Continuous Learning', description: 'We retrain and refine models as new threats and feedback emerge.' },
        ],
      },
      {
        slug: 'infrastructure-security',
        title: 'Infrastructure Security',
        shortDescription: 'Securing network perimeters, endpoints, firewalls, and core hardware.',
        heroTagline: 'Harden every layer your business runs on.',
        whatIs:
          'Infrastructure Security protects the foundational technology that everything else depends on, networks, endpoints, firewalls, and physical or virtual hardware, through layered controls, segmentation, and continuous hardening.',
        whyNeeded:
          'A single misconfigured firewall rule or unpatched server can provide attackers a foothold that spreads laterally through an entire network. As infrastructure grows more complex, manual configuration management becomes error-prone and difficult to verify.',
        whatWeProvide: [
          'Network segmentation and zero-trust architecture design',
          'Firewall, IDS/IPS, and perimeter defense management',
          'Endpoint detection and response (EDR) deployment',
          'Server and device hardening against industry benchmarks',
          'Wireless and remote access security configuration',
          'Infrastructure-level penetration testing',
        ],
        keyFeatures: [
          'Defense-in-depth architecture across every layer',
          'Continuous configuration drift detection',
          'Centralized endpoint visibility and response',
          'Segmented network zones to contain breaches',
          'Hardened baselines aligned to CIS and NIST benchmarks',
        ],
        benefits: [
          'Reduced blast radius if a breach does occur',
          'Lower risk from unpatched or misconfigured systems',
          'Improved visibility into endpoint and network activity',
          'Stronger resilience against ransomware propagation',
          'A defensible, auditable infrastructure baseline',
        ],
        process: [
          { title: 'Infrastructure Audit', description: 'We assess current network, endpoint, and perimeter configurations against best practice.' },
          { title: 'Segmentation Design', description: 'We architect network zones and access boundaries to limit lateral movement.' },
          { title: 'Hardening & Deployment', description: 'We apply secure configurations and deploy endpoint and perimeter defenses.' },
          { title: 'Ongoing Validation', description: 'We continuously verify configurations remain hardened as infrastructure changes.' },
        ],
      },
      {
        slug: 'ot-security',
        title: 'Operational Technology Security',
        shortDescription: 'Safeguarding industrial control systems and SCADA environments.',
        heroTagline: 'Protect the systems that run physical operations.',
        whatIs:
          'Operational Technology (OT) Security protects industrial control systems (ICS), SCADA platforms, and other systems that monitor or control physical processes, from manufacturing lines to utility grids, against cyber disruption.',
        whyNeeded:
          'OT environments were historically isolated, but increasing IT/OT convergence has exposed legacy industrial systems, many never designed with cybersecurity in mind, to network-borne threats that can cause real-world physical and safety consequences.',
        whatWeProvide: [
          'OT and ICS asset inventory and risk assessment',
          'IT/OT network segmentation and secure remote access design',
          'OT-aware monitoring and anomaly detection',
          'Patch and lifecycle management for legacy industrial systems',
          'Incident response planning tailored to safety-critical environments',
          'Compliance support for OT-specific regulatory frameworks',
        ],
        keyFeatures: [
          'Passive monitoring that avoids disrupting sensitive control systems',
          'Purpose-built segmentation between IT and OT networks',
          'Visibility into legacy protocols and proprietary equipment',
          'Safety-first incident response procedures',
          'Vendor and third-party access governance for OT systems',
        ],
        benefits: [
          'Reduced risk of operational downtime from cyber incidents',
          'Improved safety posture across industrial environments',
          'Clear visibility into previously unmonitored OT assets',
          'Stronger compliance with industrial security standards',
          'Coordinated response plans that protect both data and physical safety',
        ],
        process: [
          { title: 'OT Asset Discovery', description: 'We inventory control systems, sensors, and industrial network segments.' },
          { title: 'Risk Assessment', description: 'We evaluate exposure across IT/OT convergence points and legacy protocols.' },
          { title: 'Segmentation & Monitoring', description: 'We implement segmentation and passive monitoring suited to industrial environments.' },
          { title: 'Resilience Planning', description: 'We build response plans that prioritize operational safety and continuity.' },
        ],
      },
      {
        slug: 'threat-detection-response',
        title: 'Threat Detection and Response',
        shortDescription: 'Real-time SOC operations, threat hunting, and rapid mitigation.',
        heroTagline: 'See threats the moment they emerge, act before they spread.',
        whatIs:
          'Threat Detection and Response combines real-time Security Operations Center (SOC) monitoring with proactive threat hunting and structured incident response, designed to identify active threats quickly and contain them before significant damage occurs.',
        whyNeeded:
          'The window between initial compromise and meaningful damage is often measured in hours, not days. Organizations relying solely on automated alerts without active hunting and response capability frequently discover breaches far too late.',
        whatWeProvide: [
          'Real-time SOC monitoring across your technology stack',
          'Proactive threat hunting based on emerging tactics and techniques',
          'Security orchestration, automation, and response (SOAR) playbooks',
          'Incident triage, containment, and root-cause analysis',
          'Post-incident reporting and lessons-learned reviews',
          'Tabletop exercises to test response readiness',
        ],
        keyFeatures: [
          'MITRE ATT&CK-aligned detection coverage',
          'Automated response playbooks for common attack patterns',
          'Dedicated incident commander during active events',
          'Cross-source correlation for faster root-cause analysis',
          'Continuous improvement loop from every incident',
        ],
        benefits: [
          'Faster containment that limits breach scope and cost',
          'Improved detection of threats that evade automated tools',
          'Clear, documented response procedures during high-stress events',
          'Stronger institutional readiness through regular exercises',
          'Reduced downtime and reputational impact from incidents',
        ],
        process: [
          { title: 'Detection Engineering', description: 'We build and tune detections mapped to relevant adversary techniques.' },
          { title: 'Active Threat Hunting', description: 'Our analysts proactively search for indicators that automated tools may miss.' },
          { title: 'Incident Response', description: 'We triage, contain, and remediate confirmed incidents with a defined playbook.' },
          { title: 'Post-Incident Review', description: 'We document root cause and strengthen defenses against recurrence.' },
        ],
      },
      {
        slug: 'governance-risk-compliance',
        title: 'Governance, Risk, and Compliance',
        shortDescription: 'Aligning security with business strategy and compliance audits.',
        heroTagline: 'Turn security into a measurable business discipline.',
        whatIs:
          'Governance, Risk, and Compliance (GRC) aligns your security program with business strategy, formalizing policies, managing audits, and quantifying risk so leadership can make informed, defensible decisions about where to invest.',
        whyNeeded:
          'Without structured governance, security efforts become reactive and disconnected from business priorities, leading to wasted spend, failed audits, and difficulty demonstrating due diligence to regulators, customers, and insurers.',
        whatWeProvide: [
          'Security policy and standards development',
          'Risk register development and quantified risk scoring',
          'Compliance audit preparation and management (SOC 2, ISO 27001, and more)',
          'Third-party and vendor risk assessment programs',
          'Board and executive risk reporting',
          'Control mapping across overlapping regulatory frameworks',
        ],
        keyFeatures: [
          'Unified control framework spanning multiple regulations',
          'Quantified, business-aligned risk scoring',
          'Audit-ready documentation maintained continuously',
          'Structured vendor risk assessment workflows',
          'Executive dashboards translating risk into business terms',
        ],
        benefits: [
          'Smoother, faster compliance audits with less last-minute scrambling',
          'Security investment decisions grounded in quantified risk',
          'Improved trust with customers, partners, and insurers',
          'Reduced duplicate effort across overlapping frameworks',
          'Clear accountability for risk ownership across the business',
        ],
        process: [
          { title: 'Current State Assessment', description: 'We evaluate existing policies, controls, and compliance posture.' },
          { title: 'Framework Design', description: 'We build a governance framework mapped to applicable regulations and standards.' },
          { title: 'Implementation', description: 'We roll out policies, risk registers, and reporting cadences across the business.' },
          { title: 'Continuous Governance', description: 'We maintain audit readiness and refine risk scoring as the business evolves.' },
        ],
      },
      {
        slug: 'cloud-security',
        title: 'Cloud Security',
        shortDescription: 'Guardrails, posture management, and native controls across multi-cloud.',
        heroTagline: 'Move fast in the cloud without losing control.',
        whatIs:
          'Cloud Security implements guardrails, posture management, and native security controls across AWS, Azure, Google Cloud, and other platforms, ensuring cloud environments remain secure even as teams deploy and scale rapidly.',
        whyNeeded:
          'Cloud misconfigurations, exposed storage buckets, overly permissive identities, unmonitored services, are among the most common causes of cloud breaches, and they accumulate quickly when development velocity outpaces security review.',
        whatWeProvide: [
          'Cloud Security Posture Management (CSPM) implementation',
          'Identity and entitlement review across cloud accounts',
          'Infrastructure-as-Code security scanning',
          'Cloud workload protection and container security',
          'Multi-cloud security baseline and guardrail design',
          'Cloud-native logging and detection configuration',
        ],
        keyFeatures: [
          'Continuous misconfiguration detection and auto-remediation options',
          'Least-privilege identity guardrails across cloud accounts',
          'Shift-left security scanning in CI/CD pipelines',
          'Unified visibility across multiple cloud providers',
          'Compliance mapping for cloud-specific frameworks',
        ],
        benefits: [
          'Significantly fewer exploitable cloud misconfigurations',
          'Faster, safer cloud deployment velocity for engineering teams',
          'Centralized visibility across sprawling multi-cloud estates',
          'Reduced risk of accidental public data exposure',
          'Stronger audit readiness for cloud-hosted workloads',
        ],
        process: [
          { title: 'Cloud Posture Assessment', description: 'We assess current configurations, identities, and workloads across cloud accounts.' },
          { title: 'Guardrail Design', description: 'We define security baselines and automated guardrails for ongoing deployments.' },
          { title: 'Implementation', description: 'We deploy posture management, identity controls, and workload protection.' },
          { title: 'Continuous Monitoring', description: 'We maintain ongoing visibility and respond to new misconfigurations as they arise.' },
        ],
      },
      {
        slug: 'cyber-advisory-services',
        title: 'Cyber Advisory Services',
        shortDescription: 'Strategic consultation, risk readiness, and security roadmap development.',
        heroTagline: 'Strategic clarity for complex security decisions.',
        whatIs:
          'Cyber Advisory Services provide strategic consultation for leadership teams navigating security investment decisions, from readiness assessments to multi-year roadmap development, grounded in business priorities rather than generic checklists.',
        whyNeeded:
          'Many organizations invest in security tools without a coherent strategy, resulting in overlapping capabilities, unaddressed gaps, and difficulty justifying spend to the board. Strategic advisory closes that gap with a clear, prioritized plan.',
        whatWeProvide: [
          'Security maturity and readiness assessments',
          'Multi-year security roadmap development',
          'Budget planning and tooling rationalization',
          'M&A and due diligence security review',
          'Virtual CISO advisory and board-level reporting support',
          'Crisis and breach-readiness strategic planning',
        ],
        keyFeatures: [
          'Independent, vendor-neutral recommendations',
          'Roadmaps prioritized by business risk and impact',
          'Direct executive and board communication support',
          'Benchmarking against industry peers',
          'Actionable, phased implementation plans',
        ],
        benefits: [
          'Security spend directed at the highest-impact priorities',
          'Clearer board and executive confidence in security strategy',
          'Reduced tool sprawl and overlapping vendor contracts',
          'Faster alignment between security and business objectives',
          'A defensible plan to present to auditors, insurers, and acquirers',
        ],
        process: [
          { title: 'Discovery & Interviews', description: 'We meet with stakeholders to understand business priorities and current capabilities.' },
          { title: 'Maturity Assessment', description: 'We benchmark your program against industry frameworks and peer organizations.' },
          { title: 'Roadmap Development', description: 'We build a phased, prioritized roadmap tied to measurable risk reduction.' },
          { title: 'Advisory Support', description: 'We provide ongoing strategic guidance as priorities and threats evolve.' },
        ],
      },
      {
        slug: 'sase',
        title: 'Secure Access Service Edge',
        shortDescription: 'Converging network security and WAN into a unified cloud-delivered service.',
        heroTagline: 'One unified edge for security and connectivity.',
        whatIs:
          'Secure Access Service Edge (SASE) converges network security functions, secure web gateway, firewall-as-a-service, zero-trust network access, and CASB, with wide-area networking into a single cloud-delivered service architecture.',
        whyNeeded:
          'Distributed workforces and cloud-first applications have made traditional hub-and-spoke network security architectures slow and difficult to scale. SASE delivers consistent protection regardless of where users or applications reside.',
        whatWeProvide: [
          'SASE architecture design and vendor selection',
          'Zero Trust Network Access (ZTNA) implementation',
          'Secure web gateway and CASB deployment',
          'Firewall-as-a-Service configuration',
          'WAN optimization integrated with security policy',
          'Migration planning from legacy VPN and MPLS architectures',
        ],
        keyFeatures: [
          'Consistent policy enforcement for remote and on-site users alike',
          'Cloud-delivered architecture with global points of presence',
          'Reduced reliance on traditional VPN infrastructure',
          'Integrated visibility across network and security telemetry',
          'Scalable architecture that grows with distributed teams',
        ],
        benefits: [
          'Improved user experience for remote and hybrid teams',
          'Simplified network security management at scale',
          'Lower total cost compared to maintaining legacy WAN hardware',
          'Stronger protection for cloud and SaaS application access',
          'Faster rollout of new sites and remote locations',
        ],
        process: [
          { title: 'Architecture Assessment', description: 'We evaluate current network and security architecture against SASE principles.' },
          { title: 'Solution Design', description: 'We design a SASE architecture aligned to your connectivity and security needs.' },
          { title: 'Phased Migration', description: 'We migrate sites and users in planned phases to avoid business disruption.' },
          { title: 'Optimization', description: 'We tune policies and performance as adoption scales across the organization.' },
        ],
      },
      {
        slug: 'hybrid-cloud-security',
        title: 'Hybrid Cloud Security',
        shortDescription: 'Consistent, unified security policies across on-prem and public cloud.',
        heroTagline: 'One consistent policy, wherever your workloads run.',
        whatIs:
          'Hybrid Cloud Security delivers consistent, unified security policies across on-premises data centers and public cloud infrastructure, eliminating the gaps that appear when environments are secured with disconnected tools and standards.',
        whyNeeded:
          'Most enterprises run a mix of on-premises and cloud workloads, and inconsistent security policy between the two creates blind spots that attackers exploit, particularly during cloud migration projects when both environments are simultaneously active.',
        whatWeProvide: [
          'Unified policy framework spanning on-prem and cloud',
          'Hybrid identity and access governance',
          'Consistent logging and monitoring across environments',
          'Secure connectivity design between data centers and cloud',
          'Workload migration security review',
          'Hybrid backup and disaster recovery security alignment',
        ],
        keyFeatures: [
          'Single policy framework applied consistently everywhere',
          'Unified visibility across on-prem and cloud telemetry',
          'Secure, monitored connectivity between environments',
          'Consistent identity governance regardless of workload location',
          'Migration-aware security controls during transition periods',
        ],
        benefits: [
          'Eliminated security gaps between on-prem and cloud environments',
          'Smoother, safer cloud migration with consistent controls',
          'Simplified compliance reporting across hybrid infrastructure',
          'Reduced operational complexity for security teams',
          'Stronger resilience during infrastructure transitions',
        ],
        process: [
          { title: 'Environment Mapping', description: 'We document workloads, dependencies, and existing controls across both environments.' },
          { title: 'Unified Policy Design', description: 'We define a consistent security policy framework spanning on-prem and cloud.' },
          { title: 'Implementation', description: 'We apply unified controls, identity governance, and monitoring across both environments.' },
          { title: 'Ongoing Alignment', description: 'We keep policies synchronized as workloads shift and infrastructure evolves.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────── SOFTWARE DEVELOPMENT ───────────────────────────────────────
  {
    slug: 'software-development',
    name: 'Software Development & Modernization',
    shortName: 'Software Development',
    navLabel: 'Software Development',
    tagline: 'End-to-end engineering for ambitious products',
    description:
      'We design, build, and modernize enterprise software using agile practices and cloud-native architectures, delivering systems that are reliable, scalable, and built to evolve with your business. From enterprise platforms and SaaS products to APIs and legacy modernization, our engineers take ownership across the full delivery lifecycle. Every engagement is backed by rigorous testing, documentation, and long-term maintenance support.',
    highlights: [
      'Enterprise, SaaS, and custom business applications',
      'API-first architecture and third-party integrations',
      'Legacy modernization with minimal business disruption',
      'CRM, ERP, and web portal implementations',
      'Desktop, web, and progressive web app delivery',
      'Ongoing maintenance and dedicated support plans',
    ],
    deliveryModel: 'Custom Development & Managed Support',
    supportBadge: 'Enterprise Ready',
    icon: 'Code2',
    stats: [
      { label: 'Production deployments', value: '500+' },
      { label: 'Average uptime', value: '99.95%' },
      { label: 'Specialized service lines', value: '12' },
    ],
    questionnaire: [
      { question: 'What are you looking to build or modernize?', type: 'select', options: ['New product from scratch', 'Existing legacy system', 'Internal enterprise tool', 'Mobile application'] },
      { question: 'What is your current technology stack, if any?', type: 'text', placeholder: 'e.g. .NET, Java, Node.js, PHP' },
      { question: 'What is your target timeline?', type: 'select', options: ['Under 3 months', '3-6 months', '6-12 months', 'Ongoing partnership'] },
      { question: 'Do you have an in-house engineering team today?', type: 'select', options: ['No team', 'Small team, needs augmentation', 'Established team, needs specialized expertise', 'Fully staffed, exploring options'] },
      { question: 'What is the biggest technical challenge you are facing?', type: 'textarea', placeholder: 'e.g. scaling issues, outdated architecture, slow release cycles' },
    ],
    subServices: [
      {
        slug: 'enterprise-software',
        title: 'Enterprise Software',
        shortDescription: 'Large-scale business platforms built for reliability, security, and growth.',
        heroTagline: 'Mission-critical software built to enterprise standards.',
        whatIs:
          'Enterprise Software development delivers large-scale, mission-critical business platforms engineered for high availability, strict security requirements, and long operational lifespans. It covers everything from architecture and data modeling to integration with your existing enterprise systems.',
        whyNeeded:
          'Off-the-shelf tools rarely hold up under enterprise-scale transaction volumes, compliance requirements, and integration demands. Purpose-built enterprise software removes those constraints and gives you a platform designed around how your organization actually operates.',
        whatWeProvide: [
          'Enterprise-grade architecture and system design',
          'High-availability, fault-tolerant platform engineering',
          'Role-based access control and audit-ready logging',
          'Integration with existing enterprise systems and data stores',
          'Scalability planning for growing transaction volumes',
          'Long-term platform ownership and roadmap support',
        ],
        keyFeatures: [
          'Architecture built for multi-year operational life',
          'Enterprise security and compliance baked in from day one',
          'Horizontal scalability for growing user and data volumes',
          'Deep integration with existing business systems',
          'Documented, transferable codebase ownership',
        ],
        benefits: [
          'A platform that scales with the business instead of constraining it',
          'Reduced risk from compliance and security gaps',
          'Lower long-term total cost of ownership',
          'Faster feature delivery once the foundation is right',
          'Full internal visibility into the technology roadmap',
        ],
        process: [
          { title: 'Discovery & Architecture', description: 'We define requirements and design an architecture built for enterprise scale.' },
          { title: 'Iterative Development', description: 'We build in focused sprints with regular stakeholder demos.' },
          { title: 'Integration & Hardening', description: 'We integrate with existing systems and harden for security and compliance.' },
          { title: 'Launch & Ownership', description: 'We deploy to production and hand off a fully documented, supportable platform.' },
        ],
      },
      {
        slug: 'saas-development',
        title: 'SaaS Development',
        shortDescription: 'Multi-tenant, subscription-ready platforms built to scale from launch.',
        heroTagline: 'From MVP to multi-tenant platform.',
        whatIs:
          'SaaS Development builds subscription-based software products from the ground up, multi-tenant architecture, billing and subscription management, and usage analytics, designed to scale from an early launch to thousands of paying customers.',
        whyNeeded:
          'SaaS products face unique architectural demands around tenant isolation, billing accuracy, and elastic scaling that generic web development does not address well. Getting this foundation wrong early is expensive to fix once customers are onboard.',
        whatWeProvide: [
          'Multi-tenant architecture design and implementation',
          'Subscription billing, metering, and plan management',
          'Onboarding flows and self-service account management',
          'Usage analytics and customer health dashboards',
          'Elastic infrastructure for unpredictable growth',
          'Security and data isolation between tenants',
        ],
        keyFeatures: [
          'Tenant isolation without per-customer infrastructure overhead',
          'Flexible plan tiers and usage-based billing support',
          'Self-service onboarding that reduces sales-assisted overhead',
          'Analytics that surface churn risk and expansion opportunity',
          'Infrastructure that scales elastically with signups',
        ],
        benefits: [
          'A product architecture ready for rapid customer growth',
          'Accurate, flexible billing that supports multiple pricing models',
          'Lower customer acquisition cost through self-service onboarding',
          'Clear visibility into product usage and account health',
          'Reduced engineering rework as the customer base scales',
        ],
        process: [
          { title: 'Product & Architecture Planning', description: 'We define the multi-tenant architecture and billing model together.' },
          { title: 'Core Platform Build', description: 'We build the core product, onboarding, and subscription infrastructure.' },
          { title: 'Launch Preparation', description: 'We stress-test scaling, billing accuracy, and tenant isolation before launch.' },
          { title: 'Post-Launch Iteration', description: 'We iterate on features and infrastructure based on real usage data.' },
        ],
      },
      {
        slug: 'crm-development',
        title: 'CRM Development',
        shortDescription: 'Custom or platform-based CRM systems tailored to your sales process.',
        heroTagline: 'A CRM shaped around how your team actually sells.',
        whatIs:
          'CRM Development delivers customer relationship management systems, whether built custom or configured on leading platforms, tailored to your specific sales pipeline, customer data model, and reporting needs rather than forcing a generic workflow.',
        whyNeeded:
          'Generic CRM configurations rarely match a sales team\u2019s actual process, leading to low adoption and inconsistent data. A CRM built around your real pipeline and customer lifecycle gets used, and the data it produces can actually be trusted.',
        whatWeProvide: [
          'Custom CRM development or platform configuration',
          'Sales pipeline and workflow modeling',
          'Customer data model design and deduplication',
          'Integration with marketing, support, and billing systems',
          'Custom reporting and sales performance dashboards',
          'User adoption training and change management',
        ],
        keyFeatures: [
          'Pipeline stages and fields matched to your actual sales process',
          'Automated data hygiene and deduplication rules',
          'Integrations connecting CRM data across departments',
          'Reporting built around the metrics your leadership tracks',
          'Mobile-friendly access for field and remote sales teams',
        ],
        benefits: [
          'Higher user adoption from a system that fits real workflows',
          'More reliable pipeline and forecasting data',
          'Reduced manual data entry through system integrations',
          'Clearer visibility into sales performance and bottlenecks',
          'A CRM that evolves as your sales process matures',
        ],
        process: [
          { title: 'Sales Process Mapping', description: 'We document your actual sales stages, fields, and reporting needs.' },
          { title: 'Build or Configure', description: 'We build custom functionality or configure a platform to match.' },
          { title: 'Integrate & Migrate', description: 'We integrate related systems and migrate existing customer data.' },
          { title: 'Adoption & Training', description: 'We train your team and refine the system based on early usage.' },
        ],
      },
      {
        slug: 'erp-solutions',
        title: 'ERP Solutions',
        shortDescription: 'Unified planning systems connecting finance, operations, and inventory.',
        heroTagline: 'One system of record for the whole business.',
        whatIs:
          'ERP Solutions implement and configure enterprise resource planning systems that unify finance, inventory, procurement, and operations into a single system of record, replacing disconnected spreadsheets and point solutions.',
        whyNeeded:
          'Businesses running finance, inventory, and operations on separate disconnected tools lose time to manual reconciliation and lack a single source of truth for decision-making. A properly implemented ERP eliminates that fragmentation.',
        whatWeProvide: [
          'ERP platform selection and implementation',
          'Finance, procurement, and inventory module configuration',
          'Data migration from legacy systems and spreadsheets',
          'Cross-module workflow and approval configuration',
          'Custom reporting and financial dashboards',
          'User training and phased rollout management',
        ],
        keyFeatures: [
          'Unified data model across finance, inventory, and operations',
          'Configurable approval workflows matching internal policy',
          'Migration paths that preserve historical data integrity',
          'Reporting built for finance and operations leadership',
          'Phased rollout minimizing disruption to daily operations',
        ],
        benefits: [
          'A single source of truth across core business functions',
          'Reduced manual reconciliation and reporting delays',
          'Improved inventory accuracy and procurement efficiency',
          'Better financial visibility for leadership decision-making',
          'A scalable system that grows with additional business units',
        ],
        process: [
          { title: 'Requirements & Platform Fit', description: 'We assess your processes and recommend the right ERP approach.' },
          { title: 'Configuration & Migration', description: 'We configure modules and migrate data from legacy systems.' },
          { title: 'Testing & Validation', description: 'We validate workflows and financial accuracy before go-live.' },
          { title: 'Go-Live & Support', description: 'We support the rollout and provide ongoing configuration support.' },
        ],
      },
      {
        slug: 'custom-business-applications',
        title: 'Custom Business Applications',
        shortDescription: 'Purpose-built internal tools tailored to your exact workflows.',
        heroTagline: 'Software built around how your business actually works.',
        whatIs:
          'Custom Business Applications are internal tools and workflow systems built specifically for your operational processes, replacing manual spreadsheets or ill-fitting off-the-shelf software with something designed around your team\u2019s real needs.',
        whyNeeded:
          'Off-the-shelf software forces teams to bend their processes to fit the tool. As businesses scale, those compromises compound into inefficiency, workarounds, and lost productivity that custom-built systems are designed to eliminate.',
        whatWeProvide: [
          'Internal tool and workflow application development',
          'Process automation embedded directly into the application',
          'Role-based permissions matched to internal team structure',
          'Integration with existing business systems and data sources',
          'Technical discovery and application architecture planning',
          'Ongoing maintenance and feature development',
        ],
        keyFeatures: [
          'Architecture designed around your actual business logic',
          'Automation of manual, repetitive internal processes',
          'Permissions and workflows matched to team structure',
          'Integration with the tools your team already relies on',
          'Documented, maintainable codebase ownership',
        ],
        benefits: [
          'Tools that fit your workflows instead of constraining them',
          'Time saved from eliminating manual, spreadsheet-based processes',
          'Full ownership and control over internal tooling',
          'Faster iteration as internal processes evolve',
          'Reduced licensing costs versus rigid third-party software',
        ],
        process: [
          { title: 'Workflow Discovery', description: 'We map current processes and identify where custom tooling adds the most value.' },
          { title: 'Design & Prototyping', description: 'We design the application and validate workflows before full development.' },
          { title: 'Agile Development', description: 'We build in iterative sprints with regular internal stakeholder feedback.' },
          { title: 'Launch & Support', description: 'We deploy internally and provide ongoing support as needs evolve.' },
        ],
      },
      {
        slug: 'api-development',
        title: 'API Development',
        shortDescription: 'Secure, well-documented APIs that power your products and partners.',
        heroTagline: 'The connective tissue behind every modern platform.',
        whatIs:
          'API Development designs and builds secure, well-documented application programming interfaces that expose your business logic and data to web apps, mobile apps, and external partners, built for performance, versioning, and long-term maintainability.',
        whyNeeded:
          'Poorly designed APIs become a bottleneck for every product and integration built on top of them. A well-architected API layer is what allows your business to add new applications and partners without repeatedly re-engineering the backend.',
        whatWeProvide: [
          'RESTful and GraphQL API design and development',
          'Authentication, authorization, and rate-limiting design',
          'API documentation and developer portal creation',
          'Versioning strategy for long-term backward compatibility',
          'Performance testing and load optimization',
          'API gateway and monitoring implementation',
        ],
        keyFeatures: [
          'Consistent, well-documented API design standards',
          'Secure authentication and granular access control',
          'Versioning that avoids breaking existing integrations',
          'Built-in rate limiting and abuse protection',
          'Full observability into API performance and usage',
        ],
        benefits: [
          'Faster development of new applications on a stable API layer',
          'Easier onboarding for partners and third-party developers',
          'Reduced risk of breaking changes as the platform evolves',
          'Improved performance under high-volume API traffic',
          'Clear visibility into how your API is actually being used',
        ],
        process: [
          { title: 'API Design', description: 'We design endpoints, data contracts, and authentication models.' },
          { title: 'Development & Documentation', description: 'We build the API alongside clear, versioned documentation.' },
          { title: 'Testing & Hardening', description: 'We load-test and secure the API before production release.' },
          { title: 'Launch & Monitoring', description: 'We deploy with monitoring and support ongoing API evolution.' },
        ],
      },
      {
        slug: 'api-integration',
        title: 'API Integration',
        shortDescription: 'Connecting your systems to the third-party services you rely on.',
        heroTagline: 'Make your systems work together, not around each other.',
        whatIs:
          'API Integration connects your internal systems to third-party platforms, payment processors, CRMs, marketing tools, logistics providers, so data flows automatically instead of being manually re-entered between disconnected tools.',
        whyNeeded:
          'Manually transferring data between systems is slow, error-prone, and does not scale. Reliable API integrations keep your business systems synchronized in real time, eliminating a major source of operational friction.',
        whatWeProvide: [
          'Third-party API integration and orchestration',
          'Data mapping and transformation between systems',
          'Webhook and event-driven integration design',
          'Error handling and retry logic for reliable data flow',
          'Integration monitoring and alerting',
          'Middleware and integration platform selection',
        ],
        keyFeatures: [
          'Reliable, monitored data flow between critical systems',
          'Robust error handling that prevents silent data loss',
          'Real-time, event-driven integration where it matters most',
          'Clear data mapping and transformation logic',
          'Scalable integration architecture as systems are added',
        ],
        benefits: [
          'Elimination of manual, error-prone data entry between systems',
          'Faster, more accurate data flow across the business',
          'Reduced operational overhead from disconnected tools',
          'Improved reliability with proper error handling in place',
          'A foundation that scales as you add new integrations',
        ],
        process: [
          { title: 'Integration Mapping', description: 'We identify systems, data flows, and integration priorities.' },
          { title: 'Design & Build', description: 'We design and build the integration layer with proper error handling.' },
          { title: 'Testing & Validation', description: 'We validate data accuracy and reliability under real conditions.' },
          { title: 'Monitoring & Support', description: 'We monitor integrations and support them as systems evolve.' },
        ],
      },
      {
        slug: 'web-portal-development',
        title: 'Web Portal Development',
        shortDescription: 'Customer and partner portals for self-service and collaboration.',
        heroTagline: 'A dedicated front door for customers and partners.',
        whatIs:
          'Web Portal Development builds secure, branded portals that give customers, partners, or employees self-service access to accounts, documents, orders, or support, reducing manual requests and improving the overall experience.',
        whyNeeded:
          'Without a dedicated portal, customers and partners rely on email and phone calls for information they should be able to access themselves, increasing support load and slowing everyone down.',
        whatWeProvide: [
          'Customer and partner self-service portal design',
          'Secure authentication and role-based access',
          'Document, order, and account management features',
          'Integration with CRM, billing, and support systems',
          'Responsive design across desktop and mobile',
          'Ongoing portal maintenance and feature additions',
        ],
        keyFeatures: [
          'Self-service access that reduces support ticket volume',
          'Secure, role-based views of sensitive account information',
          'Integration with the systems that already hold the data',
          'Fully responsive experience across every device',
          'Extensible design for future feature additions',
        ],
        benefits: [
          'Reduced support workload from routine information requests',
          'Improved customer and partner satisfaction through self-service',
          'Faster access to account and order information',
          'A professional, branded digital front door for your business',
          'A platform that scales as you add new self-service features',
        ],
        process: [
          { title: 'Requirements & UX Design', description: 'We define portal features and design the user experience.' },
          { title: 'Development & Integration', description: 'We build the portal and integrate it with backend systems.' },
          { title: 'Security Review', description: 'We validate authentication, permissions, and data protection.' },
          { title: 'Launch & Iteration', description: 'We launch the portal and continue adding features based on usage.' },
        ],
      },
      {
        slug: 'desktop-applications',
        title: 'Desktop Applications',
        shortDescription: 'Native and cross-platform desktop software for demanding workflows.',
        heroTagline: 'Performance and control where the browser falls short.',
        whatIs:
          'Desktop Applications delivers native and cross-platform desktop software for workflows that need offline access, deep hardware integration, or performance beyond what a browser can reliably provide.',
        whyNeeded:
          'Some workflows, specialized data processing, hardware integration, offline-first environments, are still better served by dedicated desktop software than a web application, and building it well requires platform-specific expertise.',
        whatWeProvide: [
          'Native Windows, macOS, and Linux application development',
          'Cross-platform desktop frameworks for shared codebases',
          'Offline-first data synchronization design',
          'Hardware and peripheral integration',
          'Auto-update and distribution pipeline setup',
          'Performance optimization for data-intensive workloads',
        ],
        keyFeatures: [
          'Native performance tuned to each target platform',
          'Offline-capable functionality with reliable sync on reconnect',
          'Cross-platform code sharing where it reduces long-term cost',
          'Seamless auto-update distribution to end users',
          'Direct integration with specialized hardware where required',
        ],
        benefits: [
          'Reliable performance for data-intensive or offline workflows',
          'A consistent experience across the platforms your users run',
          'Reduced friction from seamless, automated updates',
          'Direct hardware integration not achievable in a browser',
          'Lower long-term maintenance with shared cross-platform code',
        ],
        process: [
          { title: 'Platform & Framework Selection', description: 'We assess requirements and choose the right native or cross-platform approach.' },
          { title: 'Core Development', description: 'We build the application with attention to platform-specific behavior.' },
          { title: 'Performance Testing', description: 'We validate performance under real data and hardware conditions.' },
          { title: 'Distribution & Updates', description: 'We set up packaging, distribution, and automatic update pipelines.' },
        ],
      },
      {
        slug: 'progressive-web-apps',
        title: 'Progressive Web Apps',
        shortDescription: 'App-like experiences that install from the browser, no app store required.',
        heroTagline: 'App-store reach without the app-store friction.',
        whatIs:
          'Progressive Web Apps (PWAs) deliver installable, app-like experiences directly from the browser, complete with offline support, push notifications, and home-screen installation, without requiring an app store submission.',
        whyNeeded:
          'Native mobile apps carry app-store approval delays, platform fees, and separate codebases for iOS and Android. A well-built PWA reaches the same users with a single codebase and instant deployment.',
        whatWeProvide: [
          'Progressive Web App architecture and development',
          'Offline caching and service worker implementation',
          'Push notification integration',
          'Home-screen installation and app-like navigation',
          'Performance optimization for mobile networks',
          'Cross-browser and cross-device compatibility testing',
        ],
        keyFeatures: [
          'App-like experience delivered through a single web codebase',
          'Reliable offline functionality via service workers',
          'Push notifications without app-store dependency',
          'Instant updates with no app-store review delays',
          'Consistent performance across mobile and desktop browsers',
        ],
        benefits: [
          'Faster time to market with one codebase instead of two',
          'No app-store fees or approval delays for updates',
          'Improved engagement through push notifications and installability',
          'Reliable performance even on unstable mobile networks',
          'Lower long-term maintenance versus native app parity',
        ],
        process: [
          { title: 'Architecture Planning', description: 'We plan the PWA architecture, caching strategy, and offline behavior.' },
          { title: 'Development', description: 'We build the application with service workers and installability built in.' },
          { title: 'Performance Tuning', description: 'We optimize load times and responsiveness across devices and networks.' },
          { title: 'Launch & Monitoring', description: 'We launch and monitor real-world performance and engagement.' },
        ],
      },
      {
        slug: 'legacy-system-modernization',
        title: 'Legacy System Modernization',
        shortDescription: 'Code migration, refactoring, and monolith-to-microservices redesign.',
        heroTagline: 'Modernize without starting from zero.',
        whatIs:
          'Legacy System Modernization migrates aging applications to current technology stacks, refactors brittle codebases, and redesigns monolithic architectures into scalable microservices, preserving business logic while removing technical debt.',
        whyNeeded:
          'Legacy systems become increasingly expensive to maintain, harder to secure, and difficult to find engineering talent for. Every year of delay increases both the cost and the risk of eventually modernizing under pressure.',
        whatWeProvide: [
          'Seamless code migration to modern technology stacks',
          'Database optimization, refactoring, and performance tuning',
          'Monolith-to-microservices architecture redesign',
          'Strategic technical debt reduction roadmaps',
          'Risk-managed phased migration planning',
          'Parallel-run and cutover strategy to minimize downtime',
        ],
        keyFeatures: [
          'Incremental migration paths that avoid high-risk rewrites',
          'Preserved business logic throughout the transition',
          'Modern, supportable technology stack outcomes',
          'Performance benchmarking before and after migration',
          'Clear technical debt prioritization and tracking',
        ],
        benefits: [
          'Lower long-term maintenance and hosting costs',
          'Easier hiring with current, in-demand technology stacks',
          'Improved system performance and reliability',
          'Reduced security risk from unsupported platforms',
          'A scalable foundation for future feature development',
        ],
        process: [
          { title: 'Legacy Assessment', description: 'We audit the existing system, dependencies, and business logic in detail.' },
          { title: 'Modernization Strategy', description: 'We define a phased migration path balancing risk, cost, and timeline.' },
          { title: 'Incremental Migration', description: 'We migrate components progressively, validating functionality at each stage.' },
          { title: 'Cutover & Stabilization', description: 'We complete the transition and stabilize the modernized system in production.' },
        ],
      },
      {
        slug: 'maintenance-support',
        title: 'Maintenance & Support',
        shortDescription: 'Ongoing testing, bug fixes, and feature development after launch.',
        heroTagline: 'Software that stays reliable long after launch day.',
        whatIs:
          'Maintenance & Support keeps existing software reliable and current after launch, covering bug fixes, security patching, automated regression testing, performance monitoring, and ongoing feature development as your needs evolve.',
        whyNeeded:
          'Software that ships without a maintenance plan accumulates bugs, security gaps, and outdated dependencies over time. A structured support arrangement catches issues early and keeps your product evolving with the business.',
        whatWeProvide: [
          'Ongoing bug fixes and production issue resolution',
          'Automated regression and quality testing on every release',
          'Security patching and dependency updates',
          'Performance monitoring and optimization',
          'Incremental feature development and enhancement',
          'Defined SLAs for response and resolution time',
        ],
        keyFeatures: [
          'Automated regression suites integrated into every release',
          'Proactive security patching before vulnerabilities are exploited',
          'Continuous performance monitoring and alerting',
          'Defined SLAs for predictable response times',
          'A dedicated team that already knows your codebase',
        ],
        benefits: [
          'Fewer production defects and emergency hotfixes',
          'Reduced security risk from outdated dependencies',
          'Consistent performance as usage grows over time',
          'Predictable, budgeted ongoing engineering cost',
          'Continuous improvement instead of software that stagnates',
        ],
        process: [
          { title: 'Support Onboarding', description: 'We review the codebase and define support scope and SLAs.' },
          { title: 'Monitoring & Triage', description: 'We monitor for issues and triage incoming bug reports and requests.' },
          { title: 'Resolution & Testing', description: 'We fix issues and validate changes through automated testing.' },
          { title: 'Ongoing Enhancement', description: 'We deliver incremental improvements as your product requirements evolve.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────── AI SOLUTIONS ───────────────────────────────────────────────
  {
    slug: 'ai-solutions',
    name: 'AI Agents & Intelligent Solutions',
    shortName: 'AI Solutions',
    navLabel: 'AI Solutions',
    tagline: 'Autonomous intelligence built for the enterprise',
    description:
      'We engineer automation, machine learning, and generative AI systems that act on your data, reduce manual work, and create measurable operational leverage across the business. From conversational chatbots and autonomous agents to computer vision and predictive analytics, we build production-grade AI grounded in your own data and workflows. Every solution ships with monitoring, governance, and a clear path to scale.',
    highlights: [
      'Custom AI chatbots and conversational agents',
      'Generative AI and enterprise LLM integration',
      'Predictive analytics and recommendation engines',
      'Computer vision and NLP solutions',
      'Intelligent document processing and workflow automation',
      'AI strategy consulting and readiness assessments',
    ],
    deliveryModel: 'Custom Development & AI Consulting',
    supportBadge: 'Enterprise Ready',
    icon: 'Sparkles',
    stats: [
      { label: 'Hours automated monthly', value: '10,000+' },
      { label: 'Models deployed to production', value: '150+' },
      { label: 'Average process efficiency gain', value: '40%' },
    ],
    questionnaire: [
      { question: 'Which area are you most interested in?', type: 'select', options: ['Process automation', 'Predictive analytics / ML', 'AI agents', 'Generative AI / LLM integration', 'Data infrastructure for AI'] },
      { question: 'What data do you currently have available for AI initiatives?', type: 'select', options: ['Well-organized and accessible', 'Exists but fragmented', 'Limited or unstructured', 'Not sure'] },
      { question: 'Have you deployed any AI or ML systems to production before?', type: 'select', options: ['Yes, multiple', 'Yes, one or two', 'No, this is our first initiative'] },
      { question: 'What business process are you hoping to improve?', type: 'textarea', placeholder: 'e.g. customer support, document processing, demand forecasting' },
      { question: 'What is your expected timeline to see initial results?', type: 'select', options: ['Under 3 months', '3-6 months', '6+ months', 'Flexible'] },
    ],
    subServices: [
      {
        slug: 'ai-chatbot-development',
        title: 'AI Chatbot Development',
        shortDescription: 'Conversational AI trained on your business, deployed across channels.',
        heroTagline: 'Conversations that resolve, not just respond.',
        whatIs:
          'AI Chatbot Development builds conversational assistants trained on your products, policies, and support history, deployed across your website, mobile app, and messaging channels to handle real customer and employee questions accurately.',
        whyNeeded:
          'Generic chatbots frustrate users with scripted, out-of-context answers. A chatbot grounded in your actual knowledge base resolves real questions, reduces support ticket volume, and represents your brand consistently around the clock.',
        whatWeProvide: [
          'Custom chatbot design grounded in your knowledge base',
          'Multi-channel deployment across web, mobile, and messaging apps',
          'Intent recognition and conversation flow design',
          'Human handoff for complex or sensitive requests',
          'Integration with CRM, support, and ticketing systems',
          'Ongoing conversation tuning based on real usage data',
        ],
        keyFeatures: [
          'Responses grounded in your actual product and policy data',
          'Seamless escalation to a human agent when needed',
          'Consistent brand voice across every channel',
          'Integration with existing support and CRM tooling',
          'Analytics on resolution rate and common user questions',
        ],
        benefits: [
          'Reduced support ticket volume and faster response times',
          'Consistent, accurate answers around the clock',
          'Lower cost per customer interaction at scale',
          'Improved customer satisfaction through instant resolution',
          'Continuous improvement driven by real conversation data',
        ],
        process: [
          { title: 'Knowledge & Intent Mapping', description: 'We map your knowledge base and the intents customers actually ask about.' },
          { title: 'Conversation Design', description: 'We design conversation flows, escalation paths, and tone of voice.' },
          { title: 'Build & Integrate', description: 'We build and integrate the chatbot into your existing channels and systems.' },
          { title: 'Launch & Tune', description: 'We launch and continuously tune accuracy based on real conversations.' },
        ],
      },
      {
        slug: 'generative-ai-solutions',
        title: 'Generative AI Solutions',
        shortDescription: 'Custom LLM integration, summarization, and enterprise content generation.',
        heroTagline: 'Generative AI grounded in your business context.',
        whatIs:
          'Generative AI Solutions integrate large language models, proprietary and open-source, into enterprise workflows, powering document summarization, content generation, and code assistance built around your data and use cases.',
        whyNeeded:
          'Generic AI tools lack context about your business, products, and processes. Effective enterprise GenAI requires careful integration, grounding, and governance to deliver reliable value rather than generic, unreliable output.',
        whatWeProvide: [
          'Custom Large Language Model (LLM) integration',
          'Retrieval-augmented generation grounded in proprietary data',
          'Document summarization and analysis tooling',
          'Automated code generation assistants',
          'Tailored enterprise content generation platforms',
          'Prompt engineering, evaluation, and governance frameworks',
        ],
        keyFeatures: [
          'Models grounded in your proprietary knowledge base',
          'Support for both proprietary and open-source LLMs',
          'Evaluation frameworks measuring accuracy and reliability',
          'Governance controls for responsible enterprise use',
          'Seamless integration with existing tools and workflows',
        ],
        benefits: [
          'Faster content and documentation production',
          'More accurate, context-aware AI outputs grounded in your data',
          'Reduced manual effort on repetitive writing and summarization tasks',
          'Accelerated developer productivity with code generation support',
          'A defensible, governed approach to enterprise AI adoption',
        ],
        process: [
          { title: 'Use Case Scoping', description: 'We identify high-value GenAI applications aligned to business priorities.' },
          { title: 'Grounding & Architecture', description: 'We design retrieval and grounding architecture using your proprietary data.' },
          { title: 'Build & Evaluate', description: 'We build the solution and rigorously evaluate output quality and reliability.' },
          { title: 'Deploy & Govern', description: 'We deploy with governance controls and monitor ongoing performance.' },
        ],
      },
      {
        slug: 'ai-agents',
        title: 'AI Agents',
        shortDescription: 'Autonomous agents that plan, reason, and take action on your behalf.',
        heroTagline: 'Agents that take action, not just generate text.',
        whatIs:
          'AI Agents are autonomous decision-making systems, and coordinated multi-agent systems, that can plan, reason over ambiguous information, and execute multi-step tasks across your business tools rather than simply answering questions.',
        whyNeeded:
          'Conventional automation can only follow fixed rules. As tasks grow more complex and context-dependent, businesses increasingly need agents capable of reasoning over ambiguous information and adapting their actions accordingly.',
        whatWeProvide: [
          'Autonomous decision-making agent engineering',
          'Multi-agent collaborative system design',
          'Agent orchestration and tool-use frameworks',
          'Integration with internal business systems and APIs',
          'Human-in-the-loop oversight and guardrail design',
          'Ongoing agent performance evaluation and refinement',
        ],
        keyFeatures: [
          'Agents capable of multi-step reasoning and planning',
          'Coordinated multi-agent workflows for complex tasks',
          'Built-in guardrails and human escalation paths',
          'Tool integration connecting agents to real business systems',
          'Transparent audit trails for every agent action',
        ],
        benefits: [
          'Automation of complex, judgment-requiring tasks previously manual',
          'Faster execution of multi-step processes across systems',
          'Reduced operational load on specialized staff',
          'Safer AI adoption through built-in oversight and guardrails',
          'A scalable foundation for expanding agentic capability over time',
        ],
        process: [
          { title: 'Use Case & Risk Assessment', description: 'We identify suitable agentic use cases and define appropriate guardrails.' },
          { title: 'Agent Architecture Design', description: 'We design agent reasoning, tool access, and escalation pathways.' },
          { title: 'Build & Validate', description: 'We build agents and rigorously validate behavior against real scenarios.' },
          { title: 'Deploy & Oversee', description: 'We deploy with human oversight and refine based on observed performance.' },
        ],
      },
      {
        slug: 'ai-automation',
        title: 'AI Automation',
        shortDescription: 'RPA and AI-driven automation for repetitive business processes.',
        heroTagline: 'Let software handle the repetitive work.',
        whatIs:
          'AI Automation combines Robotic Process Automation (RPA) with AI-driven decision-making to eliminate repetitive manual tasks across departments, from data entry to approvals, freeing teams to focus on higher-value work.',
        whyNeeded:
          'Manual, repetitive processes consume significant staff time, introduce human error, and scale poorly as transaction volumes grow. AI-driven automation removes that bottleneck without requiring a full system overhaul.',
        whatWeProvide: [
          'Robotic Process Automation (RPA) for rules-based tasks',
          'AI-driven decisioning layered on top of automation',
          'Business process optimization and re-engineering',
          'Integration with existing enterprise systems',
          'Exception-handling and human escalation design',
          'Automation governance and performance monitoring',
        ],
        keyFeatures: [
          'Bots that integrate with existing legacy and modern systems',
          'AI-driven decisions layered onto rules-based automation',
          'Exception handling that escalates to humans appropriately',
          'Centralized automation monitoring and analytics',
          'Rapid expansion to new processes once patterns are proven',
        ],
        benefits: [
          'Significant reduction in manual processing time',
          'Fewer errors in repetitive, high-volume tasks',
          'Faster turnaround on customer and internal requests',
          'Staff redirected toward higher-value strategic work',
          'Process consistency that scales with transaction volume',
        ],
        process: [
          { title: 'Process Discovery', description: 'We identify high-volume, rules-based processes best suited for automation.' },
          { title: 'Solution Design', description: 'We design bots and AI decisioning aligned to your existing systems.' },
          { title: 'Build & Integrate', description: 'We build and integrate automation into your operational environment.' },
          { title: 'Monitor & Scale', description: 'We monitor performance and expand automation to additional processes over time.' },
        ],
      },
      {
        slug: 'ai-integration',
        title: 'AI Integration',
        shortDescription: 'Embedding AI capability directly into your existing products and systems.',
        heroTagline: 'AI that works inside the tools you already use.',
        whatIs:
          'AI Integration embeds machine learning and generative AI capability directly into your existing products, CRMs, and internal systems, so AI enhances workflows your team already relies on instead of living in a separate disconnected tool.',
        whyNeeded:
          'Standalone AI tools often go unused because they sit outside existing workflows. AI delivers the most value when it is integrated directly into the systems and screens your team already works in every day.',
        whatWeProvide: [
          'AI capability integration into existing enterprise systems',
          'API and middleware development for AI-powered features',
          'Embedded recommendations, scoring, and summarization features',
          'Integration with CRM, ERP, and internal tooling',
          'Performance and reliability testing for embedded AI features',
          'Ongoing monitoring and model refresh cycles',
        ],
        keyFeatures: [
          'AI features embedded directly into existing workflows',
          'Seamless integration with CRM, ERP, and internal systems',
          'No disruption to tools your team already relies on',
          'Reliable performance under real production load',
          'Clear monitoring of AI feature accuracy over time',
        ],
        benefits: [
          'Higher AI adoption by embedding it where work already happens',
          'Faster time to value versus building standalone AI tools',
          'Reduced training burden since workflows stay familiar',
          'Consistent AI performance across integrated systems',
          'A foundation for adding further AI capability over time',
        ],
        process: [
          { title: 'System & Workflow Audit', description: 'We identify where AI can be embedded into existing systems for real impact.' },
          { title: 'Integration Architecture', description: 'We design the integration layer connecting AI models to your systems.' },
          { title: 'Build & Test', description: 'We build the integration and test accuracy and performance thoroughly.' },
          { title: 'Deploy & Monitor', description: 'We deploy and monitor embedded AI features for ongoing reliability.' },
        ],
      },
      {
        slug: 'predictive-analytics',
        title: 'Predictive Analytics',
        shortDescription: 'Forecasting models that turn historical data into forward-looking decisions.',
        heroTagline: 'Turn historical data into forward-looking decisions.',
        whatIs:
          'Predictive Analytics builds statistical and machine learning models that forecast trends, classify risk, and anticipate outcomes, from customer churn to demand forecasting, transforming raw historical data into decisions your team can act on today.',
        whyNeeded:
          'Organizations sitting on years of operational data often make decisions on intuition alone, missing patterns that predictive models can surface, from churn risk to demand spikes to fraud indicators.',
        whatWeProvide: [
          'Predictive model development for churn, risk, and demand',
          'Time-series forecasting for planning and inventory decisions',
          'Fraud and anomaly detection modeling',
          'Model explainability tooling for business stakeholders',
          'Integration with existing dashboards and BI tools',
          'Ongoing model monitoring for accuracy drift',
        ],
        keyFeatures: [
          'Models trained and validated on your actual business data',
          'Explainable outputs suited for business stakeholder review',
          'Production-grade deployment, not just proof-of-concept notebooks',
          'Ongoing model monitoring for drift and accuracy',
          'Integration with existing dashboards and decision workflows',
        ],
        benefits: [
          'Earlier identification of risk and opportunity in your data',
          'More accurate forecasting for planning and inventory decisions',
          'Faster, more consistent classification of high-volume data',
          'Decisions grounded in evidence rather than intuition alone',
          'Reduced losses from earlier fraud and anomaly detection',
        ],
        process: [
          { title: 'Use Case Definition', description: 'We identify and prioritize the business problems best suited to predictive models.' },
          { title: 'Data Preparation', description: 'We clean, structure, and validate the data required to train effective models.' },
          { title: 'Model Development', description: 'We build, test, and validate models against real-world performance criteria.' },
          { title: 'Deployment & Monitoring', description: 'We deploy to production and monitor for accuracy drift over time.' },
        ],
      },
      {
        slug: 'recommendation-systems',
        title: 'Recommendation Systems',
        shortDescription: 'Personalized product, content, and action recommendations at scale.',
        heroTagline: 'Show every user exactly what matters to them.',
        whatIs:
          'Recommendation Systems build personalization engines that suggest products, content, or next-best-actions tailored to each user, based on behavior, preferences, and similarity patterns learned from your data.',
        whyNeeded:
          'Generic, one-size-fits-all experiences leave engagement and revenue on the table. Personalized recommendations consistently improve conversion, retention, and average order value when built on solid underlying data.',
        whatWeProvide: [
          'Collaborative and content-based recommendation engine design',
          'Real-time personalization based on user behavior',
          'A/B testing frameworks to validate recommendation impact',
          'Integration with e-commerce, content, and CRM platforms',
          'Cold-start strategies for new users and products',
          'Ongoing tuning based on engagement and conversion data',
        ],
        keyFeatures: [
          'Personalization that updates in real time with user behavior',
          'Proven strategies for new users with limited history',
          'Built-in A/B testing to measure real business impact',
          'Integration with your existing storefront or content platform',
          'Continuous tuning based on live engagement data',
        ],
        benefits: [
          'Improved conversion rates and average order value',
          'Higher engagement and time spent through relevant content',
          'Increased customer retention through personalized experiences',
          'Measurable impact validated through structured A/B testing',
          'Recommendations that keep improving as more data accumulates',
        ],
        process: [
          { title: 'Data & Signal Assessment', description: 'We assess available behavioral and catalog data for personalization.' },
          { title: 'Model Development', description: 'We build and tune recommendation models suited to your use case.' },
          { title: 'Integration & Testing', description: 'We integrate recommendations and validate impact through A/B testing.' },
          { title: 'Optimization', description: 'We continuously tune models based on real engagement outcomes.' },
        ],
      },
      {
        slug: 'computer-vision',
        title: 'Computer Vision',
        shortDescription: 'Image and video analysis for inspection, detection, and automation.',
        heroTagline: 'Teach your systems to see and understand.',
        whatIs:
          'Computer Vision builds models that analyze images and video for object detection, quality inspection, and visual classification, automating tasks that previously required manual visual review.',
        whyNeeded:
          'Manual visual inspection is slow, inconsistent, and difficult to scale across high volumes of images or video. Computer vision models bring speed and consistency to tasks like defect detection, safety monitoring, and content moderation.',
        whatWeProvide: [
          'Object detection and image classification model development',
          'Quality inspection and defect detection systems',
          'Video analytics for safety and operational monitoring',
          'Optical character recognition (OCR) for scanned documents and images',
          'Edge and on-device deployment for real-time inference',
          'Ongoing model retraining as visual conditions evolve',
        ],
        keyFeatures: [
          'Models tuned to your specific visual conditions and equipment',
          'Real-time inference suitable for production environments',
          'Edge deployment options for low-latency requirements',
          'High accuracy on domain-specific visual inspection tasks',
          'Continuous retraining as conditions and products change',
        ],
        benefits: [
          'Faster, more consistent visual inspection than manual review',
          'Reduced defect rates through earlier automated detection',
          'Improved safety monitoring across physical operations',
          'Lower labor cost for high-volume visual review tasks',
          'Scalable visual analysis across multiple sites or cameras',
        ],
        process: [
          { title: 'Use Case & Data Assessment', description: 'We assess available image and video data for the target use case.' },
          { title: 'Model Development', description: 'We train and validate computer vision models against real samples.' },
          { title: 'Deployment Design', description: 'We design deployment, whether cloud, edge, or on-device inference.' },
          { title: 'Monitoring & Retraining', description: 'We monitor accuracy and retrain models as conditions change.' },
        ],
      },
      {
        slug: 'nlp-solutions',
        title: 'NLP Solutions',
        shortDescription: 'Text classification, sentiment analysis, and language understanding.',
        heroTagline: 'Turn unstructured text into structured insight.',
        whatIs:
          'NLP Solutions build natural language processing systems that classify, extract, and interpret meaning from text, support tickets, reviews, contracts, and communications, turning unstructured language into structured, actionable data.',
        whyNeeded:
          'Businesses generate enormous volumes of unstructured text that goes largely unanalyzed. NLP models unlock that data for sentiment tracking, entity extraction, and automated classification at a scale manual review cannot match.',
        whatWeProvide: [
          'Text classification and topic modeling',
          'Sentiment analysis across reviews, support, and social channels',
          'Named entity recognition and information extraction',
          'Language detection and multilingual text processing',
          'Contract and document analysis tooling',
          'Integration with existing analytics and BI platforms',
        ],
        keyFeatures: [
          'Models tuned to your industry-specific terminology',
          'Support for multilingual and mixed-language content',
          'Extraction of structured entities from unstructured text',
          'Real-time sentiment tracking across customer channels',
          'Integration with existing reporting and analytics tools',
        ],
        benefits: [
          'Faster analysis of high-volume customer and text data',
          'Earlier detection of sentiment shifts and emerging issues',
          'Reduced manual effort reviewing contracts and documents',
          'More consistent classification than manual tagging',
          'Structured insight from previously unusable text data',
        ],
        process: [
          { title: 'Use Case Definition', description: 'We identify the text sources and outcomes that matter most.' },
          { title: 'Model Development', description: 'We build and validate NLP models against your actual text data.' },
          { title: 'Integration', description: 'We integrate outputs into dashboards and downstream systems.' },
          { title: 'Monitoring & Tuning', description: 'We monitor accuracy and retune models as language patterns shift.' },
        ],
      },
      {
        slug: 'intelligent-document-processing',
        title: 'Intelligent Document Processing',
        shortDescription: 'Automated extraction and understanding of unstructured documents.',
        heroTagline: 'Documents processed in seconds, not hours.',
        whatIs:
          'Intelligent Document Processing (IDP) automatically reads, classifies, and extracts data from invoices, forms, contracts, and other unstructured documents, replacing manual data entry with accurate, automated extraction.',
        whyNeeded:
          'Manual document processing is slow, error-prone, and does not scale with growing document volumes. IDP handles varied formats and layouts automatically, dramatically cutting processing time and error rates.',
        whatWeProvide: [
          'Document classification and layout understanding',
          'Automated data extraction from invoices, forms, and contracts',
          'Handwriting and scanned document recognition',
          'Validation workflows with human review for exceptions',
          'Integration with ERP, accounting, and workflow systems',
          'Continuous accuracy monitoring and model improvement',
        ],
        keyFeatures: [
          'Handles varied document formats and layouts automatically',
          'High accuracy extraction with built-in exception handling',
          'Human-in-the-loop review for low-confidence extractions',
          'Direct integration with downstream business systems',
          'Scales to high document volumes without added headcount',
        ],
        benefits: [
          'Dramatically faster document processing turnaround',
          'Reduced data entry errors and reprocessing costs',
          'Lower operational cost for high-volume document workflows',
          'Faster downstream processes like invoicing and approvals',
          'A scalable foundation as document volume grows',
        ],
        process: [
          { title: 'Document Inventory', description: 'We assess document types, formats, and volumes to be processed.' },
          { title: 'Model Development', description: 'We build extraction models tuned to your specific document types.' },
          { title: 'Workflow Integration', description: 'We integrate extraction into existing business and approval workflows.' },
          { title: 'Monitoring & Refinement', description: 'We monitor accuracy and refine models as document formats evolve.' },
        ],
      },
      {
        slug: 'ai-workflow-automation',
        title: 'AI Workflow Automation',
        shortDescription: 'End-to-end orchestration of multi-step, AI-driven business workflows.',
        heroTagline: 'Complex workflows, coordinated automatically.',
        whatIs:
          'AI Workflow Automation orchestrates multi-step business processes that span several systems and decision points, using AI to route, prioritize, and execute steps automatically from end to end rather than automating a single isolated task.',
        whyNeeded:
          'Many valuable processes span multiple systems and decision points that simple task automation cannot handle. Full workflow orchestration is what turns isolated automations into a coherent, end-to-end process improvement.',
        whatWeProvide: [
          'End-to-end workflow orchestration design',
          'AI-driven routing, prioritization, and decisioning',
          'Integration across multiple business systems and departments',
          'Exception handling and human-in-the-loop checkpoints',
          'Workflow monitoring dashboards and analytics',
          'Continuous workflow optimization based on performance data',
        ],
        keyFeatures: [
          'Coordination across multiple systems and departments',
          'AI-driven decisioning embedded at each workflow step',
          'Clear checkpoints for human review where it matters',
          'Centralized visibility into workflow performance',
          'Modular design that adapts as processes evolve',
        ],
        benefits: [
          'Faster end-to-end process completion across departments',
          'Reduced manual coordination between disconnected systems',
          'Improved consistency in multi-step decision processes',
          'Clear visibility into where workflows slow down',
          'A foundation that scales to additional workflows over time',
        ],
        process: [
          { title: 'Workflow Mapping', description: 'We map the full multi-step process and its decision points.' },
          { title: 'Orchestration Design', description: 'We design the automation and AI decisioning across every step.' },
          { title: 'Build & Integrate', description: 'We build and integrate the orchestrated workflow across systems.' },
          { title: 'Monitor & Optimize', description: 'We monitor performance and continuously optimize the workflow.' },
        ],
      },
      {
        slug: 'ai-consulting',
        title: 'AI Consulting',
        shortDescription: 'Strategy, readiness assessment, and a practical roadmap for AI adoption.',
        heroTagline: 'A clear, practical path to real AI value.',
        whatIs:
          'AI Consulting provides strategic guidance on where AI can create real business value, assessing data readiness, use case prioritization, and organizational capability, then delivering a practical roadmap rather than generic hype.',
        whyNeeded:
          'Many AI initiatives fail because they chase trends rather than clear business outcomes, or launch without the data and governance foundation needed to succeed. Strategic guidance upfront avoids wasted investment.',
        whatWeProvide: [
          'AI opportunity assessment and use case prioritization',
          'Data and infrastructure readiness evaluation',
          'AI strategy and adoption roadmap development',
          'Build-versus-buy guidance for AI tooling and platforms',
          'Governance, risk, and responsible AI framework design',
          'Executive and team AI literacy workshops',
        ],
        keyFeatures: [
          'Recommendations grounded in your actual data and processes',
          'Clear prioritization of use cases by feasibility and impact',
          'Practical build-versus-buy guidance, not vendor bias',
          'Governance frameworks suited to your risk tolerance',
          'Roadmaps tied to measurable business outcomes',
        ],
        benefits: [
          'Reduced risk of investing in the wrong AI initiatives',
          'A clear, prioritized roadmap instead of scattered pilots',
          'Faster path from strategy to a working, valuable solution',
          'Improved organizational readiness and AI literacy',
          'A defensible, governed approach to enterprise AI adoption',
        ],
        process: [
          { title: 'Readiness Assessment', description: 'We evaluate your data, systems, and organizational AI readiness.' },
          { title: 'Use Case Prioritization', description: 'We identify and rank AI opportunities by feasibility and impact.' },
          { title: 'Roadmap Development', description: 'We build a practical, phased roadmap tied to business outcomes.' },
          { title: 'Execution Support', description: 'We support implementation of prioritized initiatives as they move forward.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────── IT SOLUTIONS ───────────────────────────────────────────────
  {
    slug: 'it-solutions',
    name: 'IT Solutions & Managed Services',
    shortName: 'IT Solutions',
    navLabel: 'IT Solutions',
    tagline: 'Operational excellence across your technology estate',
    description:
      'We deliver infrastructure, managed services, enterprise systems, and digital transformation programs that keep operations running smoothly while positioning the business for what comes next. From help desk support and endpoint management to server virtualization and Microsoft 365, our team keeps your technology estate reliable, secure, and fully supported. It is the day-to-day IT backbone that lets your business focus on growth, not outages.',
    highlights: [
      '24/7 help desk and end-user support',
      'Cloud migration and disaster recovery planning',
      'Network design and endpoint management',
      'Microsoft 365 administration and optimization',
      'Server management and virtualization',
      'Scalable storage and backup solutions',
    ],
    deliveryModel: 'Managed IT Services',
    supportBadge: '24/7 Help Desk',
    icon: 'Server',
    stats: [
      { label: 'Infrastructure uptime', value: '99.9%' },
      { label: 'Help desk response', value: '<15 min' },
      { label: 'Enterprise systems managed', value: '200+' },
    ],
    questionnaire: [
      { question: 'What is your primary IT need right now?', type: 'select', options: ['Infrastructure modernization', 'Ongoing managed services', 'Enterprise system implementation', 'Digital transformation strategy', 'Day-to-day IT operations support'] },
      { question: 'How is IT currently managed in your organization?', type: 'select', options: ['Fully in-house team', 'Outsourced/managed provider', 'Mixed in-house and outsourced', 'No formal IT function'] },
      { question: 'Which systems or platforms are involved?', type: 'text', placeholder: 'e.g. AWS, Azure, on-prem data center, ERP, CRM' },
      { question: 'What is driving this initiative?', type: 'textarea', placeholder: 'e.g. cost reduction, scaling, compliance, outdated systems' },
      { question: 'What is your expected budget range for this engagement?', type: 'select', options: ['Under $25k', '$25k - $100k', '$100k - $500k', '$500k+', 'Not yet determined'] },
    ],
    subServices: [
      {
        slug: 'it-infrastructure',
        title: 'IT Infrastructure',
        shortDescription: 'Data center virtualization, network optimization, and hybrid architecture.',
        heroTagline: 'A technology foundation built to scale.',
        whatIs:
          'IT Infrastructure services design and manage the core technology foundation your business runs on, data center virtualization, hybrid architecture, and network optimization built for reliability and growth.',
        whyNeeded:
          'Outdated or poorly architected infrastructure creates performance bottlenecks, scaling limitations, and rising operational costs. As businesses grow, infrastructure decisions made years ago often become the constraint on what is possible today.',
        whatWeProvide: [
          'Data center virtualization solutions',
          'Hybrid IT architecture design',
          'Network design, wiring, and optimization',
          'Infrastructure capacity planning and scaling strategy',
          'Server and workstation provisioning',
          'Infrastructure documentation and operational runbooks',
        ],
        keyFeatures: [
          'Architecture designed for current and future scale',
          'Virtualization that maximizes existing hardware investment',
          'Hybrid designs balancing control, cost, and flexibility',
          'Network optimization for performance and reliability',
          'Documented runbooks for consistent day-to-day operations',
        ],
        benefits: [
          'Improved system performance and reduced downtime',
          'Lower infrastructure costs through optimization and virtualization',
          'A scalable foundation that supports business growth',
          'Reduced risk from outdated or unsupported infrastructure',
          'Greater flexibility to adapt infrastructure as needs change',
        ],
        process: [
          { title: 'Infrastructure Audit', description: 'We assess current infrastructure performance, capacity, and risk.' },
          { title: 'Architecture Design', description: 'We design a target infrastructure architecture aligned to business goals.' },
          { title: 'Implementation', description: 'We execute upgrades and rollouts with minimal business disruption.' },
          { title: 'Optimization', description: 'We continuously tune performance, cost, and capacity post-implementation.' },
        ],
      },
      {
        slug: 'managed-it-services',
        title: 'Managed IT Services',
        shortDescription: 'Ongoing operational support, patching, and proactive monitoring.',
        heroTagline: 'Your technology, continuously managed and supported.',
        whatIs:
          'Managed IT Services provide ongoing operational support for your technology environment, proactive monitoring, patch management, and vendor coordination, so systems stay reliable without consuming internal resources.',
        whyNeeded:
          'Maintaining consistent technical oversight and infrastructure monitoring in-house is costly and difficult to staff. Managed services deliver enterprise-grade reliability and responsiveness at a predictable, scalable cost.',
        whatWeProvide: [
          'Proactive infrastructure monitoring and alerting',
          'Patch management and system maintenance',
          'Vendor and software license management coordination',
          'IT asset lifecycle management',
          'Regular reporting on system health and performance',
          'Escalation and incident management coordination',
        ],
        keyFeatures: [
          'Proactive monitoring that catches issues before users notice',
          'Predictable, scalable monthly cost structure',
          'Defined service level agreements (SLAs) for response times',
          'Single point of accountability across managed systems',
          'Regular reporting tailored to leadership visibility needs',
        ],
        benefits: [
          'Reduced downtime through proactive issue detection',
          'Predictable IT operations cost versus building in-house capacity',
          'Faster issue resolution with dedicated support coverage',
          'Internal staff freed to focus on strategic initiatives',
          'Consistent, documented service quality over time',
        ],
        process: [
          { title: 'Environment Onboarding', description: 'We document and onboard your systems into our monitoring platform.' },
          { title: 'SLA & Process Definition', description: 'We define response times, escalation paths, and support processes.' },
          { title: 'Ongoing Operations', description: 'We provide continuous monitoring, support, and proactive maintenance.' },
          { title: 'Reporting & Review', description: 'We deliver regular performance reporting and service review meetings.' },
        ],
      },
      {
        slug: 'help-desk-support',
        title: 'Help Desk Support',
        shortDescription: '24/7 end-user support with fast, reliable ticket resolution.',
        heroTagline: 'Help is always one call or ticket away.',
        whatIs:
          'Help Desk Support provides round-the-clock technical assistance for your employees, resolving hardware, software, and access issues quickly through phone, chat, or ticketing, so your team stays productive.',
        whyNeeded:
          'Unresolved technical issues cost employees time every day, and staffing a full internal help desk around the clock is expensive. Outsourced help desk support delivers fast, consistent resolution at a fraction of the cost.',
        whatWeProvide: [
          '24/7 phone, chat, and ticketing-based support',
          'Tiered escalation for complex technical issues',
          'Password resets, access requests, and account management',
          'Hardware and software troubleshooting',
          'Knowledge base and self-service resource development',
          'Monthly reporting on ticket volume and resolution times',
        ],
        keyFeatures: [
          'Round-the-clock coverage across time zones',
          'Fast first-response and resolution time targets',
          'Clear tiered escalation for specialized issues',
          'Self-service resources that reduce repeat tickets',
          'Transparent reporting on support performance',
        ],
        benefits: [
          'Faster resolution of everyday technical issues',
          'Reduced lost productivity from unresolved IT problems',
          'Predictable support cost versus an internal help desk team',
          'Improved employee satisfaction with IT responsiveness',
          'Clear visibility into recurring issues worth fixing at the root',
        ],
        process: [
          { title: 'Onboarding & Documentation', description: 'We document your environment, systems, and support policies.' },
          { title: 'Support Launch', description: 'We stand up ticketing, phone, and chat support channels.' },
          { title: 'Ongoing Support', description: 'We provide continuous coverage with defined response targets.' },
          { title: 'Reporting & Improvement', description: 'We report on trends and recommend fixes for recurring issues.' },
        ],
      },
      {
        slug: 'it-cloud-migration',
        title: 'Cloud Migration',
        shortDescription: 'Moving on-premises workloads and workstations to the cloud, safely.',
        heroTagline: 'Move to the cloud without the downtime.',
        whatIs:
          'Cloud Migration for IT operations moves on-premises servers, file shares, and workstation environments to cloud platforms, reducing hardware dependency while improving accessibility and disaster resilience.',
        whyNeeded:
          'On-premises infrastructure carries ongoing hardware costs, physical security requirements, and single points of failure that cloud environments are built to eliminate, provided the migration itself is carefully planned.',
        whatWeProvide: [
          'On-premises to cloud workload migration planning',
          'File server and shared drive migration',
          'Workstation and desktop virtualization migration',
          'Identity and access migration to cloud directories',
          'Post-migration performance and cost validation',
          'Staff training on new cloud-based workflows',
        ],
        keyFeatures: [
          'Migration plans that minimize business disruption',
          'Validated data integrity throughout the transition',
          'Reduced dependency on aging on-premises hardware',
          'Improved remote access and business continuity',
          'Clear cost comparison before and after migration',
        ],
        benefits: [
          'Reduced hardware and maintenance costs over time',
          'Improved remote access and workforce flexibility',
          'Stronger disaster resilience versus on-premises-only systems',
          'A clear, validated path with minimal operational disruption',
          'A foundation for further IT modernization initiatives',
        ],
        process: [
          { title: 'Environment Assessment', description: 'We inventory current systems, dependencies, and migration risk.' },
          { title: 'Migration Planning', description: 'We build a phased plan to minimize disruption during the move.' },
          { title: 'Execution', description: 'We execute the migration with validation at every stage.' },
          { title: 'Post-Migration Support', description: 'We validate performance, cost, and provide staff training.' },
        ],
      },
      {
        slug: 'backup-disaster-recovery-it',
        title: 'Backup & Disaster Recovery',
        shortDescription: 'Tested backup systems and recovery plans that protect business continuity.',
        heroTagline: 'Recover fast when the unexpected happens.',
        whatIs:
          'Backup & Disaster Recovery designs and tests the backup systems and recovery procedures that protect your business from data loss, outages, and disasters, so operations can resume quickly when something goes wrong.',
        whyNeeded:
          'Untested backups routinely fail exactly when they are needed most. A properly designed and regularly tested disaster recovery plan is what actually determines how quickly your business recovers from an outage.',
        whatWeProvide: [
          'Backup strategy design across on-premises and cloud systems',
          'Disaster recovery (DR) planning and documentation',
          'Regular backup restoration testing and validation',
          'Recovery time and recovery point objective (RTO/RPO) planning',
          'Ransomware-resilient, immutable backup configuration',
          'Post-incident recovery support',
        ],
        keyFeatures: [
          'Regularly tested backup and recovery procedures',
          'Clear recovery time and recovery point targets',
          'Immutable backups resilient against ransomware',
          'Documented disaster recovery runbooks',
          'Coverage across on-premises, cloud, and hybrid environments',
        ],
        benefits: [
          'Reduced risk of data loss through tested recovery procedures',
          'Faster recovery time in the event of an outage or incident',
          'Stronger resilience against ransomware and data corruption',
          'Confidence that backups will actually work when needed',
          'Clear, documented recovery plans your team can execute',
        ],
        process: [
          { title: 'Risk & Requirements Assessment', description: 'We assess data criticality and define recovery objectives.' },
          { title: 'Backup & DR Design', description: 'We design a backup and disaster recovery strategy to meet those objectives.' },
          { title: 'Implementation & Testing', description: 'We implement backups and run regular restoration tests.' },
          { title: 'Ongoing Validation', description: 'We continue testing and refining the plan as systems change.' },
        ],
      },
      {
        slug: 'network-design',
        title: 'Network Design',
        shortDescription: 'Reliable, secure network architecture for offices and data centers.',
        heroTagline: 'A network built to stay up, and stay secure.',
        whatIs:
          'Network Design plans and implements the wired and wireless network architecture that connects your offices, data centers, and remote sites, built for reliability, security, and future growth.',
        whyNeeded:
          'Poorly designed networks create bottlenecks, security gaps, and outages that ripple across every application and user relying on them. A properly designed network is the foundation every other IT system depends on.',
        whatWeProvide: [
          'Wired and wireless network architecture design',
          'Site-to-site and remote connectivity planning',
          'Network segmentation and security zoning',
          'Bandwidth planning and quality-of-service configuration',
          'Network hardware selection and procurement guidance',
          'Documentation and network diagramming',
        ],
        keyFeatures: [
          'Architecture designed for current and future capacity',
          'Segmentation that limits the blast radius of any incident',
          'Reliable connectivity across multiple sites and remote users',
          'Vendor-neutral hardware recommendations',
          'Clear network documentation for ongoing management',
        ],
        benefits: [
          'Improved network reliability and reduced outages',
          'Stronger security posture through proper segmentation',
          'Better performance for bandwidth-intensive applications',
          'Easier troubleshooting with clear network documentation',
          'A network built to support future office and staff growth',
        ],
        process: [
          { title: 'Site & Requirements Survey', description: 'We assess current network conditions and future requirements.' },
          { title: 'Architecture Design', description: 'We design the network topology, segmentation, and connectivity plan.' },
          { title: 'Implementation', description: 'We implement the design with minimal disruption to daily operations.' },
          { title: 'Validation & Documentation', description: 'We test performance and deliver clear network documentation.' },
        ],
      },
      {
        slug: 'it-consulting',
        title: 'IT Consulting',
        shortDescription: 'Technology strategy and modernization roadmaps grounded in business goals.',
        heroTagline: 'A clear path from where you are to where you need to be.',
        whatIs:
          'IT Consulting combines technology strategy advisory, infrastructure roadmap development, and vendor evaluation to help organizations make confident, well-informed IT investment decisions.',
        whyNeeded:
          'Technology investments fail to deliver value when they are not paired with clear strategy grounded in actual business goals. Independent, experienced guidance helps avoid costly missteps before money is spent.',
        whatWeProvide: [
          'Technology strategy and IT roadmap development',
          'Vendor and platform evaluation and selection support',
          'IT budget planning and cost optimization guidance',
          'Risk and compliance advisory for IT decisions',
          'Organizational IT capability assessments',
          'Ongoing strategic advisory retainer options',
        ],
        keyFeatures: [
          'Vendor-neutral, independent technology recommendations',
          'Roadmaps grounded in business outcomes, not technology trends',
          'Clear cost and risk analysis for major IT decisions',
          'Assessments tailored to your actual organizational maturity',
          'Ongoing advisory relationship, not a one-time report',
        ],
        benefits: [
          'More confident, better-informed IT investment decisions',
          'Reduced risk of costly technology missteps',
          'Clearer alignment between IT spend and business priorities',
          'Access to experienced strategic guidance without a full-time hire',
          'A defined roadmap the whole organization can align around',
        ],
        process: [
          { title: 'Current State Assessment', description: 'We assess your current technology, processes, and constraints.' },
          { title: 'Strategy Development', description: 'We build a roadmap and recommendations tied to business goals.' },
          { title: 'Vendor & Investment Guidance', description: 'We support evaluation and decision-making on key investments.' },
          { title: 'Ongoing Advisory', description: 'We remain available for ongoing strategic guidance as needs evolve.' },
        ],
      },
      {
        slug: 'endpoint-management',
        title: 'Endpoint Management',
        shortDescription: 'Centralized management, patching, and security for every device.',
        heroTagline: 'Every device managed, patched, and secure.',
        whatIs:
          'Endpoint Management centrally manages, patches, and secures every laptop, desktop, and mobile device across your organization, ensuring consistent configuration and reducing the attack surface created by unmanaged endpoints.',
        whyNeeded:
          'Unmanaged or inconsistently configured devices are one of the most common entry points for security incidents. Centralized endpoint management enforces consistent patching, configuration, and security policy at scale.',
        whatWeProvide: [
          'Centralized device enrollment and configuration management',
          'Automated patch and update deployment',
          'Endpoint security policy enforcement',
          'Remote wipe and lost-device management',
          'Software deployment and license compliance tracking',
          'Device health and compliance reporting',
        ],
        keyFeatures: [
          'Consistent configuration enforced across every device',
          'Automated patching that closes vulnerabilities quickly',
          'Remote management for distributed and hybrid teams',
          'Clear compliance reporting for audits and leadership',
          'Fast response for lost or compromised devices',
        ],
        benefits: [
          'Reduced security risk from unpatched or misconfigured devices',
          'Faster, more consistent software rollout across the organization',
          'Improved compliance posture for audits and regulations',
          'Reduced IT burden managing devices individually',
          'Fast containment when a device is lost or compromised',
        ],
        process: [
          { title: 'Device Inventory', description: 'We inventory current devices and configuration inconsistencies.' },
          { title: 'Policy & Enrollment', description: 'We define management policies and enroll devices into the platform.' },
          { title: 'Deployment', description: 'We roll out patching, configuration, and security policy enforcement.' },
          { title: 'Ongoing Management', description: 'We provide continuous monitoring and compliance reporting.' },
        ],
      },
      {
        slug: 'microsoft-365-solutions',
        title: 'Microsoft 365 Solutions',
        shortDescription: 'Deployment, security, and optimization of your Microsoft 365 environment.',
        heroTagline: 'Get the full value out of Microsoft 365.',
        whatIs:
          'Microsoft 365 Solutions cover the deployment, configuration, security hardening, and ongoing administration of your Microsoft 365 environment, Exchange, SharePoint, Teams, and OneDrive, so your team gets full value from the platform.',
        whyNeeded:
          'Most organizations use only a fraction of what Microsoft 365 offers, while leaving default security settings that create real risk. Proper configuration unlocks more value from a tool you are already paying for.',
        whatWeProvide: [
          'Microsoft 365 tenant setup and migration',
          'Exchange, SharePoint, Teams, and OneDrive configuration',
          'Security hardening including MFA and conditional access',
          'License optimization and cost review',
          'Data governance and retention policy configuration',
          'User training and adoption support',
        ],
        keyFeatures: [
          'Security configuration aligned to Microsoft best practices',
          'License usage optimized to avoid overspend',
          'Governance policies that reduce data sprawl and risk',
          'Full utilization of collaboration tools like Teams and SharePoint',
          'Training that drives real user adoption',
        ],
        benefits: [
          'Stronger security posture across email and collaboration tools',
          'Reduced licensing costs through usage optimization',
          'Improved collaboration through properly configured tools',
          'Better data governance and compliance readiness',
          'Higher return on your existing Microsoft 365 investment',
        ],
        process: [
          { title: 'Tenant Assessment', description: 'We review your current configuration, licensing, and security settings.' },
          { title: 'Configuration & Hardening', description: 'We configure security, governance, and collaboration settings.' },
          { title: 'Migration & Rollout', description: 'We migrate data and roll out changes with minimal disruption.' },
          { title: 'Training & Support', description: 'We train users and provide ongoing administration support.' },
        ],
      },
      {
        slug: 'server-management',
        title: 'Server Management',
        shortDescription: 'Proactive administration, patching, and performance tuning for servers.',
        heroTagline: 'Servers that stay fast, patched, and dependable.',
        whatIs:
          'Server Management provides ongoing administration of your physical and virtual servers, patching, performance tuning, monitoring, and lifecycle planning, so critical systems stay reliable without demanding constant internal attention.',
        whyNeeded:
          'Servers that are not proactively managed accumulate missed patches, performance issues, and aging hardware risk that eventually surface as outages. Ongoing management catches these issues before they impact the business.',
        whatWeProvide: [
          'Windows and Linux server administration',
          'Patch management and update scheduling',
          'Performance monitoring and tuning',
          'Server lifecycle and hardware refresh planning',
          'Backup verification and health checks',
          'Documentation of server configurations and dependencies',
        ],
        keyFeatures: [
          'Proactive patching on a defined, tested schedule',
          'Continuous performance monitoring and alerting',
          'Clear lifecycle planning to avoid unsupported hardware',
          'Documented configurations for faster troubleshooting',
          'Regular health checks catching issues before they escalate',
        ],
        benefits: [
          'Reduced server downtime and performance degradation',
          'Lower risk from unpatched vulnerabilities',
          'Predictable hardware refresh planning versus reactive replacement',
          'Faster troubleshooting through clear documentation',
          'Reliable, consistently performing critical infrastructure',
        ],
        process: [
          { title: 'Server Audit', description: 'We assess current server health, patch levels, and configuration.' },
          { title: 'Management Plan', description: 'We define patching schedules and monitoring thresholds.' },
          { title: 'Ongoing Administration', description: 'We provide continuous administration and performance tuning.' },
          { title: 'Lifecycle Planning', description: 'We plan hardware refreshes ahead of end-of-support deadlines.' },
        ],
      },
      {
        slug: 'virtualization',
        title: 'Virtualization',
        shortDescription: 'Server and desktop virtualization that reduces cost and improves flexibility.',
        heroTagline: 'Do more with the hardware you already own.',
        whatIs:
          'Virtualization consolidates physical servers and desktops into virtual environments, reducing hardware footprint, improving disaster recovery, and giving your team the flexibility to provision new systems in minutes rather than weeks.',
        whyNeeded:
          'Running one application per physical server wastes capacity and increases hardware and energy costs. Virtualization lets you run more workloads on less hardware while improving resilience and provisioning speed.',
        whatWeProvide: [
          'Server virtualization platform design and implementation',
          'Virtual desktop infrastructure (VDI) deployment',
          'Virtual machine migration and consolidation',
          'High-availability and failover cluster configuration',
          'Storage and resource allocation optimization',
          'Ongoing virtual environment management',
        ],
        keyFeatures: [
          'Consolidated infrastructure reducing hardware footprint',
          'Rapid provisioning of new virtual machines and desktops',
          'Built-in high availability and failover protection',
          'Optimized resource allocation across virtual workloads',
          'Simplified disaster recovery through virtual machine snapshots',
        ],
        benefits: [
          'Lower hardware and energy costs through consolidation',
          'Faster provisioning of new systems and environments',
          'Improved resilience through high-availability configurations',
          'Simplified backup and disaster recovery processes',
          'Greater flexibility to scale infrastructure up or down',
        ],
        process: [
          { title: 'Infrastructure Assessment', description: 'We assess current workloads and virtualization opportunity.' },
          { title: 'Platform Design', description: 'We design the virtualization platform and resource allocation.' },
          { title: 'Migration & Consolidation', description: 'We migrate workloads with minimal disruption.' },
          { title: 'Optimization & Support', description: 'We tune performance and provide ongoing management.' },
        ],
      },
      {
        slug: 'storage-solutions',
        title: 'Storage Solutions',
        shortDescription: 'Scalable, secure storage architecture for growing data volumes.',
        heroTagline: 'Storage that scales as fast as your data does.',
        whatIs:
          'Storage Solutions design and implement the storage architecture, on-premises, cloud, or hybrid, that holds your business data reliably and securely, with the capacity and performance to keep pace with growth.',
        whyNeeded:
          'Data volumes grow continuously, and storage systems that are not properly architected for capacity, performance, and redundancy become a source of outages and rising costs as they age.',
        whatWeProvide: [
          'Storage architecture design across on-premises and cloud',
          'Storage area network (SAN) and network-attached storage (NAS) implementation',
          'Data tiering and lifecycle management for cost efficiency',
          'Redundancy and replication configuration',
          'Capacity planning and growth forecasting',
          'Storage security and access control configuration',
        ],
        keyFeatures: [
          'Architecture sized for current and forecasted data growth',
          'Data tiering that balances performance and storage cost',
          'Built-in redundancy protecting against hardware failure',
          'Secure access controls over sensitive stored data',
          'Clear capacity forecasting to avoid emergency expansions',
        ],
        benefits: [
          'Reliable storage capacity that scales with data growth',
          'Reduced storage costs through intelligent data tiering',
          'Improved data protection through redundancy and replication',
          'Fewer emergency capacity expansions through proactive planning',
          'Stronger security over where and how data is stored',
        ],
        process: [
          { title: 'Storage Assessment', description: 'We assess current storage utilization, performance, and growth trends.' },
          { title: 'Architecture Design', description: 'We design a storage architecture matched to capacity and performance needs.' },
          { title: 'Implementation', description: 'We implement and migrate data with validated integrity.' },
          { title: 'Ongoing Capacity Management', description: 'We monitor and plan capacity ahead of future growth.' },
        ],
      },
    ],
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    shortName: 'Cloud Solutions',
    navLabel: 'Cloud Solutions',
    tagline: 'Enterprise cloud platforms built for scale, security, and cost control',
    description:
      'We design, migrate, secure, and operate cloud environments across AWS, Azure, and Google Cloud, giving enterprises a resilient, well-governed foundation to build on without runaway cost or operational risk. From migration and multi-cloud management to Kubernetes, DevOps, and disaster recovery, our cloud architects handle the full lifecycle. Every environment is built with cost governance and security controls from day one.',
    highlights: [
      'AWS, Azure, and Google Cloud migration',
      'Multi-cloud management and cost optimization',
      'Kubernetes and containerization',
      'DevOps and CI/CD pipeline automation',
      'Disaster recovery and continuous monitoring',
      'Infrastructure as Code for repeatable deployments',
    ],
    deliveryModel: 'Managed Cloud & DevOps',
    supportBadge: '24/7 Cloud Monitoring',
    icon: 'Cloud',
    stats: [
      { label: 'Cloud platforms supported', value: '3 major' },
      { label: 'Average cost reduction', value: '20-35%' },
      { label: 'Migration success rate', value: '99%' },
    ],
    questionnaire: [
      { question: 'What best describes your current cloud environment?', type: 'select', options: ['Fully on-premises', 'Single cloud provider', 'Multi-cloud', 'Hybrid cloud'] },
      { question: 'Which cloud platforms are you using or considering?', type: 'text', placeholder: 'e.g. AWS, Azure, Google Cloud' },
      { question: 'What is your primary cloud objective right now?', type: 'select', options: ['Migrate to the cloud', 'Reduce cloud costs', 'Improve cloud security', 'Modernize infrastructure', 'Improve reliability'] },
      { question: 'Do you currently use containers or Kubernetes?', type: 'select', options: ['Yes, in production', 'Yes, experimenting', 'No, but interested', 'Not applicable'] },
      { question: 'How is infrastructure provisioned today?', type: 'select', options: ['Manually', 'Partially automated', 'Fully Infrastructure as Code', 'Unsure'] },
      { question: 'What outcome matters most to your organization right now?', type: 'textarea', placeholder: 'e.g. cutting cloud spend, passing a compliance audit, scaling for growth' },
    ],
    subServices: [
      {
        slug: 'cloud-migration',
        title: 'Cloud Migration',
        shortDescription: 'Structured migration of applications, data, and infrastructure to the cloud with minimal disruption.',
        heroTagline: 'Move to the cloud without the downtime or the guesswork.',
        whatIs:
          'Cloud Migration is the structured process of moving applications, data, and infrastructure from on-premises or legacy environments into a cloud platform such as AWS, Azure, or Google Cloud. It is built for organizations replatforming aging data centers, consolidating after an acquisition, or seeking the elasticity and reach the cloud provides. We plan and execute migrations using proven patterns, rehost, replatform, or refactor, chosen based on each workload rather than a one-size-fits-all approach.',
        whyNeeded:
          'Legacy infrastructure is expensive to maintain, difficult to scale, and increasingly hard to secure and staff for. Organizations that delay migration face rising hardware costs, limited disaster recovery options, and growing compliance exposure, while migrations run without a clear plan frequently result in downtime, data loss, or budget overruns.',
        whatWeProvide: [
          'Workload discovery, dependency mapping, and migration readiness assessment',
          'Migration strategy selection: rehost, replatform, or refactor per application',
          'Data migration with validation and integrity checks',
          'Phased cutover planning to minimize business disruption',
          'Post-migration performance tuning and cost validation',
          'Rollback planning for high-risk workloads',
        ],
        keyFeatures: [
          'Application dependency mapping before any migration begins',
          'Workload-specific migration strategy, not a blanket lift-and-shift',
          'Minimal-downtime cutover planning',
          'Data integrity verification at every migration stage',
          'Post-migration cost and performance validation',
        ],
        benefits: [
          'Reduced infrastructure and data center overhead',
          'Improved scalability and elasticity for growth',
          'Stronger disaster recovery posture',
          'Lower long-term operating costs',
          'A modern foundation for future application development',
        ],
        process: [
          { title: 'Assessment', description: 'We inventory workloads, dependencies, and data to build a complete migration readiness picture.' },
          { title: 'Strategy & Planning', description: 'We select the right migration pattern per workload and define a phased cutover plan.' },
          { title: 'Implementation', description: 'We execute the migration in controlled phases, validating data and functionality at each step.' },
          { title: 'Optimization & Support', description: 'We tune performance and cost post-migration and provide ongoing support as needed.' },
        ],
      },
      {
        slug: 'cloud-infrastructure',
        title: 'Cloud Infrastructure',
        shortDescription: 'Scalable, well-architected cloud infrastructure designed for reliability and growth.',
        heroTagline: 'A cloud foundation engineered to scale with you.',
        whatIs:
          'Cloud Infrastructure services cover the design and build-out of the compute, networking, and storage foundation your applications run on, architected according to cloud provider best practices for reliability, security, and cost efficiency. This is for organizations building new cloud environments or restructuring existing ones that have grown without a clear architecture.',
        whyNeeded:
          'Cloud environments built ad hoc, one resource at a time, tend to accumulate inconsistent networking, unclear ownership, and avoidable single points of failure. Without a well-architected foundation, organizations face unpredictable costs, difficulty scaling, and infrastructure that becomes harder to secure and operate over time.',
        whatWeProvide: [
          'Landing zone and account/subscription architecture design',
          'Virtual networking, subnetting, and connectivity design',
          'High-availability and fault-tolerant infrastructure patterns',
          'Compute and storage sizing aligned to workload requirements',
          'Infrastructure documentation and architecture diagrams',
          'Well-Architected Framework reviews against AWS, Azure, or Google Cloud standards',
        ],
        keyFeatures: [
          'Landing zone design aligned to provider best practices',
          'Fault-tolerant, multi-availability-zone architecture',
          'Right-sized compute and storage from day one',
          'Clear account and resource ownership structure',
          'Documented, repeatable architecture patterns',
        ],
        benefits: [
          'A reliable, scalable foundation for every future workload',
          'Reduced risk of outages from single points of failure',
          'Lower costs through right-sized resources',
          'Easier onboarding of new teams and workloads',
          'Infrastructure that passes architecture and security reviews',
        ],
        process: [
          { title: 'Assessment', description: 'We review current or planned workloads and define architecture requirements.' },
          { title: 'Strategy & Planning', description: 'We design the landing zone, networking, and resource architecture.' },
          { title: 'Implementation', description: 'We build the infrastructure using repeatable, documented patterns.' },
          { title: 'Optimization & Support', description: 'We validate the build against the Well-Architected Framework and refine over time.' },
        ],
      },
      {
        slug: 'multi-cloud-management',
        title: 'Multi-Cloud Management',
        shortDescription: 'Unified visibility, governance, and operations across multiple cloud providers.',
        heroTagline: 'One consistent operating model across every cloud you use.',
        whatIs:
          'Multi-Cloud Management provides a unified operating model, tooling, and governance layer for organizations running workloads across AWS, Azure, and Google Cloud simultaneously. It covers centralized visibility, consistent policy enforcement, and cost tracking across providers, rather than treating each cloud as an isolated silo.',
        whyNeeded:
          'Multi-cloud environments often emerge organically, one team picks AWS, another standardizes on Azure, and the result is inconsistent security policies, duplicated tooling, and no single view of cost or risk. Without unified management, multi-cloud strategies increase complexity faster than they deliver flexibility.',
        whatWeProvide: [
          'Centralized dashboards for cost, performance, and security across providers',
          'Consistent identity, tagging, and governance policies across clouds',
          'Cross-cloud networking and connectivity design',
          'Unified monitoring and alerting across environments',
          'Vendor-neutral automation and tooling standardization',
          'Multi-cloud disaster recovery strategy',
        ],
        keyFeatures: [
          'Single-pane-of-glass visibility across AWS, Azure, and Google Cloud',
          'Consistent governance and tagging policy enforcement',
          'Cross-cloud cost comparison and optimization',
          'Unified identity and access approach across providers',
          'Vendor-neutral automation reducing platform lock-in',
        ],
        benefits: [
          'A single, coherent view of cost, risk, and performance',
          'Reduced platform lock-in and negotiating leverage with vendors',
          'Consistent security posture regardless of provider',
          'Simplified operations for teams managing multiple clouds',
          'Improved resilience through cross-cloud redundancy options',
        ],
        process: [
          { title: 'Assessment', description: 'We inventory workloads, tooling, and governance gaps across every cloud in use.' },
          { title: 'Strategy & Planning', description: 'We design a unified governance, tagging, and monitoring model.' },
          { title: 'Implementation', description: 'We deploy centralized tooling and consistent policies across providers.' },
          { title: 'Optimization & Support', description: 'We continuously refine cross-cloud cost and operational efficiency.' },
        ],
      },
      {
        slug: 'cloud-security',
        title: 'Cloud Security',
        shortDescription: 'Cloud-native security controls, posture management, and compliance for every environment.',
        heroTagline: 'Security built into your cloud, not bolted on after the fact.',
        whatIs:
          'Cloud Security within our Cloud Solutions practice covers the configuration, monitoring, and hardening of your cloud environments against misconfiguration, unauthorized access, and compliance drift. It combines cloud security posture management, workload protection, and identity controls tailored to each provider\u2019s shared responsibility model.',
        whyNeeded:
          'Cloud misconfigurations remain one of the most common causes of enterprise data exposure. As environments scale across accounts, subscriptions, and services, manually tracking security posture becomes impractical, leaving gaps that attackers actively scan for and regulators penalize.',
        whatWeProvide: [
          'Cloud Security Posture Management (CSPM) implementation',
          'Workload and container security hardening',
          'Cloud-native identity and permissions review',
          'Continuous compliance monitoring against frameworks like CIS and SOC 2',
          'Network security group and firewall policy design',
          'Incident response playbooks specific to cloud environments',
        ],
        keyFeatures: [
          'Continuous posture monitoring across every cloud account',
          'Automated misconfiguration detection and remediation guidance',
          'Least-privilege identity and access policies',
          'Compliance mapping to major regulatory frameworks',
          'Cloud-specific incident response playbooks',
        ],
        benefits: [
          'Significantly reduced risk of cloud data exposure',
          'Continuous, audit-ready compliance posture',
          'Faster detection and remediation of misconfigurations',
          'Consistent security policy across every account and subscription',
          'Greater confidence when scaling cloud footprint',
        ],
        process: [
          { title: 'Assessment', description: 'We audit current cloud configurations, identities, and compliance posture.' },
          { title: 'Strategy & Planning', description: 'We design a security and governance model aligned to your risk tolerance.' },
          { title: 'Implementation', description: 'We deploy posture management, hardening, and identity controls.' },
          { title: 'Optimization & Support', description: 'We monitor continuously and refine policies as your environment evolves.' },
        ],
      },
      {
        slug: 'devops-cicd',
        title: 'DevOps & CI/CD',
        shortDescription: 'Automated build, test, and deployment pipelines that ship software safely and fast.',
        heroTagline: 'Ship reliably, every time, without manual bottlenecks.',
        whatIs:
          'DevOps & CI/CD services design and implement automated pipelines that build, test, and deploy your software continuously, replacing manual, error-prone release processes. This spans pipeline architecture, environment management, and the cultural and process changes that make continuous delivery sustainable.',
        whyNeeded:
          'Manual deployment processes slow releases, introduce human error, and make rollbacks stressful and risky. As teams and codebases grow, the absence of automated testing and deployment pipelines becomes a direct bottleneck to how fast an organization can safely ship.',
        whatWeProvide: [
          'CI/CD pipeline design and implementation',
          'Automated testing integration within the delivery pipeline',
          'Environment provisioning and configuration management',
          'Blue-green and canary deployment strategies',
          'Release automation and rollback procedures',
          'Pipeline security and secrets management',
        ],
        keyFeatures: [
          'Fully automated build, test, and deployment pipelines',
          'Safe deployment strategies including canary and blue-green releases',
          'Automated rollback on failed deployments',
          'Integrated security scanning within the pipeline',
          'Consistent environments from development through production',
        ],
        benefits: [
          'Faster, more frequent, and safer releases',
          'Reduced deployment failures and rollback incidents',
          'Shorter feedback loops for development teams',
          'Improved consistency across environments',
          'Lower operational overhead from manual release work',
        ],
        process: [
          { title: 'Assessment', description: 'We review current release processes, tooling, and pain points.' },
          { title: 'Strategy & Planning', description: 'We design pipeline architecture and deployment strategy for your stack.' },
          { title: 'Implementation', description: 'We build and integrate automated CI/CD pipelines into your workflow.' },
          { title: 'Optimization & Support', description: 'We refine pipeline speed, reliability, and coverage over time.' },
        ],
      },
      {
        slug: 'kubernetes-containerization',
        title: 'Kubernetes & Containerization',
        shortDescription: 'Container platform design, Kubernetes deployment, and cluster operations at scale.',
        heroTagline: 'Run containerized workloads with confidence, at any scale.',
        whatIs:
          'Kubernetes & Containerization services cover the design, deployment, and ongoing operation of containerized applications, from initial Dockerization through production-grade Kubernetes clusters. We help organizations adopt containers without inheriting unnecessary operational complexity.',
        whyNeeded:
          'Containers and Kubernetes offer real advantages in portability and scalability, but misconfigured clusters introduce security gaps, resource waste, and reliability problems that are difficult to diagnose without deep platform expertise. Many organizations adopt Kubernetes before they have the operational practices to run it safely.',
        whatWeProvide: [
          'Application containerization and Docker image optimization',
          'Kubernetes cluster architecture and deployment',
          'Helm chart and manifest development',
          'Cluster autoscaling and resource optimization',
          'Container security scanning and runtime protection',
          'Cluster monitoring, logging, and alerting setup',
        ],
        keyFeatures: [
          'Production-grade Kubernetes cluster architecture',
          'Optimized container images for faster deployment',
          'Autoscaling configured for real workload patterns',
          'Integrated container security scanning',
          'Full observability across clusters and workloads',
        ],
        benefits: [
          'Improved application portability and consistency',
          'Efficient resource utilization and lower compute costs',
          'Faster scaling in response to demand',
          'Reduced operational risk from misconfigured clusters',
          'A platform ready to support microservices growth',
        ],
        process: [
          { title: 'Assessment', description: 'We evaluate current applications and containerization readiness.' },
          { title: 'Strategy & Planning', description: 'We design cluster architecture and container strategy.' },
          { title: 'Implementation', description: 'We containerize applications and deploy production-ready clusters.' },
          { title: 'Optimization & Support', description: 'We tune autoscaling, cost, and reliability on an ongoing basis.' },
        ],
      },
      {
        slug: 'serverless-solutions',
        title: 'Serverless Solutions',
        shortDescription: 'Event-driven, serverless architectures that scale automatically and reduce operational overhead.',
        heroTagline: 'Build without managing servers, and pay only for what runs.',
        whatIs:
          'Serverless Solutions design and build applications using managed, event-driven compute services such as AWS Lambda, Azure Functions, and Google Cloud Functions, removing the need to provision or manage underlying servers. This suits workloads with variable traffic, event-driven processing, or teams looking to minimize infrastructure management overhead.',
        whyNeeded:
          'Traditional server-based architectures require capacity planning for peak load and ongoing patching and maintenance, even when usage is intermittent. Serverless architectures eliminate idle infrastructure cost and operational burden, but require careful design to avoid cold-start latency and cost surprises at scale.',
        whatWeProvide: [
          'Serverless architecture design for event-driven workloads',
          'Function development and optimization across major cloud providers',
          'API Gateway and event source integration',
          'Cold-start latency mitigation strategies',
          'Serverless cost modeling and monitoring',
          'CI/CD pipelines tailored for serverless deployment',
        ],
        keyFeatures: [
          'Fully managed, auto-scaling compute with no server management',
          'Pay-per-execution cost model with active monitoring',
          'Event-driven integration across cloud services',
          'Optimized functions to reduce cold-start latency',
          'Serverless-specific CI/CD deployment pipelines',
        ],
        benefits: [
          'Reduced infrastructure management overhead',
          'Automatic scaling that matches actual demand',
          'Lower costs for variable or intermittent workloads',
          'Faster time-to-market for event-driven features',
          'No capacity planning for traffic spikes',
        ],
        process: [
          { title: 'Assessment', description: 'We identify workloads well-suited to serverless architecture.' },
          { title: 'Strategy & Planning', description: 'We design the event-driven architecture and integration points.' },
          { title: 'Implementation', description: 'We build, test, and deploy serverless functions and pipelines.' },
          { title: 'Optimization & Support', description: 'We monitor cost, performance, and latency on an ongoing basis.' },
        ],
      },
      {
        slug: 'disaster-recovery-backup',
        title: 'Disaster Recovery & Backup',
        shortDescription: 'Tested backup and disaster recovery strategies that protect against outages and data loss.',
        heroTagline: 'Recover fast when something goes wrong, because something eventually will.',
        whatIs:
          'Disaster Recovery & Backup services design and implement backup, replication, and failover strategies that protect your cloud workloads and data against outages, corruption, or regional failures. This spans backup policy design, recovery testing, and documented runbooks so recovery is predictable rather than improvised.',
        whyNeeded:
          'Untested backup strategies frequently fail exactly when they are needed most, during an actual outage. Without a documented, regularly tested disaster recovery plan, organizations risk extended downtime, data loss, and missed recovery time objectives during an incident.',
        whatWeProvide: [
          'Backup policy design across cloud workloads and data stores',
          'Cross-region replication and failover architecture',
          'Recovery Time Objective (RTO) and Recovery Point Objective (RPO) definition',
          'Disaster recovery runbook development',
          'Scheduled recovery testing and validation',
          'Ransomware-resilient, immutable backup configuration',
        ],
        keyFeatures: [
          'Automated, policy-driven backup scheduling',
          'Cross-region failover for critical workloads',
          'Clearly defined RTO and RPO targets per workload',
          'Regularly tested, documented recovery runbooks',
          'Immutable backups resilient to ransomware',
        ],
        benefits: [
          'Significantly reduced downtime during outages',
          'Confidence that backups will actually work when needed',
          'Clear, documented recovery procedures for every team',
          'Reduced risk of permanent data loss',
          'Stronger resilience against ransomware and regional failures',
        ],
        process: [
          { title: 'Assessment', description: 'We review current backup practices and define RTO/RPO requirements.' },
          { title: 'Strategy & Planning', description: 'We design a backup and disaster recovery architecture per workload.' },
          { title: 'Implementation', description: 'We deploy backup policies, replication, and documented runbooks.' },
          { title: 'Optimization & Support', description: 'We conduct scheduled recovery tests and refine the plan over time.' },
        ],
      },
      {
        slug: 'cloud-monitoring',
        title: 'Cloud Monitoring',
        shortDescription: 'Full-stack observability across your cloud infrastructure, applications, and services.',
        heroTagline: 'See problems before your customers do.',
        whatIs:
          'Cloud Monitoring services implement full-stack observability, metrics, logs, and traces, across your cloud infrastructure and applications, so issues are detected and diagnosed before they affect users. This includes dashboarding, alerting, and integration with incident response processes.',
        whyNeeded:
          'Cloud environments generate enormous volumes of operational data that go unused without proper monitoring, leaving teams reactive rather than proactive. Without unified observability, diagnosing performance issues or outages becomes slow, guesswork-driven, and directly impacts customer experience.',
        whatWeProvide: [
          'Metrics, logging, and distributed tracing implementation',
          'Custom dashboards for infrastructure and application health',
          'Alerting policy design tuned to reduce noise and false positives',
          'Service-level objective (SLO) and error budget definition',
          'Integration with incident response and on-call tooling',
          'Cost and performance anomaly detection',
        ],
        keyFeatures: [
          'Unified dashboards across infrastructure and applications',
          'Distributed tracing for complex, multi-service architectures',
          'Alerting tuned to minimize noise and alert fatigue',
          'Defined SLOs with measurable error budgets',
          'Anomaly detection for cost and performance outliers',
        ],
        benefits: [
          'Faster detection and resolution of production issues',
          'Reduced alert fatigue through well-tuned thresholds',
          'Clear visibility into service health and reliability trends',
          'Data-driven prioritization of reliability work',
          'Improved customer experience through fewer undetected outages',
        ],
        process: [
          { title: 'Assessment', description: 'We review current visibility gaps across infrastructure and applications.' },
          { title: 'Strategy & Planning', description: 'We design a monitoring architecture and alerting strategy.' },
          { title: 'Implementation', description: 'We deploy dashboards, tracing, and alerting across your environment.' },
          { title: 'Optimization & Support', description: 'We refine SLOs and alert thresholds as your systems evolve.' },
        ],
      },
      {
        slug: 'infrastructure-as-code',
        title: 'Infrastructure as Code (IaC)',
        shortDescription: 'Version-controlled, repeatable infrastructure provisioning using Terraform and native tooling.',
        heroTagline: 'Infrastructure you can review, version, and repeat, not click through.',
        whatIs:
          'Infrastructure as Code (IaC) replaces manual, console-driven infrastructure changes with version-controlled code, using tools such as Terraform, CloudFormation, or Bicep, that defines your cloud environment declaratively. Every change becomes reviewable, testable, and repeatable across environments.',
        whyNeeded:
          'Manually configured infrastructure drifts over time as changes are made inconsistently across environments, making it difficult to reproduce environments or audit what changed and why. Without IaC, disaster recovery, environment parity, and change accountability all become significantly harder to maintain.',
        whatWeProvide: [
          'Infrastructure as Code architecture and module design',
          'Migration of manually managed infrastructure into code',
          'State management and remote backend configuration',
          'Automated plan and apply workflows integrated into CI/CD',
          'Policy-as-code guardrails for compliance and cost control',
          'Multi-environment configuration management',
        ],
        keyFeatures: [
          'Fully version-controlled, reviewable infrastructure changes',
          'Reusable, modular infrastructure code',
          'Automated plan and apply workflows in CI/CD',
          'Policy-as-code guardrails preventing risky changes',
          'Consistent environments from development to production',
        ],
        benefits: [
          'Eliminated configuration drift across environments',
          'Faster, safer infrastructure changes with full audit history',
          'Reproducible environments for testing and disaster recovery',
          'Reduced risk of manual configuration errors',
          'Easier onboarding for new engineers through documented code',
        ],
        process: [
          { title: 'Assessment', description: 'We review current infrastructure and identify manual configuration risk.' },
          { title: 'Strategy & Planning', description: 'We design the IaC module structure and state management approach.' },
          { title: 'Implementation', description: 'We migrate infrastructure into code and integrate it with CI/CD.' },
          { title: 'Optimization & Support', description: 'We maintain and extend the codebase as infrastructure needs grow.' },
        ],
      },
      {
        slug: 'identity-access-management-cloud',
        title: 'Identity & Access Management (IAM)',
        shortDescription: 'Cloud-native identity governance, least-privilege access, and federated authentication.',
        heroTagline: 'The right access, for the right identity, in every cloud account.',
        whatIs:
          'Cloud Identity & Access Management designs and implements the identity, roles, and permission structures that govern who and what can access your cloud resources. This covers federated authentication, least-privilege role design, and machine identity management across AWS, Azure, and Google Cloud.',
        whyNeeded:
          'Over-permissioned cloud roles are one of the most common paths attackers use to move laterally after an initial compromise. As cloud environments grow, manually managed permissions become inconsistent and difficult to audit, creating exactly the kind of access sprawl that turns a small breach into a major incident.',
        whatWeProvide: [
          'Least-privilege role and policy design across cloud accounts',
          'Federated single sign-on integration with existing identity providers',
          'Service and machine identity governance',
          'Just-in-time privileged access for cloud administration',
          'Access review and entitlement audit workflows',
          'Cross-account and cross-subscription access governance',
        ],
        keyFeatures: [
          'Least-privilege access enforced by default',
          'Federated authentication across cloud providers',
          'Just-in-time elevation for administrative access',
          'Governed machine and service identities',
          'Regular, auditable access reviews',
        ],
        benefits: [
          'Reduced blast radius from compromised credentials',
          'Simplified, centralized identity governance',
          'Faster, cleaner audits with documented access history',
          'Consistent access policy across every cloud account',
          'Lower risk of privilege creep over time',
        ],
        process: [
          { title: 'Assessment', description: 'We map existing cloud identities, roles, and permission sprawl.' },
          { title: 'Strategy & Planning', description: 'We design least-privilege roles and federation architecture.' },
          { title: 'Implementation', description: 'We deploy IAM policies, federation, and access review workflows.' },
          { title: 'Optimization & Support', description: 'We conduct ongoing access reviews and refine policies as teams change.' },
        ],
      },
      {
        slug: 'cloud-cost-optimization',
        title: 'Cloud Cost Optimization',
        shortDescription: 'Ongoing cost visibility, rightsizing, and commitment strategy that cuts cloud waste.',
        heroTagline: 'Spend on what you use, not what you forgot to turn off.',
        whatIs:
          'Cloud Cost Optimization identifies and eliminates wasted cloud spend through rightsizing, commitment planning, and ongoing cost governance. It combines tooling, reporting, and process changes so cost control becomes continuous rather than a one-time cleanup exercise.',
        whyNeeded:
          'Cloud costs grow silently through oversized instances, orphaned resources, and unused commitments, often going unnoticed until a finance review surfaces a budget overrun. Without ongoing cost governance, cloud spend consistently outpaces the value it delivers.',
        whatWeProvide: [
          'Cost and usage analysis across accounts and services',
          'Resource rightsizing based on actual utilization',
          'Reserved instance and savings plan commitment strategy',
          'Orphaned and idle resource identification and cleanup',
          'Cost allocation tagging and chargeback reporting',
          'Ongoing cost anomaly monitoring and alerting',
        ],
        keyFeatures: [
          'Utilization-based rightsizing recommendations',
          'Optimized commitment and reserved capacity strategy',
          'Automated detection of idle and orphaned resources',
          'Clear cost allocation across teams and projects',
          'Continuous cost anomaly monitoring',
        ],
        benefits: [
          'Measurable reduction in monthly cloud spend',
          'Clear visibility into what is driving cost, and why',
          'Accountable, team-level cost ownership',
          'Fewer budget surprises from unexpected usage spikes',
          'Cost efficiency that scales alongside growth, not against it',
        ],
        process: [
          { title: 'Assessment', description: 'We analyze current spend, utilization, and commitment coverage.' },
          { title: 'Strategy & Planning', description: 'We build a rightsizing and commitment strategy tailored to your usage.' },
          { title: 'Implementation', description: 'We execute rightsizing, cleanup, and commitment purchases.' },
          { title: 'Optimization & Support', description: 'We monitor spend continuously and adjust as usage patterns change.' },
        ],
      },
    ],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getSubService(categorySlug: string, subSlug: string) {
  const category = getCategory(categorySlug)
  if (!category) return undefined
  const subService = category.subServices.find((s) => s.slug === subSlug)
  if (!subService) return undefined
  return { category, subService }
}

export function allSubServiceParams() {
  return categories.flatMap((c) => c.subServices.map((s) => ({ category: c.slug, slug: s.slug })))
}

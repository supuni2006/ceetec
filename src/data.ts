import { Course } from "./types";

export const COURSES: Course[] = [
  {
    id: 'tech-1',
    title: 'AWS Master Class Foundation: AWS Certified Cloud Practitioner (CLF-C02) + AWS Certified AI Practitioner (AIF-C01)',
    category: 'technology',
    categoryLabel: 'Information Technology',
    price: '',
    rating: 4.9,
    reviewCount: 142,
    image: 'images/aws_cloud_ai_banner_1782646206591.jpg',
    tutor: {
      name: 'Dr. Asela Perera',
      avatar: '',
      role: 'Senior AI & Cloud Specialist'
    },
    durationHours: 48,
    durationWeeks: 8,
    level: 'Beginner',
    description: 'Cloud proficiency is no longer just an asset—it’s the baseline. By combining standard cloud fundamentals with specialized AI validation, this Master Class ensures you stand out to top-tier employers in an AI-driven economy.',
    curriculum: [
      'Cloud Concepts',
      'Security and Compliance',
      'Cloud Technology and Services',
      'Billing, Pricing, and Support',
      'Fundamentals of AI and ML',
      'Fundamentals of GenAI',
      'Applications of Foundation Models',
      'Guidelines for Responsible AI',
      'Security, Compliance, and Governance for AI Solutions'
    ],
    badges: ['aws-cloud-practitioner', 'aws-ai-practitioner']
  },
  {
    id: 'tech-2',
    title: 'Azure Master Class Foundation: Microsoft Azure Fundamentals (AZ-900) + Microsoft Azure AI Fundamentals (AI-900)',
    category: 'technology',
    categoryLabel: 'Information Technology',
    price: '',
    rating: 4.8,
    reviewCount: 98,
    image: 'images/azure_cloud_ai_banner_1782646449494.jpg',
    tutor: {
      name: 'Dr. Asela Perera',
      avatar: '',
      role: 'AI Researcher & Consultant'
    },
    durationHours: 48,
    durationWeeks: 8,
    level: 'Beginner',
    description: 'Master the Foundations of Cloud & AI This dual-certification track provides a powerful entry point into the Microsoft ecosystem, blending essential cloud infrastructure with the future of intelligence.',
    curriculum: [
      'Describe cloud concepts',
      'Describe Azure architecture and services',
      'Describe Azure management and governance',
      'Describe Artificial Intelligence workloads and considerations',
      'Describe fundamental principles of machine learning on Azure',
      'Describe features of computer vision workloads on Azure',
      'Describe features of Natural Language Processing (NLP) workloads on Azure',
      'Describe features of generative AI workloads on Azure'
    ],
    badges: ['azure-fundamentals', 'azure-ai-fundamentals']
  },
  {
    id: 'lang-1',
    title: 'JLPT N5 / N4 Japanese Language Course',
    category: 'languages',
    categoryLabel: 'Languages',
    price: '',
    rating: 4.9,
    reviewCount: 215,
    image: 'images/japanese_course_banner_1782799974067.jpg',
    tutor: {
      name: 'Sensei Haruto Tanaka',
      avatar: '',
      role: 'Native Japanese Specialist & JLPT Coach'
    },
    durationHours: 60,
    durationWeeks: 12,
    level: 'Beginner',
    description: "Begin your journey toward studying in Japan with CEETEC's comprehensive Japanese Language Course. Designed for beginners, our 3-month Foundation Program equips students with essential Japanese language skills, including Hiragana, Katakana, basic Kanji, grammar, vocabulary, speaking, listening, reading, and writing. The course also includes JLPT N5/N4 foundation preparation to build a strong language base.",
    curriculum: [
      'Hiragana & Katakana (Japanese Alphabets)',
      'Basic to Intermediate Kanji & Essential Vocabulary',
      'Japanese Grammar (N5 & N4)',
      'Speaking & Conversation Practice',
      'Listening Skills & Audio Practice',
      'Reading Comprehension & Writing Practice',
      'JLPT N5 / N4 Exam Preparation',
      'Mock Exams & Paper Discussions',
      'Correct Japanese Pronunciation',
      'Japanese Culture, Etiquette & Workplace Japanese',
      'Certificate of Completion'
    ],
    badges: ['jlpt-n5-n4']
  },
  {
    id: 'tech-3',
    title: 'AWS Master Class Associate: AWS Certified Solutions Architect – Associate (SAA-C03)',
    category: 'technology',
    categoryLabel: 'Information Technology',
    price: '',
    rating: 4.9,
    reviewCount: 154,
    image: 'images/aws_solutions_architect_banner_1782646582236.jpg',
    tutor: {
      name: 'Dr. Asela Perera',
      avatar: '',
      role: 'Senior AI & Cloud Specialist'
    },
    durationHours: 60,
    durationWeeks: 10,
    level: 'Intermediate',
    description: 'Design resilient, high-performing, secure, and cost-optimized architectures on AWS. This course prepares you comprehensively for the SAA-C03 exam with hands-on labs, real-world case studies, and modern architectural patterns.',
    curriculum: [
      'Design Resilient Architectures (Multi-Tier, High Availability, Disaster Recovery)',
      'Design High-Performing Architectures (Elastic Load Balancing, Auto Scaling, CloudFront)',
      'Design Secure Applications and Architectures (IAM, KMS, AWS Shield, WAF, VPC Security)',
      'Design Cost-Optimized Architectures (S3 Storage Classes, Spot Instances, Compute Optimizer)',
      'AWS Compute, Storage, Database, and Networking Services Deep Dive',
      'Exam Strategy, Mock Exams, and Architectural Scenario Analysis'
    ],
    badges: ['aws-solutions-architect-associate']
  },
  {
    id: 'tech-4',
    title: 'Containerization & Orchestration Specialist (DCA + KCNA + CKA)',
    category: 'technology',
    categoryLabel: 'Information Technology',
    price: '',
    rating: 4.9,
    reviewCount: 112,
    image: 'images/dca_kcna_cka_banner_1782648528926.jpg',
    tutor: {
      name: 'Dr. Asela Perera',
      avatar: '',
      role: 'Senior AI & Cloud Specialist'
    },
    durationHours: 48,
    durationWeeks: 8,
    level: 'Intermediate',
    description: 'We begin by demystifying Docker, establishing a solid foundation in container lifecycles and image management. From there, you will navigate the broader ecosystem through the Kubernetes and Cloud Native Associate (KCNA) curriculum, gaining a holistic view of modern infrastructure. The journey culminates in the Certified Kubernetes Administrator (CKA) certification track, where you will master the art of cluster management, troubleshooting, and production-grade orchestration.',
    curriculum: [
      'Course Introduction to Basic Containerization and Core Concept',
      'Virtualization Fundamentals and Virtualization Mechanisms',
      'Container Standards and Runtimes',
      'Container Image Creation, Management, and Registry',
      'Container Operations',
      'Building Container Images',
      'Container Networking',
      'Container Storage and Volumes',
      'Runtime and Containers Security',
      'Orchestration (Swarm)',
      'Kubernetes Fundamentals',
      'Container Orchestration',
      'Cloud Native Application Delivery',
      'Cloud Native Architecture',
      'Cluster Architecture, Installation & Configuration',
      'Workloads & Scheduling',
      'Services & Networking',
      'Storage',
      'Troubleshooting'
    ],
    badges: ['docker-dca', 'kubernetes-kcna', 'kubernetes-cka']
  },
  {
    id: 'tech-5',
    title: 'AWS Certified Security - Specialty (SCS-C03)',
    category: 'technology',
    categoryLabel: 'Information Technology',
    price: '',
    rating: 4.9,
    reviewCount: 98,
    image: 'images/aws_security_specialty_banner_1782649423803.jpg',
    tutor: {
      name: 'Dr. Asela Perera',
      avatar: '',
      role: 'Senior AI & Cloud Specialist'
    },
    durationHours: 45,
    durationWeeks: 8,
    level: 'Advanced',
    description: 'Master advanced cloud security design, implementation, and operations on AWS. Secure infrastructure, protect data, and respond to threats using industry-best practices mapped to the official SCS-C03 syllabus.',
    curriculum: [
      'Threat Detection and Incident Response (AWS GuardDuty, Security Hub, Inspector, CloudTrail)',
      'Security Logging and Monitoring (CloudWatch, EventBridge, Amazon Athena, Kinesis)',
      'Infrastructure Security (VPC Security, AWS WAF, AWS Shield, Firewall Manager, Systems Manager)',
      'Identity and Access Management (Advanced IAM, AWS Organizations, SCPs, Cognito, Directory Service)',
      'Data Protection (KMS, CloudHSM, Secrets Manager, S3 Bucket Security, Certificate Manager)',
      'Exam Readiness, Security Architecture Scenarios, and Practice Labs'
    ],
    badges: ['aws-security-specialty']
  },
  {
    id: 'solar-1',
    title: 'Solar PV Technician Course',
    category: 'technology',
    categoryLabel: 'Renewable Energy',
    price: '',
    rating: 4.9,
    reviewCount: 42,
    image: 'images/solar_pv_banner_1782799423837.jpg',
    tutor: {
      name: 'Eng. Kumaran Perera',
      avatar: '',
      role: 'Senior Systems & Energy Specialist'
    },
    durationHours: 14,
    durationWeeks: 1,
    level: 'Beginner',
    description: 'A comprehensive training program designed to equip learners with the technical knowledge and practical skills required to install, design, commission, and maintain solar photovoltaic (PV) systems. The course covers the fundamentals of solar energy, system components, site assessment, installation techniques, system sizing, safety standards, and maintenance practices. Participants will gain hands-on experience with On-Grid, Off-Grid, and Hybrid Solar PV Systems, learning industry best practices and real-world applications. After completing this certification-level course, you will be prepared and eligible to obtain an NVQ Level 4 certificate.',
    curriculum: [
      'System components and design',
      'Installation, operation, and maintenance',
      'Design and install Solar PV systems',
      'Perform site assessments and load calculations',
      'Size solar panels, batteries, inverters, and charge controllers',
      'Install and maintain On-Grid, Off-Grid, and Hybrid systems',
      'Apply electrical safety standards and industry best practices',
      'Troubleshoot and maintain Solar PV systems efficiently',
      'Prepare systems for grid connection and regulatory compliance'
    ],
    badges: ['nvq-level-4']
  },
  {
    id: 'm365-1',
    title: 'Microsoft 365 Specialist: Exam MS-900: Microsoft 365 Fundamentals + Exam MS-102: Microsoft 365 Administrator',
    category: 'technology',
    categoryLabel: 'Cloud Administration',
    price: '',
    rating: 4.9,
    reviewCount: 96,
    image: 'images/m365_specialist_banner_1782800511070.jpg',
    tutor: {
      name: 'Mr. Dilhan Fernando',
      avatar: '',
      role: 'Senior Microsoft Solutions Architect & Certified Administrator'
    },
    durationHours: 48,
    durationWeeks: 8,
    level: 'Intermediate',
    description: 'Master enterprise cloud services and become a certified Microsoft 365 Specialist. This comprehensive dual-certification program bridges Microsoft 365 Fundamentals (MS-900) with Microsoft 365 Administrator (MS-102) exam standards. Learn to plan, implement, and manage modern cloud infrastructure, secure user identities with Microsoft Entra ID, configure endpoint management with Microsoft Intune, and deploy robust data compliance using Microsoft Purview.',
    curriculum: [
      'MS-900: Microsoft 365 Core Services, Cloud Architecture Concepts, and Benefits',
      'MS-900: Microsoft 365 Security, Compliance, Privacy, and Trust Ecosystem',
      'MS-900: Enterprise Pricing, Licensing Models, and Support Lifecycle Management',
      'MS-102: Planning, Deploying, and Provisioning Microsoft 365 Tenant Infrastructure',
      'MS-102: Access Control & Identity Security (Azure AD / Entra ID, Hybrid Sync, MFA, SSPR)',
      'MS-102: Mobile Device & Application Management (Microsoft Intune policies, profiles, security)',
      'MS-102: Cyber Threat Protection and Information Security (Microsoft Defender for Cloud, Safe Links)',
      'MS-102: Compliance, Data Retention, Information Protection, Audit Logging, and eDiscovery',
      'Real-world Case Studies, Scenario-based Practice Exams, and Hands-on Sandbox Labs'
    ],
    badges: ['ms-900', 'ms-102']
  },
  {
    id: 'linux-1',
    title: 'Enterprise Linux Administration Masterclass: Linux Essentials + LPIC-1 + LPIC-2',
    category: 'technology',
    categoryLabel: 'System Engineering',
    price: '',
    rating: 4.9,
    reviewCount: 112,
    image: 'images/linux_admin_banner_1782801937407.jpg',
    tutor: {
      name: 'Eng. Ruwan Jayasundara',
      avatar: '',
      role: 'Senior Systems Engineer & LPI Certified Trainer'
    },
    durationHours: 60,
    durationWeeks: 12,
    level: 'All Levels',
    description: 'This complete track perfectly positions CEETEC University students to go from absolute beginners (Zero) to advanced open-source engineers (Hero). Master Linux environments starting from command line foundations up to advanced enterprise services, storage solutions, and system security mappings of LPIC-1 and LPIC-2.',
    curriculum: [
      'Phase 1: Open-Source Foundations (Linux Essentials) - Understand FOSS, licenses, and open-source applications',
      'Phase 1: Command Line & Hardware - Navigate CLI, file manipulation, hardware and OS components',
      'Phase 1: Basic Administration & Security - User/group permissions, shell scripting, compressed backups',
      'Phase 2: System Architecture & Installation - LPIC-1 standard installation, package management, architecture',
      'Phase 2: GNU/Unix Commands & Filesystems - Work with Unix tools, devices, Filesystem Hierarchy Standard',
      'Phase 2: Networking & Essential Services - Configure network, manage essential system services, file permissions',
      'Phase 2: Shell Scripting & Maintenance - Execute administrative tasks, automate with custom shells',
      'Phase 3: Advanced System Administration - LPIC-2 capacity planning, system boot processes, kernel custom builds',
      'Phase 3: Advanced Storage & Networking - Block storage, RAID configuration, LVM, advanced routing',
      'Phase 3: Network Services - Deploy Web servers, Domain Name Servers (DNS), Email, and Client DHCP/SSH',
      'Phase 3: System Security & File Sharing - Set up Firewalls, VPNs, LDAP authentication, FTP, NFS, and Samba'
    ],
    badges: ['linux-essentials', 'lpic']
  },
  {
    id: 'biz-1',
    title: 'AI-Powered Digital Marketing Masterclass',
    category: 'business',
    categoryLabel: 'Digital Marketing',
    categories: ['business', 'design'],
    price: '',
    rating: 4.9,
    reviewCount: 76,
    image: 'images/digital.jpg',
    tutor: {
      name: 'Ms. Dilani Fernando',
      avatar: '',
      role: 'Digital Marketing & Brand Strategist'
    },
    durationHours: 40,
    durationWeeks: 8,
    level: 'All Levels',
    description: 'Learn. Create. Grow — with AI-powered skills. Master the future of digital marketing by combining core marketing strategy with hands-on AI tools for content, video, and design, so you can plan, produce, and publish scroll-stopping campaigns faster and smarter.',
    curriculum: [
      'Digital Marketing Foundations & Strategy',
      'AI Post Design - creating eye-catching social media posts with AI tools',
      'AI Video Creation - generating engaging videos faster with AI',
      'Script Writing - writing powerful scripts that connect and convert',
      'Video Editing - editing like a pro and producing standout content',
      'Content Creation - planning, creating, and publishing brand-building content',
      'Social Media Campaign Planning & Analytics',
      'Capstone: Launching an AI-Assisted Marketing Campaign'
    ]
  },
  {
    id: 'drone-1',
    title: 'Drone Piloting & Aerial Media Course',
    category: 'technology',
    categoryLabel: 'Drone Technology',
    price: '',
    rating: 4.8,
    reviewCount: 0,
    image: 'images/drone_course_banner.jpg',
    tutor: {
      name: 'CEETEC Aerial Systems Faculty',
      avatar: '',
      role: 'Drone Operations & Aerial Media Specialist'
    },
    durationHours: 24,
    durationWeeks: 3,
    level: 'Beginner',
    description: 'Learn to fly, capture, and create with drones — from fundamentals to real-world aerial photography, mapping, and survey applications. No prior experience needed. Open to students, professionals, content creators, farmers, and entrepreneurs.',
    curriculum: [
      'Drone Basics — fundamentals of drones and how they work',
      'Practical Flying Training — hands-on training with real drones',
      'Aerial Photo & Video Capturing — techniques for stunning aerial shots',
      'Mapping & Surveying — learn mapping, 3D modeling & analysis',
      'Safety & Regulations — understand drone laws, safety & best practices'
    ]
  }
];
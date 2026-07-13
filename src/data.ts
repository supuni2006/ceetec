import { Course, Tutor, Testimonial, FAQ, Feature, NewsItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'feat1',
    title: 'Global Certification Mastery',
    description: 'Lead the way in IT, Cloud Computing, AI, and Automation with world-class training.',
    iconName: 'Award'
  },
  {
    id: 'feat2',
    title: 'Nationally Recognized',
    description: 'We deliver TVEC-registered programs, including NVQ Levels 4 and 5.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'feat3',
    title: 'Direct Career Pathways',
    description: 'Benefit from our industry MOUs that bridge the gap to internships and full-time roles.',
    iconName: 'Briefcase'
  },
  {
    id: 'feat4',
    title: 'Modern Learning Labs',
    description: 'Access state-of-the-art software sandboxes and mock exam rooms.',
    iconName: 'Laptop'
  },
  {
    id: 'feat5',
    title: 'Flexible Access',
    description: 'Stay on track with live lectures and a cloud portal for recorded sessions.',
    iconName: 'Video'
  },
  {
    id: 'feat6',
    title: 'Elite Faculty',
    description: 'Learn from a panel of specialists with deep industry expertise.',
    iconName: 'GraduationCap'
  },
  {
    id: 'feat7',
    title: 'Hands-on Experience',
    description: 'Gain practical skills in our smart classrooms and advanced virtual facilities.',
    iconName: 'BookOpen'
  },
  {
    id: 'feat8',
    title: 'Trilingual Excellence',
    description: 'Professional training available in English, Sinhala, and Tamil.',
    iconName: 'Languages'
  }
];

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
  }
];

export const TUTORS: Tutor[] = [
  {
    id: 't-2',
    name: 'Dr. Asela Perera',
    role: 'Senior AI & Cloud Specialist',
    image: '',
    bio: 'Renowned consultant with a PhD in computer science. Active researcher and architect in cloud technologies and AI pipelines.',
    rating: 4.8,
    coursesCount: 2,
    studentsCount: 840,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 't-3',
    name: 'Mr. Roshan de Silva',
    role: 'Business Consultant & Coach',
    image: '',
    bio: 'A highly sought-after startup mentor and business scaling specialist. Has coached over 50 businesses to expand into international markets.',
    rating: 4.7,
    coursesCount: 4,
    studentsCount: 1650,
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 't-4',
    name: 'Ms. Sarah Jenkins',
    role: 'Senior IELTS Trainer',
    image: '',
    bio: 'An educator with 12+ years of experience in ESL and IELTS examining. Known for personalized speaking and writing coaching techniques.',
    rating: 4.9,
    coursesCount: 2,
    studentsCount: 2300,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 't-5',
    name: 'Ms. Ranmali Silva',
    role: 'Lead UX Designer',
    image: '',
    bio: 'Experienced UX strategist specializing in user journeys, visual hierarchy, and interactive prototypes for leading enterprise platforms.',
    rating: 4.8,
    coursesCount: 1,
    studentsCount: 320,
    socials: {
      linkedin: 'https://linkedin.com'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test4',
    name: 'Dayan Malalgodapitiya',
    role: 'M365 Professional',
    feedback: 'I recently attended Microsoft ( M365) training session with Kumaran. It was highly informative and included practical examples. I would highly recommend it.',
    rating: 5,
    avatar: '',
    courseTaken: 'Microsoft 365 Enterprise Training'
  },
  {
    id: 'test5',
    name: 'Anushka Madushan',
    role: 'IT Systems Specialist',
    feedback: 'One of a best training we had, highly recommended Sir Mr Kumaran for MS365 and all the related MS courses ( all well as any IT related) ... Thank you very much....',
    rating: 5,
    avatar: '',
    courseTaken: 'Microsoft 365 and Systems Administration'
  },
  {
    id: 'test6',
    name: 'Fazil Rahman',
    role: 'Certified Azure Administrator',
    feedback: 'I recently completed the Microsoft Azure A104 administrator exam. I just wanted to pass on some formal feedback of my tutor, Mr. Kumaran. He was absolutely fantastic throughout the entire length of my study- prompt to reply to my questions, and always with detailed answers to help me further my understanding of the course work. His feedback was insightful and encouraged me to push further in my attempts as well. I just want to thank him for all the time and effort he has put into helping me to achieve this certification.',
    rating: 5,
    avatar: '',
    courseTaken: 'Microsoft Azure Administrator (AZ-104)'
  },
  {
    id: 'test7',
    name: 'Chaminda Somathilaka',
    role: 'AWS Solutions Architect',
    feedback: 'I prepared for my AWS Solutions Architect - Associate exam by taking the training program. It really helped me to get into the AWS waters as a newbie and got through the exam in quick time. Trainer did a fantastic job by guiding us o each of the subject matter specifically targeting the exam.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Solutions Architect - Associate (SAA-C03)'
  },
  {
    id: 'test8',
    name: 'Harshana Hettiarachchi',
    role: 'AWS Certified Associate',
    feedback: 'I could complete my AWS-SAA certificate training and passed my exam few days ago. Much appreciated your help Mr.Kumaran and wishing bright future to you and your institute.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Solutions Architect - Associate (SAA-C03)'
  },
  {
    id: 'test9',
    name: 'Chaminda Karunarathne',
    role: 'Certified AWS Solutions Architect',
    feedback: 'A Well organized learning culture for certifications. I recently earned AWS Solutions Architect certification by attending classes. I specially thank Mr. Kumaran for his teaching and guidance.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Solutions Architect - Associate Certification Prep'
  },
  {
    id: 'test10',
    name: 'Varuna Rajapaksha',
    role: 'AWS Certified Instructor',
    feedback: 'A great place for your AWS and RedHat studies. Highly recommended. Well qualified lectures panel and friendly staff. Specially thanks to Kumaran. It was indeed a great pleasure working with you as an AWS certified Instructor. You earned my highest recommendation. You are a brilliant AWS certified Instructor, and your technical background is very impressive. Great instructor, highly recommended. Any student would be lucky to have you as the best Instructor in AWS technologies.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS & RedHat Advanced Infrastructure Studies'
  },
  {
    id: 'test11',
    name: 'Anuradha Nanayakkara',
    role: 'AWS Certified Specialist',
    feedback: 'If you want to Certified in AWS , This is the right place to come - studying here is full of fun, warm atmosphere and super friendly and helpful staff, Kumaran is a one of the best teachers i ever met.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Certified Solutions Architect Training'
  },
  {
    id: 'test12',
    name: 'Yohan Perera',
    role: 'Cloud Systems Engineer',
    feedback: 'I got through the AWS certification, win it is a good place for class .Big Thanks must goes to Kumaran sir. Thank you and Wish you the best future. 🤜🤜🤜',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Cloud Certification Program'
  },
  {
    id: 'test13',
    name: 'Sifar Ahamed',
    role: 'Cloud Solutions Engineer',
    feedback: 'I am saying whole heartedly this is the best place available Sri Lanka. Lecturing Skills of Kumaran Sir is excellent. Nicely prepared course materials and excellent guidance for the exam.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Certified Cloud practitioner & Associate Prep'
  },
  {
    id: 'test14',
    name: 'Zaharan Safwan',
    role: 'Senior AWS Specialist',
    feedback: 'The instructor was excellent. He was extremely knowledgeable, willing to help any student at anytime, with any questions. Instructor has a passion for his students to succeed in and beyond the classroom. He is extremely knowledgeable and was an outstanding instructor for AWS.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Certified Solutions Architect Course'
  },
  {
    id: 'test15',
    name: 'Gayan Lalantha',
    role: 'AWS Certified Administrator',
    feedback: 'Really good place to learn AWS certifications. The lecturer is really good and the learning patterns are very understandable. I recommend this place for your AWS studies.',
    rating: 5,
    avatar: '',
    courseTaken: 'AWS Cloud Computing Masterclass'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'Are ceetec courses conducted online or in-person?',
    answer: 'We offer hybrid learning! All programs feature state-of-the-art classroom labs at our central campus as well as high-definition live streams and recorded portal access for remote students.',
    category: 'General'
  },
  {
    id: 'faq2',
    question: 'Are there payment plans or installment options available?',
    answer: 'Yes! We offer flexible installment plans for all our masterclasses. You can pay in 2 to 3 interest-free installments, or make use of partner bank credit card offers.',
    category: 'Admission'
  },
  {
    id: 'faq3',
    question: 'Are the course certificates globally recognized?',
    answer: 'Absolutely. ceetec is a registered, certified university, and our curriculums align with official global bodies. Many of our tech paths directly prepare you for Microsoft, AWS, and Cisco certifications.',
    category: 'General'
  },
  {
    id: 'faq4',
    question: 'Do you offer placement support after course completion?',
    answer: 'Yes, we have a dedicated Corporate Relations division that helps students compile professional portfolios, reviews CVs, and invites top recruiters for private recruitment drives at our center.',
    category: 'Career'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'news1',
    title: 'Ceetec Partners with Global Tech Consortium for Advanced Internships',
    date: 'June 18, 2026',
    category: 'Partnership',
    commentsCount: 14,
    image: 'images/news_internships.jpg',
    summary: 'ceetec has signed an official MOU with leading multinational software giants to offer guaranteed fast-track internship placements for our top full-stack graduates.',
    author: 'Admin'
  },
  {
    id: 'news2',
    title: 'Unveiling the New AI & Machine Learning Specialized Lab Facility',
    date: 'May 28, 2026',
    category: 'Infrastructure',
    commentsCount: 8,
    image: 'images/news_ai_sandbox.jpg',
    summary: 'Our training campus has added a brand-new Artificial Intelligence sandbox laboratory equipped with industry-leading GPU processing nodes for neural network training.',
    author: 'Facilities Team'
  },
  {
    id: 'news3',
    title: 'IELTS Success Gala: Celebrating 150+ Students with 7.5+ Bands',
    date: 'May 04, 2026',
    category: 'Celebration',
    commentsCount: 22,
    image: 'images/news_celebration.jpg',
    summary: 'ceetec hosted an award ceremony honoring our exceptional batch of professional and academic English scholars who smashed their international test targets.',
    author: 'Languages Dept'
  }
];

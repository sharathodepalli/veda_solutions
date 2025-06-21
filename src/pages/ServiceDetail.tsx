import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Phone, Mail, ArrowRight, Users, Clock, Shield, TrendingUp, Award, Zap } from 'lucide-react';
import settingsData from '../data/settings.json';

interface Service {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  overview: string;
  features: string[];
  benefits: string[];
  process: { step: string; description: string }[];
  pricing: { tier: string; price: string; features: string[]; popular?: boolean }[];
  testimonials: { name: string; title: string; company: string; quote: string; rating: number; image: string }[];
  faqs: { question: string; answer: string }[];
  stats: { number: string; label: string }[];
  caseStudy?: {
    title: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
  };
}

const services: Record<string, Service> = {
  'ehr-emr-support': {
    id: 'ehr-emr-support',
    title: 'EHR/EMR Support & Optimization',
    description: 'Comprehensive support for electronic health record systems including setup, optimization, training, and ongoing maintenance to maximize efficiency and compliance.',
    heroImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    overview: 'Our EHR/EMR support services help healthcare practices maximize the efficiency and effectiveness of their electronic health record systems. From initial setup to ongoing optimization, we ensure your EHR works for you, not against you. Our certified specialists have experience with over 50 different EHR platforms and understand the unique challenges faced by small and mid-sized practices.',
    features: [
      'System Configuration & Setup',
      'Workflow Optimization & Analysis',
      'Custom Template Creation',
      'Staff Training & Education',
      '24/7 Technical Support',
      'Data Migration Services',
      'Report Generation & Analytics',
      'Integration Support',
      'Compliance Monitoring',
      'Performance Optimization',
      'User Access Management',
      'Backup & Recovery Solutions'
    ],
    benefits: [
      'Reduce documentation time by up to 40%',
      'Improve clinical workflow efficiency',
      'Ensure regulatory compliance (HIPAA, Meaningful Use)',
      'Minimize system downtime and technical issues',
      'Enhance data accuracy and completeness',
      'Streamline billing and coding processes',
      'Increase provider satisfaction',
      'Improve patient care quality'
    ],
    process: [
      { step: 'Assessment', description: 'Comprehensive evaluation of your current EHR setup, workflows, and pain points' },
      { step: 'Planning', description: 'Development of customized optimization strategy based on your practice needs' },
      { step: 'Implementation', description: 'Configuration and setup of optimized workflows, templates, and integrations' },
      { step: 'Training', description: 'Comprehensive staff training on new processes and system features' },
      { step: 'Support', description: 'Ongoing technical support, monitoring, and continuous improvement' }
    ],
    pricing: [
      {
        tier: 'Basic Support',
        price: '$299/month',
        features: [
          'Business hours support (8AM-6PM)',
          'Basic system configuration',
          'Email and phone support',
          'Monthly system check-ins',
          'Basic reporting',
          'Up to 5 users'
        ]
      },
      {
        tier: 'Professional',
        price: '$599/month',
        popular: true,
        features: [
          '24/7 priority support',
          'Advanced workflow optimization',
          'Custom template creation',
          'Weekly performance reviews',
          'Advanced analytics & reporting',
          'Staff training included',
          'Up to 15 users'
        ]
      },
      {
        tier: 'Enterprise',
        price: 'Custom pricing',
        features: [
          'Dedicated support team',
          'Complete system optimization',
          'Priority emergency support',
          'Daily system monitoring',
          'Custom integrations',
          'Unlimited users',
          'On-site training available'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Family Medicine Physician',
        company: 'Johnson Family Practice',
        quote: 'The EHR optimization reduced our documentation time by 40%. We can now see more patients while maintaining quality care.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Dr. James Wilson',
        title: 'Pediatrician',
        company: 'Wilson Pediatrics',
        quote: 'Exceptional support and expertise. Vedha Solutions helped us transition to a new EHR system seamlessly with minimal disruption.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    faqs: [
      {
        question: 'How long does EHR optimization take?',
        answer: 'Most optimization projects are completed within 2-4 weeks, depending on the complexity of your current setup and requirements. We work efficiently to minimize disruption to your practice operations.'
      },
      {
        question: 'Do you support all EHR systems?',
        answer: 'We support all major EHR systems including Epic, Cerner, Allscripts, eClinicalWorks, NextGen, athenahealth, and many others. Our team has experience with over 50 different platforms.'
      },
      {
        question: 'What if we need to switch EHR systems?',
        answer: 'We specialize in EHR transitions and can manage the entire process including data migration, system setup, staff training, and go-live support with zero data loss.'
      },
      {
        question: 'Is training included in your services?',
        answer: 'Yes, comprehensive staff training is included with all our optimization services. We provide both initial training and ongoing education as needed.'
      }
    ],
    stats: [
      { number: '40%', label: 'Average reduction in documentation time' },
      { number: '50+', label: 'EHR systems supported' },
      { number: '99.9%', label: 'System uptime guarantee' },
      { number: '24/7', label: 'Technical support availability' }
    ],
    caseStudy: {
      title: 'Metro Family Practice EHR Transformation',
      challenge: 'A 12-provider family practice was struggling with inefficient EHR workflows, spending 3+ hours daily on documentation, and experiencing frequent system issues.',
      solution: 'We implemented comprehensive workflow optimization, created custom templates, provided intensive staff training, and established 24/7 monitoring.',
      results: [
        '45% reduction in documentation time',
        '30% increase in patient capacity',
        '95% improvement in system reliability',
        '100% staff satisfaction with new workflows'
      ],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  },
  'virtual-scribes': {
    id: 'virtual-scribes',
    title: 'Virtual Medical Scribes',
    description: 'Professional virtual scribes to handle your medical documentation in real-time, allowing you to focus entirely on patient care while ensuring accurate and comprehensive records.',
    heroImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    overview: 'Our certified virtual medical scribes provide real-time documentation support during patient encounters, allowing healthcare providers to focus entirely on patient care. Our scribes are trained medical professionals who understand clinical workflows and maintain the highest standards of accuracy and HIPAA compliance.',
    features: [
      'Real-time Documentation During Visits',
      'HIPAA Compliant Secure Platform',
      'Certified Medical Professionals',
      'Multi-specialty Experience',
      'Flexible Scheduling Options',
      'Quality Assurance Program',
      'Secure Video & Audio Connection',
      'EHR Integration Support',
      'Custom Documentation Templates',
      'Backup Scribe Coverage',
      'Performance Analytics',
      'Continuous Training Program'
    ],
    benefits: [
      'Save 2-3 hours per day on documentation',
      'Improve patient interaction and eye contact',
      'Reduce physician burnout and stress',
      'Increase patient capacity by 20-30%',
      'Ensure accurate and complete documentation',
      'Improve work-life balance',
      'Enhance patient satisfaction scores',
      'Reduce documentation errors'
    ],
    process: [
      { step: 'Consultation', description: 'Assess your documentation needs, specialty requirements, and workflow preferences' },
      { step: 'Matching', description: 'Pair you with a specialized scribe experienced in your medical specialty' },
      { step: 'Setup', description: 'Configure secure systems, establish protocols, and test all connections' },
      { step: 'Training', description: 'Scribe training on your specific documentation style and EHR system' },
      { step: 'Go Live', description: 'Begin documentation support with ongoing quality monitoring and feedback' }
    ],
    pricing: [
      {
        tier: 'Part-time',
        price: '$18/hour',
        features: [
          'Up to 20 hours per week',
          'Single dedicated scribe',
          'Standard support hours',
          'Basic performance reporting',
          'Email support',
          'HIPAA compliant platform'
        ]
      },
      {
        tier: 'Full-time',
        price: '$15/hour',
        popular: true,
        features: [
          '40+ hours per week',
          'Primary + backup scribe',
          'Extended support hours',
          'Detailed analytics & reporting',
          'Priority phone support',
          'Custom documentation templates',
          'Quality assurance reviews'
        ]
      },
      {
        tier: 'Multi-provider',
        price: 'Custom pricing',
        features: [
          'Multiple providers supported',
          'Dedicated scribe team',
          '24/7 coverage available',
          'Advanced reporting dashboard',
          'Dedicated account manager',
          'On-site training available',
          'Custom workflow integration'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Dr. Michael Chen',
        title: 'Internal Medicine Physician',
        company: 'Metro Health Clinic',
        quote: 'The virtual scribe service has been a game-changer. I can focus entirely on my patients while knowing documentation is handled professionally.',
        rating: 5,
        image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Dr. Patricia Martinez',
        title: 'Cardiologist',
        company: 'Heart Care Associates',
        quote: 'Our virtual scribe understands cardiology terminology perfectly. Documentation quality has improved significantly.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    faqs: [
      {
        question: 'How quickly can we get started with virtual scribes?',
        answer: 'Most practices can begin service within 1-2 weeks of initial consultation, depending on your EHR system and specific requirements. We maintain a pool of certified scribes ready for immediate deployment.'
      },
      {
        question: 'What qualifications do your scribes have?',
        answer: 'All our scribes are certified medical professionals with healthcare documentation experience, medical terminology training, and ongoing education. Many have clinical backgrounds or medical coding certifications.'
      },
      {
        question: 'How do you ensure HIPAA compliance?',
        answer: 'We use enterprise-grade encrypted platforms, signed business associate agreements, comprehensive HIPAA training for all staff, and regular security audits to ensure complete compliance.'
      },
      {
        question: 'What happens if our regular scribe is unavailable?',
        answer: 'All full-time and multi-provider plans include backup scribe coverage. We maintain detailed notes about your preferences to ensure seamless coverage when needed.'
      }
    ],
    stats: [
      { number: '2-3 hrs', label: 'Average daily time savings' },
      { number: '99.8%', label: 'Documentation accuracy rate' },
      { number: '30%', label: 'Average increase in patient capacity' },
      { number: '1-2 weeks', label: 'Typical deployment time' }
    ],
    caseStudy: {
      title: 'Riverside Internal Medicine Virtual Scribe Success',
      challenge: 'A busy internal medicine practice with 4 providers was spending 3+ hours daily on documentation, leading to physician burnout and reduced patient satisfaction.',
      solution: 'We deployed specialized internal medicine virtual scribes for each provider, implemented custom documentation templates, and provided comprehensive training.',
      results: [
        '3 hours daily time savings per provider',
        '25% increase in patient appointments',
        '40% improvement in physician satisfaction',
        '15% increase in patient satisfaction scores'
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  },
  'revenue-cycle': {
    id: 'revenue-cycle',
    title: 'Revenue Cycle Management',
    description: 'End-to-end revenue cycle management services to maximize your practice revenue, reduce claim denials, and accelerate payment cycles through expert billing and collections.',
    heroImage: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    overview: 'Our comprehensive revenue cycle management services optimize every aspect of your practice\'s financial operations, from patient scheduling and insurance verification to final payment collection. We use advanced analytics and proven processes to maximize revenue while reducing administrative burden.',
    features: [
      'Claims Processing & Submission',
      'Denial Management & Appeals',
      'Payment Posting & Reconciliation',
      'Patient Collections & Payment Plans',
      'Prior Authorization Support',
      'Insurance Verification & Eligibility',
      'Financial Reporting & Analytics',
      'Accounts Receivable Management',
      'Credentialing Support',
      'Charge Capture Optimization',
      'Contract Negotiation Support',
      'Compliance Monitoring'
    ],
    benefits: [
      'Increase revenue by 15-25%',
      'Reduce claim denial rates by 60%',
      'Accelerate payment cycles by 40%',
      'Improve cash flow consistency',
      'Minimize administrative burden',
      'Ensure billing compliance',
      'Reduce accounts receivable aging',
      'Increase clean claim rates to 95%+'
    ],
    process: [
      { step: 'Analysis', description: 'Comprehensive review of current revenue cycle performance and identification of opportunities' },
      { step: 'Optimization', description: 'Implement improved processes, systems, and workflows to address inefficiencies' },
      { step: 'Implementation', description: 'Deploy optimized billing processes with full integration to your practice management system' },
      { step: 'Monitoring', description: 'Continuous tracking of KPIs with real-time dashboards and performance alerts' },
      { step: 'Reporting', description: 'Regular financial reports, insights, and strategic recommendations for continued improvement' }
    ],
    pricing: [
      {
        tier: 'Basic RCM',
        price: '4% of collections',
        features: [
          'Claims processing & submission',
          'Basic denial management',
          'Payment posting',
          'Monthly financial reports',
          'Email support',
          'Standard turnaround times'
        ]
      },
      {
        tier: 'Professional RCM',
        price: '6% of collections',
        popular: true,
        features: [
          'Full revenue cycle management',
          'Advanced denial management',
          'Patient collections',
          'Prior authorization support',
          'Weekly reporting & analytics',
          'Dedicated account manager',
          'Priority support'
        ]
      },
      {
        tier: 'Enterprise RCM',
        price: 'Custom pricing',
        features: [
          'Complete revenue cycle outsourcing',
          'Real-time financial dashboards',
          'Dedicated billing team',
          'Contract negotiation support',
          'Daily reporting & monitoring',
          'Strategic financial consulting',
          'Custom integrations'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Lisa Rodriguez',
        title: 'Practice Manager',
        company: 'Riverside Medical Group',
        quote: 'Their revenue cycle management service increased our collections by 25% in just six months. The team is knowledgeable and responsive.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Dr. Robert Kim',
        title: 'Orthopedic Surgeon',
        company: 'Advanced Orthopedics',
        quote: 'The denial management and appeals process has dramatically improved our reimbursement rates. Highly recommended.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    faqs: [
      {
        question: 'How do you charge for RCM services?',
        answer: 'We typically charge a percentage of collections (4-8%), ensuring our success is directly tied to improving your revenue. This aligns our interests with yours and provides predictable costs.'
      },
      {
        question: 'What\'s the typical improvement in collections?',
        answer: 'Most practices see a 15-25% increase in collections within the first 6 months, with some seeing improvements of 30% or more depending on their starting point.'
      },
      {
        question: 'How do you handle claim denials?',
        answer: 'We have a dedicated denial management team that analyzes each denial, determines the best course of action, and handles appeals or resubmissions quickly to maximize recovery.'
      },
      {
        question: 'Do you provide financial reporting?',
        answer: 'Yes, we provide comprehensive financial reports including collections analysis, denial trends, aging reports, and KPI dashboards to give you complete visibility into your revenue cycle.'
      }
    ],
    stats: [
      { number: '25%', label: 'Average revenue increase' },
      { number: '95%+', label: 'Clean claim rate achieved' },
      { number: '60%', label: 'Reduction in denial rates' },
      { number: '40%', label: 'Faster payment cycles' }
    ],
    caseStudy: {
      title: 'Valley Pediatrics Revenue Transformation',
      challenge: 'A 6-provider pediatric practice was experiencing 30% denial rates, slow collections, and significant accounts receivable aging issues.',
      solution: 'We implemented comprehensive RCM services including denial management, prior authorization support, and patient collections with real-time monitoring.',
      results: [
        '35% increase in monthly collections',
        '70% reduction in claim denials',
        '50% improvement in A/R aging',
        '90% reduction in administrative burden'
      ],
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  },
  'medical-coding': {
    id: 'medical-coding',
    title: 'Medical Coding & Auditing',
    description: 'Expert medical coding services and compliance auditing to ensure accuracy, maximize reimbursements, and maintain regulatory compliance with certified coding professionals.',
    heroImage: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    overview: 'Our certified medical coders and auditors ensure accurate coding, compliance with regulations, and maximum reimbursement for your services. We provide both ongoing coding support and comprehensive audits to identify opportunities for improvement and ensure regulatory compliance.',
    features: [
      'ICD-10 & CPT Coding Services',
      'Compliance Auditing & Reviews',
      'Documentation Improvement',
      'Coding Education & Training',
      'Appeal Management Support',
      'Risk Assessment & Mitigation',
      'Quality Assurance Programs',
      'Regulatory Updates & Alerts',
      'Specialty-Specific Coding',
      'DRG Optimization',
      'Modifier Usage Review',
      'Coding Software Integration'
    ],
    benefits: [
      'Maximize reimbursement rates by 10-20%',
      'Ensure 99%+ coding accuracy',
      'Reduce audit risk and penalties',
      'Improve documentation quality',
      'Stay current with coding changes',
      'Minimize claim denials',
      'Enhance compliance scores',
      'Reduce coding-related delays'
    ],
    process: [
      { step: 'Audit', description: 'Comprehensive coding and compliance assessment of current practices and documentation' },
      { step: 'Education', description: 'Staff training on proper coding practices, documentation requirements, and compliance' },
      { step: 'Implementation', description: 'Deploy improved coding workflows, quality checks, and monitoring systems' },
      { step: 'Quality Control', description: 'Ongoing coding review, validation, and continuous improvement processes' },
      { step: 'Reporting', description: 'Regular compliance reports, coding analytics, and performance metrics' }
    ],
    pricing: [
      {
        tier: 'Coding Audit',
        price: '$3,500',
        features: [
          'Comprehensive coding audit',
          'Detailed findings report',
          'Improvement recommendations',
          'Compliance assessment',
          'One-time engagement',
          '30-day follow-up support'
        ]
      },
      {
        tier: 'Ongoing Support',
        price: '$1,299/month',
        popular: true,
        features: [
          'Monthly coding audits',
          'Staff training & education',
          'Coding support & consultation',
          'Compliance monitoring',
          'Quarterly reporting',
          'Regulatory updates',
          'Email & phone support'
        ]
      },
      {
        tier: 'Full Service',
        price: 'Custom pricing',
        features: [
          'Complete coding outsourcing',
          'Real-time quality control',
          'Dedicated coding team',
          'Advanced analytics',
          'Priority support',
          'Custom training programs',
          'On-site consulting available'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Dr. James Wilson',
        title: 'Pediatrician',
        company: 'Wilson Pediatrics',
        quote: 'The coding audit identified significant opportunities for improved reimbursement. Their team\'s expertise is exceptional.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Maria Garcia',
        title: 'Office Manager',
        company: 'Central Valley Clinic',
        quote: 'The coding education program improved our accuracy significantly. We now have confidence in our coding practices.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    faqs: [
      {
        question: 'How often should we have coding audits?',
        answer: 'We recommend quarterly internal audits with an annual comprehensive external audit to ensure ongoing compliance and identify improvement opportunities.'
      },
      {
        question: 'Do you provide coding education for our staff?',
        answer: 'Yes, we offer comprehensive coding education and training programs tailored to your specialty and staff needs, including ongoing updates on coding changes.'
      },
      {
        question: 'What coding credentials do your staff have?',
        answer: 'Our coding team includes CPC, CCS, RHIA, and other certified professionals with extensive experience in various medical specialties and ongoing continuing education.'
      },
      {
        question: 'Can you help with specific specialty coding?',
        answer: 'Absolutely. We have coding specialists experienced in all major medical specialties including surgery, cardiology, orthopedics, pediatrics, and many others.'
      }
    ],
    stats: [
      { number: '99%+', label: 'Coding accuracy rate' },
      { number: '15%', label: 'Average reimbursement increase' },
      { number: '50+', label: 'Medical specialties supported' },
      { number: '100%', label: 'Compliance rate maintained' }
    ],
    caseStudy: {
      title: 'Orthopedic Surgery Coding Optimization',
      challenge: 'A multi-provider orthopedic surgery practice was experiencing frequent denials and suspected they were under-coding complex procedures.',
      solution: 'We conducted a comprehensive coding audit, provided specialty-specific training, and implemented ongoing quality assurance processes.',
      results: [
        '22% increase in average reimbursement',
        '85% reduction in coding-related denials',
        '100% improvement in documentation quality',
        '95% staff satisfaction with training'
      ],
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  },
  'clinical-staffing': {
    id: 'clinical-staffing',
    title: 'Clinical & Administrative Staffing',
    description: 'Comprehensive staffing solutions for healthcare practices including temporary, permanent, and contract placements for clinical and administrative positions with thorough screening and support.',
    heroImage: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    overview: 'Our healthcare staffing solutions provide qualified clinical and administrative professionals to meet your practice\'s temporary and permanent staffing needs. We maintain a network of pre-screened, credentialed healthcare professionals ready for immediate deployment.',
    features: [
      'Temporary Staffing Solutions',
      'Permanent Placement Services',
      'Contract & Travel Assignments',
      'Credentialing & Licensing Support',
      'Comprehensive Background Verification',
      'Skills Assessment & Testing',
      'Rapid Deployment (24-48 hours)',
      'Ongoing Performance Support',
      'Compliance Management',
      'Payroll & Benefits Administration',
      'Replacement Guarantees',
      'Emergency Staffing Coverage'
    ],
    benefits: [
      'Access to qualified professionals quickly',
      'Reduce hiring time and costs by 60%',
      'Flexible staffing solutions',
      'Comprehensive screening process',
      'Ongoing support and management',
      'Risk mitigation and compliance',
      'Improved practice continuity',
      'Cost-effective staffing model'
    ],
    process: [
      { step: 'Needs Assessment', description: 'Understand your specific staffing requirements, timeline, and practice culture' },
      { step: 'Candidate Sourcing', description: 'Identify and recruit qualified candidates from our extensive network' },
      { step: 'Evaluation', description: 'Comprehensive assessment including interviews, skills testing, and reference checks' },
      { step: 'Placement', description: 'Deploy selected candidates with full onboarding and integration support' },
      { step: 'Support', description: 'Ongoing monitoring, performance management, and replacement if needed' }
    ],
    pricing: [
      {
        tier: 'Temporary Staffing',
        price: '$28-55/hour',
        features: [
          'Short-term assignments (1 day - 6 months)',
          'Quick deployment (24-48 hours)',
          'Basic screening & verification',
          'Standard support',
          'Flexible scheduling',
          'No long-term commitment'
        ]
      },
      {
        tier: 'Temp-to-Permanent',
        price: '$32-60/hour + placement fee',
        popular: true,
        features: [
          'Extended evaluation period',
          'Comprehensive screening',
          'Skills assessment',
          'Cultural fit evaluation',
          'Conversion option',
          'Full support during trial',
          'Placement guarantee'
        ]
      },
      {
        tier: 'Direct Hire',
        price: '20-25% of annual salary',
        features: [
          'Permanent placement service',
          'Extensive candidate screening',
          'Multiple candidate options',
          '90-day replacement guarantee',
          'Ongoing support',
          'Negotiation assistance',
          'Onboarding support'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Maria Garcia',
        title: 'Office Manager',
        company: 'Central Valley Clinic',
        quote: 'They provided us with exceptional temporary staff during our transition period. The candidates were professional and well-qualified.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Dr. Patricia Martinez',
        title: 'Orthopedic Surgeon',
        company: 'Advanced Orthopedics',
        quote: 'The staffing solutions helped us maintain operations during a critical transition. The quality of candidates was outstanding.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    faqs: [
      {
        question: 'How quickly can you provide temporary staff?',
        answer: 'For most positions, we can provide qualified temporary staff within 24-48 hours of receiving your request, depending on the specific role and requirements.'
      },
      {
        question: 'What types of positions do you fill?',
        answer: 'We staff all healthcare positions including RNs, LPNs, medical assistants, front desk staff, billing specialists, practice managers, and administrative roles.'
      },
      {
        question: 'Do you handle credentialing and licensing?',
        answer: 'Yes, we assist with credentialing, licensing verification, and ensure all candidates meet the necessary requirements for their positions.'
      },
      {
        question: 'What if a temporary employee doesn\'t work out?',
        answer: 'We provide replacement guarantees and will quickly find a suitable replacement at no additional cost if the initial placement doesn\'t meet your expectations.'
      }
    ],
    stats: [
      { number: '24-48 hrs', label: 'Average placement time' },
      { number: '95%', label: 'Client satisfaction rate' },
      { number: '1000+', label: 'Healthcare professionals in network' },
      { number: '60%', label: 'Reduction in hiring costs' }
    ],
    caseStudy: {
      title: 'Emergency Staffing for Coastal Medical Group',
      challenge: 'A 15-provider medical group faced an unexpected staffing shortage when 3 key employees left simultaneously during flu season.',
      solution: 'We provided immediate temporary coverage including 2 medical assistants and 1 front desk coordinator within 24 hours, followed by permanent placements.',
      results: [
        '100% operational continuity maintained',
        '24-hour emergency response time',
        '3 successful permanent placements',
        '0% patient appointment cancellations'
      ],
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  }
};

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? services[serviceId] : null;
  const { contact } = settingsData;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-500 hover:text-primary-600">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-accent-500 fill-current' : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-primary-300 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-quote"
                  className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 text-center"
                >
                  Get Started Today
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 text-center flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
            <div>
              <img
                src={service.heroImage}
                alt={service.title}
                className="rounded-2xl shadow-soft-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Service Overview</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-8">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Process</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful implementation and results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">{step.step}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {service.caseStudy && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Success Story</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                See how we helped a practice achieve remarkable results with our {service.title.toLowerCase()}.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-6">{service.caseStudy.title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Challenge</h4>
                    <p className="text-neutral-700 leading-relaxed">{service.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Solution</h4>
                    <p className="text-neutral-700 leading-relaxed">{service.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {service.caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center text-neutral-700">
                          <Star className="w-5 h-5 text-green-500 mr-3 fill-current flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={service.caseStudy.image}
                  alt={service.caseStudy.title}
                  className="rounded-2xl shadow-soft-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Pricing Options</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet the needs of practices of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-soft ${plan.popular ? 'ring-2 ring-primary-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{plan.tier}</h3>
                  <div className="text-3xl font-bold text-primary-600">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/request-quote"
                  className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {service.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Client Success Stories</h2>
            </div>
            <div className="space-y-8">
              {service.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-neutral-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-lg text-neutral-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-primary-900">{testimonial.name}</div>
                      <div className="text-neutral-600">{testimonial.title}</div>
                      <div className="text-primary-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">{faq.question}</h3>
                <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Contact us today to learn more about how {service.title.toLowerCase()} can benefit your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
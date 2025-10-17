import {
  CloudCog,
  Database,
  Layers3,
  Lock,
  Monitor,
  PlugZap,
  TrendingUp,
} from "lucide-react";

export const ServiceCategories = [
  // ----------------------------------------------------------------------
  // 1. HIGH-PERFORMANCE FRONTEND & UX
  // Focus: Speed, SEO, and Brand Credibility
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Visually Stunning & Lightning-Fast Frontend Engineering",
    icon: Monitor,
    description:
      "We engineer <strong>visually stunning</strong>, <strong>lightning-fast</strong>, and universally accessible user interfaces (using <strong>React/Next.js</strong>) to create a <strong>strong online presence</strong> and instantly build <strong>customer trust</strong>.",
    services: [
      {
        title: "Lightning-Fast Speed & Top Google Search Rankings",
        description:
          "We engineer your site to load <strong>almost instantly</strong>, which directly boosts your <strong>Google SEO score</strong> and keeps users engaged, leading to <strong>higher conversions</strong> and revenue.",
        icon: TrendingUp,
      },
      {
        title: "Flawless Mobile Experience & Instant Credibility",
        description:
          "Your application will look <strong>professional</strong> and function <strong>perfectly on every device</strong>. A unified, modern design builds <strong>immediate trust</strong> with your visitors.",
        icon: Monitor,
      },
      {
        title: "Future-Proof Reliability & Low Maintenance Cost",
        description:
          "We build the core of your interface using industry best practices (<strong>TypeScript</strong>), ensuring your application is <strong>stable</strong>, <strong>easy to scale</strong>, and requires <strong>less costly bug fixing</strong> down the line.",
        icon: Lock,
      },
    ],
  },

  // ----------------------------------------------------------------------
  // 2. SECURE BACKEND & DATA ARCHITECTURE
  // Focus: Security, Custom Tools, and Scalability
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Secure & Scalable Core Backend Architecture",
    icon: Database,
    description:
      "We engineer the <strong>powerful</strong>, <strong>reliable core</strong> of your application (<strong>Node.js/MongoDB</strong>), guaranteeing <strong>maximum data protection</strong>, fast processing of complex business rules, and <strong>limitless future scalability</strong>.",
    services: [
      {
        title: "Scalable Database Architecture for Unlimited Growth",
        description:
          "We design your data structure to ensure your application can handle <strong>massive traffic spikes</strong> and <strong>future feature expansion</strong> without slowing down or requiring <strong>costly overhauls</strong>.",
        icon: Database,
      },
      {
        title: "Enterprise-Grade Security & Data Protection",
        description:
          "We implement <strong>robust layers of protection</strong> (secure authentication, data encryption) to keep all <strong>sensitive business and customer information</strong> safe from threats.",
        icon: Lock,
      },
      {
        title: "Efficient, Custom Business Logic",
        description:
          "Building the 'brain' of your application with <strong>fast</strong>, <strong>efficient technologies</strong> (<strong>Node.js</strong>) to handle <strong>complex processes</strong> (like calculations, payment processing, or reporting) <strong>quickly and reliably</strong>.",
        icon: PlugZap,
      },
    ],
  },

  // ----------------------------------------------------------------------
  // 3. START-TO-FINISH CUSTOM APPLICATION BUILDING (FULL STACK)
  // Focus: Risk Reduction, Efficiency, and Guaranteed Delivery
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Complete, Cohesive Custom Software Delivery",
    icon: Layers3,
    description:
      "Our <strong>full-stack service</strong> provides a <strong>single point of accountability</strong> for your entire project, eliminating <strong>technical risk</strong> and ensuring a cohesive, <strong>highly efficient application</strong> that is managed <strong>seamlessly</strong> from concept to launch.",
    services: [
      {
        title: "Risk-Free Technical Roadmap & Planning",
        description:
          "Before we write any code, we map out a <strong>clear plan</strong>, define the <strong>full-stack architecture</strong>, and create a timeline to ensure your project launches <strong>on time and within budget</strong>.",
        icon: Layers3,
      },
      {
        title: "Streamlined Content Management (Headless CMS)",
        description:
          "Integrating modern tools like <strong>PayloadCMS</strong> gives your team <strong>full</strong>, <strong>easy control over website content</strong> without needing a developer, saving you time and giving you <strong>instant publishing capabilities</strong>.",
        icon: Database,
      },
      {
        title: "Efficient State Management for Complex Interfaces",
        description:
          "We expertly handle the <strong>complexity of large applications</strong>, ensuring <strong>smooth user interactions</strong>, <strong>fast transitions</strong>, and a <strong>responsive feel</strong> that keeps users engaged without frustration.",
        icon: PlugZap,
      },
    ],
  },

  // ----------------------------------------------------------------------
  // 4. LAUNCH, SPEED & RELIABLE HOSTING (DEVOPS)
  // Focus: Uptime, Zero Downtime, and Google Ranking
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Automated Deployment, Maximum Uptime & Fast Hosting",
    icon: CloudCog,
    description:
      "We handle the entire launch and hosting process, using modern platforms like <strong>Vercel</strong> to guarantee <strong>maximum uptime</strong>, <strong>seamless updates</strong>, and a <strong>scalable architecture</strong> ready for <strong>any traffic spike</strong>.",
    services: [
      {
        title: "Zero-Downtime Updates & Seamless Launch",
        description:
          "We set up <strong>automated deployment systems</strong> (CI/CD via <strong>Vercel</strong>) so every update or fix is deployed <strong>instantly and seamlessly</strong>, without taking your application offline or <strong>interrupting users</strong>.",
        icon: CloudCog,
      },
      {
        title: "Scalable, High-Performance Hosting",
        description:
          "Your application is hosted on <strong>robust infrastructure</strong> guaranteed to handle <strong>massive traffic spikes</strong>, maintain <strong>lightning-fast speed</strong>, and ensure a <strong>global presence</strong>.",
        icon: TrendingUp,
      },
      {
        title: "Long-Term Code Review & Technical Consulting",
        description:
          "Providing <strong>expert review</strong> of existing codebases, <strong>performance audits</strong>, and <strong>long-term architectural advice</strong> to ensure your engineering team maintains <strong>efficiency and stability</strong> as the product scales.",
        icon: Layers3,
      },
    ],
  },
];

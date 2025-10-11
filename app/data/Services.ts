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
  // 1. WEBSITE DESIGN & USER EXPERIENCE
  // Focus: Conversions, SEO, and Mobile Readiness
  // ----------------------------------------------------------------------
  {
    categoryTitle: "High-Converting Website Design & SEO Performance",
    icon: Monitor,
    description:
      "We build visually stunning websites engineered for the fastest speeds, top search engine rankings, and maximum accessibility to boost your conversions and revenue.",
    services: [
      {
        title: "SEO-Optimized & Lightning-Fast Websites",
        description:
          "Building your custom application using the most advanced technology (Next.js) to ensure lightning-fast loading, top Google search rankings, and smooth user flow.",
        icon: Monitor,
      },
      {
        title: "Flawless Mobile Experience & Accessibility",
        description:
          "Your site will look and function perfectly on every device (Mobile-First approach). We guarantee a consistent, high-quality experience that captures every mobile visitor.",
        icon: Monitor,
      },
      {
        title: "Instant Credibility & Professional Branding",
        description:
          "We use a unified design approach (Tailwind CSS) to ensure every page looks polished, professional, and reflects your brand perfectly, building instant customer trust.",
        icon: Monitor,
      },
    ],
  },

  // ----------------------------------------------------------------------
  // 2. SECURE DATA, CUSTOM FEATURES, AND INTEGRATIONS
  // Focus: Security, Custom Tools, and Scalability
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Enterprise-Grade Security, Custom Tools & Integrations",
    icon: PlugZap,
    description:
      "We engineer the powerful, reliable core of your application, providing maximum data protection, complex business rules, and secure connections to other critical tools.",
    services: [
      {
        title: "Custom Business Tools Built to Your Exact Needs",
        description:
          "Creating the special functionality (like customer portals, custom calculators, or booking tools) you need. We build it to be fast, reliable, and integrate smoothly with your existing workflow.",
        icon: PlugZap,
      },
      {
        title: "Maximum Security & Data Protection",
        description:
          "Implementing robust protection layers (secure logins, data encryption, compliance focus) to keep your sensitive business and customer information safe from threats.",
        icon: Lock,
      },
      {
        title: "Scalable Database for Future Growth",
        description:
          "Designing the perfect structure for your data so your application is always quick, reliable, and capable of handling future growth and high traffic without slowing down.",
        icon: Database,
      },
    ],
  },

  // ----------------------------------------------------------------------
  // 3. START-TO-FINISH CUSTOM APPLICATION BUILDING
  // Focus: Risk Reduction, Efficiency, and Guaranteed Delivery
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Complete, Risk-Free Custom Software Delivery",
    icon: Layers3,
    description:
      "Our one-stop-shop service covers the entire development cycle, delivering a fully cohesive, robust, and scalable solution, ready to launch.",
    services: [
      {
        title: "Risk-Free Planning & Guaranteed Project Success",
        description:
          "Before any code is written, we map out a clear plan, define the technology, and create a roadmap to eliminate risks and ensure your project launches on time and within budget.",
        icon: Layers3,
      },
      {
        title: "One-Stop Shop for Your Custom Software Project",
        description:
          "We handle every technical aspect of the build, from the front-end design to the secure database, ensuring a seamless, high-performing product that saves you time and coordination effort.",
        icon: Layers3,
      },
    ],
  },

  // ----------------------------------------------------------------------
  // 4. LAUNCH, SPEED & RELIABLE HOSTING
  // Focus: Uptime, Zero Downtime, and Google Ranking
  // ----------------------------------------------------------------------
  {
    categoryTitle: "Maximum Uptime, Automated Launch, and Fast Hosting",
    icon: CloudCog,
    description:
      "We get your application online quickly and keep it running perfectly. We guarantee maximum speed, minimal downtime, and scalable hosting for any traffic spikes.",
    services: [
      {
        title: "Zero-Downtime Updates & Seamless Launch",
        description:
          "Setting up automated systems (CI/CD) so that every fix or feature update is tested and deployed instantly, without any interruption or 'maintenance mode' for your customers.",
        icon: CloudCog,
      },
      {
        title: "Top Google Speed Scores & Higher Conversions",
        description:
          "We analyze and tune your code to achieve top speed scores and Core Web Vitals, which is essential for improving SEO and directly leading to better user retention.",
        icon: TrendingUp,
      },
      {
        title: "24/7 Monitoring & Maximum Uptime Guarantee",
        description:
          "Implementing systems that constantly monitor your application's health. We can catch and fix issues immediately, ensuring peak performance and maximum uptime around the clock.",
        icon: Monitor,
      },
    ],
  },
];

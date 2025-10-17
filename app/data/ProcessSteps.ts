import * as LucideIcons from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
}
export const ProcessSteps: ProcessStep[] = [
  {
    title: "Strategy & Vision Definition",
    description:
      "We start by identifying your <strong>exact business goals</strong> and <strong>audience needs</strong>. This crucial phase delivers a <strong>clear roadmap</strong> and <strong>predictable timeline</strong>, eliminating <strong>project risk</strong> before development begins.",
    icon: "Search",
  },
  {
    title: "Client-Approved Design & Experience",
    description:
      "We create <strong>beautiful, intuitive visual designs</strong> and <strong>interactive prototypes</strong>. You get to <strong>see and test the final user experience</strong> before we write a single line of code, ensuring <strong>100% satisfaction</strong>.",
    icon: "Palette",
  },
  {
    title: "Secure & Scalable Core Development",
    description:
      "Our team builds the application's engine using <strong>clean, modern code principles</strong>. We integrate all <strong>custom features and systems</strong>, providing <strong>regular progress updates</strong> for <strong>full visibility</strong>.",
    icon: "Code",
  },
  {
    title: "Guaranteed Quality & Performance Check",
    description:
      "We run <strong>extensive tests</strong> to guarantee the application is <strong>flawless, secure, and fast</strong> across all devices and browsers. This step ensures <strong>maximum stability and protection</strong> before launch.",
    icon: "CheckCircle",
  },
  {
    title: "Seamless Go-Live & Handover",
    description:
      "We manage the entire deployment, ensuring a <strong>smooth, stress-free launch</strong> with <strong>zero downtime</strong>. Your application is <strong>immediately available to your customers</strong>, supported by <strong>initial performance monitoring</strong>.",
    icon: "Rocket",
  },
  {
    title: "Long-Term Partnership & Growth Planning",
    description:
      "Our relationship continues post-launch with <strong>dedicated support</strong>. We establish a <strong>clear roadmap for future features</strong> and <strong>strategic scaling</strong>, ensuring your software <strong>evolves as your business grows</strong>.",
    icon: "RefreshCcw",
  },
];

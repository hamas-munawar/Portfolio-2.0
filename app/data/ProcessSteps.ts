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
      "We start by identifying your exact business goals and audience needs. This crucial phase delivers a clear roadmap and predictable timeline, eliminating project risk before development begins.",
    icon: "Search",
  },
  {
    title: "Client-Approved Design & Experience",
    description:
      "We create beautiful, intuitive visual designs and interactive prototypes. You get to see and test the final user experience before we write a single line of code, ensuring 100% satisfaction.",
    icon: "Palette",
  },
  {
    title: "Secure & Scalable Core Development",
    description:
      "Our team builds the application's engine using clean, modern code principles. We integrate all custom features and systems, providing regular progress updates for full visibility.",
    icon: "Code",
  },
  {
    title: "Guaranteed Quality & Performance Check",
    description:
      "We run extensive tests to guarantee the application is flawless, secure, and fast across all devices and browsers. This step ensures maximum stability and protection before launch.",
    icon: "CheckCircle",
  },
  {
    title: "Seamless Go-Live & Handover",
    description:
      "We manage the entire deployment, ensuring a smooth, stress-free launch with zero downtime. Your application is immediately available to your customers, supported by initial performance monitoring.",
    icon: "Rocket",
  },
  {
    title: "Long-Term Partnership & Growth Planning",
    description:
      "Our relationship continues post-launch with dedicated support. We establish a clear roadmap for future features and strategic scaling, ensuring your software evolves as your business grows.",
    icon: "RefreshCcw",
  },
];

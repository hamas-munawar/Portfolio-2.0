"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as LucideIcons from "lucide-react";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import ProcessCard from "./ProcessCard";

gsap.registerPlugin(ScrollTrigger);

// Define the type for a single Process Step
export interface ProcessStep {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
}

// --- Dummy Data ---
const ProcessSteps: ProcessStep[] = [
  {
    title: "Discovery & Planning",
    description:
      "We start by deeply understanding your goals, audience, and technical requirements. This includes research, wireframing, and creating a detailed project plan.",
    icon: "Search",
  },
  {
    title: "Design & Prototyping",
    description:
      "Translating the plan into a visual concept. We create high-fidelity designs and interactive prototypes, ensuring an intuitive and engaging user experience.",
    icon: "Palette",
  },
  {
    title: "Development & Integration",
    description:
      "The core build phase. We write clean, efficient code, integrate necessary APIs, and implement features following the approved design and architecture.",
    icon: "Code",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Rigorously testing the application across various devices and scenarios to identify and fix bugs. We ensure performance, security, and stability.",
    icon: "CheckCircle",
  },
  {
    title: "Deployment & Launch",
    description:
      "Preparing the final product for release. We handle all deployment processes, ensuring a smooth launch and providing initial monitoring.",
    icon: "Rocket",
  },
  {
    title: "Maintenance & Future Scaling",
    description:
      "Post-launch support, continuous monitoring, and optimization. We discuss strategies for future feature development and scaling.",
    icon: "RefreshCcw",
  },
];
// --------------------

const ProcessSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  // --- GSAP Animation Logic (Omitted for brevity, unchanged) ---
  useGSAP(
    () => {
      // Line drawing animation
      gsap.from(".process-timeline-line", {
        strokeDashoffset: (i, target) => target.getTotalLength(),
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".process-timeline-line",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Cards slide-up animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "bottom 120%",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-step", {
        opacity: 0,
        y: 40,
        ease: "none",
        stagger: 0.4,
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 0%",
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="flex flex-col gap-12 py-16" ref={containerRef}>
      <h2 className={`slide-up-step text-5xl font-bold text-center font-anton`}>
        My <span className="text-brand">Project Process</span>
      </h2>
      <div className="relative">
        {/* Timeline SVG Line: Uses stroke-current to inherit text-brand color */}
        <svg
          className={`slide-up-step absolute left-1/2 -ml-0.5 w-1 h-full stroke-current text-brand opacity-30 hidden md:block`}
          viewBox="0 0 2 1000"
          preserveAspectRatio="none"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="1000"
            strokeWidth="16"
            strokeDasharray="8 8"
            className="process-timeline-line"
          />
        </svg>

        {/* Process Steps Container */}
        <div className="flex flex-col gap-16 md:gap-16 px-4 md:px-0">
          {ProcessSteps.map((item, index) => (
            <div className="slide-up-step" key={index}>
              <ProcessCard
                position={index % 2 === 0 ? "left" : "right"}
                stepNumber={index + 1}
                iconName={item.icon}
              >
                <h3 className="text-3xl font-bold text-brand">{item.title}</h3>
                <p className="text-gray-300 xl:text-lg">{item.description}</p>
              </ProcessCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

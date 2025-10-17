"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { Journey } from "@/app/data/Journey";
import { useGSAP } from "@gsap/react";

import JourneyCard from "./JourneyCard";

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll(".slide-up");

      if (!slideUpEl?.length) return;

      gsap.from(".process-timeline-line", {
        // This tells GSAP to draw the line from the top to the bottom
        strokeDashoffset: (i, target) => target.getTotalLength(),
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".process-timeline-line",
          start: "top center", // Start drawing when the line enters the center of the viewport
          end: "bottom center", // Stop drawing when the line reaches the center of the viewport
          scrub: 1, // Smoothly link the animation to scroll position
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "bottom 120%",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up", {
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
    <section className="slide-up flex flex-col gap-12" ref={containerRef}>
      <h2 className="slide-up text-5xl font-bold text-center font-anton">
        My <span className="text-brand">Journey</span>
      </h2>
      <div className="relative">
        <svg
          className="slide-up absolute left-1/2 -ml-0.5 w-1 h-full stroke-brand opacity-30 hidden md:block"
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

        <div className="flex flex-col gap-16 md:gap-8 px-4 md:px-0">
          {Journey.map((item, index) => (
            <div className="slide-up" key={index}>
              <JourneyCard
                position={index % 2 === 0 ? "left" : "right"}
                year={item.year}
              >
                <h3 className="text-3xl font-bold text-brand">{item.title}</h3>
                <p className="text-gray-300 xl:text-lg">
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </p>
              </JourneyCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

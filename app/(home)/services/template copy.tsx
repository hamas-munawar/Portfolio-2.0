"use client";

import gsap from "gsap";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

export default function AboutTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const parentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.25,
        defaults: {
          duration: 0.4,
          ease: "power2.inOut",
        },
      });

      // 1. PHASE 1: Dark Layer slides DOWN and off-screen.
      // It starts at y: 0, covering the screen.
      tl.to(".dark-layer", {
        y: "100%", // Moves the div down by 100% of its own height
      })

        // 2. PHASE 2: Brand Layer slides UP and off-screen.
        // It starts at y: 0, covering the screen, and moves up.
        // It runs immediately after the dark layer completes.
        .to(".brand-layer", {
          y: "-100%", // Moves the div up by 100% of its own height
        })

        // 3. Content Slide-in.
        // The content fades in while the brand layer is finishing its movement.
        .from(
          ".slide-up",
          {
            opacity: 0,
            y: 40,
            stagger: 0.05,
            duration: 0.6,
          },
          "<0.1" // Starts 0.1s before the previous animation ends for a smooth overlap
        );
    },
    { scope: parentRef }
  );

  return (
    <div className="relative" ref={parentRef}>
      <div className="dark-layer fixed top-0 left-0 w-full h-full bg-[#222] z-40"></div>
      <div className="brand-layer fixed top-0 left-0 w-full h-full bg-brand z-30"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

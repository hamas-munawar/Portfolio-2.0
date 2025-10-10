"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React from "react";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Complete", value: "5+" },
  { label: "Hours Worked", value: "3k+" },
];

const HomeSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".slide-up-and-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.01 }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero-section"
      className="min-h-screen grid md:grid-cols-2 gap-10 place-content-center text-text"
      ref={containerRef}
    >
      <div className="flex flex-col gap-4">
        <header className="slide-up-and-fade uppercase">
          <h2 className="slide-up-and-fade text-5xl md:text-6xl lg:text-8xl font-anton text-brand">
            Fullstack
          </h2>
          <h2 className="slide-up-and-fade ml-8 -translate-y-1 lg:-translate-y-2 text-5xl md:text-6xl lg:text-8xl font-anton text-white-ghost">
            Developer
          </h2>
        </header>
        <p className="slide-up-and-fade text-md md:text-lg lg:text-xl max-w-xl">
          Hi! I&apos;m Hamas Munawar. A creative Fullstack Developer with 3+
          years of experience in building high-performance, scalable, and
          responsive web applications, from intuitive user interfaces to robust
          back-end APIs and databases.
        </p>
        <div className="slide-up-and-fade flex gap-4">
          <button className="w-fit bg-brand text-gray-jet font-semibold text-md md:text-lg lg:text-xl px-6 py-2 transition-all duration-300 hover:cursor-pointer border-2 border-brand hover:bg-transparent hover:text-white-cool" name="hire-me-button">
            <Link
              target="_blank"
              href={
                "https://www.upwork.com/freelancers/~0118613b18d17f9733?mp_source=share"
              }
            >
              Hire Me
            </Link>
          </button>
          {/* <button className="w-fit text-white-cool font-semibold text-md md:text-lg lg:text-xl px-6 py-2 border-2 border-brand transition-all duration-300 hover:cursor-pointer hover:bg-brand hover:text-gray-jet">
            Download CV
          </button> */}
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 place-content-end gap-4 relative md:-bottom-48">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="slide-up-and-fade text-center md:text-right"
          >
            <p className="text-3xl md:text-4xl text-brand font-anton tracking-wider">
              {value}
            </p>
            <p className="text-md md:text-lg lg:text-xl text-white-ghost">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;

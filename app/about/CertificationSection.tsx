"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import { Certificates } from "../data/Certificates";

gsap.registerPlugin(ScrollTrigger);

const CertificationSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll(".slide-up");

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 90%",
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
          end: "bottom 10%",
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
    <section className="slide-up flex flex-col gap-12 py-16" ref={containerRef}>
      <h2 className="text-5xl font-bold text-center font-anton">
        My Key <span className="text-brand">Certifications</span>
      </h2>

      <div className="slide-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {Certificates.map((cert, index) => (
          <div className="slide-up" key={index}>
            <div className="group p-0 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={cert.url}
                  alt={`${cert.title} Credential`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.05] group-hover:opacity-85"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-brand mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{cert.instructor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;

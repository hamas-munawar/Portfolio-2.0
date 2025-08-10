"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Icon from "./components/Icon";
import { TECHSTACK } from "./data/TechStack";
import SectionTitle from "./SectionTitle";

const TechstackSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll(".slide-up");

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
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
    <section
      id="tect-stack"
      className="min-h-screen grid place-content-center gap-6  hover:cursor-default select-none py-8"
      ref={containerRef}
    >
      <SectionTitle title="My Stack" />
      <div className="flex flex-col gap-16">
        {Object.keys(TECHSTACK).map((key) => (
          <div
            key={key}
            className="flex flex-col md:flex-row justify-between gap-4"
          >
            <h5 className=" slide-up text-4xl md:text-5xl font-anton uppercase pb-2">
              {key}
            </h5>
            <div className="md:w-[60%] flex flex-wrap gap-x-8 gap-y-6">
              {TECHSTACK[key].map(({ label, iconName }) => (
                <Icon
                  key={iconName}
                  name={iconName}
                  svgClassNames="w-8 h-8 md:w-10 md:h-10"
                  parentClassNames="slide-up gap-2 text-xl md:text-2xl capitalize"
                >
                  {label}
                </Icon>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechstackSection;

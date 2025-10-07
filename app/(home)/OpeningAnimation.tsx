"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const OpeningAnimation = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
      });

      tl.to(".name-text span", {
        y: 0,
        stagger: 0.05,
        duration: 0.2,
      });

      tl.to(".slides", {
        delay: 1,
        y: "100%",
        duration: 0.5,
        stagger: 0.1,
      })
        .to(".name-text span", { autoAlpha: 0 }, "<0.5")
        .to(
          preloaderRef.current,
          {
            autoAlpha: 0,
          },
          "<1"
        );
    },
    { scope: preloaderRef }
  );

  const name = "Hamas";

  return (
    <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
      {Array.from({ length: 10 }).map((value, index) => (
        <div key={index} className="slides h-full w-[10%] bg-[#151515]"></div>
      ))}

      <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden uppercase">
        {name.split("").map((ch, index) => (
          <span key={index} className="inline-block translate-y-full">
            {ch}
          </span>
        ))}
      </p>
    </div>
  );
};

export default OpeningAnimation;

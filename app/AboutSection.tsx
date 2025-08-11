"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about",
          trigger: container.current,
          start: "bottom 40%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="about"
      className="min-h-screen grid place-content-center gap-6 md:gap-12"
      ref={container}
    >
      <p className="font-thin text-2xl sm:text-4xl md:text-5xl md:pr-12 text-white-ghost slide-up-and-fade">
        I believe in a user-centered design approach, where every project I work
        on is tailored to meet the specific needs of its users.
      </p>
      <p className="border-b-[1] border-gray-medium py-4 slide-up-and-fade">
        This is me
      </p>
      <div className="flex flex-col md:flex-row gap-8 mx-auto">
        <h2 className="grow-1 text-2xl sm:text-3xl md:text-4xl slide-up-and-fade text-white-ghost">
          Hi, I'm Hamas.
        </h2>
        <div className="w-full md:w-[60%] space-y-4 md:pr-10 lg:pr-24 slide-up-and-fade text-lg md:text-xl">
          <p className="slide-up-and-fade">
            I am a full-stack web developer dedicated to turning ideas into
            creative solutions. I specialize in crafting seamless and intuitive
            experiences across the entire application, from the server-side
            logic to the client-facing interface.
          </p>
          <p className="slide-up-and-fade">
            My approach focuses on creating scalable, high-performing solutions
            tailored to both user needs and business objectives. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            robust applications that not only engage users but also drive
            tangible results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

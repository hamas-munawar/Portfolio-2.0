"use client";

import gsap from "gsap";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const parentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.25,
    });

    tl.to(".first", {
      y: "0%",
      duration: 0.25,
    })
      .to(".second", {
        y: "-120%",
        duration: 0.25,
      })
      .to(".parent", { y: "-120%", duration: 0.8, delay: 0.3 });

    tl.from(".slide-up", {
      opacity: 0,
      y: 40,
      stagger: 0.025,
    });
  });

  return (
    <>
      <div className="parent fixed inset-0 z-[6] " ref={parentRef}>
        <div className="first h-screen bg-[#333333] translate-y-full"></div>
        <div className="second h-screen bg-brand translate-y-full"></div>
      </div>
      {children}
    </>
  );
}

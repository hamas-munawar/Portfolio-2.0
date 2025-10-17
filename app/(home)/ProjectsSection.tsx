// src/components/ProjectsSection.tsx
"use client";
import gsap from "gsap";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import { PROJECTS } from "../data/Projects";
import ProjectItem from "./ProjectItem"; // <-- Import the new component
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // This scroll-triggered animation for the whole section remains the same
  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 150,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 80%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      className="h-screen max-h-[1080px] w-full flex flex-col justify-center gap-6 hover:cursor-default select-none py-8"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col gap-10 group/wrapper" ref={containerRef}>
        {/* Map over projects and render the type-safe ProjectItem component */}
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.slug}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

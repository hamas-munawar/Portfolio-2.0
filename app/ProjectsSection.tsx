"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { PROJECTS } from "./data/Projects";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 80%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      });

      tl.from(containerRef.current, {
        y: 150,
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col justify-center gap-6 hover:cursor-default select-none py-8"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col gap-10 group/wrapper" ref={containerRef}>
        {PROJECTS.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`flex flex-col sm:flex-row gap-2 group hover:cursor-pointer ${
              index !== PROJECTS.length - 1 && "border-b-2 border-gray-dim"
            } pb-4 group-hover/wrapper:opacity-50 hover:opacity-100 transition-all duration-300 `}
          >
            <Image
              src={project.thumbnail}
              alt="Project"
              width="300"
              height="200"
              className={
                "w-full object-cover mb-6 aspect-[3/2] object-top sm:hidden"
              }
              key={project.slug}
              loading="lazy"
            />
            <div className="flex gap-2 sm:gap-4">
              <div className="font-anton">
                _{(index + 1).toString().padStart(2, "0")}
              </div>
              <div>
                <h4 className="text-4xl sm:text-5xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-l from-white to-brand from-[50%] to-[50%] bg-[length:200%] bg-right group-hover:bg-left bg-clip-text text-transparent">
                  {project.name}
                  <span className="text-[var(--heading-color)] opacity-0 group-hover:opacity-100 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        id="box"
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <path id="arrow-line" d="M10 14 21 3"></path>
                      <path id="arrow-curb" d="M15 3h6v6"></path>
                    </svg>
                  </span>
                </h4>
                <div className="mt-2 flex flex-wrap gap-3 text-[var(--text-color)] text-xs">
                  {project.techStack.slice(0, 3).map((tech, idx, stackArr) => (
                    <div className="gap-3 flex items-center" key={tech}>
                      <span className="">{tech}</span>
                      {idx !== stackArr.length - 1 && (
                        <span className="inline-block size-2 rounded-full bg-gray-medium"></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

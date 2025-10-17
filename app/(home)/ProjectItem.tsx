"use client";

import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

// Define the Project type (or import it)
interface Project {
  slug: string;
  name: string;
  thumbnail: string | StaticImageData;
  techStack: string[];
}

interface ProjectItemProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectItem = ({ project, index, total }: ProjectItemProps) => {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const box = svgRef.current?.querySelector<SVGPathElement>("#box");
      const arrowLine =
        svgRef.current?.querySelector<SVGPathElement>("#arrow-line");
      const arrowCurb =
        svgRef.current?.querySelector<SVGPathElement>("#arrow-curb");

      // Ensure all elements are found before proceeding
      if (!svgRef.current || !box || !arrowLine || !arrowCurb) return;

      // Set the initial state: SVG is invisible, paths are "undrawn"
      gsap.set(svgRef.current, { autoAlpha: 0 }); // Use autoAlpha for performance
      gsap.set([box, arrowLine, arrowCurb], {
        strokeDasharray: (i, target) =>
          (target as SVGPathElement).getTotalLength(),
        strokeDashoffset: (i, target) =>
          (target as SVGPathElement).getTotalLength(),
      });

      tl.current = gsap
        .timeline({ paused: true })
        // First, fade in the entire SVG container
        .to(svgRef.current, {
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.inOut",
        })
        // Then, draw the paths in sequence
        .to(
          box,
          { strokeDashoffset: 0, duration: 0.4, ease: "power2.inOut" },
          "-=0.2"
        )
        .to(
          arrowLine,
          { strokeDashoffset: 0, duration: 0.3, ease: "power2.inOut" },
          "-=0.2"
        )
        .to(
          arrowCurb,
          { strokeDashoffset: 0, duration: 0.3, ease: "power2.inOut" },
          "-=0.2"
        );
    },
    { scope: rootRef }
  );

  return (
    <Link
      ref={rootRef}
      href={`/projects/${project.slug}`}
      className={`flex flex-col sm:flex-row gap-2 group hover:cursor-pointer ${
        index !== total - 1 && "border-b-2 border-gray-dim"
      } pb-4 group-hover/wrapper:opacity-50 hover:opacity-100 transition-all duration-300`}
      onMouseEnter={() => tl.current?.play()}
      onMouseLeave={() => tl.current?.reverse()}
    >
      <Image
        src={project.thumbnail}
        alt="Project"
        width={300}
        height={200}
        className="w-full object-cover mb-6 aspect-[3/2] object-top sm:hidden"
        loading="lazy"
      />
      <div className="flex gap-2 sm:gap-4">
        <div className="font-anton">
          _{(index + 1).toString().padStart(2, "0")}
        </div>
        <div>
          <h4 className="text-4xl sm:text-5xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-l from-white to-brand from-[50%] to-[50%] bg-[length:200%] bg-right group-hover:bg-left bg-clip-text text-transparent">
            {project.name}
            <span className="text-[var(--heading-color)]">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white"
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
                <span>{tech}</span>
                {idx !== stackArr.length - 1 && (
                  <span className="inline-block size-2 rounded-full bg-gray-medium"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;

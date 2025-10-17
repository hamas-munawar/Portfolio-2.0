// src/components/ProjectItem.tsx
"use client";

import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
  onProjectEnter: (
    thumbnail: string | StaticImageData,
    itemElement: HTMLDivElement,
    index: number
  ) => void;
  onProjectMove: (
    e: React.MouseEvent<HTMLDivElement>,
    itemElement: HTMLDivElement
  ) => void;
  onProjectLeave: () => void;
  isHovered: boolean;
  isFaded: boolean;
}

const ProjectItem = ({
  project,
  index,
  total,
  onProjectEnter,
  onProjectMove,
  onProjectLeave,
  isHovered,
  isFaded,
}: ProjectItemProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const arrowTL = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const boxPath = svgRef.current?.querySelector<SVGPathElement>("#box");
      const arrowLine =
        svgRef.current?.querySelector<SVGPathElement>("#arrow-line");
      const arrowCurb =
        svgRef.current?.querySelector<SVGPathElement>("#arrow-curb");
      if (!svgRef.current || !boxPath || !arrowLine || !arrowCurb) return;

      // Arrow initial + path lengths
      gsap.set(svgRef.current, { autoAlpha: 0 });
      gsap.set([boxPath, arrowLine, arrowCurb], {
        strokeDasharray: (_, t) => (t as SVGPathElement).getTotalLength(),
        strokeDashoffset: (_, t) => (t as SVGPathElement).getTotalLength(),
      });

      // Arrow timeline
      arrowTL.current = gsap
        .timeline({ paused: true })
        .to(
          svgRef.current,
          { autoAlpha: 1, duration: 0.3, ease: "power2.inOut" },
          0
        )
        .to(
          boxPath,
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
    { scope: rowRef }
  );

  const handleEnter = () => {
    if (rowRef.current) {
      onProjectEnter(project.thumbnail, rowRef.current, index);
    }
    arrowTL.current?.play();
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rowRef.current) {
      onProjectMove(e, rowRef.current);
    }
  };

  const handleLeave = () => {
    onProjectLeave();
    arrowTL.current?.timeScale(1.2).reverse();
  };

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div
        ref={rowRef}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`pt-10 relative group flex flex-col sm:flex-row gap-2 hover:cursor-pointer ${
          index !== total - 1 ? "border-b-2 border-gray-dim" : ""
        } pb-4 transition-all duration-300`}
        style={{
          opacity: isFaded ? 0.3 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Mobile thumbnail */}
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
                  />
                  <path id="arrow-line" d="M10 14 21 3" />
                  <path id="arrow-curb" d="M15 3h6v6" />
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
      </div>
    </Link>
  );
};

export default ProjectItem;

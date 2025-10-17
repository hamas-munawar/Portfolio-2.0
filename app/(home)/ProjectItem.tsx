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
}

// Config
const BOX_MOVE_X = 40; // px left/right
const BOX_MOVE_Y = 28; // px up/down
const MIN_OPACITY = 0.9; // dimmest at far corners
const FOLLOW_SMOOTH = 0.14; // movement tween duration

const ProjectItem = ({ project, index, total }: ProjectItemProps) => {
  const rowRef = useRef<HTMLDivElement>(null); // hover area
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRef = useRef<HTMLDivElement>(null); // moves as a whole

  const arrowTL = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const boxPath = svgRef.current?.querySelector<SVGPathElement>("#box");
      const arrowLine =
        svgRef.current?.querySelector<SVGPathElement>("#arrow-line");
      const arrowCurb =
        svgRef.current?.querySelector<SVGPathElement>("#arrow-curb");
      if (
        !svgRef.current ||
        !boxPath ||
        !arrowLine ||
        !arrowCurb ||
        !boxRef.current
      )
        return;

      // Arrow initial + path lengths
      gsap.set(svgRef.current, { autoAlpha: 0 });
      gsap.set([boxPath, arrowLine, arrowCurb], {
        strokeDasharray: (_, t) => (t as SVGPathElement).getTotalLength(),
        strokeDashoffset: (_, t) => (t as SVGPathElement).getTotalLength(),
      });

      // Image box initial: center vertically via yPercent so Y can animate freely
      gsap.set(boxRef.current, {
        autoAlpha: 0,
        opacity: 0,
        x: 0,
        y: 8,
        yPercent: -50, // replaces -translate-y-1/2
        willChange: "transform, opacity",
      });

      // Arrow timeline (your original durations/overlaps)
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
    // Preload/decode for instant first hover
    const src =
      typeof project.thumbnail === "string"
        ? project.thumbnail
        : project.thumbnail.src;
    if (typeof window !== "undefined" && src) new window.Image().src = src;
    const imgEl = boxRef.current?.querySelector(
      "img"
    ) as HTMLImageElement | null;
    if (imgEl && "decode" in imgEl) imgEl.decode().catch(() => {});

    // Reset and show fast
    if (boxRef.current) {
      gsap.killTweensOf(boxRef.current);
      gsap.set(boxRef.current, { x: 0, y: 0 });
      gsap.fromTo(
        boxRef.current,
        { autoAlpha: 0, opacity: 0, y: 8 },
        {
          autoAlpha: 1,
          opacity: 1,
          y: 0,
          duration: 0.14,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    }

    arrowTL.current?.play();
  };

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!rowRef.current || !boxRef.current) return;

    const rect = rowRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const nx = px * 2 - 1; // -1..1 (x)
    const ny = py * 2 - 1; // -1..1 (y)

    const targetX = nx * BOX_MOVE_X;
    const targetY = ny * BOX_MOVE_Y;

    // Smooth move + opacity modulation
    gsap.to(boxRef.current, {
      x: targetX,
      y: targetY,
      opacity:
        1 - (1 - MIN_OPACITY) * Math.min(1, Math.hypot(nx, ny) / Math.SQRT2),
      duration: FOLLOW_SMOOTH,
      ease: "power3.out",
      overwrite: "auto",
      force3D: true,
    });
  };

  const handleLeave = () => {
    if (!boxRef.current) return;

    gsap.killTweensOf(boxRef.current);
    gsap.to(boxRef.current, {
      x: 0,
      y: 0,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
    });

    arrowTL.current?.timeScale(1.2).reverse();
  };

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div
        ref={rowRef}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`relative group flex flex-col sm:flex-row gap-2 hover:cursor-pointer ${
          index !== total - 1 ? "border-b-2 border-gray-dim" : ""
        } pb-4 transition-all duration-300`}
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

        {/* WHOLE image box (follows cursor on X & Y, with opacity) */}
        <div
          ref={boxRef}
          className="hidden sm:block pointer-events-none z-40 absolute right-10 top-1/2 rounded-xl overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={project.thumbnail}
            alt="Project"
            width={300}
            height={600}
            className="aspect-[1/2] object-cover object-top select-none"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;

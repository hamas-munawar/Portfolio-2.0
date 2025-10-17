// src/components/ProjectsSection.tsx
"use client";
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';
import { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';

import { PROJECTS } from '../data/Projects';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

// Config
const BOX_MOVE_X = 40;
const BOX_MOVE_Y = 28;
const MIN_OPACITY = 0.9;
const FOLLOW_SMOOTH = 0.14;
const POSITION_TRANSITION = 0.3; // Duration for position changes between projects
const IMAGE_TRANSITION = 0; // Duration for image fade transition
const IMAGE_RIGHT_OFFSET = 200; // Distance from right edge
const IMAGE_HEIGHT = 600; // Height of the image (aspect ratio 1/2, width 300)
const VIEWPORT_PADDING = 20; // Padding from viewport edges

interface BoxPosition {
  top: number;
  right: number;
  x: number;
  y: number;
}

// Default position for the image box
const DEFAULT_BOX_POSITION: BoxPosition = {
  top: typeof window !== "undefined" ? window.innerHeight / 2 : 400,
  right: IMAGE_RIGHT_OFFSET,
  x: 0,
  y: 0,
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const boxInnerRef = useRef<HTMLDivElement>(null); // For the actual positioned element
  const imageRef = useRef<HTMLImageElement>(null); // For the image element
  const [currentThumbnail, setCurrentThumbnail] = useState<
    string | StaticImageData | null
  >(null);
  const [nextThumbnail, setNextThumbnail] = useState<
    string | StaticImageData | null
  >(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      // Initialize image box at default position
      if (boxInnerRef.current) {
        gsap.set(boxInnerRef.current, {
          autoAlpha: 0,
          opacity: 0,
          top: DEFAULT_BOX_POSITION.top,
          right: DEFAULT_BOX_POSITION.right,
          x: 0,
          y: 0,
          yPercent: -50,
          willChange: "transform, opacity",
        });
      }

      // Initialize image
      if (imageRef.current) {
        gsap.set(imageRef.current, {
          opacity: 1,
        });
      }
    },
    { scope: containerRef }
  );

  // Helper function to clamp image position within viewport
  const getClampedPosition = (targetY: number, offsetY: number = 0): number => {
    const viewportHeight = window.innerHeight;
    const imageHalfHeight = IMAGE_HEIGHT / 2;

    // Calculate the actual top position considering yPercent: -50
    const actualTop = targetY + offsetY;

    // Check if image would go beyond top
    if (actualTop - imageHalfHeight < VIEWPORT_PADDING) {
      return VIEWPORT_PADDING + imageHalfHeight;
    }

    // Check if image would go beyond bottom
    if (actualTop + imageHalfHeight > viewportHeight - VIEWPORT_PADDING) {
      return viewportHeight - VIEWPORT_PADDING - imageHalfHeight;
    }

    return targetY;
  };

  const handleProjectEnter = (
    thumbnail: string | StaticImageData,
    itemElement: HTMLDivElement,
    index: number
  ) => {
    setIsVisible(true);
    setHoveredIndex(index);

    // Preload/decode for instant display
    const src = typeof thumbnail === "string" ? thumbnail : thumbnail.src;
    if (typeof window !== "undefined" && src) {
      const img = new window.Image();
      img.src = src;
    }

    // Get initial position
    const rect = itemElement.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;

    // Clamp position to keep image within viewport
    const clampedY = getClampedPosition(centerY);

    // Check if we need to change the image
    const currentSrc =
      typeof currentThumbnail === "string"
        ? currentThumbnail
        : currentThumbnail?.src;
    const newSrc = typeof thumbnail === "string" ? thumbnail : thumbnail.src;

    if (currentSrc !== newSrc && imageRef.current) {
      // Fade out current image, change source, then fade in
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: IMAGE_TRANSITION / 2,
        ease: "power2.in",
        onComplete: () => {
          setCurrentThumbnail(thumbnail);
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: IMAGE_TRANSITION / 2,
              ease: "power2.out",
            });
          }
        },
      });
    } else if (!currentThumbnail) {
      // First time showing image
      setCurrentThumbnail(thumbnail);
    }

    // Animate to new position with GSAP
    if (boxInnerRef.current) {
      gsap.killTweensOf(boxInnerRef.current);

      // Animate position and fade in
      gsap.to(boxInnerRef.current, {
        top: clampedY,
        right: IMAGE_RIGHT_OFFSET,
        x: 0,
        y: 0,
        autoAlpha: 1,
        opacity: 1,
        duration: POSITION_TRANSITION,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleProjectMove = (
    e: React.MouseEvent<HTMLDivElement>,
    itemElement: HTMLDivElement
  ) => {
    if (!boxInnerRef.current) return;

    const rect = itemElement.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const nx = px * 2 - 1; // -1 to 1
    const ny = py * 2 - 1; // -1 to 1

    const offsetX = nx * BOX_MOVE_X;
    const offsetY = ny * BOX_MOVE_Y;

    // Calculate base Y position (center of current item)
    const centerY = rect.top + rect.height / 2;

    // Clamp position to keep image within viewport (considering offset)
    const clampedY = getClampedPosition(centerY, offsetY);

    // Animate opacity based on distance
    const newOpacity =
      1 - (1 - MIN_OPACITY) * Math.min(1, Math.hypot(nx, ny) / Math.SQRT2);

    // Animate position and opacity with GSAP
    gsap.to(boxInnerRef.current, {
      top: clampedY,
      x: offsetX,
      y: offsetY,
      opacity: newOpacity,
      duration: FOLLOW_SMOOTH,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleProjectLeave = () => {
    if (!boxInnerRef.current) return;

    setIsVisible(false);
    setHoveredIndex(null);

    gsap.killTweensOf(boxInnerRef.current);

    // Keep the last position - just fade out
    gsap.to(boxInnerRef.current, {
      opacity: 0,
      autoAlpha: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen md:min-h-fit md:max-h-[1080px] w-full flex flex-col justify-center gap-6 hover:cursor-default select-none py-8 relative"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col group/wrapper" ref={containerRef}>
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.slug}
            project={project}
            index={index}
            total={PROJECTS.length}
            onProjectEnter={handleProjectEnter}
            onProjectMove={handleProjectMove}
            onProjectLeave={handleProjectLeave}
            isHovered={hoveredIndex === index}
            isFaded={hoveredIndex !== null && hoveredIndex !== index}
          />
        ))}
      </div>

      {/* Single shared image box */}
      <div ref={boxRef} className="hidden sm:block">
        <div
          ref={boxInnerRef}
          className="pointer-events-none z-40 fixed rounded-xl overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {currentThumbnail && (
            <Image
              ref={imageRef}
              src={currentThumbnail}
              alt="Project"
              width={300}
              height={600}
              className="aspect-[1/2] object-cover object-top select-none"
              loading="lazy"
              draggable={false}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

"use client";
import { PROJECTS } from "@/app/data/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useParams } from "next/navigation";
import { FaGithub, FaLink } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailPage = () => {
  const { slug } = useParams();

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.from(".slide-up", {
      opacity: 0,
      y: 40,
      stagger: 0.025,
    });
  });

  useGSAP(() => {
    if (window.innerWidth < 992) return;

    gsap.to("#info", {
      filter: "blur(3px)",
      autoAlpha: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: "#info",
        start: "bottom 80%",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
      },
    });
  });

  const project = PROJECTS.find((project) => project.slug === slug);

  if (project)
    return (
      <section
        id="project-detail"
        className="min-h-screen w-full hover:cursor-default select-none py-8 font-roboto flex flex-col gap-8 lg:px-50"
      >
        <div id="info" className="flex flex-col gap-8 mt-8">
          <header className="slide-up flex flex-col md:flex-row gap-2 sm:gap-4 md:items-center">
            <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <div className="flex gap-4 text-2xl lg:text-4xl">
              {project.githubUrl && (
                <a href={project.githubUrl}>
                  <FaGithub />
                </a>
              )}
              {project.websiteUrl && (
                <a href={project.websiteUrl}>
                  <FaLink />
                </a>
              )}
            </div>
          </header>
          <div className="slide-up flex flex-col gap-3">
            <h4 className="font-anton text-2xl md:text-3xl lg:text-4xl">
              Description
            </h4>
            <p className="text-sm lg:text-lg">{project.description}</p>
          </div>
          <div className="slide-up flex flex-col gap-3">
            <h4 className="font-anton text-2xl md:text-3xl lg:text-4xl">
              Tech Stack
            </h4>
            <div className="flex gap-3 flex-wrap text-sm lg:text-lg">
              {project.techStack.map((tech, index) => (
                <div className="gap-3 flex items-center" key={tech}>
                  <span className="">{tech}</span>
                  {index !== project.techStack.length - 1 && (
                    <span className="inline-block size-2 rounded-full bg-gray-medium"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="slide-up flex flex-col gap-3">
            <h4 className="font-anton text-2xl md:text-3xl lg:text-4xl">
              Key Features
            </h4>
            <ul className="list-disc pl-4 text-sm lg:text-lg">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="slide-up flex flex-col gap-3">
            <h4 className="font-anton text-2xl md:text-3xl lg:text-4xl">
              Challenges & Solutions
            </h4>
            <ol className="ml-6 flex flex-col gap-4">
              {project.challenges?.map((challenge) => (
                <li key={challenge.title} className="list-decimal">
                  <h5 className="font-anton text-xl tracking-wide">
                    {challenge.title}
                  </h5>
                  <p className="text-sm lg:text-lg ml-4">
                    {challenge.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div
          id="images"
          className="slide-up flex flex-col gap-4 w-3xl max-w-full mx-auto"
        >
          {project.images.map((image) => (
            <div
              key={image}
              className="group relative w-full aspect-[750/400] bg-background-light rounded-lg"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center 50%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
      </section>
    );
};

export default ProjectDetailPage;

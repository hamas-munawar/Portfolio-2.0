"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaGithub, FaLink } from "react-icons/fa";

import { PROJECTS } from "@/app/data/Projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailPage = () => {
  const { slug } = useParams();

  const project = PROJECTS.find((project) => project.slug === slug);

  if (project)
    return (
      <section className="min-h-screen w-full hover:cursor-default select-none py-8 font-roboto flex flex-col gap-8 lg:px-50 pt-16">
        <div className="flex flex-col gap-8 mt-8">
          <header className="slide-up grid grid-cols-[1fr_auto] justify-between gap-2 sm:gap-4 md:items-center">
            <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <div className="flex gap-4 text-2xl lg:text-4xl">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank">
                  <FaGithub className="hover:fill-brand" />
                </a>
              )}
              {project.websiteUrl && (
                <a href={project.websiteUrl} target="_blank">
                  <FaLink className="hover:fill-brand" />
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
            <Image
              src={image}
              alt={"Project Image"}
              width={"750"}
              height={"400"}
              key={image}
              className="rounded-lg"
            ></Image>
          ))}
        </div>
      </section>
    );
};

export default ProjectDetailPage;

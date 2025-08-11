"use client";
import { PROJECTS } from "@/app/data/Projects";
import { useParams } from "next/navigation";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectDetailPage = () => {
  const { slug } = useParams();

  const project = PROJECTS.find((project) => project.slug === slug);

  if (project)
    return (
      <section
        id="project-detail"
        className="min-h-screen w-full hover:cursor-default select-none py-8 font-roboto flex flex-col gap-8 lg:px-50"
      >
        <header className="flex flex-col md:flex-row gap-2 sm:gap-4 md:items-center">
          <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <div className="flex gap-4 text-2xl lg:text-4xl">
            {project.websiteUrl && (
              <a href={project.websiteUrl}>
                <FaGithub />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl}>
                <FaLink />
              </a>
            )}
          </div>
        </header>

        <div className="flex flex-col gap-3">
          <h4 className="font-anton text-2xl md:text-3xl lg:text-4xl">
            Description
          </h4>
          <p className="text-sm lg:text-lg">{project.description}</p>
        </div>

        <div className="flex flex-col gap-3">
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

        <div className="flex flex-col gap-3">
          <h4 className="font-anton text-2xl md:text-3xl lg:text-4xl">
            Key Features
          </h4>
          <ul className="list-disc pl-4 text-sm lg:text-lg">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
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

        <div
          id="images"
          className="project-gallery flex flex-col gap-4 w-3xl max-w-full  mx-auto"
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

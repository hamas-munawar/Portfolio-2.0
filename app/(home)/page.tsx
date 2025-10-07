import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import TechstackSection from "./TechstackSection";

export default function Home() {
  return (
    <main className=" flex flex-col gap-16 xl:px-20">
      <HomeSection />
      <AboutSection />
      <TechstackSection />
      <ProjectsSection />
    </main>
  );
}

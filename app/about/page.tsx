"use client";

import AboutSection from "./AboutSection";
import CertificationSection from "./CertificationSection";
import JourneySection from "./JourneySection";
import PhilosophySection from "./PhilosophySection";

const AboutPage = () => {
  return (
    <section
      id="contact"
      className="min-h-screen grid place-content-center gap-16 my-8 md:my-10 xl:px-20"
    >
      <main className="slide-up flex flex-col gap-16">
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-anton font-bold mb-4 animate-fade-in-up">
            <span className="text-brand">About</span> Me
          </h1>
          <p className="text-lg lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Discover the journey behind the code. Here, I share my passion, my
            path, and the principles that drive my work as a Fullstack
            Developer.
          </p>
        </section>

        <AboutSection />

        <PhilosophySection />

        <JourneySection />

        <CertificationSection />
      </main>
    </section>
  );
};

export default AboutPage;

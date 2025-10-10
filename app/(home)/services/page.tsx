"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ServicesPage = () => {
  useGSAP(() => {
    // 1. Animate the Process Timeline Line
    gsap.from(".process-timeline-line", {
      // This tells GSAP to draw the line from the top to the bottom
      strokeDashoffset: (i, target) => target.getTotalLength(),
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".process-timeline-line",
        start: "top center", // Start drawing when the line enters the center of the viewport
        end: "bottom center", // Stop drawing when the line reaches the center of the viewport
        scrub: 1, // Smoothly link the animation to scroll position
      },
    });

    // 2. Animate Each Process Step
    document.querySelectorAll(".process-step").forEach((step, index) => {
      gsap.from(step, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100, // Move left or right depending on the step
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top 75%",
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden">
      <div className="container mx-auto px-10 py-24 relative z-10 border-x border-green-500/20 shadow-3xl shadow-green-500/10">
        <main>
          <section className="text-center mb-36">
            <h1 className="text-8xl md:text-9xl font-extrabold mb-8 tracking-widest leading-none uppercase">
              ENGINEERING <span className="text-green-400">APEX</span> VALUE
            </h1>
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto font-light border-t border-b border-green-500/30 py-4 italic tracking-wide">
              I translate high-level strategy into **measurable, scalable, and
              resilient** web solutions that define market leadership.
            </p>
          </section>
          ---
          <section className="mb-36">
            <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-wider">
              THE <span className="text-green-400">CORE</span> CAPABILITIES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 rounded-xl shadow-2xl shadow-green-500/15 border border-green-500/20 hover:shadow-green-500/30 transition duration-500 ease-out transform hover:-translate-y-1">
                <div className="text-5xl text-green-400 mb-4 font-thin">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold mb-3 text-green-400 tracking-wide">
                  Frontend Architecture
                </h3>
                <p className="text-gray-300 mb-4 font-light text-lg leading-relaxed">
                  **Engineering accessible, high-performance interfaces**
                  (Lighthouse-optimized) on advanced component-based frameworks.
                </p>
                <ul className="mt-6 text-green-400 list-none text-sm space-y-1 font-mono">
                  <li>_Next.js/React Ecosystems_</li>
                  <li>_Advanced State Management_</li>
                  <li>_UI/UX Integration_</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl shadow-2xl shadow-green-500/15 border border-green-500/20 hover:shadow-green-500/30 transition duration-500 ease-out transform hover:-translate-y-1">
                <div className="text-5xl text-green-400 mb-4 font-thin">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold mb-3 text-green-400 tracking-wide">
                  Scalable Data Systems
                </h3>
                <p className="text-gray-300 mb-4 font-light text-lg leading-relaxed">
                  Building **secure, robust APIs** and optimizing databases for
                  integrity and performance under high-volume, complex querying.
                </p>
                <ul className="mt-6 text-green-400 list-none text-sm space-y-1 font-mono">
                  <li>_Node.js/Microservices_</li>
                  <li>_Advanced DB Optimization_</li>
                  <li>_Authentication Protocols_</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl shadow-2xl shadow-green-500/15 border border-green-500/20 hover:shadow-green-500/30 transition duration-500 ease-out transform hover:-translate-y-1">
                <div className="text-5xl text-green-400 mb-4 font-thin">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.782 2.09A4.004 4.004 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold mb-3 text-green-400 tracking-wide">
                  DevOps & Cloud Ops
                </h3>
                <p className="text-gray-300 mb-4 font-light text-lg leading-relaxed">
                  Automating **CI/CD pipelines** and managing cloud
                  infrastructure to ensure stable, monitored, and continuously
                  deployed applications.
                </p>
                <ul className="mt-6 text-green-400 list-none text-sm space-y-1 font-mono">
                  <li>_CI/CD Automation_</li>
                  <li>_AWS/Vercel Strategy_</li>
                  <li>_Infrastructure Monitoring_</li>
                </ul>
              </div>
            </div>
          </section>
          ---
          <section className="mb-36">
            <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-wider">
              THE <span className="text-green-400">4-PHASE</span> METHODOLOGY
            </h2>

            <div className="relative max-w-4xl mx-auto">
              <svg
                className="absolute left-1/2 -ml-0.5 w-1 h-full stroke-green-400 opacity-50 hidden md:block"
                viewBox="0 0 2 1000"
                preserveAspectRatio="none"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="1000"
                  stroke-width="2"
                  stroke-dasharray="8 8"
                  className="process-timeline-line"
                />
              </svg>

              <div className="space-y-24">
                <div className="flex flex-col md:flex-row md:items-center relative process-step">
                  <div className="md:w-1/2 text-left md:text-right p-4">
                    <span className="text-7xl font-extrabold text-green-400 opacity-20 block mb-2">
                      01
                    </span>
                    <h3 className="text-3xl font-extrabold mb-2 text-green-400 tracking-tight">
                      Strategic Blueprinting
                    </h3>
                    <p className="text-gray-400 font-light">
                      Detailed requirements analysis and technical architecture
                      planning. **Outcome: Finalized Technical Roadmap.**
                    </p>
                  </div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-green-400 absolute left-1/2 -translate-x-1/2 z-20 shadow-lg shadow-green-500/50"></div>
                  <div className="md:w-1/2"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center relative process-step">
                  <div className="md:w-1/2 hidden md:block"></div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-green-400 absolute left-1/2 -translate-x-1/2 z-20 shadow-lg shadow-green-500/50"></div>
                  <div className="md:w-1/2 text-left p-4">
                    <span className="text-7xl font-extrabold text-green-400 opacity-20 block mb-2">
                      02
                    </span>
                    <h3 className="text-3xl font-extrabold mb-2 text-green-400 tracking-tight">
                      Design Validation
                    </h3>
                    <p className="text-gray-400 font-light">
                      High-fidelity prototyping and user-flow mapping to
                      validate **usability and design decisions** pre-code.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center relative process-step">
                  <div className="md:w-1/2 text-left md:text-right p-4">
                    <span className="text-7xl font-extrabold text-green-400 opacity-20 block mb-2">
                      03
                    </span>
                    <h3 className="text-3xl font-extrabold mb-2 text-green-400 tracking-tight">
                      Agile Implementation
                    </h3>
                    <p className="text-gray-400 font-light">
                      Iterative development sprints focused on **clean,
                      maintainable code** and continuous integration and
                      testing.
                    </p>
                  </div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-green-400 absolute left-1/2 -translate-x-1/2 z-20 shadow-lg shadow-green-500/50"></div>
                  <div className="md:w-1/2"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center relative process-step">
                  <div className="md:w-1/2 hidden md:block"></div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-green-400 absolute left-1/2 -translate-x-1/2 z-20 shadow-lg shadow-green-500/50"></div>
                  <div className="md:w-1/2 text-left p-4">
                    <span className="text-7xl font-extrabold text-green-400 opacity-20 block mb-2">
                      04
                    </span>
                    <h3 className="text-3xl font-extrabold mb-2 text-green-400 tracking-tight">
                      Deployment & Handover
                    </h3>
                    <p className="text-gray-400 font-light">
                      Secure production launch, final QA, and complete
                      documentation and knowledge transfer for project autonomy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          ---
          <section className="text-center py-16 shadow-2xl shadow-green-500/10 rounded-lg mt-20 border border-green-500/30">
            <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
              READY TO **SECURE** YOUR DIGITAL FUTURE?
            </h2>
            <a
              href="#contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-gray-900 font-extrabold py-4 px-10 rounded-full text-xl transition-colors duration-300 shadow-lg hover:shadow-green-500/50 uppercase tracking-widest"
            >
              Initiate Consultation
            </a>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;

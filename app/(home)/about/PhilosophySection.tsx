import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Philosophy } from "@/app/data/Philosophy";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  // const containerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.from(".philosophy-title", {
  //       opacity: 0,
  //       y: -30,
  //       duration: 1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".philosophy-title",
  //         start: "top 90%",
  //         toggleActions: "play none none none",
  //       },
  //     });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });

  //     tl.from(".philosophy-card", {
  //       opacity: 0,
  //       y: 50,
  //       ease: "power2.out",
  //       duration: 1,
  //       stagger: 0.2,
  //     });
  //   },
  //   { scope: containerRef }
  // );

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "bottom 50%",
  //         end: "bottom 0%",
  //         scrub: 1,
  //       },
  //     });

  //     tl.to([containerRef.current, ".philosophy-card"], {
  //       y: -150,
  //       opacity: 0,
  //       ease: "none",
  //     });
  //   },
  //   { scope: containerRef }
  // );

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-5xl font-bold text-center font-anton philosophy-title">
        My <span className="text-brand">Philosophy</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Philosophy.map((item, index) => (
          <div
            key={index}
            className={`philosophy-card p-8 rounded-lg shadow-lg flex flex-col gap-4 ${
              index === Philosophy.length - 1 &&
              index % 2 === 0 &&
              "md:col-span-2"
            } hover:shadow-2xl hover:shadow-brand/20`}
          >
            <h3 className="text-3xl font-bold text-brand">{item.title}</h3>
            <p className="text-gray-300 lg:text-lg">
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;

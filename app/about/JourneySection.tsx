import { Journey } from "../data/Journey";
import JourneyCard from "./JourneyCard";

const JourneySection = () => {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-5xl font-bold text-center font-anton">
        My <span className="text-brand">Journey</span>
      </h2>
      <div className="relative">
        <svg
          className="absolute left-1/2 -ml-0.5 w-1 h-full stroke-brand opacity-30 hidden md:block"
          viewBox="0 0 2 1000"
          preserveAspectRatio="none"
        >
          <line x1="1" y1="0" x2="1" y2="1000" strokeWidth="16" />
        </svg>

        <div className="flex flex-col gap-16 md:gap-24 px-4 md:px-0">
          {Journey.map((item, index) => (
            <JourneyCard
              position={index % 2 === 0 ? "left" : "right"}
              key={index}
            >
              <h3 className="text-3xl font-bold text-brand">{item.title}</h3>
              <p className="text-gray-300 xl:text-lg">{item.description}</p>
            </JourneyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

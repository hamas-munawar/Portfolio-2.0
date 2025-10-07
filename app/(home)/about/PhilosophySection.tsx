import { Philosophy } from "@/app/data/Philosophy";

const PhilosophySection = () => {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-5xl font-bold text-center font-anton">
        My <span className="text-brand">Philosophy</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Philosophy.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-lg flex flex-col gap-4 ${
              index === Philosophy.length - 1 &&
              index % 2 === 0 &&
              "md:col-span-2"
            }`}
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

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Complete", value: "6+" },
  { label: "Hours Worked", value: "3k+" },
];

const HomeSection = () => {
  return (
    <section
      id="hero-section"
      className="min-h-screen grid md:grid-cols-2 gap-10 place-content-center text-text"
    >
      <div className="flex flex-col gap-4">
        <header className="uppercase">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-anton text-brand">
            Fullstack
          </h2>
          <h2 className="ml-8 -translate-y-1 lg:-translate-y-2 text-5xl md:text-6xl lg:text-8xl font-anton text-white-ghost">
            Developer
          </h2>
        </header>
        <p className="text-md md:text-lg lg:text-xl max-w-xl text-white-whisper">
          Hi! I'm Hamas Munawar. A creative Fullstack Developer with 3+ years of
          experience in building high-performance, scalable, and responsive web
          applications, from intuitive user interfaces to robust back-end APIs
          and databases.
        </p>
        <div className="flex gap-4">
          <button className="w-fit bg-brand text-gray-jet font-semibold text-md md:text-lg lg:text-xl px-6 py-2 transition-all duration-300 hover:cursor-pointer border-2 border-brand hover:bg-transparent hover:text-white-cool">
            Hire Me
          </button>
          <button className="w-fit text-white-cool font-semibold text-md md:text-lg lg:text-xl px-6 py-2 border-2 border-brand transition-all duration-300 hover:cursor-pointer hover:bg-brand hover:text-gray-jet">
            Download CV
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 place-content-end gap-4 relative md:-bottom-48">
        {stats.map(({ label, value }) => (
          <div key={label} className="text-center md:text-right">
            <p className="text-3xl md:text-4xl text-brand font-anton tracking-wider">
              {value}
            </p>
            <p className="text-md md:text-lg lg:text-xl text-white-ghost">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;

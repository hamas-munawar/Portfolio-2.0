import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold">
          Hi, I&apos;m <span className="text-brand">Hamas Munawar.</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-gray-300 lg:text-lg ">
            I am a dedicated full-stack developer driven by Innovation and the
            need to be <span className="font-bold ">The Solver</span>. My focus
            is turning complex challenges into simple, elegant digital solutions
            across the entire stack. I specialize in the demanding, yet
            rewarding, space where robust
            <span className="font-bold"> deployment and infrastructure </span>
            meets seamless
            <span className="font-bold"> user experience (UX)</span>.
          </p>
        </div>
      </div>
      <div className="min-h-[400px] flex items-center justify-center">
        <Image
          src="/personal.png"
          width={400}
          height={400}
          alt="Developer illustration"
          className="inset-0 bg-brand rounded-full"
        />
      </div>
    </section>
  );
};

export default AboutSection;

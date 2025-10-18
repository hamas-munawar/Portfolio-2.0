import ProcessSection from "./ProcessSection";
import ServicesSection from "./ServicesSection";

const AboutPage = () => {
  return (
    <section
      id="contact"
      className="min-h-screen grid place-content-center gap-16 my-8 md:my-10 xl:px-20 pt-16"
    >
      <main className="slide-up flex flex-col gap-16">
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-anton font-bold mb-4 animate-fade-in-up">
            <span className="text-brand">Services</span> I Offer
          </h1>
          <p className="text-lg lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            I translate complex ideas into elegant, high-performance web
            applications. Explore the specific{" "}
            <strong>services, technologies, and methodologies</strong> I use to
            bring modern digital products to market.
          </p>
        </section>

        <ServicesSection />

        <ProcessSection />
      </main>
    </section>
  );
};

export default AboutPage;

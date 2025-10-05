import Image from "next/image";

import { Certificates } from "../data/Certificates";

const CertificationSection = () => {
  return (
    <section className="flex flex-col gap-12 py-16">
      <h2 className="text-5xl font-bold text-center font-anton">
        My Key <span className="text-brand">Certifications</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* CERTIFICATION CARD 1 (Image-Focused) */}

        {Certificates.map((cert, index) => (
          <div
            key={index}
            className="group p-0 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image Container: Taller height for dominance */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={cert.url}
                alt={`${cert.title} Credential`}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.05] group-hover:opacity-85"
                width={400}
                height={400}
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-brand mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{cert.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;

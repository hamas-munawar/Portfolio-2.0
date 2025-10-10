// Import icons from lucide-react library
import { Cloud, Gauge, Layers3, PlugZap } from "lucide-react";

// --- Mock Data: Define your services here ---
// Added an 'icon' key to map to the imported Lucide React component
const ServicesData = [
  {
    title: "Fullstack Web Application Development",
    description:
      "Building robust, scalable, and secure applications from the ground up. I handle everything from modern frontend user interfaces (React/Angular) to high-performance backend APIs (Node.js/Python) and database architecture (Firestore/PostgreSQL).",
    icon: Layers3, // Icon for layers/full stack development
  },
  {
    title: "API Design & Integration",
    description:
      "Specializing in designing and building RESTful and GraphQL APIs that are reliable, documented, and optimized for speed. I ensure seamless integration with third-party services and mobile applications.",
    icon: PlugZap, // Icon for connections/API
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "From setting up continuous integration/continuous deployment (CI/CD) pipelines to managing serverless functions and containerization (Docker), I ensure your application is deployed efficiently and runs reliably in the cloud (e.g., Firebase, AWS, Vercel).",
    icon: Cloud, // Icon for cloud services/deployment
  },
  {
    title: "Performance Optimization & Auditing",
    description:
      "I analyze existing applications to identify and resolve bottlenecks in code, database queries, and frontend rendering. Focus on maximizing page load speeds, Lighthouse scores, and overall user experience (UX).",
    icon: Gauge, // Icon for performance/speed
  },
];
// --- End Mock Data ---

const ServicesSection = () => {
  return (
    // Main container for the services section
    <section className="flex flex-col gap-12 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center font-anton">
        My <span className="text-brand">Services</span>
      </h2>

      {/* Responsive Grid for Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ServicesData.map((item, index) => {
          const IconComponent = item.icon; // Get the icon component from the data
          return (
            <div
              key={index}
              // Card styling
              className={`p-8 shadow-lg flex flex-col gap-4 transform transition duration-300 hover:shadow-brand/30`}
            >
              {/* Icon Display: new stylish container */}
              {IconComponent && (
                <div className="p-3 w-fit bg-brand/10 rounded-xl mb-4">
                  <IconComponent className="w-6 h-6 text-brand" />
                </div>
              )}

              {/* Service Title */}
              <h3 className="text-3xl font-bold text-brand tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 lg:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Export the component as default
export default ServicesSection;

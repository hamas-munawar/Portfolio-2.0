"use client";
import React from "react"; // Import React for React.ElementType

// Ensure your import is correct, and assume ServiceCategories is of type ServiceCategoriesType
import { ServiceCategories } from "../../data/Services";

// --- TYPE DEFINITIONS (Recommended to put these in a separate .d.ts or .ts file) ---
type IconComponent = React.ElementType;

interface Service {
  title: string;
  description: string;
  icon: IconComponent;
}

interface ServiceCategory {
  categoryTitle: string;
  description: string;
  icon: IconComponent;
  services: Service[];
}
// --- END TYPE DEFINITIONS ---

// --- 1. ServiceCard Component (TSX) ---
interface ServiceCardProps {
  service: Service;
  // serviceIndex is not strictly needed for props if key is handled in the map
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const ServiceIconComponent = service.icon;

  const cardClassName = `
    relative p-6 rounded-xl flex flex-col gap-4 shadow-lg
    transform transition duration-300 hover:shadow-2xl hover:shadow-brand/20
  `;

  return (
    <div className={cardClassName}>
      {/* Service Icon Container */}
      {ServiceIconComponent && (
        <div className="p-2 w-fit bg-brand/20 rounded-lg mb-1 flex-shrink-0">
          <ServiceIconComponent className="w-5 h-5 text-brand" />
        </div>
      )}

      {/* Service Title */}
      <h4 className="text-xl font-semibold text-white tracking-tight leading-snug">
        {service.title}
      </h4>

      {/* Service Description */}
      <p className="text-gray-300 leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="absolute top-0 right-0 h-1 w-8 bg-brand/60 rounded-tr-xl opacity-0 transition-opacity"></div>
    </div>
  );
};

// --- 2. CategoryHeader Component (TSX) ---
interface CategoryHeaderProps {
  category: ServiceCategory;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  const CategoryIconComponent = category.icon;

  return (
    <div className="flex flex-col gap-3 pb-6 border-b border-brand/50">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Category Icon */}
        {CategoryIconComponent && (
          <div className="p-3 w-fit bg-brand/15 rounded-lg flex-shrink-0">
            <CategoryIconComponent className="w-6 h-6 text-brand" />
          </div>
        )}

        {/* Category Title */}
        <h3 className="text-3xl font-bold text-white tracking-tight">
          {category.categoryTitle}
        </h3>
      </div>

      {/* Category Description */}
      <p className="text-gray-400 text-base lg:text-lg md:pl-10">
        {category.description}
      </p>
    </div>
  );
};

// --- 3. Main ServicesSection Component (TSX) ---
const ServicesSection: React.FC = () => {
  // TypeScript will now correctly infer the type of 'category'
  const categories: ServiceCategory[] = ServiceCategories as ServiceCategory[];

  return (
    <section className="flex flex-col gap-16 px-4 md:px-">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center font-anton tracking-wide">
        My <span className="text-brand">Services</span>
      </h2>

      <div className="flex flex-col gap-16">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col gap-10">
            <CategoryHeader category={category} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* TypeScript correctly infers the type of 'service' */}
              {category.services.map((service, serviceIndex) => (
                <ServiceCard key={serviceIndex} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the component as default
export default ServicesSection;

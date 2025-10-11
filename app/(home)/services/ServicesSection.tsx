"use client";
import React from "react";

import { ServiceCategories as categories } from "@/app/data/Services";

const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-16 px-4 md:px-">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center font-anton tracking-wide">
        My <span className="text-brand">Services</span>
      </h2>

      <div className="flex flex-col gap-16">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 pb-6 border-b border-brand/50">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Category Icon */}
                {category.icon && (
                  <div className="p-3 w-fit bg-brand/15 rounded-lg flex-shrink-0">
                    <category.icon className="w-6 h-6 text-brand" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* TypeScript correctly infers the type of 'service' */}
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className={`relative p-6 rounded-xl flex flex-col gap-4 shadow-lg transform transition duration-300 hover:shadow-2xl hover:shadow-brand/20`}
                >
                  {/* Service Icon Container */}
                  {service.icon && (
                    <div className="p-2 w-fit bg-brand/20 rounded-lg mb-1 flex-shrink-0">
                      <service.icon className="w-5 h-5 text-brand" />
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

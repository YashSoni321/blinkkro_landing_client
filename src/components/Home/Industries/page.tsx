"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

const industries = [
  {
    name: "IT & Software",
    icon: "mdi:laptop",
    clients: "500+",
    color: "bg-blue-500",
  },
  {
    name: "Manufacturing",
    icon: "mdi:factory",
    clients: "300+",
    color: "bg-orange-500",
  },
  {
    name: "Banking & Finance",
    icon: "mdi:bank",
    clients: "150+",
    color: "bg-green-500",
  },
  {
    name: "Healthcare",
    icon: "mdi:hospital-building",
    clients: "200+",
    color: "bg-red-500",
  },
  {
    name: "Real Estate",
    icon: "mdi:office-building",
    clients: "400+",
    color: "bg-purple-500",
  },
  {
    name: "Retail & E-commerce",
    icon: "mdi:storefront",
    clients: "350+",
    color: "bg-pink-500",
  },
  {
    name: "Education",
    icon: "mdi:school",
    clients: "250+",
    color: "bg-indigo-500",
  },
  {
    name: "Hospitality",
    icon: "mdi:silverware-fork-knife",
    clients: "180+",
    color: "bg-yellow-500",
  },
  {
    name: "Automotive",
    icon: "mdi:car",
    clients: "120+",
    color: "bg-gray-500",
  },
  {
    name: "Telecommunications",
    icon: "mdi:cellphone-wireless",
    clients: "80+",
    color: "bg-cyan-500",
  },
  {
    name: "Energy & Power",
    icon: "mdi:lightning-bolt",
    clients: "90+",
    color: "bg-amber-500",
  },
  {
    name: "Pharmaceuticals",
    icon: "mdi:pill",
    clients: "110+",
    color: "bg-teal-500",
  },
];

const IndustriesOrbit: React.FC = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <section className="py-6 sm:py-8 lg:py-12 relative bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex gap-2 items-center justify-center mb-3">
            <Icon
              icon="ph:house-simple-fill"
              width={16}
              height={16}
              className="text-primary"
            />
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Trusted Industries
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3">
            Serving <span className="text-primary">2500+ Companies</span> Across
            India
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredIndustry(i)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              <div
                className={`relative p-3 sm:p-4 rounded-xl text-center transition-all duration-300 ${
                  hoveredIndustry === i
                    ? `${industry.color} shadow-lg`
                    : "bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  <Icon
                    icon={industry.icon}
                    className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
                      hoveredIndustry === i ? "text-white" : "text-primary"
                    }`}
                  />
                </div>

                {/* Industry Name */}
                <h3
                  className={`text-xs sm:text-sm font-semibold mb-1 transition-colors duration-300 leading-tight ${
                    hoveredIndustry === i
                      ? "text-white"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {industry.name.split(" ")[0]}
                </h3>

                {/* Client Count */}
                <div
                  className={`text-xs transition-colors duration-300 ${
                    hoveredIndustry === i ? "text-white/90" : "text-primary"
                  }`}
                >
                  {industry.clients}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-6 sm:gap-8 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              2500+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Companies
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              50K+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Services
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              99.2%
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOrbit;

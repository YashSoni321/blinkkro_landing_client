"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const industriesData = [
  { name: "Tech", icon: "mdi:laptop", color: "bg-blue-500" },
  { name: "Factories", icon: "mdi:factory", color: "bg-orange-500" },
  { name: "Finance", icon: "mdi:bank", color: "bg-green-500" },
  { name: "Health", icon: "mdi:hospital-building", color: "bg-red-500" },
  { name: "Property", icon: "mdi:office-building", color: "bg-purple-500" },
  { name: "Shopping", icon: "mdi:storefront", color: "bg-pink-500" },
  { name: "Education", icon: "mdi:school", color: "bg-indigo-500" },
  {
    name: "Food & Stay",
    icon: "mdi:silverware-fork-knife",
    color: "bg-yellow-500",
  },
  { name: "Cars", icon: "mdi:car", color: "bg-gray-500" },
  { name: "Mobile", icon: "mdi:cellphone-wireless", color: "bg-cyan-500" },
  { name: "Energy", icon: "mdi:lightning-bolt", color: "bg-amber-500" },
  { name: "Medicine", icon: "mdi:pill", color: "bg-teal-500" },
];

const IndustriesOrbit: React.FC = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const t = useTranslations("industriesOrbit");

  const industries = industriesData.map((industry, index) => ({
    ...industry,
    clients: t.raw("industries")[index].clients,
  }));

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
              {t("badge")}
            </p>
          </div>

          <h2 className="text-2xl sm:text-40 text-40 lg:text-4xl font-medium text-black dark:text-white mb-3">
            {t("title")}
          </h2>

          {/* 📝 Simple Paragraph for Users */}
          <p className="sm:text-base text-gray-600 dark:text-gray-400 max-w-5xl mx-auto mb-6">
            {t("intro", {
              default:
                "Discover tailored services for your business sector. Whether you’re in IT, healthcare, or real estate, we connect you with trusted professionals to streamline your operations and help your business grow efficiently.",
            })}
          </p>
        </div>

        {/* Industries Grid (unchanged) */}
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
                <div className="flex justify-center mb-2">
                  <Icon
                    icon={industry.icon}
                    className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
                      hoveredIndustry === i ? "text-white" : "text-primary"
                    }`}
                  />
                </div>

                <h3
                  className={`text-sm sm:text-sm font-semibold mb-1 transition-colors duration-300 leading-tight ${
                    hoveredIndustry === i
                      ? "text-white"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {t.raw("industries")[i].name.split(" ")[0]}
                </h3>

                <div
                  className={`text-xs transition-colors duration-300 font-semibold ${
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
            <div className="text-xs font-semibold sm:text-sm text-gray-600 dark:text-gray-400">
              {t("stats.companies")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              50K+
            </div>
            <div className="text-xs font-semibold sm:text-sm text-gray-600 dark:text-gray-400">
              {t("stats.services")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              99.2%
            </div>
            <div className="text-xs font-semibold sm:text-sm text-gray-600 dark:text-gray-400">
              {t("stats.satisfaction")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOrbit;

"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const industries = [
  { name: "Real Estate", icon: "mdi:office-building" },
  { name: "Healthcare", icon: "mdi:stethoscope" },
  { name: "E-commerce", icon: "mdi:cart-outline" },
  { name: "Travel", icon: "mdi:airplane" },
  { name: "Education", icon: "mdi:school" },
  { name: "Finance", icon: "mdi:bank" },
  { name: "Logistics", icon: "mdi:truck-outline" },
  { name: "Entertainment", icon: "mdi:party-popper" },
];

const IndustriesOrbit: React.FC = () => {
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setRadius(160);
      } else {
        setRadius(200);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Orbit on Left */}
          <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-xl mx-auto h-[350px] sm:h-[420px] lg:h-[500px]">
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/logo/logo-light.png"}
                alt="logo"
                width={120}
                height={60}
                unoptimized={true}
                className="block dark:hidden"
              />
              <Image
                src={"/images/logo/logo-dark.png"}
                alt="logo"
                width={120}
                height={60}
                unoptimized={true}
                className="hidden dark:block"
              />
            </div>

            {/* Rotating Orbit */}
            <div className="absolute inset-0 animate-spin-slow">
              {industries.map((industry, i) => {
                const angle = (i / industries.length) * (2 * Math.PI);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="animate-spin-reverse-slow flex flex-col items-center">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-lg hover:scale-110 transition-transform before:absolute before:inset-0 before:rounded-xl before:border before:border-blue-500/50 before:animate-pulse-glow">
                        <Icon
                          icon={industry.icon}
                          width={24}
                          className="sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-primary drop-shadow-md"
                        />
                      </div>
                      <p className="text-xs sm:text-sm mt-2 font-medium text-gray-800 dark:text-gray-200">
                        {industry.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content on Right */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="flex gap-2.5 mb-3 items-center justify-center lg:justify-start">
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
              />
              <p className="text-sm sm:text-base font-semibold text-dark/75 dark:text-white/75">
                BlinkKaro Industries
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400">
              From real estate to healthcare, BlinkKaro powers solutions for the
              most impactful industries worldwide. Our expertise spans multiple
              domains, delivering tailored solutions for each industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOrbit;

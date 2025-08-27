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
      if (window.innerWidth < 480) {
        setRadius(80);
      } else if (window.innerWidth < 640) {
        setRadius(100);
      } else if (window.innerWidth < 1024) {
        setRadius(140);
      } else {
        setRadius(180);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="text-center lg:text-left max-w-xl lg:max-w-2xl mx-auto">
            <div className="text-center flex gap-2.5 my-6 items-center justify-center lg:justify-center">
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
              />
              <p className="text-base font-semibold text-dark/75 dark:text-white/75">
                BlinkKaro Industries
              </p>
            </div>
            {/* <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2> */}
            <h2 className="text-40 lg:text-52 my-6 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center">
              From real estate to healthcare, BlinkKaro powers solutions for the
              most impactful industries worldwide. Our expertise spans multiple
              domains, delivering tailored solutions for each industry.
            </p>
          </div>
          {/* Orbit on Left */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-auto h-[280px] sm:h-[320px] lg:h-[400px] flex-shrink-0">
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/logo/logo-light.png"}
                alt="logo"
                width={80}
                height={30}
                unoptimized={true}
                className="block dark:hidden sm:w-[100px] sm:h-[40px] lg:w-[100px] lg:h-[50px]"
              />
              <Image
                src={"/images/logo/logo-dark.png"}
                alt="logo"
                width={80}
                height={40}
                unoptimized={true}
                className="hidden dark:block sm:w-[100px] sm:h-[50px] lg:w-[120px] lg:h-[60px]"
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
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border border-white/40 shadow-lg hover:scale-110 transition-transform">
                        <Icon
                          icon={industry.icon}
                          width={16}
                          height={16}
                          className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary drop-shadow-md"
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs mt-1 font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                        {industry.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content on Right */}
        </div>
      </div>
    </section>
  );
};

export default IndustriesOrbit;

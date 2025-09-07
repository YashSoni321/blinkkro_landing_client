"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

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
  const [radius, setRadius] = useState(200);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState(false);

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

    // Trigger stats animation after component mounts
    const timer = setTimeout(() => setAnimatedStats(true), 500);

    return () => {
      window.removeEventListener("resize", updateRadius);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 relative bg-gradient-to-br from-primary/5 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 w-full lg:hidden mb-8">
            <div
              className={`text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 transition-all duration-700 ${
                animatedStats
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="text-2xl font-bold text-primary">2500+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Companies
              </div>
            </div>
            <div
              className={`text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 transition-all duration-700 delay-200 ${
                animatedStats
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Industries
              </div>
            </div>
            <div
              className={`text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 transition-all duration-700 delay-400 ${
                animatedStats
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Services
              </div>
            </div>
          </div>
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
              Powering{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                India&apos;s Economy
              </span>
            </h2>
            <p className="text-base font-normal text-black/50 dark:text-white/50 text-center mb-6">
              From Fortune 500 IT giants to local manufacturing heroes — 2500+
              companies across 12 major industries trust BlinkKaro to keep their
              operations running smoothly.
            </p>

            {/* Desktop Stats */}
            <div className="hidden lg:flex justify-center gap-8 mb-8">
              <div
                className={`text-center transition-all duration-700 ${
                  animatedStats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Companies Served
                </div>
              </div>
              <div
                className={`text-center transition-all duration-700 delay-200 ${
                  animatedStats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Services Delivered
                </div>
              </div>
              <div
                className={`text-center transition-all duration-700 delay-400 ${
                  animatedStats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="text-3xl font-bold text-primary">99.2%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
          {/* Orbit on Left */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-auto h-[280px] sm:h-[320px] lg:h-[400px] flex-shrink-0">
            {/* Center Logo with Pulse Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl">
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
              </div>
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
                    className="absolute flex flex-col items-center cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setHoveredIndustry(i)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                  >
                    <div className="animate-spin-reverse-slow flex flex-col items-center">
                      <div
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full transition-all duration-500 ${
                          hoveredIndustry === i
                            ? "bg-primary scale-110 shadow-xl"
                            : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:scale-105 hover:shadow-lg"
                        }`}
                      >
                        <Icon
                          icon={industry.icon}
                          className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-colors duration-300 ${
                            hoveredIndustry === i
                              ? "text-white"
                              : "text-primary"
                          }`}
                        />
                      </div>
                      {hoveredIndustry === i && (
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-fade-in whitespace-nowrap">
                          {industry.clients} clients
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Industry Name Display */}
          <div className="text-center mt-8 lg:mt-0">
            {hoveredIndustry !== null ? (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {industries[hoveredIndustry].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {industries[hoveredIndustry].clients} companies trust us
                </p>
              </div>
            ) : (
              <div className="text-gray-400 dark:text-gray-500">
                <p className="text-lg">Hover over an industry</p>
                <p className="text-sm">to see our impact</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOrbit;

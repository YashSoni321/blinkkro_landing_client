"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AboutBlinkKaro() {
  const features = [
    {
      icon: "ph:clock-clockwise",
      title: "Book in Seconds",
      description: "Find and book services instantly with just a few taps",
    },
    {
      icon: "ph:shield-check",
      title: "Verified Providers",
      description: "All service providers are background-checked and verified",
    },
    {
      icon: "ph:money",
      title: "Transparent Pricing",
      description: "No hidden fees. See exact costs upfront before booking",
    },
    {
      icon: "ph:headset",
      title: "24/7 Support",
      description: "Round-the-clock customer support for peace of mind",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone Mockup */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 shadow-2xl mx-auto w-full max-w-80">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">BlinkKaro</h3>
                    <Icon icon={"ph:bell"} width={24} height={24} />
                  </div>
                  <p className="text-sm opacity-90">Find services near you</p>
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon
                        icon={"ph:broom"}
                        width={20}
                        height={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-dark dark:text-white">
                        House Cleaning
                      </p>
                      <p className="text-xs text-dark/60 dark:text-white/60">
                        Available now
                      </p>
                    </div>
                    <span className="text-primary font-bold text-sm">₹50</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon
                        icon={"ph:wrench"}
                        width={20}
                        height={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-dark dark:text-white">
                        Plumbing
                      </p>
                      <p className="text-xs text-dark/60 dark:text-white/60">
                        2 providers nearby
                      </p>
                    </div>
                    <span className="text-primary font-bold text-sm">₹75</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold mt-4">
                  Book Service
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
              <Icon
                icon={"ph:star-fill"}
                width={32}
                height={32}
                className="text-primary"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center animate-pulse">
              <Icon
                icon={"ph:lightning-fill"}
                width={24}
                height={24}
                className="text-yellow-500"
              />
            </div>

            <div className="absolute top-1/2 -right-12 w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center animate-ping">
              <Icon
                icon={"ph:check-circle-fill"}
                width={20}
                height={20}
                className="text-green-500"
              />
            </div>
          </div>
          <div>
            <div className="flex gap-2.5 items-center mb-6">
              <Icon
                icon={"ph:lightning"}
                width={24}
                height={24}
                className="text-primary"
              />
              <p className="text-base font-semibold text-primary">
                What is BlinkKaro?
              </p>
            </div>

            <h2 className="text-4xl sm:text-52 font-bold tracking-tighter text-dark dark:text-white mb-6">
              Your <span className="text-primary">All-in-One</span> Service
              Partner
            </h2>

            <p className="text-xm text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
              BlinkKaro makes life effortless by bringing **everyday services to
              your fingertips**. Whether it’s fixing a leaky tap, getting a
              quick AC repair, booking a salon at home, or planning your next
              big celebration—BlinkKaro connects you with **trusted, verified
              professionals in seconds**.
            </p>

            <p className="text-xm text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
              No more long searches, confusing prices, or unreliable providers.
              With BlinkKaro, you get **speed, transparency, and peace of
              mind**—all in a blink ✨.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={feature.icon}
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-dark/60 dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300">
                Book Your First Service
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Join as a Provider
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-dark/10 dark:border-white/10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">10K+</h3>
            <p className="text-dark/60 dark:text-white/60">Happy Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
            <p className="text-dark/60 dark:text-white/60">Service Providers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
            <p className="text-dark/60 dark:text-white/60">Service Categories</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">4.9★</h3>
            <p className="text-dark/60 dark:text-white/60">Average Rating</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

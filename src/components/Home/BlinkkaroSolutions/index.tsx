"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProprty } from "@/app/api/featuredproperty";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const BlinkKaroSolutions: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) api.scrollTo(index);
  };

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Right Side - Carousel */}
          <div className="relative order-1 lg:order-2">
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                {featuredProprty.slice(1).map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full object-contain h-540"
                      unoptimized={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    current === index + 1 ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Left Side - BlinkKaro Content */}
          <div className="flex flex-col gap-10 order-2 lg:order-1">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon
                  icon="mdi:lightning-bolt"
                  className="text-2xl text-primary"
                />
                Why Choose BlinkKaro?
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                Life&apos;s Too Complicated. <span className="text-primary">We Made It Simple</span>
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon
                  icon="mdi:target"
                  width={28}
                  height={26}
                  className="text-dark/50 dark:text-white/50"
                />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  Stop juggling multiple apps and contacts. Everything you need, one tap away.
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              BlinkKaro eliminates the frustration of searching endlessly,
              calling multiple providers, and worrying about trust or payments.
              Whether it’s beauty, wellness, home services, or events —
              BlinkKaro brings everything under one secure and smart platform.
            </p>

            {/* Problems Solved Grid */}
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:clock-alert-outline"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">Get Help in Minutes</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:cash-remove"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">Know Costs Upfront</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:shield-check"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">Background-Checked Pros</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:rocket-launch"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">Book in 30 Seconds</h6>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-10 items-center">
              <Link
                href="/get-started"
                className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white"
              >
Join 10K+ Happy Users
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  2 Min Average
                </h4>
                <p className="text-base text-dark/50">
                  From booking to confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlinkKaroSolutions;

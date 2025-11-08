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
import { useTranslations } from "next-intl";

const KartSquareSolutions: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const t = useTranslations("kartSquareSolutions");

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
          <div className="relative order-1 lg:order-2 h-96 sm:h-96 md:h-96">
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
          </div>
          {/* Left Side - KartSquare Content */}
          <div className="flex flex-col gap-10 order-2 lg:order-1">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon
                  icon="mdi:lightning-bolt"
                  className="text-2xl text-primary"
                />
                {t("badge")}
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                {t("title")}
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon
                  icon="mdi:target"
                  width={28}
                  height={26}
                  className="text-dark/50 dark:text-white/50"
                />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  {t("targetDescription")}
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              {t("description")}
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
                <h6 className="text-dark dark:text-white">
                  {t("problemsSolved.helpMinutes")}
                </h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:cash-remove"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">
                  {t("problemsSolved.knowCosts")}
                </h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:shield-check"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">
                  {t("problemsSolved.backgroundChecked")}
                </h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon
                    icon="mdi:rocket-launch"
                    className="text-xl text-primary"
                  />
                </div>
                <h6 className="text-dark dark:text-white">
                  {t("problemsSolved.bookSeconds")}
                </h6>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-10 items-center">
              <Link
                href="/get-started"
                className="px-8 py-4 text-sm sm:text-2xl md:text-2xl font-medium bg-primary text-white rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-300"
              >
                {t("cta.button")}
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  {t("cta.averageTime")}
                </h4>
                <p className="text-base text-dark/50">
                  {t("cta.confirmation")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KartSquareSolutions;

"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { featuredProprty } from "@/app/api/featuredproperty";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const [, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const t = useTranslations("howItWorks");

  return (
    <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 overflow-hidden">
      {/* What is KartSquare */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Carousel */}
        <div className="relative order-1 lg:order-2">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {featuredProprty.map((item, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={item.scr}
                    alt={item.alt}
                    width={680}
                    height={530}
                    className="rounded-2xl w-full h-auto object-contain max-h-[400px] sm:max-h-[500px]"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="mdi:lightning-bolt"
                className="text-2xl text-primary"
              />
              {t("badge")}
            </p>
            <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
              <span className="text-primary">{t("title")}</span>
            </h2>
            <div className="flex items-center gap-2.5">
              <Icon
                icon="mdi:map-marker-path"
                width={28}
                height={26}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-base">
                {t("mapDescription")}
              </p>
            </div>
          </div>

          <p className="text-base text-dark/50 dark:text-white/50">
            {t("description")}
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 gap-10">
            <Step
              number={t("steps.step1.number")}
              icon="mdi:magnify"
              title={t("steps.step1.title")}
            />
            <Step
              number={t("steps.step2.number")}
              icon="mdi:calendar-check"
              title={t("steps.step2.title")}
            />
            <Step
              number={t("steps.step3.number")}
              icon="mdi:credit-card-outline"
              title={t("steps.step3.title")}
            />
            <Step
              number={t("steps.step4.number")}
              icon="mdi:account-check"
              title={t("steps.step4.title")}
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-10 text-center sm:text-left">
            <Link
              href="/get-started"
              className="px-8 py-4 text-sm sm:text-2xl md:text-2xl font-medium bg-primary text-white rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-300"
            >
              {t("cta.button")}
            </Link>

            <div>
              <h4 className="text-2xl sm:text-4xl font-semibold text-dark dark:text-white">
                {t("cta.rating")}
              </h4>
              <p className="text-sm sm:text-base text-dark/60 dark:text-white/70">
                {t("cta.customers")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Reusable Components ----------------- */
const Step = ({
  number,
  icon,
  title,
}: {
  number: string;
  icon: string;
  title: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="relative bg-primary/10 p-3 rounded-full">
      <Icon icon={icon} className="text-xl text-primary" />
      <div className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
        {number}
      </div>
    </div>
    <h6 className="text-base text-dark dark:text-white font-medium">{title}</h6>
  </div>
);

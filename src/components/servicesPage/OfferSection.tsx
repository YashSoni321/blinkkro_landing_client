"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type OfferSectionProps = {
  t: (key: string) => string;
};

export default function OfferSection({ t }: OfferSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-800">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2.5 items-center mb-4">
              <Icon icon="ph:lightning" className="text-2xl text-primary" />
              {t("offer.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              {t("offer.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t("offer.description1")}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("offer.description2")}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    icon="ph:check-circle"
                    width={20}
                    height={20}
                    className="text-primary"
                  />
                </div>
                <span className="text-dark dark:text-white font-medium">
                  {t("offer.features.verified")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    icon="ph:check-circle"
                    width={20}
                    height={20}
                    className="text-primary"
                  />
                </div>
                <span className="text-dark dark:text-white font-medium">
                  {t("offer.features.availability")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    icon="ph:check-circle"
                    width={20}
                    height={20}
                    className="text-primary"
                  />
                </div>
                <span className="text-dark dark:text-white font-medium">
                  {t("offer.features.pricing")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    icon="ph:check-circle"
                    width={20}
                    height={20}
                    className="text-primary"
                  />
                </div>
                <span className="text-dark dark:text-white font-medium">
                  {t("offer.features.payments")}
                </span>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden ">
              <Image
                loading="lazy"
                src="/images/kartsquare_categories/Blinkkaro_hero.png"
                alt={t("offer.imageAlt")}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
              <Icon
                icon="ph:star-fill"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { SafetyFeaturesCard } from "@/components/servicesPage/SafetyFeaturesCard";
import StatCard from "@/app/common/StatCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SafetyFeaturesSectionProps = {
  t: (key: string) => string;
  safetyFeatures: any[];
};

const sliderSettings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
};

export default function SafetyFeaturesSection({ t, safetyFeatures }: SafetyFeaturesSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
            <Icon
              icon="ph:shield-check-fill"
              className="text-2xl text-primary"
            />
            {t("safety.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
            {t("safety.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("safety.description")}
          </p>
        </div>

        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="px-3">
                <SafetyFeaturesCard feature={feature} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {safetyFeatures.map((feature, index) => (
            <SafetyFeaturesCard key={index} feature={feature} />
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 lg:py-16 py-6">
          <StatCard number="100%" label={t("safety.stats.verified")} />
          <StatCard number="24/7" label={t("safety.stats.support")} />
          <StatCard number="100%" label={t("safety.stats.payments")} />
        </div>
      </div>
    </section>
  );
}

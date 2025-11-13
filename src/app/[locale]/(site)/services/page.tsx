"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/shared/HeroSub";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatCard from "@/app/common/StatCard";
import { useTranslations } from "next-intl";
import { getServicePageData } from "./data";
import { CategoriesCard } from "@/components/servicesPage/CategoriesCard";
import { SafetyFeaturesCard } from "@/components/servicesPage/SafetyFeaturesCard";

const sliderSettings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ServicesPage = () => {
  const t = useTranslations("servicesPage");
  const { serviceCategories, bookingSteps, providerSteps, safetyFeatures } =
    React.useMemo(() => getServicePageData(t), [t]);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSub
        title={t("hero.title")}
        description={t("hero.description")}
        badge={t("hero.badge")}
      />

      {/* What Kind of Services We Offer */}
      <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-800">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center mb-4">
                <Icon icon="ph:lightning" className="text-2xl text-primary" />
                {t("offer.subtitle")}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
                {t("offer.title")}
              </h2>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-6 leading-relaxed">
                {t("offer.description1")}
              </p>
              <p className="text-base text-dark/60 dark:text-white/60 mb-8 leading-relaxed">
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kartsquare_categories/Blinkkaro_hero.png"
                  alt={t("offer.imageAlt")}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <div className="h-12 w-12 bg-green-400/20 rounded-full flex items-center justify-center animate-pulse">
                      <Icon
                        icon="ph:check-circle-fill"
                        width={20}
                        height={20}
                        className="text-green-500"
                      />
                    </div>
                    {t("offer.imageTitle")}
                  </h3>
                  <p className="text-white/90 ml-16">
                    {t("offer.imageDescription")}
                  </p>
                </div>
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

      {/* Categories of Services */}
      <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
        <div className="absolute left-0 top-0">
          <Image
            src="/images/categories/Vector.svg"
            alt={"categories vectorAlt"}
            width={800}
            height={1050}
            className="dark:hidden opacity-30"
            unoptimized={true}
          />
          <Image
            src="/images/categories/Vector-dark.svg"
            alt={t("categories.vectorAlt")}
            width={800}
            height={1050}
            className="hidden dark:block opacity-30"
            unoptimized={true}
          />
        </div>
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:grid-four" className="text-2xl text-primary" />
              {t("categories.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              {t("categories.title")}
            </h2>
            <p className="text-dark/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
              {t("categories.description")}
            </p>
          </div>
          <div className="lg:hidden">
            <Slider {...sliderSettings}>
              {serviceCategories.map((service, index) => (
                <div key={index} className="px-3">
                  <CategoriesCard service={service} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
            {serviceCategories.map((service, index) => (
              <CategoriesCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How Do I Book a Service */}
      <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-800">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon
                icon="ph:calendar-check-fill"
                className="text-2xl text-primary"
              />
              {t("booking.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              {t("booking.title")}
            </h2>
            <p className="text-dark/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
              {t("booking.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon
                      icon={step.icon}
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                  <div className="absolute -top-2 lg:-right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-dark/60 dark:text-white/60 mb-3">
                  {step.description}
                </p>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                  <p className="text-sm font-medium text-dark/70 dark:text-white/70 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Do I Join Kartsquare */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:rocket-launch" className="text-2xl text-primary" />
              {t("provider.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              {t("provider.title")}
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
              {t("provider.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {providerSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110">
                    <Icon icon={step.icon} width={24} height={24} />
                  </div>
                  <div className="absolute -top-2 lg:-right-2 bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className=" text-dark/60 dark:text-white/60 mb-2">
                  {step.description}
                </p>
                <div className="mt-3 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg text-left">
                  <p className="text-sm font-medium text-dark/70 dark:text-white/70 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300 shadow-lg">
              {t("provider.button")}
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon
                icon="ph:shield-check-fill"
                className="text-2xl text-primary"
              />
              {t("safety.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              {t("safety.title")}
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
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
    </div>
  );
};

export default ServicesPage;

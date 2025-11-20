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
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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

const CategoriesCard = ({ service }) => {
  const t = useTranslations("servicesPage");

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-3xl dark:hover:shadow-white/20 transition-all duration-300 border border-dark/10 dark:border-white/10 hover:border-primary/50">
      {/* Optimized Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          quality={85}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`bg-gradient-to-br ${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon
              icon={service.icon}
              width={24}
              height={24}
              className="text-white"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-dark/60 dark:text-white/60 mb-4 leading-relaxed">
          {service.description}
        </p>
        <div className="space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Icon
                icon="ph:check"
                width={16}
                height={16}
                className="text-primary flex-shrink-0"
              />
              <span className="text-dark/70 dark:text-white/70">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>{t("categories.learnMore")}</span>
          <Icon icon="ph:arrow-right" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

const SafetyFeaturesCard = ({ feature }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-3xl dark:hover:shadow-white/20 transition-all duration-300 border border-dark/10 dark:border-white/10 hover:border-primary/50 md:py-16 min-h-[32rem] max-h-[32rem] lg:min-h-full">
      <div
        className={`bg-gradient-to-br ${feature.color} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon
          icon={feature.icon}
          width={32}
          height={32}
          className="text-white"
        />
      </div>
      <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 text-center">
        {feature.title}
      </h3>
      <p className="text-dark/60 dark:text-white/60 text-center leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const ServicesPage = () => {
  const t = useTranslations("servicesPage");

  const serviceCategories = [
    {
      icon: "ph:broom",
      title: t("categories.data.homeCleaning.title"),
      description: t("categories.data.homeCleaning.description"),
      image: "/images/services/home-cleaning.png",
      color: "from-blue-500 to-blue-600",
      features: [
        t("categories.data.homeCleaning.features.0"),
        t("categories.data.homeCleaning.features.1"),
        t("categories.data.homeCleaning.features.2"),
      ],
    },
    {
      icon: "ph:wrench",
      title: t("categories.data.plumbing.title"),
      description: t("categories.data.plumbing.description"),
      image: "/images/services/plumbing.png",
      color: "from-green-500 to-green-600",
      features: [
        t("categories.data.plumbing.features.0"),
        t("categories.data.plumbing.features.1"),
        t("categories.data.plumbing.features.2"),
      ],
    },
    {
      icon: "ph:sparkle",
      title: t("categories.data.beauty.title"),
      description: t("categories.data.beauty.description"),
      image: "/images/services/beauty.png",
      color: "from-pink-500 to-pink-600",
      features: [
        t("categories.data.beauty.features.0"),
        t("categories.data.beauty.features.1"),
        t("categories.data.beauty.features.2"),
      ],
    },
    {
      icon: "ph:toolbox",
      title: t("categories.data.homeServices.title"),
      description: t("categories.data.homeServices.description"),
      image: "/images/services/home-services.png",
      color: "from-orange-500 to-orange-600",
      features: [
        t("categories.data.homeServices.features.0"),
        t("categories.data.homeServices.features.1"),
        t("categories.data.homeServices.features.2"),
      ],
    },
    {
      icon: "ph:car",
      title: t("categories.data.carWash.title"),
      description: t("categories.data.carWash.description"),
      image: "/images/services/car-wash.png",
      color: "from-purple-500 to-purple-600",
      features: [
        t("categories.data.carWash.features.0"),
        t("categories.data.carWash.features.1"),
        t("categories.data.carWash.features.2"),
      ],
    },
    {
      icon: "ph:dumbbell",
      title: t("categories.data.fitness.title"),
      description: t("categories.data.fitness.description"),
      image: "/images/services/fitness.png",
      color: "from-indigo-500 to-indigo-600",
      features: [
        t("categories.data.fitness.features.0"),
        t("categories.data.fitness.features.1"),
        t("categories.data.fitness.features.2"),
      ],
    },
    {
      icon: "ph:cake",
      title: t("categories.data.catering.title"),
      description: t("categories.data.catering.description"),
      image: "/images/services/catering.png",
      color: "from-red-500 to-red-600",
      features: [
        t("categories.data.catering.features.0"),
        t("categories.data.catering.features.1"),
        t("categories.data.catering.features.2"),
      ],
    },
    {
      icon: "ph:calendar",
      title: t("categories.data.eventPlanning.title"),
      description: t("categories.data.eventPlanning.description"),
      image: "/images/services/event-planning.jpg",
      color: "from-teal-500 to-teal-600",
      features: [
        t("categories.data.eventPlanning.features.0"),
        t("categories.data.eventPlanning.features.1"),
        t("categories.data.eventPlanning.features.2"),
      ],
    },
  ];

  const bookingSteps = [
    {
      step: 1,
      icon: "ph:magnifying-glass",
      title: t("booking.steps.step1.title"),
      description: t("booking.steps.step1.description"),
      details: t("booking.steps.step1.details"),
    },
    {
      step: 2,
      icon: "ph:calendar-check",
      title: t("booking.steps.step2.title"),
      description: t("booking.steps.step2.description"),
      details: t("booking.steps.step2.details"),
    },
    {
      step: 3,
      icon: "ph:user-check",
      title: t("booking.steps.step3.title"),
      description: t("booking.steps.step3.description"),
      details: t("booking.steps.step3.details"),
    },
    {
      step: 4,
      icon: "ph:credit-card",
      title: t("booking.steps.step4.title"),
      description: t("booking.steps.step4.description"),
      details: t("booking.steps.step4.details"),
    },
  ];

  const providerSteps = [
    {
      step: 1,
      icon: "ph:user-plus",
      title: t("provider.steps.step1.title"),
      description: t("provider.steps.step1.description"),
      details: t("provider.steps.step1.details"),
    },
    {
      step: 2,
      icon: "ph:identification-card",
      title: t("provider.steps.step2.title"),
      description: t("provider.steps.step2.description"),
      details: t("provider.steps.step2.details"),
    },
    {
      step: 3,
      icon: "ph:shield-check",
      title: t("provider.steps.step3.title"),
      description: t("provider.steps.step3.description"),
      details: t("provider.steps.step3.details"),
    },
    {
      step: 4,
      icon: "ph:plus-circle",
      title: t("provider.steps.step4.title"),
      description: t("provider.steps.step4.description"),
      details: t("provider.steps.step4.details"),
    },
    {
      step: 5,
      icon: "ph:calendar-star",
      title: t("provider.steps.step5.title"),
      description: t("provider.steps.step5.description"),
      details: t("provider.steps.step5.details"),
    },
  ];

  const safetyFeatures = [
    {
      icon: "ph:shield-check",
      title: t("safety.features.verified.title"),
      description: t("safety.features.verified.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: "ph:check-circle",
      title: t("safety.features.approved.title"),
      description: t("safety.features.approved.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "ph:headset",
      title: t("safety.features.support.title"),
      description: t("safety.features.support.description"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "ph:lock",
      title: t("safety.features.payments.title"),
      description: t("safety.features.payments.description"),
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "ph:star",
      title: t("safety.features.rating.title"),
      description: t("safety.features.rating.description"),
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: "ph:handshake",
      title: t("safety.features.dispute.title"),
      description: t("safety.features.dispute.description"),
      color: "from-pink-500 to-pink-600",
    },
  ];

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
              <div className="relative rounded-2xl overflow-hidden ">
                <Image
                  src="/images/kartsquare_categories/Blinkkaro_hero.png"
                  alt={t("offer.imageAlt")}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized={true}
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
                  <div className="absolute -top-2 lg:-right-2 right-2 bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow-lg">
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

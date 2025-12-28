"use client";
import React from "react";
import HeroSub from "@/components/shared/HeroSub";
import { useTranslations } from "next-intl";
import OfferSection from "@/components/servicesPage/OfferSection";
import CategoriesSection from "@/components/servicesPage/CategoriesSection";
import BookingStepsSection from "@/components/servicesPage/BookingStepsSection";
import ProviderStepsSection from "@/components/servicesPage/ProviderStepsSection";
import SafetyFeaturesSection from "@/components/servicesPage/SafetyFeaturesSection";

const ServicesPage = () => {
  "use client";
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
      <HeroSub
        title={t("hero.title")}
        description={t("hero.description")}
        badge={t("hero.badge")}
      />
      <OfferSection t={t} />
      <CategoriesSection t={t} serviceCategories={serviceCategories} />
      <BookingStepsSection t={t} bookingSteps={bookingSteps} />
      <ProviderStepsSection t={t} providerSteps={providerSteps} />
      <SafetyFeaturesSection t={t} safetyFeatures={safetyFeatures} />
    </div>
  );
};

export default ServicesPage;

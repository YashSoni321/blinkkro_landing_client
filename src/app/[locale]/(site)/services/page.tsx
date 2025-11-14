"use client";
import React from "react";
import HeroSub from "@/components/shared/HeroSub";
import { useTranslations } from "next-intl";
import { getServicePageData } from "./data";
import OfferSection from "@/components/servicesPage/OfferSection";
import CategoriesSection from "@/components/servicesPage/CategoriesSection";
import BookingStepsSection from "@/components/servicesPage/BookingStepsSection";
import ProviderStepsSection from "@/components/servicesPage/ProviderStepsSection";
import SafetyFeaturesSection from "@/components/servicesPage/SafetyFeaturesSection";

const ServicesPage = () => {
  const t = useTranslations("servicesPage");
  const { serviceCategories, bookingSteps, providerSteps, safetyFeatures } =
    React.useMemo(() => getServicePageData(t), [t]);

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

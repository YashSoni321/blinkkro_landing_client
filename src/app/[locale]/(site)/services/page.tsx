import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl"; // or your i18n library

export const metadata: Metadata = {
  title: "servicesPage.metadata.title",
  description: "servicesPage.metadata.description",
  keywords: "servicesPage.metadata.keywords",
  openGraph: {
    title: "All Services - Home, Beauty, Join Waitlist & More | BlinkKaro",
    description: "servicesPage.metadata.description",
    url: "https://blinkkaro.com/services",
  },
  alternates: {
    canonical: "https://kartsquare.com/services",
  },
};

const page = () => {
  const t = useTranslations();

  return (
    <>
      <HeroSub
        title={t("servicesPage.hero.title")}
        description={t("servicesPage.hero.description")}
        badge={t("servicesPage.hero.badge")}
      />
      <PropertiesListing />
    </>
  );
};

export default page;

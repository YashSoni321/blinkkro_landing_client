import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services - Home, Beauty, Join Waitlist & More | BlinkKaro",
  description: "Browse 50+ verified services on BlinkKaro. From home cleaning to event planning, beauty treatments to repairs - find trusted professionals with transparent pricing.",
  keywords: [
    "home services",
    "beauty services",
    "event planning",
    "repair services",
    "verified professionals",
    "service marketplace",
    "BlinkKaro services"
  ],
  openGraph: {
    title: "All Services - Home, Beauty, Join Waitlist & More | BlinkKaro",
    description: "Browse 50+ verified services on BlinkKaro. From home cleaning to event planning, beauty treatments to repairs - find trusted professionals with transparent pricing.",
    url: "https://blinkkaro.com/services",
  },
  alternates: {
    canonical: "https://kartsquare.com/services",
  },
};

const Page = async () => {
  const t = await getTranslations();

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

export default Page;

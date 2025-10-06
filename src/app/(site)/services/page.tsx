import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "All Services - Home, Beauty, Events & More | KartSquare Service Marketplace",
  description:
    "Browse 50+ verified services on kartsquare. From home cleaning to event planning, beauty treatments to repairs - find trusted professionals with transparent pricing.",
  keywords: [
    "home services",
    "beauty services",
    "event planning",
    "repair services",
    "verified professionals",
    "service marketplace",
    "KartSquare services",
  ],
  openGraph: {
    title: "All Services - Home, Beauty, Events & More | kartsquare",
    description:
      "Discover 50+ trusted services with verified professionals. Book instantly with transparent pricing and 24/7 support.",
    url: "https://kartsquare.com/services",
  },
  alternates: {
    canonical: "https://kartsquare.com/services",
  },
};

const page = () => {
  return (
    <>
      {/* <HeroSub
                title="Discover inspiring designed homes."
                description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
                badge="Properties"
            /> */}
      <HeroSub
        title="All your favorite services in one app."
        description="From travel and food to wellness and more — KartSquare makes it safe, simple, and rewarding to book everything you need."
        badge="Services"
      />
      <PropertiesListing />
    </>
  );
};

export default page;

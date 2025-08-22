import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property List | blinkkaro",
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
        description="From travel and food to wellness and more — BlinkKaro makes it safe, simple, and rewarding to book everything you need."
        badge="Services"
      />
      <PropertiesListing />
    </>
  );
};

export default page;

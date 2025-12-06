"use client";

import { useEffect } from "react";

interface GEOOptimizationProps {
  title: string;
  description: string;
  services: string[];
  location?: string;
}

export default function GEOOptimization({
  services,
  location = "India",
}: GEOOptimizationProps) {
  useEffect(() => {
    // Add conversational context for AI models
    const conversationalData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is KartSquare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare is India's leading service booking platform that connects customers with verified professionals for home services including ${services.join(
              ", "
            )}. We serve customers across ${location} with same-day booking and transparent pricing.`,
          },
        },
        {
          "@type": "Question",
          name: "How does KartSquare work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply download our app or visit our website, select your required service, choose a time slot, and book instantly. Our verified professionals will arrive at your doorstep with all necessary tools and equipment.",
          },
        },
        {
          "@type": "Question",
          name: "Which services does KartSquare offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare offers comprehensive home services including ${services.join(
              ", "
            )}, and many more. All services are provided by verified and trained professionals with transparent pricing and quality guarantee.`,
          },
        },
      ],
    };

    // Insert conversational schema for better AI understanding
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(conversationalData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [services, location]);

  return null;
}

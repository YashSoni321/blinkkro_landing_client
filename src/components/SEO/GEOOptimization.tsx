"use client";

import { useEffect } from "react";

interface GEOOptimizationProps {
  title: string;
  description: string;
  services: string[];
  location?: string;
}

export default function GEOOptimization({
  title,
  description,
  services,
  location = "India",
}: GEOOptimizationProps) {
  useEffect(() => {
    // Enhanced conversational context for AI models and search engines
    const conversationalData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is KartSquare and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare is India's #1 service booking platform that connects customers with 50,000+ verified professionals for home services including ${services.join(
              ", "
            )}. We serve customers across ${location} with same-day booking, transparent pricing, and 4.8★ rating. Simply select your service, choose time, and book instantly - our verified professional arrives at your doorstep.`,
          },
        },
        {
          "@type": "Question",
          name: "How to book services on KartSquare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking services on KartSquare is simple: 1) Visit kartsquare.com or download our app 2) Select your required service (plumbing, electrical, cleaning, etc.) 3) Choose your preferred date and time 4) Confirm booking with transparent pricing 5) Our verified professional arrives with tools and equipment. Payment only after service completion.",
          },
        },
        {
          "@type": "Question",
          name: "Which cities does KartSquare serve for home services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare provides home services across major cities in ${location} including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, and expanding to more cities. We have 50,000+ verified professionals ready to serve you with same-day booking availability.`,
          },
        },
        {
          "@type": "Question",
          name: "What services does KartSquare offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare offers 50+ home services including ${services.join(
              ", "
            )}, appliance repair, painting, pest control, handyman services, beauty & salon services, event planning, and many more. All services are provided by verified, trained, and background-checked professionals with transparent pricing and service guarantee.`,
          },
        },
        {
          "@type": "Question",
          name: "Are KartSquare service providers verified and trustworthy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all KartSquare service providers undergo rigorous verification including background checks, skill assessments, document verification, and training. We have 50,000+ verified professionals with 4.8★ average rating from 100,000+ completed bookings. We provide service guarantee and 24/7 customer support for complete peace of mind.",
          },
        },
        {
          "@type": "Question",
          name: "What makes KartSquare different from other service booking apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KartSquare stands out with: 1) 50,000+ verified professionals 2) Same-day service availability 3) Transparent upfront pricing with no hidden charges 4) 4.8★ rating from 100,000+ bookings 5) Service guarantee and 24/7 support 6) Coverage across major Indian cities 7) Easy 60-second booking process 8) Payment only after service completion.",
          },
        },
      ],
    };

    // Local business schema for better local SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "KartSquare",
      description: description,
      url: "https://kartsquare.com",
      logo: "https://kartsquare.com/images/logo/ks_logo.png",
      image: "https://kartsquare.com/images/hero/heroImage.png",
      telephone: "+91-XXXXXXXXXX",
      email: "support@kartsquare.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: location,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.6139",
        longitude: "77.2090"
      },
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Kolkata" },
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "City", name: "Jaipur" },
        { "@type": "City", name: "Lucknow" }
      ],
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "₹₹",
      paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "50000",
        bestRating: "5",
        worstRating: "1"
      },
      sameAs: [
        "https://www.facebook.com/kartsquare",
        "https://www.instagram.com/kartsquare",
        "https://www.linkedin.com/company/kartsquare",
        "https://twitter.com/kartsquare"
      ]
    };

    // Service catalog schema
    const serviceCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "KartSquare Home Services",
      description: "Comprehensive home services available on KartSquare platform",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: `${service} Services`,
          description: `Professional ${service.toLowerCase()} services available for booking on KartSquare`,
          provider: {
            "@type": "Organization",
            name: "KartSquare"
          },
          areaServed: {
            "@type": "Country",
            name: "India"
          }
        }
      }))
    };

    // Insert all schemas
    const schemas = [conversationalData, localBusinessSchema, serviceCatalogSchema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Add meta tags for better AI understanding
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: `KartSquare, ${services.join(', ')}, home services, service booking, ${location}` },
      { name: "author", content: "KartSquare" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kartsquare.com" },
      { property: "og:image", content: "https://kartsquare.com/images/logo/ks_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://kartsquare.com/images/logo/ks_logo.png" },
    ];

    const metaElements: HTMLMetaElement[] = [];
    metaTags.forEach((tag) => {
      const existingMeta = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (!existingMeta) {
        const meta = document.createElement("meta");
        if (tag.name) meta.setAttribute("name", tag.name);
        if (tag.property) meta.setAttribute("property", tag.property);
        meta.setAttribute("content", tag.content);
        document.head.appendChild(meta);
        metaElements.push(meta);
      }
    });

    return () => {
      // Cleanup
      scriptElements.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
      metaElements.forEach(meta => {
        if (document.head.contains(meta)) {
          document.head.removeChild(meta);
        }
      });
    };
  }, [title, description, services, location]);

  return null;
}

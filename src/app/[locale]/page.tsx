import { Metadata } from "next";
import FeaturedProperty from "@/components/Home/FeaturedProperty";
import Hero from "@/components/Home/Hero";
import Properties from "@/components/Home/Properties";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import FAQ from "@/components/Home/FAQs";
import AboutKartSquare from "@/components/Home/AboutKartSquare";
import KartSquareSolutions from "@/components/Home/KartSquareSolutions";
import IndustriesSection from "@/components/Home/Industries/page";
import GEOOptimization from "@/components/SEO/GEOOptimization";
import TrustRegistrations from "@/components/Home/TrustRegistrations";
import { generateConversationalContent } from "@/lib/seo-utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "KartSquare Home Page - India's #1 Service Booking Platform | Book Home Services Instantly",
    description:
      "Book trusted home services in 60 seconds with KartSquare. 50,000+ verified professionals for plumbing, electrical, cleaning, AC repair & more. Same-day service, transparent pricing, 4.8★ rating across India.",
    keywords:
      "service booking app, home services near me, book plumber online, electrician booking, cleaning services, AC repair, salon at home, verified service providers, same day booking, transparent pricing, KartSquare India",
    openGraph: {
      title:
        "KartSquare Home Page - Book Home Services in 60 Seconds | 50K+ Services Delivered",
      description:
        "India's most trusted service platform. Instant booking for plumbers, electricians, cleaners & more. 4.8★ rating, verified professionals, same-day service guaranteed.",
      type: "website",
      locale: "en_IN",
      siteName: "KartSquare",
    },
    alternates: {
      canonical: "https://kartsquare.com",
    },
  };
}

export default function Home() {
  const services = [
    "plumbing services",
    "electrical work",
    "house cleaning",
    "AC repair",
    "salon services",
    "appliance repair",
    "painting",
    "pest control",
  ];

  const conversationalContent = generateConversationalContent(
    services,
    "India"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KartSquare",
    description: "India's leading service booking platform for home services",
    url: "https://kartsquare.com",
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50000",
    },
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing Services",
            description:
              "Professional plumbing repair and installation services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
            description: "Certified electrician services for home and office",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cleaning Services",
            description: "Professional home and office cleaning services",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GEOOptimization
        title="KartSquare - India's #1 Service Booking Platform"
        description={conversationalContent.summary}
        services={services}
        location="India"
      />
      <main className="overflow-x-hidden">
        <Hero />

        <AboutKartSquare />
        <Services />
        <Properties />
        <TrustRegistrations />
        <IndustriesSection />
        <FeaturedProperty />
        <Testimonial />
        <KartSquareSolutions />
        {/* <GetInTouch /> */}
        <FAQ />
      </main>
    </>
  );
}

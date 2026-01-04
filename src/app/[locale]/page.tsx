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
      "KartSquare - India's #1 Service Booking App | Book Home Services in 60 Seconds",
    description:
      "Book trusted home services in 60 seconds with KartSquare! 50,000+ verified professionals for plumbing, electrical, cleaning, AC repair, salon services & more. Same-day booking, transparent pricing, 4.8★ rating across India. Download KartSquare app now!",
    keywords: [
      "KartSquare", "Kart Square", "kartsquare", "kart square", "service booking app", "home services near me", "book plumber online", "electrician booking", "cleaning services", "AC repair", "salon at home", "verified service providers", "same day booking", "transparent pricing", "KartSquare India", "home service booking", "instant service booking", "professional services", "trusted home services", "service booking platform", "book services online", "home services app", "local service providers", "emergency services", "appliance repair", "painting services", "pest control", "handyman services", "beauty services", "urban company alternative", "justdial services", "on-demand services", "service marketplace", "Delhi service booking", "Mumbai home services", "Bangalore service providers", "Chennai home services", "Hyderabad service booking", "Pune home services", "reliable service providers", "quality home services", "affordable home services", "24/7 service booking", "weekend home services", "emergency home services", "certified service providers", "background verified professionals", "insured service providers", "best service booking app", "top home services platform", "most trusted service app"
    ],
    openGraph: {
      title:
        "KartSquare - Book Home Services in 60 Seconds | 50,000+ Services Delivered",
      description:
        "India's most trusted service platform. Instant booking for plumbers, electricians, cleaners & more. 4.8★ rating, verified professionals, same-day service guaranteed across India.",
      type: "website",
      locale: "en_IN",
      siteName: "KartSquare",
      url: "https://kartsquare.com",
      images: [
        {
          url: "https://kartsquare.com/images/logo/ks_logo.png",
          width: 1200,
          height: 630,
          alt: "KartSquare - India's #1 Service Booking App for Home Services",
        },
        {
          url: "https://kartsquare.com/images/hero/heroImage.png",
          width: 1200,
          height: 630,
          alt: "Book Home Services with KartSquare - Plumber, Electrician, Cleaning Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "KartSquare - Book Home Services in 60 Seconds | India's #1 Service App",
      description:
        "50,000+ verified professionals for plumbing, electrical, cleaning, AC repair & more. Same-day booking, transparent pricing, 4.8★ rating across India.",
      creator: "@KartSquare",
      images: ["https://kartsquare.com/images/logo/ks_logo.png"],
    },
    alternates: {
      canonical: "https://kartsquare.com",
      languages: {
        'en-IN': 'https://kartsquare.com/en',
        'hi-IN': 'https://kartsquare.com/hi',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
    "@id": "https://kartsquare.com/#organization",
    name: "KartSquare",
    alternateName: ["Kart Square", "KartSquare India", "KartSquare App"],
    description: "India's leading service booking platform for home services with 50,000+ verified professionals",
    url: "https://kartsquare.com",
    telephone: "+91-XXXXXXXXXX",
    email: "support@kartsquare.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kartsquare.com/images/logo/ks_logo.png",
      width: 300,
      height: 300
    },
    image: {
      "@type": "ImageObject",
      url: "https://kartsquare.com/images/hero/heroImage.png",
      width: 1200,
      height: 630
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6139",
      longitude: "77.2090"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50000",
      bestRating: "5",
      worstRating: "1"
    },
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Delhi"
      },
      {
        "@type": "City",
        name: "Mumbai"
      },
      {
        "@type": "City",
        name: "Bangalore"
      },
      {
        "@type": "City",
        name: "Chennai"
      },
      {
        "@type": "City",
        name: "Hyderabad"
      },
      {
        "@type": "City",
        name: "Pune"
      }
    ],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "₹₹",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
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
              "Professional plumbing repair, installation, and emergency services with certified plumbers",
            provider: {
              "@type": "Organization",
              name: "KartSquare"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
            description: "Certified electrician services for home and office electrical work, wiring, and repairs",
            provider: {
              "@type": "Organization",
              name: "KartSquare"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cleaning Services",
            description: "Professional home and office cleaning services with eco-friendly products and trained staff",
            provider: {
              "@type": "Organization",
              name: "KartSquare"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair Services",
            description: "Air conditioner repair, maintenance, installation, and servicing by certified technicians",
            provider: {
              "@type": "Organization",
              name: "KartSquare"
            }
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Beauty & Salon Services",
            description: "Professional beauty and salon services at your doorstep with certified beauticians",
            provider: {
              "@type": "Organization",
              name: "KartSquare"
            }
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/kartsquare",
      "https://www.instagram.com/kartsquare",
      "https://www.linkedin.com/company/kartsquare",
      "https://twitter.com/kartsquare"
    ]
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is KartSquare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KartSquare is India's leading service booking platform that connects customers with verified professionals for home services like plumbing, electrical work, cleaning, AC repair, and more."
        }
      },
      {
        "@type": "Question",
        name: "How do I book a service on KartSquare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book a service on KartSquare in 60 seconds by selecting your required service, choosing your location, picking a time slot, and confirming your booking. Our verified professionals will reach your location at the scheduled time."
        }
      },
      {
        "@type": "Question",
        name: "Are KartSquare service providers verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all KartSquare service providers are thoroughly verified with background checks, skill assessments, and proper documentation. We ensure only qualified and trustworthy professionals join our platform."
        }
      },
      {
        "@type": "Question",
        name: "What cities does KartSquare serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KartSquare currently serves major Indian cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and many more. We are rapidly expanding to cover more cities across India."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

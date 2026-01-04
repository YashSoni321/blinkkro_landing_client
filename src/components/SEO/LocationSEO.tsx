"use client";

import { useEffect } from "react";
import { generateLocationSEO, generateBreadcrumbSchema } from "@/lib/seo-utils";

interface LocationSEOProps {
  city: string;
  state?: string;
  services: string[];
  description?: string;
  breadcrumbs?: Array<{name: string, url: string}>;
}

export default function LocationSEO({
  city,
  state = "India",
  services,
  description,
  breadcrumbs = []
}: LocationSEOProps) {
  useEffect(() => {
    const locationSEO = generateLocationSEO(city, services);
    
    // Local business schema for the city
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `KartSquare ${city}`,
      description: description || `Professional home services in ${city}. Book ${services.join(', ')} and more with verified professionals.`,
      url: `https://kartsquare.com/en/services/${city.toLowerCase()}`,
      logo: "https://kartsquare.com/images/logo/ks_logo.png",
      image: "https://kartsquare.com/images/hero/heroImage.png",
      telephone: "+91-XXXXXXXXXX",
      email: "support@kartsquare.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: state,
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: getCityCoordinates(city).lat,
        longitude: getCityCoordinates(city).lng
      },
      areaServed: {
        "@type": "City",
        name: city,
        containedInPlace: {
          "@type": "State",
          name: state
        }
      },
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Home Services in ${city}`,
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${service} Services in ${city}`,
            description: `Professional ${service.toLowerCase()} services available in ${city} with verified experts`,
            areaServed: {
              "@type": "City",
              name: city
            }
          }
        }))
      }
    };

    // City-specific FAQ schema
    const cityFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What home services are available in ${city}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare offers comprehensive home services in ${city} including ${services.join(', ')} and many more. All services are provided by verified professionals with transparent pricing and same-day booking availability.`,
          },
        },
        {
          "@type": "Question",
          name: `How to book home services in ${city} through KartSquare?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Booking home services in ${city} is simple: 1) Visit kartsquare.com or download our app 2) Select ${city} as your location 3) Choose your required service 4) Pick your preferred time slot 5) Confirm booking. Our verified professional will arrive at your ${city} location.`,
          },
        },
        {
          "@type": "Question",
          name: `Are service providers in ${city} verified and trustworthy?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, all service providers in ${city} are thoroughly verified with background checks, skill assessments, and proper documentation. KartSquare ensures only qualified professionals serve customers in ${city} with 4.8★ average rating from thousands of completed bookings.`,
          },
        },
        {
          "@type": "Question",
          name: `What areas in ${city} does KartSquare cover?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `KartSquare covers all major areas and localities in ${city} including residential areas, commercial zones, and suburbs. We have verified professionals available across ${city} for same-day service booking with transparent pricing.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the cost of home services in ${city}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Home service costs in ${city} vary based on the specific service and work required. KartSquare provides transparent upfront pricing with no hidden charges. You can see exact costs before booking any service in ${city}. Payment is made only after service completion.`,
          },
        },
      ],
    };

    // Service area schema
    const serviceAreaSchema = {
      "@context": "https://schema.org",
      "@type": "ServiceArea",
      name: `${city} Service Area`,
      description: `KartSquare service coverage area in ${city}`,
      geo: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: getCityCoordinates(city).lat,
          longitude: getCityCoordinates(city).lng
        },
        geoRadius: "50000" // 50km radius
      },
      containedInPlace: {
        "@type": "City",
        name: city,
        containedInPlace: {
          "@type": "State", 
          name: state
        }
      }
    };

    // Breadcrumb schema if provided
    const breadcrumbSchema = breadcrumbs.length > 0 ? generateBreadcrumbSchema(breadcrumbs) : null;

    // Insert all schemas
    const schemas: any[] = [localBusinessSchema, cityFAQSchema, serviceAreaSchema];
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);
    
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Add city-specific meta tags
    const metaTags = [
      { name: "description", content: locationSEO.description },
      { name: "keywords", content: locationSEO.keywords.join(', ') },
      { name: "geo.region", content: `IN-${getStateCode(state)}` },
      { name: "geo.placename", content: city },
      { name: "geo.position", content: `${getCityCoordinates(city).lat};${getCityCoordinates(city).lng}` },
      { name: "ICBM", content: `${getCityCoordinates(city).lat}, ${getCityCoordinates(city).lng}` },
      { property: "og:title", content: locationSEO.title },
      { property: "og:description", content: locationSEO.description },
      { property: "og:type", content: "website" },
      { property: "og:locality", content: city },
      { property: "og:region", content: state },
      { property: "og:country-name", content: "India" },
      { name: "twitter:title", content: locationSEO.title },
      { name: "twitter:description", content: locationSEO.description },
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
  }, [city, state, services, description, breadcrumbs]);

  return null;
}

// Helper function to get city coordinates (you can expand this)
function getCityCoordinates(city: string): {lat: string, lng: string} {
  const coordinates: {[key: string]: {lat: string, lng: string}} = {
    "Delhi": {lat: "28.6139", lng: "77.2090"},
    "Mumbai": {lat: "19.0760", lng: "72.8777"},
    "Bangalore": {lat: "12.9716", lng: "77.5946"},
    "Chennai": {lat: "13.0827", lng: "80.2707"},
    "Hyderabad": {lat: "17.3850", lng: "78.4867"},
    "Pune": {lat: "18.5204", lng: "73.8567"},
    "Kolkata": {lat: "22.5726", lng: "88.3639"},
    "Ahmedabad": {lat: "23.0225", lng: "72.5714"},
    "Jaipur": {lat: "26.9124", lng: "75.7873"},
    "Lucknow": {lat: "26.8467", lng: "80.9462"},
  };
  
  return coordinates[city] || {lat: "28.6139", lng: "77.2090"}; // Default to Delhi
}

// Helper function to get state codes
function getStateCode(state: string): string {
  const stateCodes: {[key: string]: string} = {
    "Delhi": "DL",
    "Maharashtra": "MH", 
    "Karnataka": "KA",
    "Tamil Nadu": "TN",
    "Telangana": "TG",
    "West Bengal": "WB",
    "Gujarat": "GJ",
    "Rajasthan": "RJ",
    "Uttar Pradesh": "UP",
    "India": "IN"
  };
  
  return stateCodes[state] || "IN";
}
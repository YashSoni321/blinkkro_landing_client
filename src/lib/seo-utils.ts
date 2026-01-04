export const generateConversationalContent = (
  services: string[],
  location: string
) => ({
  summary: `KartSquare is India's most trusted service booking platform where you can instantly book ${services
    .slice(0, 3)
    .join(
      ", "
    )} and 50+ other home services in ${location}. With over 50,000 verified professionals, same-day booking, and transparent pricing, we've completed 100,000+ successful service bookings with a 4.8-star rating.`,

  keyPoints: [
    `Instant booking for ${services.length}+ home services across ${location}`,
    "50,000+ verified and background-checked professionals",
    "Same-day service availability with transparent upfront pricing",
    "100,000+ completed bookings with 4.8-star customer rating",
    "24/7 customer support and service guarantee",
  ],

  conversationalAnswers: {
    "how to book services":
      "You can book any service in 3 simple steps: 1) Select your service 2) Choose date & time 3) Confirm booking. Our verified professional will arrive at your doorstep.",
    "service areas": `We currently serve major cities across ${location} including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, and expanding to more cities.`,
    pricing:
      "All our services have transparent, upfront pricing with no hidden charges. You see the exact cost before booking, and payment is only after service completion.",
    "quality assurance":
      "Every professional is verified, trained, and rated by customers. We provide service guarantee and 24/7 support for complete peace of mind.",
  },
});

export const generateServiceSchema = (
  serviceName: string,
  description: string,
  price?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    name: "KartSquare",
    url: "https://kartsquare.com",
    logo: "https://kartsquare.com/images/logo/ks_logo.png",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  offers: price
    ? {
        "@type": "Offer",
        price: price,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString(),
      }
    : undefined,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50000",
    bestRating: "5",
    worstRating: "1"
  },
});

// Generate location-specific SEO content
export const generateLocationSEO = (city: string, services: string[]) => ({
  title: `KartSquare ${city} - Book Home Services | Plumber, Electrician, Cleaning in ${city}`,
  description: `Book trusted home services in ${city} with KartSquare. Verified ${services.join(', ')} professionals available for same-day booking. Transparent pricing, 4.8★ rating. Serving ${city} with 50,000+ professionals.`,
  keywords: [
    `KartSquare ${city}`,
    `home services ${city}`,
    `service booking ${city}`,
    `plumber ${city}`,
    `electrician ${city}`,
    `cleaning services ${city}`,
    `AC repair ${city}`,
    `salon services ${city}`,
    `${city} home services`,
    `book services ${city}`,
    `verified professionals ${city}`,
    `same day service ${city}`,
    `trusted service providers ${city}`,
    `home maintenance ${city}`,
    `appliance repair ${city}`,
    `emergency services ${city}`,
  ],
});

// Generate service-specific SEO content
export const generateServiceSEO = (service: string, description: string) => ({
  title: `${service} Services - Book Online | KartSquare India`,
  description: `Book professional ${service.toLowerCase()} services with KartSquare. ${description} Verified professionals, same-day booking, transparent pricing. 4.8★ rating across India.`,
  keywords: [
    `${service} services`,
    `book ${service.toLowerCase()}`,
    `${service.toLowerCase()} near me`,
    `professional ${service.toLowerCase()}`,
    `${service.toLowerCase()} booking`,
    `verified ${service.toLowerCase()}`,
    `trusted ${service.toLowerCase()}`,
    `${service.toLowerCase()} repair`,
    `${service.toLowerCase()} installation`,
    `emergency ${service.toLowerCase()}`,
    `same day ${service.toLowerCase()}`,
    `${service.toLowerCase()} cost`,
    `${service.toLowerCase()} price`,
    `best ${service.toLowerCase()}`,
  ],
});

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Generate FAQ schema
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Generate review schema
export const generateReviewSchema = (reviews: Array<{author: string, rating: number, text: string, date: string}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KartSquare",
  review: reviews.map(review => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.text,
    datePublished: review.date,
  })),
});

// SEO-optimized meta tags generator
export const generateMetaTags = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}) => ({
  title,
  description,
  keywords: keywords.join(', '),
  robots: {
    index: !noIndex,
    follow: !noIndex,
    googleBot: {
      index: !noIndex,
      follow: !noIndex,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: 'KartSquare',
    images: ogImage ? [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@KartSquare',
    images: ogImage ? [ogImage] : undefined,
  },
  alternates: canonical ? {
    canonical,
  } : undefined,
});
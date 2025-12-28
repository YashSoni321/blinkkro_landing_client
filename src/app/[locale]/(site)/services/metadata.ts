import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KartSquare Services Page - 50+ Verified Home & Professional Services | Book Instantly",
  description: "Browse 50+ verified services on KartSquare. From home cleaning to event planning, beauty treatments to repairs - find trusted professionals with transparent pricing across 15+ cities in India.",
  keywords: [
    "home services India",
    "professional services booking",
    "verified service providers",
    "plumbing services",
    "electrical services", 
    "cleaning services",
    "beauty services",
    "car wash services",
    "fitness trainers",
    "event planning",
    "catering services",
    "KartSquare services",
    "service marketplace India",
    "trusted professionals",
    "transparent pricing"
  ],
  openGraph: {
    title: "KartSquare Services Page - 50+ Verified Professional Services",
    description: "Discover 50+ verified services on India's most trusted platform. Book plumbers, electricians, cleaners, beauty experts & more with transparent pricing.",
    url: "https://kartsquare.com/services",
    type: "website",
    locale: "en_IN",
    siteName: "KartSquare",
    images: [
      {
        url: "https://kartsquare.com/images/services/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "KartSquare Services - Verified Professional Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KartSquare Services - 50+ Verified Professional Services",
    description: "Book trusted home & professional services in 60 seconds. 4.8★ rated platform with verified professionals.",
    images: ["https://kartsquare.com/images/services/services-twitter.jpg"]
  },
  alternates: {
    canonical: "https://kartsquare.com/services",
    languages: {
      'en': 'https://kartsquare.com/en/services',
      'hi': 'https://kartsquare.com/hi/services'
    }
  },
  robots: {
    index: false, // Currently blocked for development
    follow: false
  }
};
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services Page - 50+ Verified Home & Professional Services | Book Instantly",
  description:
    "Browse 50+ verified services on KartSquare. From home cleaning to event planning, beauty treatments to repairs - find trusted professionals with transparent pricing across 15+ cities in India.",
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
    "transparent pricing",
  ],
  openGraph: {
    title: " Services Page - 50+ Verified Professional Services",
    description:
      "Discover 50+ verified services on India's most trusted platform. Book plumbers, electricians, cleaners, beauty experts & more with transparent pricing.",
    url: "https://kartsquare.com/services",
    type: "website",
    locale: "en_IN",
    siteName: "KartSquare",
  },
  twitter: {
    card: "summary_large_image",
    title: " Services - 50+ Verified Professional Services",
    description:
      "Book trusted home & professional services in 60 seconds. 4.8★ rated platform with verified professionals.",
  },
  alternates: {
    canonical: "https://kartsquare.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

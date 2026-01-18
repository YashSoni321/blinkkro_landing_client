import ServicesClient from "./ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services by KartSquare – Book Verified Home Services Online",
  description:
    "Explore 50+ verified services on KartSquare – home cleaning, plumbing, beauty, fitness, catering & more. Book trusted professionals instantly.",
  keywords: [
    "KartSquare services",
    "home services online",
    "plumbing services",
    "home cleaning",
    "beauty at home",
    "event planning services",
    "fitness trainers",
    "catering services",
    "verified service providers",
    "book services online India",
  ],
  openGraph: {
    title: "Services by KartSquare – Book Verified Home Services Online",
    description:
      "Explore 50+ verified services on KartSquare – home cleaning, plumbing, beauty, fitness, catering & more. Book trusted professionals instantly.",
    url: "https://kartsquare.com/services",
    type: "website",
    siteName: "KartSquare",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Services by KartSquare – Book Verified Home Services Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services by KartSquare – Book Verified Home Services Online",
    description:
      "Explore 50+ verified services on KartSquare – home cleaning, plumbing, beauty, fitness, catering & more. Book trusted professionals instantly.",
    images: ["/images/hero/heroImage.png"],
  },
  alternates: {
    canonical: "https://kartsquare.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

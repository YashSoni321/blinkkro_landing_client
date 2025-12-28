import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    " Waitlist Page - Join Early Access | Be First to Experience Premium Services",
  description:
    "Join KartSquare's exclusive waitlist and be among the first to access India's most trusted service platform. Get early access, special discounts, and priority booking.",
  keywords: [
    "KartSquare waitlist",
    "early access services",
    "join waitlist",
    "premium service booking",
    "exclusive access",
    "service platform launch",
    "early bird offers",
    "priority booking",
    "KartSquare beta access",
  ],
  openGraph: {
    title: "KartSquare Waitlist Page - Join Early Access to Premium Services",
    description:
      "Be among the first to experience India's most trusted service platform. Join our waitlist for early access and exclusive benefits.",
    url: "https://kartsquare.com/waitlist",
    type: "website",
    locale: "en_IN",
    siteName: "KartSquare",
    images: [
      {
        url: "https://kartsquare.com/images/waitlist/waitlist-og.jpg",
        width: 1200,
        height: 630,
        alt: "Join KartSquare Waitlist - Early Access to Premium Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join KartSquare Waitlist - Early Access to Premium Services",
    description:
      "Be first to access India's most trusted service platform. Join waitlist for exclusive benefits and priority booking.",
    images: ["https://kartsquare.com/images/waitlist/waitlist-twitter.jpg"],
  },
  alternates: {
    canonical: "https://kartsquare.com/waitlist",
    languages: {
      en: "https://kartsquare.com/en/waitlist",
      hi: "https://kartsquare.com/hi/waitlist",
    },
  },
  robots: {
    index: false, // Currently blocked for development
    follow: false,
  },
};

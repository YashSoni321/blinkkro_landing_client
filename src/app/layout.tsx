import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import ThemeProviderComp from "@/components/provider/ThemeProviderComp";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlinkKaro - Book Trusted Home Services & Events Instantly | India's #1 Service Platform",
  description:
    "BlinkKaro connects you with verified professionals for home services, events, beauty, repairs & more. Book in seconds with transparent pricing. 10K+ happy customers across India.",
  keywords: [
    "home services",
    "event booking",
    "plumber",
    "electrician",
    "house cleaning",
    "salon at home",
    "AC repair",
    "verified professionals",
    "instant booking",
    "transparent pricing",
    "BlinkKaro",
    "service platform India"
  ],
  authors: [{ name: "BlinkKaro Team" }],
  creator: "BlinkKaro",
  publisher: "BlinkKaro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://blinkkaro.com",
    title: "BlinkKaro - Book Trusted Home Services & Events Instantly",
    description: "India's most trusted platform for booking home services, events, beauty treatments & repairs. Verified professionals, transparent pricing, instant booking.",
    siteName: "BlinkKaro",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlinkKaro - Book Trusted Services Instantly",
    description: "Connect with verified professionals for home services, events & more. Book in seconds with transparent pricing.",
    creator: "@BlinkKaro",
  },
  alternates: {
    canonical: "https://blinkkaro.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp>
          <ThemeProviderComp>
            <Header />
            {children}
            <Footer />
          </ThemeProviderComp>
        </SessionProviderComp>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import ThemeProviderComp from "@/components/provider/ThemeProviderComp";
import { Toaster } from "react-hot-toast";
import FloatingButton from "@/components/Layout/FloatingButton";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "BlinkKaro - Service Booking App | Book Home Services, Plumber, Electrician, Cleaning | Blink Karo India",
  description:
    "Book trusted home services instantly with BlinkKaro! Find verified plumbers, electricians, cleaners, AC repair, salon services & more. Same-day booking, transparent pricing. India's #1 service booking platform with 50K+ services delivered. Download BlinkKaro app now!",
  keywords: [
    "service booking",
    "service booking app",
    "book services online",
    "home service booking",
    "BlinkKaro",
    "Blink Karo",
    "blinkkaro",
    "blink",
    "book plumber online",
    "book electrician",
    "home services near me",
    "instant service booking",
    "same day service booking",
    "verified service providers",
    "trusted home services",
    "AC repair booking",
    "house cleaning service",
    "salon at home booking",
    "event planning services",
    "home maintenance services",
    "emergency plumber booking",
    "quick service booking",
    "reliable service providers",
    "professional services India",
    "urban company alternative",
    "justdial services",
    "service marketplace",
    "on-demand services",
    "local service providers",
    "home repair services",
    "beauty services at home",
    "appliance repair booking",
    "pest control services",
    "painting services",
    "carpenter booking",
    "handyman services",
    "service booking platform India",
    "Delhi service booking",
    "Mumbai home services",
    "Bangalore service providers",
    "Chennai home services",
    "Hyderabad service booking",
    "Pune home services",
    "Kolkata service providers",
    "Ahmedabad home services",
    "Jaipur service booking",
    "Lucknow home services",
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
    title:
      "BlinkKaro - India's #1 Service Booking App | Book Home Services Instantly",
    description:
      "Book trusted home services in seconds! Verified plumbers, electricians, cleaners, AC repair, salon services & more. 50K+ services delivered across India. Same-day booking with transparent pricing.",
    siteName: "BlinkKaro",
    images: [
      {
        url: "/images/hero/blinkkaro-service-booking.jpg",
        width: 1200,
        height: 630,
        alt: "BlinkKaro - Book Home Services Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlinkKaro - Book Home Services Instantly | Service Booking App",
    description:
      "India's most trusted service booking platform. Book plumbers, electricians, cleaners & more in seconds. 50K+ services delivered with transparent pricing.",
    creator: "@BlinkKaro",
    images: ["/images/hero/blinkkaro-service-booking.jpg"],
  },
  alternates: {
    canonical: "https://blinkkaro.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp>
          <ThemeProviderComp>
            <Header />
            {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
            <Toaster
              position="bottom-right" // top-left, bottom-right, etc.
              reverseOrder={false} // newest toast at bottom
              toastOptions={{
                // Default options for all toasts
                duration: 2000, // 2 seconds
                style: {
                  background: "#333",
                  color: "#fff",
                  padding: "16px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                },
                success: {
                  icon: "✅", // custom success icon
                  style: { background: "#4BB543" },
                },
                error: {
                  icon: "❌", // custom error icon
                  style: { background: "#FF4D4F" },
                },
                loading: {
                  style: { background: "#FFA500" },
                },
              }}
            />
            {children}
            <FloatingButton />
            <Footer />
          </ThemeProviderComp>
        </SessionProviderComp>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import ThemeProviderComp from "@/components/provider/ThemeProviderComp";
import { Toaster } from "react-hot-toast";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "KartSquare - Service Booking App | Book Home Services, Plumber, Electrician, Cleaning | KartSquare India",
  description:
    "Book trusted home services instantly with KartSquare! Find verified plumbers, electricians, cleaners, AC repair, salon services & more. Same-day booking, transparent pricing. India's #1 service booking platform with 50K+ services delivered. Download KartSquare app now!",
  keywords: [
    "service booking",
    "service booking app",
    "book services online",
    "home service booking",
    "KartSquare",
    "Kart Square",
    "kartsquare",
    "kart",
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
  authors: [{ name: "KartSquare Team" }],
  creator: "KartSquare",
  publisher: "KartSquare",
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
    siteName: "KartSquare",
    images: [
      {
        url: "/images/hero/kartsquare-service-booking.jpg",
        width: 1200,
        height: 630,
        alt: "KartSquare - Book Home Services Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KartSquare - Book Home Services Instantly | Service Booking App",
    description:
      "India's most trusted service booking platform. Book plumbers, electricians, cleaners & more in seconds. 50K+ services delivered with transparent pricing.",
    creator: "@KartSquare",
    images: ["/images/hero/kartsquare-service-booking.jpg"],
  },
  alternates: {
    canonical: "https://kartsquare.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader color="#07be8a" />
          <SessionProviderComp>
            <ThemeProviderComp>
              <Header />
              <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                  duration: 2000,
                  style: {
                    background: "#333",
                    color: "#fff",
                    padding: "16px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: "500",
                  },
                  success: {
                    icon: "✅",
                    style: { background: "#4BB543" },
                  },
                  error: {
                    icon: "❌",
                    style: { background: "#FF4D4F" },
                  },
                  loading: {
                    style: { background: "#FFA500" },
                  },
                }}
              />
              {children}
              <Footer />
            </ThemeProviderComp>
          </SessionProviderComp>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
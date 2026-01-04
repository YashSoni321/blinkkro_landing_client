import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import ThemeProviderComp from "@/components/provider/ThemeProviderComp";
import { Toaster } from "react-hot-toast";
import FloatingButton from "@/components/Layout/FloatingButton";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kartsquare.com"),
  title: {
    default:
      "KartSquare - India's #1 Service Booking App | Book Home Services Instantly",
    template: "%s | KartSquare - Book Home Services Online",
  },
  description:
    "Book trusted home services in 60 seconds with KartSquare! 50,000+ verified professionals for plumbing, electrical, cleaning, AC repair, salon services & more. Same-day booking, transparent pricing, 4.8★ rating across India. Download KartSquare app now!",
  keywords: [
    // Primary brand keywords
    "KartSquare",
    "Kart Square",
    "kartsquare",
    "kart square",
    "cart square",
    "cartsquare",
    "kartsquare app",
    "kartsquare india",
    "kartsquare service booking",
    "kartsquare home services",

    // Core service booking keywords
    "service booking",
    "service booking app",
    "book services online",
    "home service booking",
    "instant service booking",
    "same day service booking",
    "online service booking",
    "service booking platform",
    "service booking website",
    "book home services",
    "home services app",
    "service provider app",

    // Specific service keywords
    "book plumber online",
    "plumber booking",
    "emergency plumber",
    "plumber near me",
    "plumbing services",
    "book electrician",
    "electrician booking",
    "electrical services",
    "electrician near me",
    "house cleaning service",
    "cleaning services",
    "home cleaning booking",
    "AC repair booking",
    "AC service",
    "air conditioner repair",
    "salon at home booking",
    "home salon services",
    "beauty services at home",

    // Location-based keywords
    "home services near me",
    "local service providers",
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
    "Rajasthan service providers",
    "service booking Delhi",
    "service booking Mumbai",
    "service booking Bangalore",

    // Quality and trust keywords
    "verified service providers",
    "trusted home services",
    "reliable service providers",
    "professional services India",
    "quality home services",
    "certified service providers",
    "background verified professionals",
    "insured service providers",

    // Additional service categories
    "event planning services",
    "home maintenance services",
    "quick service booking",
    "appliance repair booking",
    "pest control services",
    "painting services",
    "carpenter booking",
    "handyman services",
    "home repair services",
    "gardening services",
    "interior design services",
    "home renovation services",

    // Competitor and alternative keywords
    "urban company alternative",
    "justdial services",
    "housejoy alternative",
    "timesaverz alternative",
    "service marketplace",
    "on-demand services",
    "gig economy services",

    // Booking-related keywords
    "book services",
    "booking",
    "service provider booking",
    "home service provider",
    "professional booking",
    "expert booking",
    "technician booking",
    "specialist booking",

    // Long-tail keywords
    "best service booking app in india",
    "top home services platform",
    "most trusted service booking app",
    "affordable home services",
    "transparent pricing services",
    "same day home services",
    "emergency home services",
    "weekend home services",
    "24/7 service booking",
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
    url: "https://kartsquare.com",
    title:
      "KartSquare - India's #1 Service Booking App | Book Home Services Instantly",
    description:
      "Book trusted home services in 60 seconds! 50,000+ verified professionals for plumbing, electrical, cleaning, AC repair, salon services & more. Same-day booking, transparent pricing, 4.8★ rating across India.",
    siteName: "KartSquare",
    images: [
      {
        url: "/images/logo/ks_logo.png",
        width: 1200,
        height: 630,
        alt: "KartSquare - India's #1 Service Booking App for Home Services",
      },
      {
        url: "/images/hero/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Book Home Services with KartSquare - Plumber, Electrician, Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KartSquare - Book Home Services Instantly | Service Booking App",
    description:
      "India's most trusted service booking platform. Book plumbers, electricians, cleaners & more in seconds. 50K+ services delivered with transparent pricing.",
    creator: "@KartSquare",
    images: ["/images/logo/ks_logo.png"],
  },
  alternates: {
    canonical: "https://kartsquare.com",
  },
  other: {
    "google-site-verification": "Yfbnd3DWw9lR9F5XE8Slu1TmjyMtTjM7DIjs5OjNtck",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "p:domain_verify": "your-pinterest-verification-code",
    "facebook-domain-verification": "your-facebook-verification-code",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "hi")) {
    notFound();
  }

  const messages = await getMessages();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KartSquare",
    alternateName: ["Kart Square", "KartSquare India", "KartSquare App"],
    url: "https://kartsquare.com",
    logo: "https://kartsquare.com/images/logo/ks_logo.png",
    description:
      "India's leading service booking platform for home services with 50,000+ verified professionals",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/kartsquare",
      "https://www.instagram.com/kartsquare",
      "https://www.linkedin.com/company/kartsquare",
      "https://twitter.com/kartsquare",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50000",
      bestRating: "5",
      worstRating: "1",
    },
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
              "Professional plumbing repair, installation, and emergency services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
            description:
              "Certified electrician services for home and office electrical work",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cleaning Services",
            description:
              "Professional home and office cleaning services with eco-friendly products",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair Services",
            description:
              "Air conditioner repair, maintenance, and installation services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Beauty & Salon Services",
            description:
              "Professional beauty and salon services at your doorstep",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KartSquare",
    url: "https://kartsquare.com",
    description: "India's #1 service booking platform for home services",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://kartsquare.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "KartSquare",
      logo: {
        "@type": "ImageObject",
        url: "https://kartsquare.com/images/logo/ks_logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kartsquare.com",
      },
    ],
  };
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <meta
          name="google-site-verification"
          content="Yfbnd3DWw9lR9F5XE8Slu1TmjyMtTjM7DIjs5OjNtck"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KMXX7Z2JZ7"
        ></script>
      </head>
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KMXX7Z2JZ7"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KMXX7Z2JZ7');
          `}
        </Script>
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
              {/* <FloatingButton /> */}
              <Footer />
            </ThemeProviderComp>
          </SessionProviderComp>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

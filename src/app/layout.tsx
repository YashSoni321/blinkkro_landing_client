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
  title: "BlinkKaro - Service & Event Booking Platform",
  description:
    "Book services and events instantly with BlinkKaro - Your trusted platform for connecting service providers and customers",
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

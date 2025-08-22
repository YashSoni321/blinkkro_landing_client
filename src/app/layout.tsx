import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from '@/components/nextauth/SessionProvider'

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BlinkKaro - Service & Event Booking Platform',
  description: 'Book services and events instantly with BlinkKaro - Your trusted platform for connecting service providers and customers',
}

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode
  session: any
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp session={session}>
          <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='light'>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  )
}

// app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soltero.com"),

  title: {
    default: "SOLTERO | Luxury Bridal Boutique",
    template: "%s | SOLTERO",
  },

  description:
    "Discover timeless bridal gowns, luxury collections and personalized consultations at SOLTERO Bridal Boutique.",

  keywords: [
    "bridal boutique",
    "wedding dresses",
    "luxury bridal",
    "bridal gowns",
    "bridal fashion",
    "wedding boutique",
    "luxury wedding dresses",
  ],

  authors: [
    {
      name: "SOLTERO",
    },
  ],

  creator: "SOLTERO",

  openGraph: {
    title: "SOLTERO | Luxury Bridal Boutique",
    description:
      "Discover timeless bridal gowns and book your private consultation.",
    url: "https://soltero.com",
    siteName: "SOLTERO",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SOLTERO",
    description: "Luxury Bridal Boutique",
    creator: "@soltero",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body className="bg-white text-neutral-900">
        <Header />

        {children}
        
        
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-9BQLDDPY18"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9BQLDDPY18');
  `}
</Script>

        <Footer />
      </body>
    </html>
  );
}
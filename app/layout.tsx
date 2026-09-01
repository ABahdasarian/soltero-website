// app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soltero.co.uk"),

  title: {
    default: "SOLTERO | Luxury Bridal Boutique",
    template: "%s | SOLTERO Bridal",
  },

  description:
    "Discover luxury wedding dresses and timeless bridal gowns at SOLTERO Bridal Boutique. Explore our exclusive bridal collections and book your private consultation.",

  keywords: [
    "SOLTERO",
    "SOLTERO bridal",
    "bridal boutique",
    "luxury bridal boutique",
    "wedding dresses",
    "wedding dress boutique",
    "luxury wedding dresses",
    "designer wedding dresses",
    "bridal gowns",
    "luxury bridal gowns",
    "bridal fashion",
    "bridal shop",
    "wedding boutique",
    "bridal consultation",
    "bridal appointment",
    "bridal boutique London",
    "wedding dresses London",
    "luxury bridal London",
    "wedding dress shop London",
    "UK bridal boutique",
  ],

  authors: [
    {
      name: "SOLTERO Bridal Boutique",
      url: "https://www.soltero.co.uk",
    },
  ],

  creator: "SOLTERO Bridal Boutique",
  publisher: "SOLTERO Bridal Boutique",

  category: "Fashion",

  alternates: {
    canonical: "https://www.soltero.co.uk",
  },

  openGraph: {
    title: "SOLTERO | Luxury Bridal Boutique",
    description:
      "Discover timeless bridal gowns, luxury wedding dresses and book your private consultation at SOLTERO Bridal Boutique.",
    url: "https://www.soltero.co.uk",
    siteName: "SOLTERO Bridal Boutique",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/cwh8h4x4/image/upload/v1785955940/101.webp",
        width: 1200,
        height: 630,
        alt: "SOLTERO Bridal Boutique",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SOLTERO | Luxury Bridal Boutique",
    description:
      "Discover luxury wedding dresses and timeless bridal collections.",
    images: [
      "https://res.cloudinary.com/cwh8h4x4/image/upload/v1785955940/101.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9BQLDDPY18"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());

            gtag("config", "G-9BQLDDPY18");
          `}
        </Script>

        <Footer />
      </body>
    </html>
  );
}
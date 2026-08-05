// app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

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
  title: "SOLTERO",
  description: "Luxury Bridal Boutique",
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

        <Footer />
      </body>
    </html>
  );
}


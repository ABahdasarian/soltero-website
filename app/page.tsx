// app/page.tsx

import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/sections/Hero";
import Collections from "@/components/sections/Collections";
import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />

      <Collections />

      <About />

      {/* FAQ */}
      <Faq />

      {/* Appointment */}
      <Appointment />

      {/* Partnership */}
<section className="relative mt-20 overflow-hidden">
  <div className="relative min-h-[650px] w-full">
    <Image
      src="https://res.cloudinary.com/cwh8h4x4/image/upload/v1787524455/partnership.jpg"
      alt="SOLTERO Bridal Boutique Partnership"
      fill
      className="object-cover object-center"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/45" />

    {/* Content */}
    <div className="relative z-10 flex min-h-[650px] items-center justify-center px-6 py-24 text-center">
      <div className="max-w-3xl text-white">

        <span className="text-xs uppercase tracking-[0.45em] text-[#D8B77A]">
          Partnership
        </span>

        <h2 className="mt-7 font-heading text-5xl leading-tight md:text-6xl">
          Become a SOLTERO Partner
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/85">
          Join SOLTERO and discover a refined partnership built around
          exceptional bridal collections, timeless design and a shared
          passion for creating unforgettable experiences.
        </p>

        <Link
          href="/partnership"
          className="mt-10 inline-block border border-[#D8B77A] bg-[#B9935D] px-10 py-4 text-xs uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-transparent hover:text-[#D8B77A]"
        >
          Become a Partner
        </Link>

      </div>
    </div>
  </div>
</section>
    </>
  );
}
// app/page.tsx

import Hero from "@/components/sections/Hero";
import Collections from "@/components/sections/Collections";
import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";

import DressGrid from "@/components/catalog/DressGrid";
import { dresses } from "@/data/dresses";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <Collections />

      <About />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="uppercase tracking-[0.45em] text-[#b8915d]">
              Featured Dresses
            </span>

            <h2 className="mt-6 text-5xl font-light">
              Signature Collection
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-neutral-500">
              Discover a curated selection of our finest bridal gowns,
              combining timeless elegance with contemporary craftsmanship.
            </p>
          </div>

          <DressGrid />

          <div className="mt-16 text-center">
            <Link
              href="/collection"
              className="inline-block border border-black px-10 py-4 uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
            >
              View All Dresses
            </Link>
          </div>
        </div>
      </section>

      <Appointment />
    </>
  );
}
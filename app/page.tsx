// app/page.tsx


import Button from "@/components/ui/Button";

import Hero from "@/components/sections/Hero";
import Collections from "@/components/sections/Collections";
import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import Faq from "@/components/sections/Faq";

import DressGrid from "@/components/catalog/DressGrid";

export default function Home() {
  return (
    <>
      <Hero />

      <Collections />

      <About />

      {/* Featured Dresses */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="uppercase tracking-[0.45em] text-[#b8915d]">
              Featured Dresses
            </span>

            <h2 className="mt-6 font-heading text-5xl text-[#2A2A2A]">
              Signature Collection
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-500">
              Discover a curated selection of our finest bridal gowns,
              combining timeless elegance with contemporary craftsmanship.
            </p>
          </div>

          <DressGrid />

          <div className="mt-16 text-center">
  <Button href="/collection">
    View All Dresses
  </Button>
</div> 
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Appointment */}
      <Appointment />
    </>
  );
}
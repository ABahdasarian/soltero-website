// app/catalog/page.tsx

import { dresses } from "@/data/dresses";
import DressGrid from "@/components/catalog/DressGrid";

export default function CatalogPage() {
  return (
    <main className="pt-24">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/catalog-hero.jpg"
          alt="Collections"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative flex h-full items-center justify-center text-center text-white">
          <div>
            <p className="mb-5 uppercase tracking-[0.45em] text-[#d5b27c]">
              Soltero
            </p>

            <h1 className="text-6xl font-light md:text-8xl">
              Our Collections
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
              Explore every gown from our luxury bridal collections.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-20 text-center">
            <span className="uppercase tracking-[0.35em] text-[#b8915d]">
              Bridal Dresses
            </span>

            <h2 className="section-title mt-5">
              Find Your Dream Dress
            </h2>

            <p className="section-subtitle">
              Designed with luxurious fabrics, timeless silhouettes and
              handcrafted details.
            </p>
          </div>

          <DressGrid dresses={dresses} />
        </div>
      </section>
    </main>
  );
}
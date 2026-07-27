// components/sections/Collections.tsx

import Link from "next/link";

const collections = [
  {
    title: "Echoes of Her",
    season: "Spring 2026",
    image: "/images/collections/collection-1.jpg",
  },
  {
    title: "Illuminare",
    season: "Fall 2025",
    image: "/images/collections/collection-2.jpg",
  },
  {
    title: "Radiance",
    season: "Signature",
    image: "/images/collections/collection-3.jpg",
  },
];

export default function Collections() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="uppercase tracking-[0.45em] text-[#b8915d]">
            Collections
          </span>

          <h2 className="mt-5 text-5xl font-light">
            Discover Our Collections
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-500">
            Every collection tells a different story while preserving
            timeless elegance and modern femininity.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-8 text-center">
                <p className="uppercase tracking-[0.3em] text-neutral-400">
                  {collection.season}
                </p>

                <h3 className="mt-3 text-3xl font-light">
                  {collection.title}
                </h3>

                <Link
                  href="/catalog"
                  className="mt-8 inline-block border border-black px-8 py-3 uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
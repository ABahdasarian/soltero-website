import Image from "next/image";
import Link from "next/link";
import { getCloudinaryCover } from "@/lib/cloudinary";

const collections = [
  {
    title: "Spring Flower",
    season: "Spring 2026",
    image: "spring-flower",
    slug: "spring-flower",
  },
  {
    title: "Echoes of Her",
    season: "Spring 2026",
    image: "echoes-of-her",
    slug: "echoes-of-her",
  },
  {
    title: "Illuminare",
    season: "Fall 2025",
    image: "illuminare",
    slug: "illuminare",
  },
  {
    title: "Radiance of Love",
    season: "Signature",
    image: "radiance",
    slug: "radiance-of-love",
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => (
            <article key={collection.slug} className="group">
              <div className="overflow-hidden bg-[#f7f5f2]">
                <Image
                  src={getCloudinaryCover(collection.image)}
                  alt={collection.title}
                  width={900}
                  height={1200}
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
                  href={`/collection/${collection.slug}`}
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
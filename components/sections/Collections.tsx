import Image from "next/image";
import Link from "next/link";

import { getCloudinaryCover } from "@/lib/cloudinary";

const collections = [
  {
    title: "Spring Flower",
    image: "spring-flower",
    slug: "spring-flower",
  },
  {
    title: "Echoes of Her",
    image: "echoes-of-her",
    slug: "echoes-of-her",
  },
  {
    title: "Illuminare",
    image: "illuminare",
    slug: "illuminare",
  },
  {
    title: "Radiance of Love",
    image: "radiance",
    slug: "radiance-of-love",
  },
];

export default function Collections() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1500px] px-6">

        <div className="mb-20 text-center">
          <span className="uppercase tracking-[0.45em] text-[#B9935D]">
            Collections
          </span>

          <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A]">
            Discover Our Collections
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-500">
            Every collection tells a different story while preserving
            timeless elegance and modern femininity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collection/${collection.slug}`}
              className="group block"
            >
              <div className="overflow-hidden bg-[#F7F5F2]">
                <div className="relative overflow-hidden">
                  <Image
                    src={getCloudinaryCover(collection.image)}
                    alt={collection.title}
                    width={900}
                    height={1200}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                </div>
              </div>

              <div className="pt-8 text-center">

                <h3 className="font-heading text-[30px] leading-tight text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D] xl:text-[34px]">
                  {collection.title}
                </h3>

                <div className="mx-auto mt-8 h-px w-12 bg-[#B9935D] transition-all duration-300 group-hover:w-24" />

                <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">

                  Explore Collection

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
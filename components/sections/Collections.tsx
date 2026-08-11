import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

import { getCloudinaryCover } from "@/lib/cloudinary";

const collections = [
  
  {
    title: "Echoes of Her",
    image: "https://res.cloudinary.com/cwh8h4x4/image/upload/v1786409406/echoes.jpg",
    slug: "echoes-of-her",
  },
  {
    title: "Illuminare",
    image: "https://res.cloudinary.com/cwh8h4x4/image/upload/v1786409411/illuminare.jpg",
    slug: "illuminare",
  },
  {
    title: "Radiance of Love",
    image: "https://res.cloudinary.com/cwh8h4x4/image/upload/v1786409412/radience.jpg",
    slug: "radiance-of-love",
  },

  {
    title: "Spring Flower",
    image: "https://res.cloudinary.com/cwh8h4x4/image/upload/v1786409405/spring.jpg",
    slug: "spring-flower",
  },
  {
    title: "Whispers Dreams",
    image:
      "https://res.cloudinary.com/cwh8h4x4/image/upload/v1786409414/whispers.jpg",
  slug: "wispers-dreams",
  },
];

export default function Collections() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1500px] px-6">

        <FadeIn>
          <div className="mb-20 text-center">
            <span className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
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
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {collections.map((collection, index) => (
            <FadeIn
              key={collection.slug}
              delay={index * 0.12}
            >
              <Link
                href={`/collection/${collection.slug}`}
                className="group block"
              >
                <div className="overflow-hidden bg-[#F7F5F2]">
                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        collection.image.startsWith("https://")
                          ? collection.image
                          : getCloudinaryCover(collection.image)
                      }
                      alt={collection.title}
                      width={900}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <h3 className="font-heading text-[26px] leading-tight text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">
                    {collection.title}
                  </h3>

                  <div className="mx-auto mt-6 h-px w-10 bg-[#B9935D] transition-all duration-300 group-hover:w-20" />

                  <div className="mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">
                    Explore Collection

                    <svg
                      width="16"
                      height="16"
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
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
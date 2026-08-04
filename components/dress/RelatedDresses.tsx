import Link from "next/link";
import Image from "next/image";
import type { Dress } from "@/data/types";
import { getCloudinaryImage } from "@/lib/cloudinary";

interface Props {
  dresses: Dress[];
}

export default function RelatedDresses({ dresses }: Props) {
  if (dresses.length === 0) return null;

  return (
    <section className="border-t border-neutral-200 bg-[#FAF8F5] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#978065]">
            Discover More
          </p>

          <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A]">
            You May Also Like
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Explore more gowns from the same collection and discover the
            perfect dress for your special day.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dresses.map((dress) => (
            <Link
              key={dress.slug}
              href={`/collection/${dress.slug}`}
              className="group"
            >
              <div className="overflow-hidden bg-[#F7F5F2]">
                <Image
                  src={getCloudinaryImage(dress.images[0], {
                    width: 700,
                  })}
                  alt={dress.name}
                  width={700}
                  height={950}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#978065]">
                  {dress.collection}
                </p>

                <h3 className="mt-3 font-heading text-3xl text-[#2A2A2A] transition group-hover:text-[#978065]">
                  {dress.name}
                </h3>

                <span className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-neutral-500 transition group-hover:text-[#978065]">
                  View Dress
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
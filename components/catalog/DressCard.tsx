// components/catalog/DressCard.tsx

import Link from "next/link";
import type { Dress } from "@/data/dresses";

interface Props {
  dress: Dress;
}

export default function DressCard({ dress }: Props) {
  return (
    <article className="group">
      <Link href={`/catalog/${dress.slug}`}>
        <div className="overflow-hidden bg-[#f7f5f2]">
          <img
            src={dress.images[0]}
            alt={dress.name}
            className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="pt-8 text-center">
          <span className="uppercase tracking-[0.3em] text-[#b8915d] text-sm">
            Soltero
          </span>

          <h3 className="mt-3 text-3xl font-light">
            {dress.name}
          </h3>

          <p className="mt-4 text-neutral-500">
            {dress.price}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 uppercase tracking-[0.25em] text-sm">
            View Dress

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
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
    </article>
  );
}
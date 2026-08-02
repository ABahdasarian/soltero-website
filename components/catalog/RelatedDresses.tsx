import Link from "next/link";
import { dresses } from "@/data/dresses";

interface Props {
  currentSlug: string;
  collection: string;
}

export default function RelatedDresses({
  currentSlug,
  collection,
}: Props) {
  const related = dresses
    .filter(
      (dress) =>
        dress.collection === collection &&
        dress.slug !== currentSlug
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-40 border-t border-neutral-200 pt-24">
      <div className="mb-16 text-center">
        <span className="uppercase tracking-[0.35em] text-[#b8915d]">
          Discover More
        </span>

        <h2 className="mt-5 text-5xl font-light">
          You May Also Love
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {related.map((dress) => (
          <Link
            key={dress.slug}
            href={`/catalog/${dress.slug}`}
            className="group"
          >
            <div className="overflow-hidden bg-[#f7f5f2]">
              <img
                src={dress.images[0]}
                alt={dress.name}
                className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pt-8 text-center">
              <span className="uppercase tracking-[0.35em] text-[#b8915d] text-sm">
                {dress.collection}
              </span>

              <h3 className="mt-4 text-3xl font-light transition group-hover:text-[#b8915d]">
                {dress.name}
              </h3>

              <div className="mt-6 inline-flex items-center gap-3 uppercase tracking-[0.3em] text-xs">
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
        ))}
      </div>
    </section>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import { dresses } from "@/data/dresses";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DressPage({ params }: Props) {
  const { slug } = await params;

  const dress = dresses.find((item) => item.slug === slug);

  if (!dress) {
    notFound();
  }

  const related = dresses
    .filter(
      (item) =>
        item.slug !== dress.slug &&
        item.collection === dress.collection
    )
    .slice(0, 4);

  return (
    <main className="pt-24">
      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-20 lg:grid-cols-2">

        <div>

          <div className="overflow-hidden bg-[#F7F5F2]">
            <img
              src={dress.images[0]}
              alt={dress.name}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>

          {dress.images.length > 1 && (
            <div className="mt-6 grid grid-cols-3 gap-4">
              {dress.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={dress.name}
                  className="aspect-square w-full object-cover"
                />
              ))}
            </div>
          )}

        </div>

        <div className="flex items-center">
          <div>

            <p className="uppercase tracking-[0.35em] text-[#978065]">
              {dress.collection}
            </p>

            <h1 className="mt-5 font-heading text-6xl text-[#2A2A2A]">
              {dress.name}
            </h1>

            {dress.description && (
              <p className="mt-8 leading-8 text-neutral-600">
                {dress.description}
              </p>
            )}

            {!dress.description && (
              <p className="mt-8 leading-8 text-neutral-600">
                A timeless wedding gown designed for the modern bride.
                Elegant lines, luxurious fabrics and handcrafted
                details create a silhouette that feels refined,
                sophisticated and unforgettable.
              </p>
            )}

            <div className="mt-12 space-y-4 border-y border-neutral-200 py-8">

              <div className="flex justify-between">
                <span>Collection</span>
                <span className="font-medium">
                  {dress.collection}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Silhouette</span>
                <span className="font-medium">
                  A-Line
                </span>
              </div>

              <div className="flex justify-between">
                <span>Fabric</span>
                <span className="font-medium">
                  Mikado & Lace
                </span>
              </div>

              <div className="flex justify-between">
                <span>Train</span>
                <span className="font-medium">
                  Cathedral
                </span>
              </div>

            </div>

            <Link
              href="/booking"
              className="mt-10 inline-block bg-[#978065] px-10 py-5 uppercase tracking-[0.25em] text-white transition hover:opacity-90"
            >
              Book Appointment
            </Link>
                      </div>
        </div>
      </section>

      <section className="bg-[#F7F5F2] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <p className="uppercase tracking-[0.35em] text-[#978065]">
              You May Also Like
            </p>

            <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A]">
              Similar Dresses
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/collection/${item.slug}`}
                className="group"
              >
                <div className="overflow-hidden bg-[#F7F5F2]">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="pt-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#978065]">
                    {item.collection}
                  </p>

                  <h3 className="mt-3 font-heading text-2xl text-[#2A2A2A] transition group-hover:text-[#978065]">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
          </main>
  );
}
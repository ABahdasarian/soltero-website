import Link from "next/link";
import { notFound } from "next/navigation";

const dresses = [
  {
    slug: "spring-flower-1",
    name: "Aurora",
    collection: "Spring Flower",
    image: "/images/dresses/dress1.jpg",
  },
  {
    slug: "echoes-1",
    name: "Celeste",
    collection: "Echoes of Her",
    image: "/images/dresses/dress2.jpg",
  },
  {
    slug: "illuminare-1",
    name: "Isabella",
    collection: "Illuminare",
    image: "/images/dresses/dress3.jpg",
  },
  {
    slug: "radiance-1",
    name: "Bianca",
    collection: "Radiance",
    image: "/images/dresses/dress4.jpg",
  },
  {
    slug: "spring-flower-2",
    name: "Olivia",
    collection: "Spring Flower",
    image: "/images/dresses/dress5.jpg",
  },
  {
    slug: "echoes-2",
    name: "Sophia",
    collection: "Echoes of Her",
    image: "/images/dresses/dress6.jpg",
  },
  {
    slug: "illuminare-2",
    name: "Victoria",
    collection: "Illuminare",
    image: "/images/dresses/dress7.jpg",
  },
  {
    slug: "radiance-2",
    name: "Amelia",
    collection: "Radiance",
    image: "/images/dresses/dress8.jpg",
  },
];

export default async function DressPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const dress = dresses.find((item) => item.slug === slug);

  if (!dress) notFound();

  const related = dresses
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <main className="pt-24">
      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <img
            src={dress.image}
            alt={dress.name}
            className="aspect-[3/4] w-full object-cover"
          />

          <div className="grid grid-cols-3 gap-4">
            <img
              src={dress.image}
              alt=""
              className="aspect-square w-full object-cover"
            />

            <img
              src={dress.image}
              alt=""
              className="aspect-square w-full object-cover"
            />

            <img
              src={dress.image}
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#b8915d]">
              {dress.collection}
            </p>

            <h1 className="mt-5 text-6xl font-light">
              {dress.name}
            </h1>

            <p className="mt-8 leading-8 text-neutral-600">
              A timeless wedding gown designed for the modern bride.
              Elegant lines, luxurious fabrics and handcrafted details
              create a silhouette that feels both contemporary and
              unforgettable.
            </p>

            <div className="mt-12 space-y-4 border-y border-neutral-200 py-8">
              <div className="flex justify-between">
                <span>Silhouette</span>
                <span className="font-medium">A-Line</span>
              </div>

              <div className="flex justify-between">
                <span>Fabric</span>
                <span className="font-medium">
                  Mikado & Lace
                </span>
              </div>

              <div className="flex justify-between">
                <span>Neckline</span>
                <span className="font-medium">V-Neck</span>
              </div>

              <div className="flex justify-between">
                <span>Train</span>
                <span className="font-medium">Cathedral</span>
              </div>
            </div>

            <Link
              href="/booking"
              className="mt-10 inline-block bg-[#b8915d] px-10 py-5 uppercase tracking-[0.25em] text-white transition hover:bg-[#a27a47]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="uppercase tracking-[0.35em] text-[#b8915d]">
              You May Also Like
            </p>

            <h2 className="mt-5 text-5xl font-light">
              Similar Dresses
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/catalog/${item.slug}`}
                className="group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 text-2xl font-light">
                  {item.name}
                </h3>

                <p className="mt-2 uppercase tracking-[0.2em] text-[#b8915d]">
                  {item.collection}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
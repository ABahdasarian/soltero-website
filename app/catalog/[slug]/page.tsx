import Link from "next/link";
import { notFound } from "next/navigation";

import { dresses } from "@/data/dresses";
import ImageGallery from "@/components/catalog/ImageGallery";
import RelatedDresses from "@/components/catalog/RelatedDresses";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DressPage({ params }: Props) {
  const { slug } = await params;

  const dress = dresses.find((d) => d.slug === slug);

  if (!dress) notFound();

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-24 lg:grid-cols-2">
          <ImageGallery
            images={dress.images}
            alt={dress.name}
          />

          <div className="h-fit lg:sticky lg:top-28">
            <span className="uppercase tracking-[0.45em] text-[#b8915d]">
              {dress.collection}
            </span>

            <h1 className="mt-5 text-6xl font-light leading-none xl:text-7xl">
              {dress.name}
            </h1>

            <p className="mt-10 text-lg leading-9 text-neutral-600">
              {dress.description ||
                "Every SOLTERO gown is handcrafted to celebrate timeless elegance through luxurious fabrics, couture construction and refined silhouettes. Designed for modern brides seeking effortless sophistication."}
            </p>

            <div className="my-14 space-y-6 border-y border-neutral-200 py-10">
              <Info title="Collection" value={dress.collection} />
              <Info title="Designer" value="SOLTERO" />
              <Info title="Availability" value="In Salon" />
              <Info title="Appointment" value="Required" />
              <Info title="Made In" value="Europe" />
            </div>

            <div className="rounded-sm bg-[#f8f5f1] p-10">
              <h3 className="text-2xl font-light">
                Love this dress?
              </h3>

              <p className="mt-4 leading-8 text-neutral-600">
                Book a private bridal appointment and experience this gown in
                person with our stylist.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <Link
                  href="/booking"
                  className="flex justify-center border border-black bg-black px-8 py-5 uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/contact"
                  className="flex justify-center border border-neutral-300 px-8 py-5 uppercase tracking-[0.35em] transition hover:border-black"
                >
                  Contact Us
                </Link>

                <Link
                  href="/catalog"
                  className="pt-4 text-center uppercase tracking-[0.35em] text-neutral-500 transition hover:text-black"
                >
                  ← Back to Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <RelatedDresses
          currentSlug={dress.slug}
          collection={dress.collection}
        />
      </section>
    </main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="uppercase tracking-[0.25em] text-neutral-500">
        {title}
      </span>

      <span className="font-light">{value}</span>
    </div>
  );
}
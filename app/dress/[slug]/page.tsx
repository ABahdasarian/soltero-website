import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { dresses } from "@/data/dresses";
import DressGallery from "@/components/dress/DressGallery";
import { getCloudinaryImage } from "@/lib/cloudinary";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DressPage({ params }: Props) {
  const { slug } = await params;

  const dress = dresses.find((d) => d.slug === slug);

  if (!dress) {
    notFound();
  }

  const relatedDresses = dresses
    .filter(
      (d) =>
        d.collectionSlug === dress.collectionSlug &&
        d.slug !== dress.slug
    )
    .slice(0, 2);

  return (
    <main className="pt-24">
      {/* Product */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Gallery */}
          <DressGallery
            images={dress.images}
            name={dress.name}
          />

          {/* Information */}
          <div className="h-fit lg:sticky lg:top-32">
            <p className="text-sm uppercase tracking-[0.35em] text-[#978065]">
              {dress.collection}
            </p>

            <h1 className="mt-5 font-heading text-6xl text-[#2A2A2A]">
              {dress.name}
            </h1>

            <div className="mt-10 space-y-5 text-lg text-neutral-700">
              <p>
                <span className="font-medium">Model:</span> {dress.name}
              </p>

              <p>
                <span className="font-medium">Availability:</span>{" "}
                Available in our boutique
              </p>

              <p className="leading-8 text-neutral-500">
                To try on this gown and receive a personalized bridal
                consultation, please book an appointment with one of our
                stylists.
              </p>
            </div>

            <Link
              href={`/booking?dress=${encodeURIComponent(dress.name)}`}
              className="mt-12 inline-flex items-center justify-center border border-[#978065] bg-[#978065] px-8 py-4 text-sm uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-transparent hover:text-[#978065]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Related Dresses */}
      {relatedDresses.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-32">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#978065]">
              Discover More
            </p>

            <h2 className="mt-4 font-heading text-5xl text-[#2A2A2A]">
              You May Also Like
            </h2>
          </div>

          <div className="grid justify-items-center gap-x-12 gap-y-14 md:grid-cols-2">
            {relatedDresses.map((item) => (
              <Link
                key={item.slug}
                href={`/dress/${item.slug}`}
                className="group w-full max-w-[360px]"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={getCloudinaryImage(item.images[0], {
                      width: 900,
                    })}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#978065]">
                    {item.collection}
                  </p>

                  <h3 className="mt-3 font-heading text-3xl text-[#2A2A2A]">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
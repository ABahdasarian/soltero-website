import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { dresses } from "@/data/dresses";
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

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={getCloudinaryImage(dress.images[0], {
                width: 1200,
              })}
              alt={dress.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="pt-6">
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

              <p className="max-w-xl leading-8 text-neutral-500">
                To try on this gown and receive a personalized bridal
                consultation, please book an appointment with us.
              </p>
            </div>

            <Link
              href="/booking"
              className="mt-12 inline-flex items-center justify-center border border-[#978065] bg-[#978065] px-8 py-4 text-sm uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-transparent hover:text-[#978065]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
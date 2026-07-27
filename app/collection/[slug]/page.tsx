// app/catalog/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { dresses } from "@/data/dresses";

interface Props {
  params: {
    slug: string;
  };
}

export default function DressPage({ params }: Props) {
  const dress = dresses.find((item) => item.slug === params.slug);

  if (!dress) notFound();

  return (
    <main className="pt-24">
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="grid gap-6">
            {dress.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden bg-[#f7f5f2]"
              >
                <Image
                  src={image}
                  alt={dress.name}
                  width={900}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="sticky top-32 h-fit">
            <p className="uppercase tracking-[0.35em] text-[#b8915d]">
              Soltero Bridal
            </p>

            <h1 className="mt-4 text-6xl font-light">
              {dress.name}
            </h1>

            <p className="mt-6 text-3xl text-neutral-500">
              {dress.price}
            </p>

            <div className="mt-10 space-y-8 border-y py-10">
              <div>
                <h3 className="mb-2 uppercase tracking-[0.2em]">
                  Description
                </h3>

                <p className="leading-8 text-neutral-600">
                  {dress.description}
                </p>
              </div>

              <div>
                <h3 className="mb-2 uppercase tracking-[0.2em]">
                  Collection
                </h3>

                <p className="text-neutral-600">
                  {dress.collection}
                </p>
              </div>

              <div>
                <h3 className="mb-2 uppercase tracking-[0.2em]">
                  Silhouette
                </h3>

                <p className="text-neutral-600">
                  {dress.silhouette}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              <Link
                href="/booking"
                className="bg-[#b8915d] px-8 py-5 text-center uppercase tracking-[0.25em] text-white transition hover:bg-[#9d7644]"
              >
                Book Appointment
              </Link>

              <Link
                href="/catalog"
                className="border border-black px-8 py-5 text-center uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
              >
                Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
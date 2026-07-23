import Image from "next/image";
import { notFound } from "next/navigation";
import { dresses } from "@/data/dresses";

type Props = {
  params: {
    slug: string;
  };
};

export default function DressPage({ params }: Props) {
  const dress = dresses.find((d) => d.slug === params.slug);

  if (!dress) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <Image
            src={dress.images[0]}
            alt={dress.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {dress.collection}
          </p>

          <h1 className="mt-4 text-5xl font-light">
            {dress.name}
          </h1>

          <p className="mt-8 text-neutral-700">
            {dress.description || "Description coming soon."}
          </p>

          <button className="mt-10 rounded-md border px-6 py-3 transition hover:bg-black hover:text-white">
            Book Appointment
          </button>
        </div>
      </div>
    </main>
  );
}
import { notFound } from "next/navigation";

import { dresses } from "@/data/dresses";

import DressGallery from "@/components/dress/DressGallery";
import DressInfo from "@/components/dress/DressInfo";
import RelatedDresses from "@/components/dress/RelatedDresses";

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
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          <DressGallery dress={dress} />
          <DressInfo dress={dress} />
        </div>
      </section>

      <RelatedDresses dresses={related} />
    </main>
  );
}
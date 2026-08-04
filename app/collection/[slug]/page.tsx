import { notFound } from "next/navigation";
import { dresses } from "@/data/dresses";
import DressCard from "@/components/catalog/DressCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;

  const collectionDresses = dresses.filter(
    (dress) => dress.collectionSlug === slug
  );

  if (collectionDresses.length === 0) {
    notFound();
  }

  const collectionName = collectionDresses[0].collection;

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#978065]">
            SOLTERO COLLECTION
          </span>

          <h1 className="mt-6 font-heading text-6xl text-[#2A2A2A]">
            {collectionName}
          </h1>
        </div>

        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
          {collectionDresses.map((dress) => (
            <DressCard key={dress.slug} dress={dress} />
          ))}
        </div>
      </section>
    </main>
  );
}
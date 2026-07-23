import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DressGrid from "@/components/catalog/DressGrid";
import { dresses } from "@/data/dresses";

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
    <>
      <Header />

      <main className="bg-[#F8F6F3] py-20">
        <div className="mx-auto max-w-7xl px-8">
          <h1 className="mb-4 text-center text-5xl font-light">
            {collectionName}
          </h1>

          <p className="mb-12 text-center text-stone-500">
            Explore the {collectionName} collection.
          </p>

          <DressGrid dresses={collectionDresses} />
        </div>
      </main>

      <Footer />
    </>
  );
}
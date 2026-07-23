import DressGrid from "@/components/catalog/DressGrid";
import { dresses } from "@/data/dresses";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-4 text-center text-5xl font-light">
        Wedding Dresses
      </h1>

      <p className="mb-12 text-center text-neutral-500">
        Explore our bridal collections
      </p>

      <DressGrid dresses={dresses} />
    </main>
  );
}
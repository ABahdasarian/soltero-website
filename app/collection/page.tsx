import DressGrid from "@/components/catalog/DressGrid";

export default function CollectionPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#978065]">
            SOLTERO COLLECTION
          </span>

          <h1 className="mt-6 font-heading text-6xl text-[#2A2A2A]">
            Bridal Collection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Discover our complete collection of couture bridal gowns,
            designed with timeless elegance and exceptional craftsmanship.
          </p>
        </div>

        <DressGrid />
      </section>
    </main>
  );
}
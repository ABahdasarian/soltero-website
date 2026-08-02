import DressGrid from "@/components/catalog/DressGrid";

export default function CatalogPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 text-center">
          <span className="uppercase tracking-[0.35em] text-[#b8915d]">
            SOLTERO COLLECTION
          </span>

          <h1 className="mt-6 text-6xl font-light">
            Bridal Dresses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Discover our complete collection of couture bridal gowns,
            designed with timeless elegance and exceptional craftsmanship.
          </p>
        </div>

        <DressGrid />
      </section>
    </main>
  );
}
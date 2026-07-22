import CollectionCard from "../cards/CollectionCard";
import Container from "../ui/Container";
import { collections } from "../../data/collections";

export default function Collections() {
  return (
    <section className="bg-white py-24">
      <Container>
        <p className="text-center text-sm uppercase tracking-[0.3em] text-stone-500">
          Our Collections
        </p>

        <h2 className="mt-4 text-center text-5xl font-light">
          Discover Our Collections
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-center text-stone-600">
          Each collection tells its own bridal story.
          <br />
          Choose the one that reflects your style.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.title}
              title={collection.title}
              image={collection.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
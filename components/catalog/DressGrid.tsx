import DressCard from "./DressCard";
import { Dress } from "@/data/types";

type DressGridProps = {
  dresses: Dress[];
};

export default function DressGrid({ dresses }: DressGridProps) {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {dresses.map((dress) => (
        <DressCard
          key={dress.slug}
          slug={dress.slug}
          name={dress.name}
          image={dress.images[0]}
        />
      ))}
    </section>
  );
}
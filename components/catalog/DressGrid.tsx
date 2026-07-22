import DressCard from "./DressCard";
import { dresses } from "../../data/dresses";

export default function DressGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {dresses.map((dress) => (
        <DressCard
          key={dress.id}
          name={dress.name}
          image={dress.image}
        />
      ))}
    </section>
  );
}
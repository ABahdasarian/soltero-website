// components/catalog/DressGrid.tsx

import DressCard from "./DressCard";
import type { Dress } from "@/data/dresses";

interface DressGridProps {
  dresses: Dress[];
}

export default function DressGrid({ dresses }: DressGridProps) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-3">
        {dresses.map((dress) => (
          <DressCard
            key={dress.slug}
            dress={dress}
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useMemo, useState } from "react";
import { dresses } from "@/data/dresses";
import DressCard from "./DressCard";

const filters = [
  "All",
  "Echoes of Her",
  "Illuminare",
  "Radiance of Love",
  "Spring Flower",
];

export default function DressGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return dresses;

    return dresses.filter(
      (dress) => dress.collection === active
    );
  }, [active]);

  return (
    <section>
      <div className="mb-20 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`border px-7 py-3 text-xs uppercase tracking-[0.35em] transition duration-300 ${
              active === filter
                ? "border-black bg-black text-white"
                : "border-neutral-300 hover:border-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((dress) => (
          <DressCard
            key={dress.slug}
            dress={dress}
          />
        ))}
      </div>
    </section>
  );
}
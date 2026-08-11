"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { dresses } from "@/data/dresses";
import DressCard from "./DressCard";

const filters = [
  "All",
  "Echoes of Her",
  "Illuminare",
  "Radiance of Love",
  "Spring Flower",
  "Whispers Dreams",
];

export default function DressGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return dresses;
    }

    return dresses.filter((dress) => {
      if (active === "Whispers Dreams") {
        return (
          dress.collection === "Whispers Dreams" ||
          dress.collection === "Whispers Dreams"
        );
      }

      return dress.collection === active;
    });
  }, [active]);

  return (
    <section>
      <div className="mb-16 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`border px-7 py-3 text-xs uppercase tracking-[0.35em] transition duration-300 ${
              active === filter
                ? "border-[#978065] bg-[#978065] text-white"
                : "border-neutral-300 text-[#2A2A2A] hover:border-[#978065] hover:text-[#978065]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((dress, index) => (
          <FadeIn
            key={dress.slug}
            delay={index * 0.08}
          >
            <DressCard dress={dress} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
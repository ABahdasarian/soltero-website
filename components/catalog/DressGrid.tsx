"use client";

import { useMemo, useState } from "react";
import DressCard from "./DressCard";

const dresses = [
  {
    slug: "spring-flower-1",
    name: "Aurora",
    collection: "Spring Flower",
    image: "/images/dresses/dress1.jpg",
  },
  {
    slug: "echoes-1",
    name: "Celeste",
    collection: "Echoes of Her",
    image: "/images/dresses/dress2.jpg",
  },
  {
    slug: "illuminare-1",
    name: "Isabella",
    collection: "Illuminare",
    image: "/images/dresses/dress3.jpg",
  },
  {
    slug: "radiance-1",
    name: "Bianca",
    collection: "Radiance",
    image: "/images/dresses/dress4.jpg",
  },
  {
    slug: "spring-flower-2",
    name: "Olivia",
    collection: "Spring Flower",
    image: "/images/dresses/dress5.jpg",
  },
  {
    slug: "echoes-2",
    name: "Sophia",
    collection: "Echoes of Her",
    image: "/images/dresses/dress6.jpg",
  },
  {
    slug: "illuminare-2",
    name: "Victoria",
    collection: "Illuminare",
    image: "/images/dresses/dress7.jpg",
  },
  {
    slug: "radiance-2",
    name: "Amelia",
    collection: "Radiance",
    image: "/images/dresses/dress8.jpg",
  },
];

const filters = [
  "All",
  "Spring Flower",
  "Echoes of Her",
  "Illuminare",
  "Radiance",
];

export default function DressGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return dresses.filter((dress) => {
      const matchesSearch = dress.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCollection =
        filter === "All" || dress.collection === filter;

      return matchesSearch && matchesCollection;
    });
  }, [search, filter]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <input
          type="text"
          placeholder="Search dress..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
        />

        <div className="flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
                filter === item
                  ? "bg-[#b8915d] text-white"
                  : "border border-neutral-300 hover:border-[#b8915d]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((dress) => (
          <DressCard key={dress.slug} dress={dress} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center text-neutral-500">
          No dresses found.
        </div>
      )}
    </section>
  );
}
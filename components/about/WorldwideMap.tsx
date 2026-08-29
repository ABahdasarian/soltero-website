"use client";

import dynamic from "next/dynamic";

const LeafletWorldwideMap = dynamic(
  () => import("./LeafletWorldwideMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[520px] animate-pulse bg-[#e9e7e3] md:h-[650px]" />
    ),
  }
);

export default function WorldwideMap() {
  return (
    <section className="overflow-hidden bg-[#faf9f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        {/* HEADER */}

        <div className="mb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#B9935D]">
            Worldwide Presence
          </p>

          <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A] md:text-7xl">
            Soltero Around the World
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-8 text-[#777]">
            Discover where you can experience the world of Vittoria
            Soltero and find your perfect gown at one of our selected
            boutiques worldwide.
          </p>
        </div>

        {/* MAP */}

        <div className="overflow-hidden border border-[#d8d1c7] shadow-[0_30px_80px_rgba(70,55,35,0.12)]">
          <LeafletWorldwideMap />
        </div>
      </div>
    </section>
  );
}
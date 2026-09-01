"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Dress } from "@/data/types";

interface Props {
  dress: Dress;
}

export default function DressCard({ dress }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group"
    >
      <Link href={`/dress/${dress.slug}`}>
        <div className="overflow-hidden bg-[#F7F5F2]">
          <div className="relative overflow-hidden">
            <Image
              src={dress.images[0]}
              alt={dress.name}
              width={900}
              height={1200}
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/5" />
          </div>
        </div>

        <div className="px-2 pt-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#B9935D]">
            {dress.collection}
          </p>

          <h3 className="mt-4 font-heading text-[40px] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">
            {dress.name}
          </h3>

          <p className="mx-auto mt-5 max-w-[260px] text-[15px] leading-7 text-[#777]">
            Timeless elegance crafted for unforgettable bridal moments.
          </p>

          <div className="mx-auto mt-8 h-px w-12 bg-[#B9935D] transition-all duration-300 group-hover:w-24" />

          <div className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">
            View Details

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
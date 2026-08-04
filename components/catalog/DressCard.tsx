"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Dress } from "@/data/types";
import { getCloudinaryImage } from "@/lib/cloudinary";

interface Props {
  dress: Dress;
}

export default function DressCard({ dress }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={`/dress/${dress.slug}`}>
        <div className="relative overflow-hidden bg-[#F7F5F2]">
          <Image
            src={getCloudinaryImage(dress.images[0], {
              width: 700,
            })}
            alt={dress.name}
            width={700}
            height={950}
            className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-8 text-white transition duration-500 group-hover:translate-y-0">
            <span className="text-xs uppercase tracking-[0.35em]">
              View Dress
            </span>
          </div>
        </div>

        <div className="pt-8 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#978065]">
            {dress.collection}
          </span>

          <h3 className="mt-4 font-heading text-4xl text-[#2A2A2A] transition duration-300 group-hover:text-[#978065]">
            {dress.name}
          </h3>

          <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#2A2A2A]">
            Discover

            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
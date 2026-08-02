import Link from "next/link";
import { motion } from "framer-motion";
import type { Dress } from "@/data/dresses";

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
      <Link href={`/catalog/${dress.slug}`}>
        <div className="relative overflow-hidden bg-[#f7f5f2]">
          <img
            src={dress.images[0]}
            alt={dress.name}
            className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-8 text-white transition duration-500 group-hover:translate-y-0">
            <span className="uppercase tracking-[0.35em] text-xs">
              View Dress
            </span>
          </div>
        </div>

        <div className="pt-8 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-[#b8915d]">
            {dress.collection}
          </span>

          <h3 className="mt-4 text-4xl font-light transition duration-300 group-hover:text-[#b8915d]">
            {dress.name}
          </h3>

          <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em]">
            Discover

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
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
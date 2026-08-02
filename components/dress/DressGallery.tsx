"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dress } from "@/data/types";

interface Props {
  dress: Dress;
}

export default function DressGallery({ dress }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-6">

      <div className="overflow-hidden bg-[#F7F5F2] rounded-sm">

        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={dress.images[activeImage]}
            alt={dress.name}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="aspect-[3/4] w-full object-cover"
          />
        </AnimatePresence>

      </div>

      {dress.images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">

          {dress.images.map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveImage(index)}
              className={`overflow-hidden transition duration-300 ${
                activeImage === index
                  ? "ring-2 ring-[#978065]"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image}
                alt={dress.name}
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}

        </div>
      )}

    </div>
  );
}
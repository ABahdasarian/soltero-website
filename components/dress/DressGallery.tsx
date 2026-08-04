"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Dress } from "@/data/types";
import { getCloudinaryImage } from "@/lib/cloudinary";

interface Props {
  dress: Dress;
}

export default function DressGallery({ dress }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-sm bg-[#F7F5F2]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={getCloudinaryImage(dress.images[activeImage], {
                width: 1200,
              })}
              alt={dress.name}
              width={1200}
              height={1600}
              priority
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
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
              <Image
                src={getCloudinaryImage(image, {
                  width: 300,
                })}
                alt={`${dress.name} ${index + 1}`}
                width={300}
                height={400}
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
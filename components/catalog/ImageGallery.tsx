"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-sm bg-[#f7f5f2]">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={images[selected]}
            alt={alt}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="aspect-[3/4] w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`overflow-hidden border transition-all duration-300 ${
              selected === index
                ? "border-black"
                : "border-neutral-200 hover:border-neutral-500"
            }`}
          >
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className={`aspect-[3/4] w-full object-cover transition duration-500 ${
                selected === index
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
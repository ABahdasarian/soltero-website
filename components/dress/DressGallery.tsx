"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { getCloudinaryImage } from "@/lib/cloudinary";

type Props = {
  images: string[];
  name: string;
};

export default function DressGallery({
  images,
  name,
}: Props) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const currentImage = getCloudinaryImage(images[active], {
    width: 1800,
  });

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[90px_1fr]">
        {/* Thumbnails */}
        <div className="order-2 flex gap-4 overflow-x-auto lg:order-1 lg:flex-col">

    {images.map((image, index) => (
      <button
        key={image}
        onClick={() => setActive(index)}
        className={`relative h-28 w-20 flex-shrink-0 overflow-hidden border transition-all duration-300 ${
          active === index
            ? "border-[#B9935D]"
            : "border-[#E8E2DB] hover:border-[#B9935D]"
        }`}
      >
        <Image
          src={getCloudinaryImage(image, {
            width: 250,
          })}
          alt={`${name} ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </button>
    ))}

  </div>

  {/* Main Image */}
  <button
    onClick={() => setOpen(true)}
    className="group relative order-1 aspect-[3/4] overflow-hidden bg-[#F7F5F2] lg:order-2"
  >

    <Image
      key={currentImage}
      src={currentImage}
      alt={name}
      fill
      priority
      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />

    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/5" />

    <div className="absolute bottom-8 right-8 border border-white/70 bg-white/20 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
      View Fullscreen
    </div>

  </button>

</div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={active}
        slides={images.map((image) => ({
          src: getCloudinaryImage(image, {
            width: 2200,
          }),
        }))}
        controller={{
          closeOnBackdropClick: true,
        }}
      />
    </>
  );
}
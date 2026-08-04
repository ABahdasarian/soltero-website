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

export default function DressGallery({ images, name }: Props) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-lg"
        >
          <Image
            src={getCloudinaryImage(images[active], {
              width: 1400,
            })}
            alt={name}
            fill
            priority
            className="object-cover transition duration-300 hover:scale-105"
          />
        </button>

        <div className="mt-5 flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setActive(index)}
              className={`relative h-28 w-20 overflow-hidden rounded border-2 transition ${
                active === index
                  ? "border-[#978065]"
                  : "border-transparent"
              }`}
            >
              <Image
                src={getCloudinaryImage(image, {
                  width: 300,
                })}
                alt={`${name} ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={active}
        slides={images.map((image) => ({
          src: getCloudinaryImage(image, {
            width: 2000,
          }),
        }))}
      />
    </>
  );
}
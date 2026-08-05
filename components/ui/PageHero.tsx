import Image from "next/image";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

interface PageHeroProps {
  image: string;
  title: string;
  description: string;
}

export default function PageHero({
  image,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <Image
        src={getCloudinaryPageImage(image)}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative flex h-full items-center justify-center px-6 text-center text-white">

        <div className="max-w-4xl">
                      <h1 className="font-heading text-6xl leading-none md:text-8xl">
            {title}
          </h1>

          <div className="mx-auto mt-10 h-px w-24 bg-[#B9935D]" />

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-white/85">
            {description}
          </p>

        </div>

      </div>
            </section>
  );
}
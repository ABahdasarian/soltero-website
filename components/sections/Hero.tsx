import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <Image
        src={getCloudinaryPageImage("hero")}
        alt="SOLTERO"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <p className="mb-6 uppercase tracking-[0.45em] text-[#d7b27b]">
            Soltero Bridal
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-8xl">
            Discover
            <br />
            Our Collection
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
            Timeless silhouettes, luxurious fabrics and handcrafted
            details created for unforgettable moments.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/collection"
              className="border border-white px-10 py-4 uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Explore Collection
            </Link>

            <Link
              href="/booking"
              className="bg-[#b9935d] px-10 py-4 uppercase tracking-[0.2em] transition hover:bg-[#a88352]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
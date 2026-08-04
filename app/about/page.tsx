// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={getCloudinaryPageImage("about")}
          alt="About SOLTERO"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex h-full items-center justify-center text-center text-white">
          <div>
            <p className="mb-5 uppercase tracking-[0.45em] text-[#d8b176]">
              SOLTERO
            </p>

            <h1 className="text-6xl font-light md:text-8xl">
              Our Story
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
              Timeless bridal elegance inspired by modern femininity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
          <Image
            src={getCloudinaryPageImage("about")}
            alt="About SOLTERO"
            width={900}
            height={1125}
            className="aspect-[4/5] w-full object-cover"
          />

          <div>
            <span className="uppercase tracking-[0.35em] text-[#b8915d]">
              About Us
            </span>

            <h2 className="mt-6 text-5xl font-light leading-tight">
              Designed For
              <br />
              Your Forever Moment
            </h2>

            <p className="mt-8 leading-8 text-neutral-600">
              SOLTERO creates luxury bridal gowns that combine timeless
              elegance with contemporary design. Every dress is crafted
              to celebrate confidence, beauty and unforgettable moments.
            </p>

            <p className="mt-6 leading-8 text-neutral-600">
              Our designers carefully select premium fabrics and refine
              every silhouette so every bride feels exceptional from the
              first fitting to the wedding day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="uppercase tracking-[0.35em] text-[#b8915d]">
              Why SOLTERO
            </span>

            <h2 className="mt-6 text-5xl font-light">
              Crafted With Passion
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-white p-10">
              <h3 className="mb-6 text-2xl font-light">
                Premium Fabrics
              </h3>

              <p className="leading-8 text-neutral-600">
                Every gown is created using luxurious fabrics selected
                for comfort, elegance and quality.
              </p>
            </div>

            <div className="bg-white p-10">
              <h3 className="mb-6 text-2xl font-light">
                Handcrafted Details
              </h3>

              <p className="leading-8 text-neutral-600">
                Every stitch, lace pattern and embroidery is carefully
                finished by skilled artisans.
              </p>
            </div>

            <div className="bg-white p-10">
              <h3 className="mb-6 text-2xl font-light">
                Personal Experience
              </h3>

              <p className="leading-8 text-neutral-600">
                Private appointments ensure every bride enjoys a relaxed
                and unforgettable fitting experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <Image
                key={item}
                src={getCloudinaryPageImage("about")}
                alt="About SOLTERO"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-32 text-center text-white">
        <span className="uppercase tracking-[0.35em] text-[#d8b176]">
          Visit Our Atelier
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-light leading-tight md:text-7xl">
          Find The Dress
          <br />
          You've Always Dreamed Of
        </h2>

        <Link
          href="/booking"
          className="mt-12 inline-block bg-[#b8915d] px-10 py-5 uppercase tracking-[0.25em] text-white transition hover:bg-[#a27a47]"
        >
          Book Appointment
        </Link>
      </section>
    </main>
  );
}
// app/booking/page.tsx

import BookingForm from "./BookingForm";

import Image from "next/image";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

type Props = {
  searchParams: Promise<{
    dress?: string;
  }>;
};

export default async function BookingPage({
  searchParams,
}: Props) {
  const { dress } = await searchParams;

  return (
    <main className="pt-24">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={getCloudinaryPageImage("hero")}
          alt="Book Appointment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative flex h-full items-center justify-center text-center text-white">
          <div>
            <p className="mb-5 uppercase tracking-[0.45em] text-[#d7b27b]">
              SOLTERO
            </p>

            <h1 className="text-6xl font-light md:text-8xl">
              Book Appointment
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
              Experience a private bridal consultation tailored
              exclusively for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-28">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="uppercase tracking-[0.4em] text-[#b8915d]">
              Appointment
            </span>

            <h2 className="mt-5 text-5xl font-light">
              Reserve Your
              <br />
              Private Fitting
            </h2>

            <p className="mt-8 leading-8 text-neutral-600">
              Meet with our bridal consultants in an intimate
              atmosphere and discover the dress that perfectly
              reflects your style.
            </p>

            <div className="mt-14 space-y-8">
              <div>
                <p className="uppercase tracking-[0.2em] text-[#b8915d]">
                  Address
                </p>

                <p className="mt-2 text-neutral-600">
                  24 Bridal Avenue
                  <br />
                  London, United Kingdom
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[#b8915d]">
                  Phone
                </p>

                <p className="mt-2 text-neutral-600">
                  +44 20 1234 5678
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[#b8915d]">
                  Email
                </p>

                <p className="mt-2 text-neutral-600">
                  hello@soltero.com
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[#b8915d]">
                  Opening Hours
                </p>

                <p className="mt-2 text-neutral-600">
                  Mon – Sat
                  <br />
                  10:00 — 19:00
                </p>
              </div>
            </div>
          </div>

<BookingForm dress={dress ?? ""} />

        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-sm">
            <iframe
              src="https://www.google.com/maps?q=london&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
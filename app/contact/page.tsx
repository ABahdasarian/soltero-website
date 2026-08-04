// app/contact/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={getCloudinaryPageImage("hero")}
          alt="Contact"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative flex h-full items-center justify-center text-center text-white">
          <div>
            <p className="mb-5 uppercase tracking-[0.45em] text-[#d8b176]">
              SOLTERO
            </p>

            <h1 className="text-6xl font-light md:text-8xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
              We'd love to help you find your dream wedding dress.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">
          <div>
            <span className="uppercase tracking-[0.35em] text-[#b8915d]">
              Get In Touch
            </span>

            <h2 className="mt-6 text-5xl font-light">
              Visit Our Boutique
            </h2>

            <div className="mt-12 space-y-8 text-neutral-600">
              <div>
                <h3 className="mb-2 text-xl text-black">Address</h3>
                <p>
                  24 Bridal Avenue
                  <br />
                  London, United Kingdom
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl text-black">Phone</h3>
                <p>+44 20 1234 5678</p>
              </div>

              <div>
                <h3 className="mb-2 text-xl text-black">Email</h3>
                <p>hello@soltero.com</p>
              </div>

              <div>
                <h3 className="mb-2 text-xl text-black">Opening Hours</h3>
                <p>
                  Monday – Saturday
                  <br />
                  10:00 – 19:00
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6 rounded-sm bg-white p-10 shadow-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
            />

            <textarea
              rows={7}
              placeholder="Your Message"
              className="w-full resize-none border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
            />

            <button className="w-full bg-[#b8915d] py-5 uppercase tracking-[0.25em] text-white transition hover:bg-[#9f7847]">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <iframe
            src="https://www.google.com/maps?q=london&output=embed"
            className="h-[500px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-[#111] py-28 text-center text-white">
        <p className="uppercase tracking-[0.35em] text-[#d8b176]">
          Ready To Begin?
        </p>

        <h2 className="mt-6 text-5xl font-light md:text-7xl">
          Book Your Private
          <br />
          Bridal Appointment
        </h2>

        <Link
          href="/booking"
          className="mt-10 inline-block bg-[#b8915d] px-10 py-5 uppercase tracking-[0.25em] transition hover:bg-[#9f7847]"
        >
          Book Appointment
        </Link>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <main className="bg-white pt-24">

      {/* Hero */}

      <PageHero
  image="hero"
  title="Contact SOLTERO"
  description="Whether you're looking for your dream gown or simply have a question, our team is here to help."
/>

      {/* Contact */}

      <section className="py-32">

        <div className="mx-auto grid max-w-[1450px] gap-24 px-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div>

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Get In Touch
            </p>

            <h2 className="mt-6 font-heading text-6xl leading-none text-[#2A2A2A]">
              We'd Love
              <br />
              To Hear
              <br />
              From You
            </h2>

            <p className="mt-10 max-w-lg text-[17px] leading-9 text-[#666]">
              Our team is always happy to answer your questions,
              help you choose the perfect gown or arrange a private
              consultation at our boutique.
            </p>

            <div className="mt-16 space-y-10">
                            <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Visit Our Boutique
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    24 Bridal Avenue
                    <br />
                    London, United Kingdom
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Call Us
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    +44 20 1234 5678
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Email Us
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    hello@soltero.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Opening Hours
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    Monday – Saturday
                    <br />
                    10:00 — 19:00
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form className="border border-[#ECE6DF] bg-white p-10 lg:p-14">

            <div className="mb-10">

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                Send a Message
              </p>

              <h2 className="mt-4 font-heading text-4xl text-[#2A2A2A]">
                Get In Touch
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-[#777]">
                Complete the form below and our team will
                respond as soon as possible.
              </p>

            </div>

            <div className="space-y-6">
                            <input
                type="text"
                placeholder="Full Name"
                className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
              />

              <textarea
                rows={7}
                placeholder="Tell us how we can help you."
                className="w-full resize-none border border-[#E6E1DA] p-5 text-[15px] leading-7 outline-none transition focus:border-[#B9935D]"
              />

            </div>

            <button
              className="mt-10 w-full bg-[#B9935D] py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#A88352]"
            >
              Send Message
            </button>

            <p className="mt-6 text-center text-sm leading-7 text-[#888]">
              We usually reply within one business day.
            </p>

          </form>

        </div>

      </section>

      {/* Map */}

      <section className="border-t border-[#ECE6DF] bg-[#FAF8F5] py-28">

        <div className="mx-auto max-w-[1450px] px-6">

          <iframe
            src="https://www.google.com/maps?q=london&output=embed"
            loading="lazy"
            className="h-[620px] w-full border-0 grayscale"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#111] py-32 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
            Ready To Begin?
          </p>

          <h2 className="mt-8 font-heading text-6xl leading-none md:text-7xl">
            Book Your Private
            <br />
            Bridal Consultation
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/80">
            Experience a personalized bridal fitting and discover
            the gown that perfectly reflects your style.
          </p>
                    <Link
            href="/booking"
            className="mt-14 inline-flex items-center justify-center bg-[#B9935D] px-12 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#A88352]"
          >
            Request Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}
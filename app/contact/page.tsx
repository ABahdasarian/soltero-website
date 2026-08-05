import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { getCloudinaryPageImage } from "@/lib/cloudinary";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <main className="bg-white pt-24">

      <PageHero
        image="hero"
        title="Contact SOLTERO"
        description="Whether you're looking for your dream gown or simply have a question, our team is here to help."
      />

      <section className="py-32">

        <div className="mx-auto grid max-w-[1450px] gap-24 px-6 lg:grid-cols-[0.9fr_1.1fr]">

          <FadeIn direction="left">

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
                      solterobridaluk@gmail.com
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
                      Monday – Friday
                      <br />
                      10:00 — 18:00
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </FadeIn>

          <FadeIn direction="right" delay={0.2}>

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
                                <button
                  className="mt-10 w-full bg-[#B9935D] py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#A88352]"
                >
                  Send Message
                </button>

                <p className="mt-6 text-center text-sm leading-7 text-[#888]">
                  We usually reply within one business day.
                </p>

              </div>

            </form>

          </FadeIn>

        </div>

      </section>

      <section className="border-t border-[#ECE6DF] bg-[#FAF8F5] py-28">

        <FadeIn>

          <div className="mx-auto max-w-[1450px] px-6">

            <iframe
              src="https://www.google.com/maps?q=london&output=embed"
              loading="lazy"
              className="h-[620px] w-full border-0 grayscale"
            />

          </div>

        </FadeIn>

      </section>

      <section className="relative overflow-hidden py-32 text-center text-white">

        <Image
          src="https://res.cloudinary.com/cwh8h4x4/image/upload/v1785955940/101.webp"
          alt="SOLTERO"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <FadeIn>

          <div className="relative z-10 mx-auto max-w-4xl px-6">

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#D8B176]">
              Ready To Begin?
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-tight md:text-7xl">
              Book Your Private
              <br />
              Bridal Consultation
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/80">
              Experience a personalized bridal fitting and discover the gown
              that perfectly reflects your style.
            </p>

            <Link
              href="/booking"
              className="mt-12 inline-flex items-center justify-center border border-[#B9935D] bg-[#B9935D] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:border-[#A88352] hover:bg-[#A88352]"
            >
              Request Consultation
            </Link>

          </div>

        </FadeIn>

      </section>

    </main>
  );
}
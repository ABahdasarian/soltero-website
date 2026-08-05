import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function AboutPage() {
  return (
    <main className="bg-white pt-24">

      {/* Hero */}

      <section className="bg-[#FAF8F5] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
            About SOLTERO
          </p>

          <h1 className="mt-6 font-heading text-6xl text-[#2A2A2A]">
            About SOLTERO
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#666]">
            Crafting timeless bridal elegance through exceptional design, refined craftsmanship and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="py-32">

        <div className="mx-auto grid max-w-[1450px] items-center gap-24 px-6 lg:grid-cols-[1fr_0.9fr]">

          <Image
            src={getCloudinaryPageImage("about")}
            alt="SOLTERO Boutique"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full object-cover"
          />

          <div>

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Our Story
            </p>

            <h2 className="mt-6 font-heading text-6xl leading-none text-[#2A2A2A]">
              Designed
              <br />
              For Your
              <br />
              Forever
              <br />
              Moment
            </h2>
                        <div className="mt-10 h-px w-20 bg-[#B9935D]" />

            <p className="mt-10 max-w-xl text-[17px] leading-9 text-[#666]">
              SOLTERO was created with one purpose — to help every bride
              discover a gown that reflects her individuality, confidence
              and timeless elegance.
            </p>

            <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#666]">
              Every collection is thoughtfully curated with exceptional
              craftsmanship, luxurious fabrics and modern silhouettes,
              creating an unforgettable experience from the very first fitting.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">

              <div>

                <h3 className="font-heading text-3xl text-[#2A2A2A]">
                  250+
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#B9935D]">
                  Luxury Dresses
                </p>

              </div>

              <div>

                <h3 className="font-heading text-3xl text-[#2A2A2A]">
                  1000+
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#B9935D]">
                  Happy Brides
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Why SOLTERO */}

      <section className="bg-[#FAF8F5] py-32">

        <div className="mx-auto max-w-[1450px] px-6">

          <div className="animate-soltero text-center">

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Why Choose Us
            </p>

            <h2 className="mt-6 font-heading text-6xl text-[#2A2A2A]">
              The SOLTERO Experience
            </h2>

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

                      <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

              <div className="mb-8 text-3xl text-[#B9935D]">✦</div>

              <h3 className="font-heading text-3xl text-[#2A2A2A]">
                Personal
                <br />
                Styling
              </h3>

              <p className="mt-6 leading-8 text-[#666]">
                Every bride receives one-to-one guidance from our experienced
                bridal consultants throughout the entire fitting.
              </p>

            </div>

            <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

              <div className="mb-8 text-3xl text-[#B9935D]">✦</div>

              <h3 className="font-heading text-3xl text-[#2A2A2A]">
                Exclusive
                <br />
                Collections
              </h3>

              <p className="mt-6 leading-8 text-[#666]">
                Carefully selected gowns created for modern brides seeking
                timeless elegance and exceptional quality.
              </p>

            </div>

            <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

              <div className="mb-8 text-3xl text-[#B9935D]">✦</div>

              <h3 className="font-heading text-3xl text-[#2A2A2A]">
                Luxury
                <br />
                Experience
              </h3>

              <p className="mt-6 leading-8 text-[#666]">
                Relax in an elegant boutique atmosphere designed to make
                every appointment memorable.
              </p>

            </div>

            <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

              <div className="mb-8 text-3xl text-[#B9935D]">✦</div>

              <h3 className="font-heading text-3xl text-[#2A2A2A]">
                Premium
                <br />
                Craftsmanship
              </h3>

              <p className="mt-6 leading-8 text-[#666]">
                Every gown reflects attention to detail, refined tailoring
                and luxurious materials.
              </p>

            </div>

          </div>

        </div>

      </section>

      
      {/* CTA */}

<section className="relative overflow-hidden py-32 text-center text-white">

  <Image
    src="https://res.cloudinary.com/cwh8h4x4/image/upload/v1785955940/101.webp"
    alt="SOLTERO"
    fill
    priority={false}
    sizes="100vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/55" />

  <div className="relative z-10 mx-auto max-w-5xl px-6">

    <p className="text-[12px] uppercase tracking-[0.45em] text-[#D8B176]">
      Begin Your Bridal Journey
    </p>

    <h2 className="mt-6 font-heading text-5xl leading-tight md:text-7xl">
      Find The Dress
      <br />
      You've Always Dreamed Of
    </h2>

    <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/80">
      Schedule your private consultation and experience the elegance,
      craftsmanship and personal attention that define SOLTERO.
    </p>

    <Link
      href="/booking"
      className="mt-12 inline-flex items-center justify-center border border-[#B9935D] bg-[#B9935D] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:border-[#A88352] hover:bg-[#A88352]"
    >
      Request Consultation
    </Link>

  </div>

</section>
          </main>
  );
}
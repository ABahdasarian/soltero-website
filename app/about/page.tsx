import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { getCloudinaryPageImage } from "@/lib/cloudinary";
import WorldwideMap from "@/components/about/WorldwideMap";

export default function AboutPage() {
  return (
    <main className="bg-white pt-24">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="bg-[#FAF8F5] py-24">
        <FadeIn>
          <div className="mx-auto max-w-6xl px-6 text-center">

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              About SOLTERO
            </p>

            <h1 className="mt-6 font-heading text-6xl text-[#2A2A2A]">
              Vittoria Soltero
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#666]">
              The home of Vittoria Soltero bridal in the UK — bringing
              distinctive Italian-inspired bridal design, refined
              craftsmanship and timeless elegance to modern brides.
            </p>

          </div>
        </FadeIn>
      </section>


      {/* ========================= */}
      {/* BRAND STORY */}
      {/* ========================= */}

      <section className="py-32">

        <div className="mx-auto grid max-w-[1450px] items-center gap-24 px-6 lg:grid-cols-[1fr_0.9fr]">

          <FadeIn direction="left">
            <Image
              src={getCloudinaryPageImage("about")}
              alt="Vittoria Soltero bridal gown"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
          </FadeIn>


          <FadeIn direction="right" delay={0.2}>

            <div>

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                The Story Behind The Brand
              </p>

              <h2 className="mt-6 font-heading text-6xl leading-none text-[#2A2A2A]">
                A Childhood
                <br />
                Dream
                <br />
                Became
                <br />
                Vittoria Soltero
              </h2>

              <div className="mt-10 h-px w-20 bg-[#B9935D]" />


              <p className="mt-10 max-w-xl text-[17px] leading-9 text-[#666]">
                The story of Vittoria Soltero began with a childhood dream
                of creating dresses. In the late 2000s, the founder and main
                designer discovered the world of wedding dressmaking and
                became deeply fascinated by the craft.
              </p>

              <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#666]">
                After studying the craft and developing her skills, Vittoria
                opened her own small atelier, where she began creating gowns
                for brides. She soon started developing her own designs,
                transforming ideas from paper into real dresses by hand.
              </p>

              <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#666]">
                The world first saw Vittoria Soltero dresses in 2017.
                Since then, the brand has continued to create hundreds of
                unique dresses each year, combining elegance, modernity,
                lightness and comfort.
              </p>

            </div>

          </FadeIn>

        </div>

      </section>


      {/* ========================= */}
      {/* SOLTERO UK */}
      {/* ========================= */}

      <section className="bg-[#FAF8F5] py-32">

        <div className="mx-auto grid max-w-[1450px] items-center gap-20 px-6 lg:grid-cols-2">

          <FadeIn direction="left">

            <div>

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                Vittoria Soltero In The UK
              </p>

              <h2 className="mt-6 font-heading text-6xl leading-tight text-[#2A2A2A]">
                Discover
                <br />
                Vittoria Soltero
                <br />
                In The UK
              </h2>

              <div className="mt-10 h-px w-20 bg-[#B9935D]" />

              <p className="mt-10 max-w-xl text-[17px] leading-9 text-[#666]">
                SOLTERO brings the world of Vittoria Soltero to brides in the
                United Kingdom, offering access to the brand's distinctive
                bridal collections through a dedicated UK boutique
                experience.
              </p>

              <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#666]">
                Our aim is to introduce UK brides to gowns that combine
                timeless elegance with refined modernity, while providing
                the personal attention and considered bridal experience
                that every bride deserves.
              </p>

              <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#666]">
                From the first appointment to choosing the perfect gown,
                SOLTERO is here to make discovering Vittoria Soltero in the
                UK feel personal, effortless and unforgettable.
              </p>

    

            </div>

          </FadeIn>


          <FadeIn direction="right" delay={0.2}>

            <div className="relative aspect-[4/5] overflow-hidden">

              <Image
                src="https://res.cloudinary.com/cwh8h4x4/image/upload/v1785955940/101.webp"
                alt="Vittoria Soltero bridal collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </FadeIn>

        </div>

      </section>


      {/* ========================= */}
      {/* BRAND VALUES */}
      {/* ========================= */}

      <section className="py-32">

        <div className="mx-auto max-w-[1450px] px-6">

          <FadeIn>

            <div className="text-center">

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                What Defines The Brand
              </p>

              <h2 className="mt-6 font-heading text-6xl text-[#2A2A2A]">
                The Vittoria Soltero Values
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-9 text-[#666]">
                Every Vittoria Soltero collection is built around a clear
                philosophy: individuality, refined design, uncompromising
                quality and genuine attention to every bride.
              </p>

            </div>

          </FadeIn>


          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">


            {/* UNIQUE DESIGN */}

            <FadeIn delay={0}>

              <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

                <div className="mb-8 text-3xl text-[#B9935D]">
                  ✦
                </div>

                <h3 className="font-heading text-3xl text-[#2A2A2A]">
                  Unique
                  <br />
                  Design
                </h3>

                <p className="mt-6 leading-8 text-[#666]">
                  Collections combine timeless elegance with refined
                  modernity, creating gowns designed to highlight the
                  bride's beauty and leave a lasting impression.
                </p>

              </div>

            </FadeIn>


            {/* INDIVIDUALITY */}

            <FadeIn delay={0.1}>

              <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

                <div className="mb-8 text-3xl text-[#B9935D]">
                  ✦
                </div>

                <h3 className="font-heading text-3xl text-[#2A2A2A]">
                  Respect For
                  <br />
                  Individuality
                </h3>

                <p className="mt-6 leading-8 text-[#666]">
                  Every bride is different. Vittoria Soltero embraces
                  individuality and allows details to be adapted to reflect
                  each bride's personal vision.
                </p>

              </div>

            </FadeIn>


            {/* QUALITY */}

            <FadeIn delay={0.2}>

              <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

                <div className="mb-8 text-3xl text-[#B9935D]">
                  ✦
                </div>

                <h3 className="font-heading text-3xl text-[#2A2A2A]">
                  Uncompromising
                  <br />
                  Quality
                </h3>

                <p className="mt-6 leading-8 text-[#666]">
                  Every gown is created with care and precision, from the
                  initial sketch through to the final stitch.
                </p>

              </div>

            </FadeIn>


            {/* COMMUNICATION */}

            <FadeIn delay={0.3}>

              <div className="border border-[#ECE6DF] bg-white p-10 transition duration-300 hover:-translate-y-2">

                <div className="mb-8 text-3xl text-[#B9935D]">
                  ✦
                </div>

                <h3 className="font-heading text-3xl text-[#2A2A2A]">
                  Dedicated
                  <br />
                  Communication
                </h3>

                <p className="mt-6 leading-8 text-[#666]">
                  From order to delivery, the brand places strong emphasis
                  on communication, support and personal attention throughout
                  the entire process.
                </p>

              </div>

            </FadeIn>

          </div>

        </div>

      </section>


     


      {/* ========================= */}
      {/* CTA */}
      {/* ========================= */}

      <section className="relative overflow-hidden py-32 text-center text-white">

        <Image
          src="https://res.cloudinary.com/cwh8h4x4/image/upload/v1785955940/101.webp"
          alt="Vittoria Soltero bridal collection"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <FadeIn>

          <div className="relative z-10 mx-auto max-w-5xl px-6">

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#D8B176]">
              Begin Your Bridal Journey
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-tight md:text-7xl">
              Discover Vittoria Soltero
              <br />
              In The UK
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/80">
              Explore the collection and experience the distinctive design,
              craftsmanship and elegance of Vittoria Soltero at SOLTERO.
            </p>

            <Link
              href="/booking"
              className="
                mt-12
                inline-flex
                items-center
                justify-center
                border
                border-[#B9935D]
                bg-[#B9935D]
                px-10
                py-5
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white
                transition
                duration-300
                hover:border-[#A88352]
                hover:bg-[#A88352]
              "
            >
              Request Consultation
            </Link>

          </div>

        </FadeIn>

      </section>
<WorldwideMap />
    </main>
  );
}
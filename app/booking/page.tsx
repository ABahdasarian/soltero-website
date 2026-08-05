import BookingForm from "./BookingForm";
import PageHero from "@/components/ui/PageHero";

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
    <main className="bg-white pt-24">

      {/* Hero */}

      <PageHero
  image="hero"
  title="Request Consultation"
  description="Begin your bridal journey with a private consultation and discover the gown created for your unforgettable day."
/>

      {/* Content */}

      <section className="py-32">

        <div className="mx-auto grid max-w-[1450px] gap-24 px-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div>

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Why Choose SOLTERO
            </p>

            <h2 className="mt-6 font-heading text-6xl leading-none text-[#2A2A2A]">
              A Bridal
              <br />
              Experience
              <br />
              Like No Other
            </h2>

            <p className="mt-10 max-w-lg text-[17px] leading-9 text-[#666]">
              Every appointment is thoughtfully designed to provide
              a relaxed, personal and unforgettable bridal experience.
              Our stylists will guide you through every step of finding
              the dress that feels uniquely yours.
            </p>

            <div className="mt-16 space-y-8">

              <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Private Bridal Suite
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    Enjoy an exclusive fitting in a calm,
                    elegant atmosphere.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Personal Stylist
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    Receive expert guidance tailored to
                    your personal bridal vision.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="text-2xl text-[#B9935D]">✦</span>

                <div>

                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    Exclusive Collections
                  </h3>

                  <p className="mt-2 leading-7 text-[#777]">
                    Discover carefully selected gowns
                    available only in our boutique.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Form */}

          <BookingForm dress={dress ?? ""} />

        </div>

      </section>
            {/* Contact Section */}

      <section className="border-t border-[#ECE6DF] bg-[#FAF8F5] py-28">

        <div className="mx-auto grid max-w-[1450px] gap-20 px-6 lg:grid-cols-2">

          <div>

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Contact
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-none text-[#2A2A2A]">
              We Look Forward
              <br />
              To Meeting You
            </h2>

            <p className="mt-8 max-w-lg text-[17px] leading-9 text-[#666]">
              If you have any questions before your appointment,
              our team will be delighted to assist you.
            </p>

            <div className="mt-14 space-y-10">

              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#B9935D]">
                  Boutique
                </p>

                <p className="mt-3 text-lg text-[#444]">
                  24 Bridal Avenue
                  <br />
                  London, United Kingdom
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#B9935D]">
                  Contact
                </p>

                <p className="mt-3 text-lg text-[#444]">
                  +44 20 1234 5678
                  <br />
                  hello@soltero.com
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#B9935D]">
                  Opening Hours
                </p>

                <p className="mt-3 text-lg text-[#444]">
                  Monday – Saturday
                  <br />
                  10:00 — 19:00
                </p>
              </div>

            </div>

          </div>

          <div className="overflow-hidden">

            <iframe
              src="https://www.google.com/maps?q=london&output=embed"
              loading="lazy"
              className="h-[620px] w-full border-0 grayscale"
            />

          </div>

        </div>

      </section>

    </main>
  );
}
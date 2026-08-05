import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import FadeIn from "@/components/ui/FadeIn";
import { dresses } from "@/data/dresses";
import DressGallery from "@/components/dress/DressGallery";
import { getCloudinaryImage } from "@/lib/cloudinary";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DressPage({ params }: Props) {
  const { slug } = await params;

  const dress = dresses.find((d) => d.slug === slug);

  if (!dress) {
    notFound();
  }

  const relatedDresses = dresses
    .filter(
      (d) =>
        d.collectionSlug === dress.collectionSlug &&
        d.slug !== dress.slug
    )
    .slice(0, 3);

  return (
    <main className="bg-white pt-28">

      <section className="mx-auto max-w-[1500px] px-6 pb-32">

        <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr]">

          <FadeIn direction="left">

            <DressGallery
              images={dress.images}
              name={dress.name}
            />

          </FadeIn>

          <FadeIn direction="right" delay={0.2}>

            <div className="sticky top-32 h-fit">

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                {dress.collection}
              </p>

              <h1 className="mt-6 font-heading text-6xl leading-none text-[#2A2A2A] xl:text-7xl">
                {dress.name}
              </h1>

              <div className="mt-10 h-px w-24 bg-[#B9935D]" />

              <p className="mt-10 max-w-xl text-[17px] leading-9 text-[#666]">
                {dress.description}
              </p>

              <div className="mt-16 rounded-sm border border-[#ECE6DF] bg-[#FAF8F5] p-8">

                <h3 className="text-[12px] uppercase tracking-[0.35em] text-[#B9935D]">
                  Highlights
                </h3>

                <div className="mt-8 space-y-5">

                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#B9935D]">✦</span>
                    <span className="text-[#555]">
                      Handcrafted bridal couture
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#B9935D]">✦</span>
                    <span className="text-[#555]">
                      Luxurious premium fabrics
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#B9935D]">✦</span>
                    <span className="text-[#555]">
                      Timeless elegant silhouette
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#B9935D]">✦</span>
                    <span className="text-[#555]">
                      Designed for unforgettable moments
                    </span>
                  </div>

                </div>

              </div>

              <Link
                href={`/booking?dress=${encodeURIComponent(dress.name)}`}
                className="mt-12 inline-flex items-center justify-center bg-[#B9935D] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition-all duration-300 hover:bg-[#A88352]"
              >
                Request Consultation
              </Link>

            </div>

          </FadeIn>

        </div>

      </section>
          {relatedDresses.length > 0 && (
      <section className="mx-auto max-w-[1500px] px-6 pb-32">

        <FadeIn>

          <div className="mb-20 text-center">

            <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Discover More
            </p>

            <h2 className="mt-5 font-heading text-6xl text-[#2A2A2A]">
              You May Also Like
            </h2>

          </div>

        </FadeIn>

        <div className="grid gap-12 md:grid-cols-3">

          {relatedDresses.map((item, index) => (

            <FadeIn
              key={item.slug}
              delay={index * 0.1}
            >

              <Link
                href={`/dress/${item.slug}`}
                className="group"
              >

                <div className="overflow-hidden bg-[#F7F5F2]">

                  <div className="relative overflow-hidden">

                    <Image
                      src={getCloudinaryImage(item.images[0], {
                        width: 900,
                      })}
                      alt={item.name}
                      width={900}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/5" />

                  </div>

                </div>

                <div className="pt-8 text-center">

                  <p className="text-[11px] uppercase tracking-[0.45em] text-[#B9935D]">
                    {item.collection}
                  </p>

                  <h3 className="mt-4 font-heading text-[38px] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">
                    {item.name}
                  </h3>

                  <p className="mx-auto mt-5 max-w-[260px] text-[15px] leading-7 text-[#777]">
                    {item.description}
                  </p>

                  <div className="mx-auto mt-8 h-px w-12 bg-[#B9935D] transition-all duration-300 group-hover:w-24" />

                  <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">

                    View Details

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <path
                        d="M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>

                  </div>

                </div>

              </Link>

            </FadeIn>

          ))}

        </div>

      </section>
    )}
        </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { accessories } from "../../data/accessories";

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#2A2A2A]">
      {/* Intro */}
      <section className="px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-14 sm:pt-20">
        <p className="text-[10px] tracking-[0.3em] text-[#B9935D] sm:text-xs">
          SOLTERO · BRIDAL BOUTIQUE
        </p>

        <h1 className="mt-5 font-heading text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">
          LoveAnisi Accessories
        </h1>

        <div className="mx-auto mt-6 h-px w-14 bg-[#B9935D]" />

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#77716A] sm:text-base">
          Discover delicate jewellery designed to complement your most
          special moments. Timeless details, elegant finishes and pieces
          to treasure beyond your wedding day.
        </p>

        <p className="mt-5 text-[10px] tracking-[0.2em] text-[#91877B] sm:text-xs">
          {accessories.length} {accessories.length === 1 ? "PIECE" : "PIECES"}
          {" "}IN THE COLLECTION
        </p>
      </section>

      {/* Product collection */}
      <section className="px-4 pb-20 sm:px-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between border-b border-[#E5DCD1] pb-4 sm:mb-8">
            <p className="text-[10px] tracking-[0.2em] text-[#77716A] sm:text-xs">
              THE COLLECTION
            </p>

            <p className="text-[10px] text-[#91877B] sm:text-xs">
              Handcrafted elegance
            </p>
          </div>

          <div className="grid grid-cols-2 items-start gap-x-3 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {accessories.map((accessory, index) => {
              const image =
                accessory.coverImage || accessory.images?.[0];

              const shortDescription = accessory.description
                .replace(/\r\n/g, "\n")
                .split(/\n\s*\n/)[0]
                .trim();

              return (
                <article
                  key={accessory.id}
                  className="group min-w-0"
                >
                  <Link
                    href={`/accessories/${accessory.id}`}
                    aria-label={`Discover ${accessory.name}`}
                    className="block"
                  >
                    {/* Product image */}
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden bg-[#EEEAE4]">
                      {image ? (
                        <Image
                          src={image}
                          alt={accessory.name}
                          fill
                          priority={index < 2}
                          sizes="(max-width: 639px) 46vw, (max-width: 1023px) 44vw, 30vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-4 text-center text-sm text-[#91877B]">
                          Image coming soon
                        </div>
                      )}

                      {/* Image overlay */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#F8F6F3]/95 px-3 py-3 text-center transition-transform duration-300 group-hover:translate-y-0 max-sm:hidden">
                        <span className="text-[10px] tracking-[0.18em]">
                          DISCOVER PIECE
                        </span>
                      </div>
                    </div>

                    {/* Product details */}
                    <div className="px-0.5 pt-4 sm:px-1 sm:pt-5">
                      <p className="mb-2 text-[9px] tracking-[0.18em] text-[#B9935D] sm:text-[10px] sm:tracking-[0.22em]">
                        LOVEANISI ACCESSORIES
                      </p>

                      <h2 className="font-heading text-base font-normal leading-snug text-[#2A2A2A] transition-colors duration-300 group-hover:text-[#9E7A49] sm:text-lg md:text-xl">
                        {accessory.name}
                      </h2>

                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#77716A] sm:mt-3 sm:text-sm sm:leading-6">
                        {shortDescription}
                      </p>

                      <div className="mt-4 flex min-h-8 flex-wrap items-center justify-between gap-2 border-t border-[#E5DCD1] pt-3 sm:mt-5 sm:pt-4">
                        {accessory.price !== null ? (
                          <span className="text-sm text-[#2A2A2A] sm:text-base">
                            £{accessory.price.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-[10px] tracking-wide text-[#91877B] sm:text-xs">
                            Made with care
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.12em] text-[#9E7A49] transition-all duration-300 group-hover:gap-2.5 sm:text-[10px] sm:tracking-[0.16em]">
                          VIEW
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {accessories.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-heading text-xl text-[#2A2A2A]">
                Our collection is being prepared.
              </p>

              <p className="mt-3 text-sm text-[#77716A]">
                Please visit again soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Closing brand section */}
      <section className="border-t border-[#E5DCD1] bg-[#EEEAE4] px-5 py-12 text-center sm:py-16">
        <p className="text-[10px] tracking-[0.28em] text-[#B9935D]">
          THE ART OF THE DETAIL
        </p>

        <h2 className="mt-4 font-heading text-2xl font-normal sm:text-3xl">
          Made for your special moments
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#77716A]">
          Find the finishing touch for your bridal look or a meaningful
          gift for someone you love.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex min-h-12 items-center justify-center border border-[#B9935D] px-7 py-4 text-center text-[10px] tracking-[0.18em] text-[#2A2A2A] transition duration-300 hover:bg-[#B9935D] hover:text-white sm:px-9"
        >
          ENQUIRE WITH SOLTERO
        </Link>
      </section>
    </main>
  );
}

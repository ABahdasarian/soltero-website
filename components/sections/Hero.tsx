import Image from "next/image";
import Button from "@/components/ui/Button";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={getCloudinaryPageImage("hero")}
        alt="SOLTERO Bridal Boutique"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-32 lg:pt-36">
        <div className="mx-auto mt-16 max-w-3xl text-center text-white lg:mt-20">

        
          <h1 className="font-heading text-6xl font-light leading-[0.95] md:text-7xl xl:text-[95px]">
            Where Your
            <br />
            Bridal Story
            <br />
            Begins
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-white/80">
            Discover timeless silhouettes, luxurious fabrics and
            handcrafted gowns created for unforgettable moments.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

        <Button href="/collection">
  Explore Collection
</Button>

<Button href="/booking">
  Request Consultation
</Button>
          </div>

          <div className="mt-24 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.45em] text-white/70">
              Scroll
            </span>

            <div className="mt-4 h-12 w-px bg-white/40" />
          </div>

        </div>
      </div>
    </section>
  );
}
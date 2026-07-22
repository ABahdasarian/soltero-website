import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full">
      <Image
        src="/images/hero.jpg"
        alt="Wedding Collection"
        fill
        priority
        className="object-cover"
      />

      {/* Затемнение изображения */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Контент */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="mb-6 text-5xl font-light tracking-wide">
          WEDDING COLLECTION
        </h1>

        <p className="mb-2 text-2xl">
          Timeless Bridal Elegance
        </p>

        <p className="mb-8 text-lg">
          Designed for unforgettable moments.
        </p>

        <Button>
  Explore Collection
</Button>

      </div>
    </section>
  );
}
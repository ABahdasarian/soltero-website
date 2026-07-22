import Image from "next/image";

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

        <button className="rounded-full bg-black px-10 py-4 text-white transition hover:scale-105">
          Explore Collection
        </button>
      </div>
    </section>
  );
}
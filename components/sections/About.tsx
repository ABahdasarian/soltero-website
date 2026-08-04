import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function About() {
  return (
    <section className="bg-[#faf8f5] py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <div>
          <span className="uppercase tracking-[0.45em] text-[#b8915d]">
            About Soltero
          </span>

          <h2 className="mt-6 text-5xl font-light leading-tight">
            Timeless Elegance,
            <br />
            Crafted for Every Bride
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            At SOLTERO we believe every wedding dress should feel
            effortless, luxurious and unforgettable. Every gown is
            designed with refined silhouettes, premium fabrics and
            handcrafted details to celebrate modern femininity.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            From intimate ceremonies to grand celebrations, our
            collections are created to make every bride feel confident,
            elegant and uniquely herself.
          </p>

          <Link
            href="/about"
            className="mt-12 inline-block border border-black px-10 py-4 uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
          >
            Our Story
          </Link>
        </div>

        <div className="overflow-hidden rounded-sm">
          <Image
            src={getCloudinaryPageImage("about")}
            alt="About SOLTERO"
            width={900}
            height={1125}
            className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { getCloudinaryPageImage } from "@/lib/cloudinary";

export default function About() {
  return (
    <section className="bg-[#FAF8F5] py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <div>
          <span className="uppercase tracking-[0.45em] text-[#B9935D]">
            About Soltero
          </span>

          <h2 className="mt-6 font-heading text-5xl leading-tight text-[#2A2A2A]">
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
            className="group mt-12 inline-flex flex-col"
          >
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#2A2A2A] transition duration-300 group-hover:text-[#B9935D]">
              Discover Our Story

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

            <div className="mt-5 h-px w-12 bg-[#B9935D] transition-all duration-300 group-hover:w-24" />
          </Link>
        </div>

        <div className="overflow-hidden">
          <Image
            src={getCloudinaryPageImage("about")}
            alt="About SOLTERO"
            width={900}
            height={1125}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
// components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";

import { getCloudinaryLogo } from "@/lib/cloudinary";

export default function Footer() {
  return (
    <footer className="border-t border-[#E9E3DD] bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-20 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <Image
  src={getCloudinaryLogo(900)}
  alt="SOLTERO Bridal Boutique"
  width={900}
  height={280}
  className="h-auto w-[340px] md:w-[380px] xl:w-[420px]"
/>

            <p className="mt-10 max-w-md leading-8 text-neutral-600">
              Discover timeless bridal elegance crafted for modern
              brides. Every gown is selected with exceptional
              attention to quality, silhouette and sophistication.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                className="transition hover:text-[#978065]"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="transition hover:text-[#978065]"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Collections */}

          <div>
            <h3 className="mb-8 text-sm uppercase tracking-[0.35em] text-[#978065]">
              Collections
            </h3>

            <div className="space-y-5">
              <Link
                href="/collection"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                All Dresses
              </Link>

              <Link
                href="/collection"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                Spring Flower
              </Link>

              <Link
                href="/collection"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                Echoes of Her
              </Link>

              <Link
                href="/collection"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                Illuminare
              </Link>
            </div>
          </div>
                    {/* Company */}

          <div>
            <h3 className="mb-8 text-sm uppercase tracking-[0.35em] text-[#978065]">
              Company
            </h3>

            <div className="space-y-5">
              <Link
                href="/about"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                Contact
              </Link>

              <Link
                href="/booking"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                Request Consultation
              </Link>

              <a
                href="mailto:solterobridaluk@gmail.com"
                className="block text-neutral-600 transition hover:text-[#978065]"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="mb-8 text-sm uppercase tracking-[0.35em] text-[#978065]">
              Newsletter
            </h3>

            <p className="mb-8 leading-8 text-neutral-600">
              Receive new collections, bridal inspiration and exclusive
              updates from SOLTERO.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-[#DDD6CE] bg-white px-5 py-4 outline-none transition focus:border-[#978065]"
            />

            <button className="mt-5 w-full border border-[#978065] bg-[#978065] py-4 text-xs uppercase tracking-[0.32em] text-white transition hover:bg-transparent hover:text-[#978065]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-[#E9E3DD] pt-10 text-sm text-neutral-500 md:flex-row">

          <p>
            © 2026 SOLTERO Bridal Boutique. All rights reserved.
          </p>

          <div className="flex gap-8 uppercase tracking-[0.2em]">
            <Link
              href="/privacy"
              className="transition hover:text-[#978065]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#978065]"
            >
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
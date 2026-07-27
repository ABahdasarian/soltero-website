// components/layout/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-4">
          <div>
            <h2 className="text-3xl font-light tracking-[0.2em]">
              SOLTERO
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Luxury bridal gowns designed for unforgettable moments and
              timeless elegance.
            </p>
          </div>

          <div>
            <h3 className="mb-6 uppercase tracking-[0.3em] text-[#b8915d]">
              Collections
            </h3>

            <div className="space-y-4 text-neutral-600">
              <Link href="/catalog" className="block hover:text-black">
                All Dresses
              </Link>

              <Link href="/catalog" className="block hover:text-black">
                New Collection
              </Link>

              <Link href="/catalog" className="block hover:text-black">
                Best Sellers
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 uppercase tracking-[0.3em] text-[#b8915d]">
              Company
            </h3>

            <div className="space-y-4 text-neutral-600">
              <Link href="/about" className="block hover:text-black">
                About
              </Link>

              <Link href="/contact" className="block hover:text-black">
                Contact
              </Link>

              <Link href="/booking" className="block hover:text-black">
                Appointment
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 uppercase tracking-[0.3em] text-[#b8915d]">
              Newsletter
            </h3>

            <p className="mb-6 text-neutral-600">
              Subscribe to receive new collections and exclusive bridal
              inspiration.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-neutral-300 bg-white px-4 py-4 outline-none focus:border-[#b8915d]"
            />

            <button className="mt-4 w-full bg-[#b8915d] py-4 uppercase tracking-[0.2em] text-white transition hover:bg-[#a37d4a]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-8 text-center text-sm tracking-[0.15em] text-neutral-500">
          © 2026 SOLTERO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
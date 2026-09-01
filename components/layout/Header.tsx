"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getCloudinaryLogo } from "@/lib/cloudinary";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/partnership", label: "Partnership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ECE6DF] bg-[#F8F6F3] shadow-sm">
        <div className="mx-auto flex h-[110px] max-w-[1500px] items-center justify-between px-10 xl:px-16">

          {/* Logo */}

          <Link
            href="/"
            className="transition duration-300 hover:opacity-90"
          >
            <Image
              src={getCloudinaryLogo(900)}
              alt="SOLTERO Bridal Boutique"
              width={900}
              height={280}
              priority
              className="h-auto w-[300px] xl:w-[360px] -ml-18"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-[13px] font-medium uppercase tracking-[0.28em] text-[#2A2A2A] transition duration-300 hover:text-[#B9935D]"
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-3 left-0 h-px bg-[#B9935D] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <Link
              href="/booking"
              className="border border-[#B9935D] px-7 py-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#2A2A2A] transition-all duration-300 hover:bg-[#B9935D] hover:text-white"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-7 bg-[#2A2A2A] transition-all ${
                open ? "translate-y-[8px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-7 bg-[#2A2A2A] transition-all ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-7 bg-[#2A2A2A] transition-all ${
                open ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 bg-[#F8F6F3] transition-all duration-500 ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">

          <Image
            src={getCloudinaryLogo(700)}
            alt="SOLTERO Bridal Boutique"
            width={700}
            height={220}
            className="mb-8 h-auto w-[260px]"
          />

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-light tracking-wide text-[#2A2A2A] transition hover:text-[#B9935D]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-8 border border-[#B9935D] bg-[#B9935D] px-10 py-4 text-xs uppercase tracking-[0.32em] text-white transition hover:bg-transparent hover:text-[#B9935D]"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
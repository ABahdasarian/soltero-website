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
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#ECE6DF] bg-[#F7F5F2]/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[110px] max-w-[1500px] items-center justify-between px-8 xl:px-12">

          {/* Logo */}

          <Link
  href="/"
  className="-mt-1 transition duration-300 hover:opacity-80"
>
            <Image
  src={getCloudinaryLogo(700)}
  alt="SOLTERO Bridal Boutique"
  width={700}
  height={220}
  priority
  className="h-auto w-[260px] md:w-[320px] xl:w-[380px]"
/>
          </Link>

          {/* Desktop Navigation */}

          <nav className="ml-4 hidden items-center gap-14 lg:flex">
            <div className="ml-10 hidden lg:block">

            </div>
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-[12px] uppercase tracking-[0.34em] transition duration-300 ${
                    scrolled
                      ? "text-[#2A2A2A]"
                      : "text-white"
                  } hover:text-[#978065]`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-3 left-0 h-px bg-[#978065] transition-all duration-300 ${
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
              className={`border px-6 py-3 text-[11px] uppercase tracking-[0.32em] transition-all duration-300 ${
                scrolled
                  ? "border-[#978065] text-[#2A2A2A] hover:bg-[#978065] hover:text-white"
                  : "border-white text-white hover:border-[#978065] hover:bg-[#978065]"
              }`}
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-[2px] w-7 transition-all ${
                scrolled ? "bg-[#2A2A2A]" : "bg-white"
              } ${open ? "translate-y-[8px] rotate-45" : ""}`}
            />

            <span
              className={`h-[2px] w-7 transition-all ${
                scrolled ? "bg-[#2A2A2A]" : "bg-white"
              } ${open ? "opacity-0" : ""}`}
            />

            <span
              className={`h-[2px] w-7 transition-all ${
                scrolled ? "bg-[#2A2A2A]" : "bg-white"
              } ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 bg-[#F7F5F2] transition-all duration-500 ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">

          <Image
            src={getCloudinaryLogo(260)}
            alt="SOLTERO"
            width={260}
            height={90}
            className="mb-6 h-auto w-[180px]"
          />

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-4xl text-[#2A2A2A] transition hover:text-[#978065]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-6 border border-[#978065] bg-[#978065] px-10 py-4 text-xs uppercase tracking-[0.32em] text-white transition hover:bg-transparent hover:text-[#978065]"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
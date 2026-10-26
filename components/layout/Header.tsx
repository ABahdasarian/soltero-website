
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getCloudinaryLogo } from "@/lib/cloudinary";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collections" },
  { href: "/accessories", label: "Accessories" },
  { href: "/about", label: "About" },
  { href: "/partnership", label: "Partnership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ECE6DF] bg-[#F8F6F3] shadow-sm">
        <div className="mx-auto flex h-[90px] max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[110px] lg:gap-8 lg:px-10 xl:px-14">

          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
            aria-label="Soltero home"
          >
            <Image
              src={getCloudinaryLogo(900)}
              alt="SOLTERO Bridal Boutique"
              width={900}
              height={280}
              priority
              className="ml-0 h-auto w-[180px] sm:w-[220px] lg:w-[230px] xl:w-[270px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[#2A2A2A] transition-colors duration-300 hover:text-[#B9935D] xl:text-[11px] xl:tracking-[0.22em] 2xl:text-xs ${
                    active ? "text-[#B9935D]" : ""
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-3 left-0 h-px bg-[#B9935D] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 lg:block">
            <Link
              href="/booking"
              className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap border border-[#B9935D] px-4 py-3 text-[9px] font-medium uppercase leading-none tracking-[0.14em] text-[#2A2A2A] transition-colors duration-300 hover:bg-[#B9935D] hover:text-white xl:px-5 xl:text-[10px] xl:tracking-[0.18em] 2xl:px-6"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="relative z-[102] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 border border-[#B9935D]/50 bg-[#F8F6F3] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-[1.5px] w-7 bg-[#2A2A2A] transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-7 bg-[#2A2A2A] transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-7 bg-[#2A2A2A] transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F8F6F3] transition-all duration-500 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 overflow-y-auto px-6 py-10">

          <Image
            src={getCloudinaryLogo(700)}
            alt="SOLTERO Bridal Boutique"
            width={700}
            height={220}
            className="mb-5 h-auto w-[210px] sm:w-[250px]"
          />

          <nav className="flex flex-col items-center gap-6">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-light uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#B9935D] sm:text-2xl ${
                    active ? "text-[#B9935D]" : "text-[#2A2A2A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-[48px] items-center justify-center whitespace-nowrap border border-[#B9935D] bg-[#B9935D] px-7 py-4 text-[10px] uppercase leading-none tracking-[0.2em] text-white transition-colors duration-300 hover:bg-transparent hover:text-[#B9935D] sm:px-10"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </>
  );
}

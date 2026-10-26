
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

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close the mobile menu after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#ECE6DF] bg-[#F8F6F3] shadow-sm">
        <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-[90px] sm:px-8 lg:h-[110px] lg:gap-6 lg:px-10 xl:gap-8 xl:px-14">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Soltero home"
            className="relative z-[102] flex min-w-0 shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src={getCloudinaryLogo(900)}
              alt="SOLTERO Bridal Boutique"
              width={900}
              height={280}
              priority
              sizes="(max-width: 374px) 145px, (max-width: 639px) 165px, (max-width: 1023px) 210px, (max-width: 1279px) 230px, 270px"
              className="h-auto w-[145px] min-[375px]:w-[165px] sm:w-[210px] lg:w-[230px] xl:w-[270px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-5 2xl:gap-7"
          >
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors duration-300 hover:text-[#B9935D] xl:text-[11px] xl:tracking-[0.18em] 2xl:text-xs 2xl:tracking-[0.2em] ${
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

          {/* Desktop Consultation Button */}
          <div className="hidden shrink-0 lg:block">
            <Link
              href="/booking"
              className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap border border-[#B9935D] px-4 py-3 text-[9px] font-medium uppercase leading-none tracking-[0.12em] text-[#2A2A2A] transition-colors duration-300 hover:bg-[#B9935D] hover:text-white xl:px-5 xl:text-[10px] xl:tracking-[0.15em] 2xl:px-6"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="relative z-[102] flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[6px] border border-[#B9935D]/50 bg-[#F8F6F3] text-[#2A2A2A] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="soltero-mobile-menu"
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        id="soltero-mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[99] bg-[#F8F6F3] transition-[opacity,visibility] duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center overflow-y-auto overscroll-contain px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-[calc(80px+env(safe-area-inset-top))] sm:pt-[calc(90px+env(safe-area-inset-top))]">
          <p className="mb-5 text-center text-[10px] tracking-[0.28em] text-[#B9935D] sm:mb-7">
            SOLTERO · BRIDAL BOUTIQUE
          </p>

          <nav
            aria-label="Mobile navigation"
            className="flex w-full max-w-sm flex-col items-center"
          >
            {navigation.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[52px] w-full items-center justify-center border-b border-[#E5DCD1] px-3 py-3 text-center text-[13px] font-light uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#B9935D] sm:min-h-[56px] sm:text-sm ${
                    index === 0 ? "border-t" : ""
                  } ${
                    active ? "text-[#B9935D]" : "text-[#2A2A2A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Consultation Button */}
          <Link
            href="/booking"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex min-h-[50px] w-full max-w-sm items-center justify-center border border-[#B9935D] bg-[#B9935D] px-5 py-4 text-center text-[10px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-transparent hover:text-[#B9935D] sm:mt-8"
          >
            Request Consultation
          </Link>

          {/* Close Menu */}
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-4 min-h-[44px] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#77716A] sm:mt-6"
          >
            Close menu ×
          </button>
        </div>
      </div>
    </>
  );
}

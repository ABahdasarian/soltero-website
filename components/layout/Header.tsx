"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F5F2]/95 backdrop-blur-xl border-b border-[#E8E2DB]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between px-8">
          {/* Logo */}
          <Link
            href="/"
            className={`font-heading text-[38px] tracking-[0.22em] transition-colors duration-500 ${
              scrolled ? "text-[#2A2A2A]" : "text-white"
            }`}
          >
            SOLTERO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] uppercase tracking-[0.28em] transition-colors duration-300 ${
                    scrolled
                      ? "text-[#2A2A2A]"
                      : "text-white"
                  } hover:text-[#978065]`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#978065] transition-all duration-300 ${
                      active ? "w-full" : "w-0"
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
              className="border border-[#978065] px-6 py-3 text-[11px] uppercase tracking-[0.28em] transition-all duration-300 hover:bg-[#978065] hover:text-white"
              style={{
                color: scrolled ? "#2A2A2A" : "#FFFFFF",
                borderColor: "#978065",
              }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile */}
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
        <div className="flex h-full flex-col items-center justify-center gap-8">
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
            className="mt-6 border border-[#978065] bg-[#978065] px-8 py-4 text-xs uppercase tracking-[0.28em] text-white transition hover:bg-transparent hover:text-[#978065]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
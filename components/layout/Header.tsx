"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-2xl font-light tracking-[0.4em] text-white"
          >
            SOLTERO
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-white transition hover:text-[#d8b176]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 lg:hidden"
          >
            <span
              className={`h-0.5 w-7 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-7 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-7 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#111] transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-light uppercase tracking-[0.2em] text-white transition hover:text-[#d8b176]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
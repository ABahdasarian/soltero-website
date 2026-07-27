// components/layout/Header.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const transparent = pathname === "/";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? "bg-transparent text-white"
          : "border-b border-neutral-200 bg-white text-black"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-3xl font-light tracking-[0.35em]"
        >
          SOLTERO
        </Link>

        <nav className="hidden gap-12 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`uppercase tracking-[0.22em] transition ${
                pathname === link.href
                  ? "text-[#b8915d]"
                  : "hover:text-[#b8915d]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/booking"
          className={`border px-8 py-3 uppercase tracking-[0.2em] transition ${
            transparent
              ? "border-white hover:bg-white hover:text-black"
              : "border-black hover:bg-black hover:text-white"
          }`}
        >
          Book
        </Link>
      </div>
    </header>
  );
}
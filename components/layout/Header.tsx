import Link from "next/link";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-4xl font-light tracking-[0.15em]"
          >
            SOLTERO
          </Link>

          <nav className="flex items-center gap-10">
            <Link href="/">Collections</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="/contact">Contact</Link>

            <button className="rounded-full bg-black px-5 py-2 text-white transition hover:opacity-80">
              Book Appointment
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
import Link from "next/link";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-3xl tracking-[0.15em] font-light"
          >
            SOLTERO
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="/">Collections</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="/contact">Contact</Link>

            <button className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-neutral-800">
              Book Appointment
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
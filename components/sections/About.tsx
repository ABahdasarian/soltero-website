import Image from "next/image";
import Container from "../ui/Container";

export default function About() {
  return (
    <section className="bg-white py-28">
      <Container>
        <h2 className="mb-20 text-center text-5xl font-light">
          About us
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="max-w-lg text-2xl leading-relaxed text-stone-700">
              We are the official UK branch of Vittoria Soltero.
              Our designs combine exceptional craftsmanship,
              premium fabrics and timeless elegance, making
              them a perfect fit for modern brides.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[520px] w-[380px] overflow-hidden rounded-[40px]">
              <Image
                src="/images/about.jpg"
                alt="Soltero Bridal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
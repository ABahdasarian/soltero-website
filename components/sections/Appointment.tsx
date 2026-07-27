import Link from "next/link";

export default function Appointment() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/appointment/100.jpg"
        alt="Appointment"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[0.45em] text-[#d8b176]">
            Private Experience
          </span>

          <h2 className="mt-6 text-5xl font-light leading-tight md:text-7xl">
            Reserve Your
            <br />
            Bridal Appointment
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Enjoy a private fitting with our bridal consultants and
            discover the gown that perfectly reflects your story.
          </p>

          <Link
            href="/booking"
            className="mt-12 inline-block bg-[#b8915d] px-10 py-4 uppercase tracking-[0.25em] text-white transition hover:bg-[#a37d4a]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
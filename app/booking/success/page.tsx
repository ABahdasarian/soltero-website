// app/booking/success/page.tsx

import Link from "next/link";

export default function BookingSuccessPage() {
  return (
    <main className="pt-24">
      <section className="flex min-h-[70vh] items-center justify-center bg-[#faf8f5] px-6">
        <div className="max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#b8915d]">
            <span className="text-4xl text-[#b8915d]">✓</span>
          </div>

          <h1 className="mt-10 font-heading text-5xl text-[#2A2A2A]">
            Thank You
          </h1>

          <p className="mt-8 leading-8 text-neutral-600">
            Your consultation request has been successfully received.
          </p>

          <p className="mt-6 leading-8 text-neutral-600">
            One of our bridal stylists will carefully review your
            request and contact you shortly.
          </p>

          <p className="mt-6 leading-8 text-neutral-600">
            Once your request has been reviewed, you will receive
            a private scheduling link where you can choose the
            most convenient appointment time.
          </p>

          <Link
            href="/"
            className="mt-14 inline-flex items-center justify-center border border-[#b8915d] bg-[#b8915d] px-10 py-4 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-transparent hover:text-[#b8915d]"
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
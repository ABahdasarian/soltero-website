import Link from "next/link";
import type { Dress } from "@/data/types";

interface Props {
  dress: Dress;
}

export default function DressInfo({ dress }: Props) {
  return (
    <div className="lg:sticky lg:top-32 h-fit">

      <p className="text-xs uppercase tracking-[0.35em] text-[#978065]">
        {dress.collection}
      </p>

      <h1 className="mt-5 font-heading text-6xl leading-none text-[#2A2A2A]">
        {dress.name}
      </h1>

      <p className="mt-8 text-lg leading-9 text-neutral-600">
        {dress.description ||
          "A timeless bridal gown created for the modern bride. Refined craftsmanship, luxurious fabrics and elegant details come together to create an unforgettable silhouette."}
      </p>

      <div className="my-12 h-px bg-neutral-200" />

      <div className="space-y-8">

        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-sm text-neutral-500">
            Collection
          </span>

          <span className="font-medium text-[#2A2A2A]">
            {dress.collection}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-sm text-neutral-500">
            Availability
          </span>

          <span className="text-green-700 font-medium">
            Available
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-sm text-neutral-500">
            Appointment
          </span>

          <span className="font-medium">
            By Reservation
          </span>
        </div>

      </div>

      <div className="my-12 h-px bg-neutral-200" />

      <Link
        href="/booking"
        className="flex h-16 w-full items-center justify-center bg-[#978065] text-sm uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#846b52]"
      >
        Book Appointment
      </Link>

      <p className="mt-6 text-center text-sm leading-7 text-neutral-500">
        Visit our showroom and discover this gown during a personal bridal consultation.
      </p>

    </div>
  );
}
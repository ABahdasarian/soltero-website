// components/booking/BookingForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  dress?: string;
};

export default function BookingForm({ dress }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dress: dress ?? "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/booking/success");
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm bg-white p-10 shadow-sm"
    >
      <div className="space-y-6">
        <input
          name="name"
          type="text"
          required
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#b8915d]"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#b8915d]"
        />

        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#b8915d]"
        />

        <input
          name="dress"
          type="text"
          placeholder="Wedding Dress"
          value={form.dress}
          onChange={handleChange}
          className="w-full border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#b8915d]"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about your wedding, preferred styles or anything you'd like us to know."
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none border border-neutral-300 px-5 py-4 outline-none transition focus:border-[#b8915d]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#b8915d] py-5 uppercase tracking-[0.25em] text-white transition hover:bg-[#9f7847] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Request Consultation"}
        </button>

        <p className="text-center text-sm leading-7 text-neutral-500">
          After reviewing your request, one of our bridal
          stylists will contact you and send you a private
          scheduling link to choose your appointment time.
        </p>
      </div>
    </form>
  );
}
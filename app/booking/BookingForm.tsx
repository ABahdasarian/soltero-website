"use client";

import { useState } from "react";

type Props = {
  dress: string;
};

export default function BookingForm({ dress }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      weddingDate: formData.get("weddingDate"),
      dress: formData.get("dress"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-sm bg-white p-10 shadow-sm"
    >
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        required
        className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
      />

      <input
        name="weddingDate"
        type="date"
        required
        className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
      />

      <input
        name="dress"
        type="text"
        defaultValue={dress}
        placeholder="Wedding Dress"
        className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Message"
        className="w-full resize-none border border-neutral-300 px-5 py-4 outline-none focus:border-[#b8915d]"
      />

      <button
        disabled={loading}
        className="w-full bg-[#b8915d] py-5 uppercase tracking-[0.25em] text-white transition hover:bg-[#9f7847] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Request"}
      </button>

      {success && (
        <div className="rounded border border-green-200 bg-green-50 p-4 text-center text-green-700">
          Thank you! Your appointment request has been sent successfully.
        </div>
      )}
    </form>
  );
}
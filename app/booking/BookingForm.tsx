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
      className="border border-[#ECE6DF] bg-white p-10 lg:p-14"
    >
      <div className="mb-10">
        <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
          Bridal Appointment
        </p>

        <h2 className="mt-4 font-heading text-4xl text-[#2A2A2A]">
          Request Your Visit
        </h2>

        <p className="mt-5 text-[16px] leading-8 text-[#777]">
          Complete the form below and our bridal consultants will
          contact you shortly to confirm your appointment.
        </p>
      </div>

      <div className="space-y-6">

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <input
          name="weddingDate"
          type="date"
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />
                <input
          name="dress"
          type="text"
          defaultValue={dress}
          placeholder="Preferred Dress (optional)"
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us a little about your wedding or anything you'd like us to know."
          className="w-full resize-none border border-[#E6E1DA] p-5 text-[15px] leading-7 outline-none transition focus:border-[#B9935D]"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-10 w-full bg-[#B9935D] py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#A88352] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending Request..." : "Request Appointment"}
      </button>

      <p className="mt-6 text-center text-sm leading-7 text-[#888]">
        We usually respond within one business day.
      </p>

      {success && (
        <div className="mt-8 rounded-sm border border-green-200 bg-green-50 p-5 text-center text-green-700">
          Thank you! Your appointment request has been received.
          <br />
          We will contact you shortly.
        </div>
      )}

    </form>
  );
}
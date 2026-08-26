"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnershipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shop: "",
    country: "",
    city: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send request.");
      }

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        shop: "",
        country: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="relative h-[650px] overflow-hidden">

        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/cwh8h4x4/image/upload/v1787524455/partnership.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="absolute inset-0 bg-black/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">

          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
            >
              <span className="text-xs uppercase tracking-[0.45em] text-[#D0A86B]">
                Partnership
              </span>
            </motion.div>

            <motion.h1
              className="mt-7 font-heading text-5xl leading-tight md:text-7xl"
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              Become a SOLTERO
              <br />
              Partner
            </motion.h1>

            <motion.p
              className="mx-auto mt-10 max-w-3xl text-base leading-8 text-white/80 md:text-lg"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.75,
              }}
            >
              Join SOLTERO and discover a refined partnership built around
              exceptional bridal collections, timeless design and a shared
              passion for creating unforgettable experiences.
            </motion.p>

          
          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* FORM */}
      {/* ========================= */}

      <section
        id="partnership-form"
        className="mx-auto max-w-[1200px] px-6 py-32"
      >

        {!submitted ? (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-16 text-center">

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                Work With Us
              </p>

              <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A] md:text-6xl">
                Let&apos;s Create Something Beautiful
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-[#666]">
                Tell us a little about yourself and your business.
                Our team will be in touch to discuss a potential partnership
                with SOLTERO.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-4xl"
            >

              <div className="grid gap-8 md:grid-cols-2">

                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full border-b border-[#DCD5CC] bg-transparent px-1 py-4 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                    placeholder="Your name"
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="w-full border-b border-[#DCD5CC] bg-transparent px-1 py-4 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    className="w-full border-b border-[#DCD5CC] bg-transparent px-1 py-4 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                    placeholder="+44"
                  />
                </div>

                {/* SHOP */}

                <div>
                  <label
                    htmlFor="shop"
                    className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                  >
                    Shop / Business
                  </label>

                  <input
                    id="shop"
                    name="shop"
                    value={form.shop}
                    onChange={handleChange}
                    type="text"
                    className="w-full border-b border-[#DCD5CC] bg-transparent px-1 py-4 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                    placeholder="Your boutique or business"
                  />
                </div>

                {/* COUNTRY */}

                <div>
                  <label
                    htmlFor="country"
                    className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                  >
                    Country *
                  </label>

                  <input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full border-b border-[#DCD5CC] bg-transparent px-1 py-4 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                    placeholder="United Kingdom"
                  />
                </div>

                {/* CITY */}

                <div>
                  <label
                    htmlFor="city"
                    className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                  >
                    City *
                  </label>

                  <input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full border-b border-[#DCD5CC] bg-transparent px-1 py-4 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                    placeholder="London"
                  />
                </div>

              </div>

              {/* MESSAGE */}

              <div className="mt-10">

                <label
                  htmlFor="message"
                  className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-[#B9935D]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full resize-none border border-[#DCD5CC] bg-[#FAF8F5] p-5 text-[#2A2A2A] outline-none transition-colors focus:border-[#B9935D]"
                  placeholder="Tell us about your business and your interest in partnering with SOLTERO..."
                />

              </div>

              {/* ERROR */}

              {error && (
                <div className="mt-8 border border-red-200 bg-red-50 px-6 py-4 text-center text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* SUBMIT */}

              <div className="mt-12 text-center">

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-w-[220px] items-center justify-center bg-[#B9935D] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition-all duration-300 hover:bg-[#A88352] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>

              </div>

            </form>

          </motion.div>

        ) : (

          /* ========================= */
          /* THANK YOU */
          /* ========================= */

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="py-20 text-center"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#B9935D] text-2xl text-[#B9935D]">
              ✓
            </div>

            <p className="mt-10 text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
              Thank You
            </p>

            <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A] md:text-6xl">
              Thank You For Your Request
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-[#666]">
              Thank you for your interest in partnering with SOLTERO.
              We have received your request and our team will review your
              details and get back to you shortly.
            </p>

            <div className="mx-auto mt-10 h-px w-20 bg-[#B9935D]" />

            <p className="mt-8 text-sm text-[#888]">
              We look forward to connecting with you.
            </p>

          </motion.div>

        )}

      </section>

    </main>
  );
}
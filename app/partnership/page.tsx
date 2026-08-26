"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setIsSubmitting(true);
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
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
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
          transition={{
            duration: 1.2,
          }}
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
              Join SOLTERO and discover a refined partnership
              built around exceptional bridal collections,
              timeless design and a shared passion for creating
              unforgettable experiences.
            </motion.p>

            

          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* FORM / SUCCESS */}
      {/* ========================= */}

      <section
        id="partnership-form"
        className="bg-[#FAF8F5] px-6 py-32"
      >

        <div className="mx-auto max-w-[900px]">

          {!submitted ? (

            <>
              <div className="text-center">

                <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                  Work With Us
                </p>

                <h2 className="mt-5 font-heading text-5xl leading-tight text-[#2A2A2A] md:text-6xl">
                  Let&apos;s Create Something Beautiful
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#666]">
                  Tell us a little about yourself and your
                  boutique. Our team will be in touch shortly.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-16 bg-white p-8 md:p-14"
              >

                <div className="grid gap-8 md:grid-cols-2">

                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="name"
                      className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-3 w-full border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-3 w-full border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                    >
                      Mobile Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-3 w-full border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                    />
                  </div>

                  {/* SHOP */}

                  <div>
                    <label
                      htmlFor="shop"
                      className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                    >
                      Boutique / Shop
                    </label>

                    <input
                      id="shop"
                      name="shop"
                      type="text"
                      value={form.shop}
                      onChange={handleChange}
                      className="mt-3 w-full border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                    />
                  </div>

                  {/* COUNTRY */}

                  <div>
                    <label
                      htmlFor="country"
                      className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                    >
                      Country *
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="mt-3 w-full border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                    />
                  </div>

                  {/* CITY */}

                  <div>
                    <label
                      htmlFor="city"
                      className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                    >
                      City *
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="mt-3 w-full border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                    />
                  </div>

                </div>

                {/* MESSAGE */}

                <div className="mt-10">

                  <label
                    htmlFor="message"
                    className="text-[11px] uppercase tracking-[0.25em] text-[#666]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-3 w-full resize-none border-b border-[#D8D0C8] bg-transparent px-0 py-4 text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                  />

                </div>

                {/* ERROR */}

                {error && (
                  <div className="mt-8 border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* BUTTON */}

                <div className="mt-12 text-center">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center bg-[#B9935D] px-12 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-500 hover:bg-[#A88352] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Submit Partnership Request"}
                  </button>

                </div>

              </form>
            </>

          ) : (

            /* ========================= */
            /* THANK YOU SCREEN */
            /* ========================= */

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="bg-white px-8 py-24 text-center md:px-20"
            >

              <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
                SOLTERO Partnership
              </p>

              <h2 className="mt-6 font-heading text-5xl leading-tight text-[#2A2A2A] md:text-6xl">
                Thank You for
                <br />
                Your Request
              </h2>

              <div className="mx-auto mt-10 h-px w-20 bg-[#B9935D]" />

              <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-[#666]">
                Thank you for your interest in becoming a SOLTERO
                partner. We have received your enquiry and our
                team will review your request carefully.
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#666]">
                We will be in touch with you shortly.
              </p>

              <div className="mt-12">

                <a
                  href="/"
                  className="inline-flex border border-[#B9935D] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-[#2A2A2A] transition duration-500 hover:bg-[#B9935D] hover:text-white"
                >
                  Back to SOLTERO
                </a>

              </div>

            </motion.div>

          )}

        </div>

      </section>

    </main>
  );
}
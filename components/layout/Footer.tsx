"use client";

// components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getCloudinaryLogo } from "@/lib/cloudinary";

export default function Footer() {
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  async function handleSubscribe(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to subscribe. Please try again."
        );
      }

      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <footer className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-[420px_1fr_1fr_1fr]">

          {/* Logo */}

          <div className="max-w-[800px]">
            <Image
              src={getCloudinaryLogo(900)}
              alt="SOLTERO Bridal Boutique"
              width={900}
              height={280}
              className="h-auto w-[440px] -ml-23"
            />

            <p className="mt-10 max-w-[360px] leading-9 text-neutral-600">
              Discover timeless bridal elegance crafted for modern brides.
              Every gown is selected with exceptional attention to quality,
              silhouette and sophistication.
            </p>

            <div className="mt-12 flex gap-8 text-lg">
              <a
                href="https://www.instagram.com/solterobridal.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#B9935D]"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#B9935D]"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Collections */}

          <div>
            <h3 className="mb-10 text-sm uppercase tracking-[0.35em] text-[#B9935D]">
              Collections
            </h3>

            <div className="flex flex-col gap-6">
              <Link
                href="/collection/spring-flower"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Spring Flower
              </Link>

              <Link
                href="/collection/echoes-of-her"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Echoes of Her
              </Link>

              <Link
                href="/collection/illuminare"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Illuminare
              </Link>

              <Link
                href="/collection/radiance-of-love"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Radiance of Love
              </Link>

              <Link
                href="/collection/whispers-of-dreams"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Whispers of Dreams
              </Link>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-10 text-sm uppercase tracking-[0.35em] text-[#B9935D]">
              Company
            </h3>

            <div className="flex flex-col gap-6">
              <Link
                href="/about"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                About
              </Link>

              <Link
                href="/partnership"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Partnership
              </Link>

              <Link
                href="/contact"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Contact
              </Link>

              <Link
                href="/booking"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Request Consultation
              </Link>

              <a
                href="mailto:solterobridaluk@gmail.com"
                className="text-neutral-700 transition hover:text-[#B9935D]"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="mb-10 text-sm uppercase tracking-[0.35em] text-[#B9935D]">
              Newsletter
            </h3>

            <p className="max-w-[340px] leading-9 text-neutral-600">
              Receive new collections, bridal inspiration and exclusive
              updates from SOLTERO.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-10"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
                required
                disabled={status === "loading"}
                className="w-full border border-[#DDD5CD] bg-white px-6 py-4 text-neutral-700 outline-none transition focus:border-[#B9935D] disabled:opacity-70"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full bg-[#A99170] py-4 text-sm uppercase tracking-[0.35em] text-white transition hover:bg-[#927A5D] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading"
                  ? "Subscribing..."
                  : "Subscribe"}
              </button>

              {message && (
                <p
                  className={`mt-4 text-sm ${
                    status === "success"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 border-t border-[#ECE6DF] pt-10 text-center">
          <p className="text-sm tracking-[0.08em] text-neutral-500">
            © 2026 SOLTERO Bridal Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
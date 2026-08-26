"use client";

import { motion } from "framer-motion";

export default function PartnershipPage() {
  return (
    <main className="bg-white">

      {/* ========================= */}
      {/* PARTNERSHIP HERO */}
      {/* ========================= */}

      <section className="relative h-[650px] overflow-hidden">

        {/* BACKGROUND */}
        <motion.div
          className="absolute inset-0"
          initial={{
            scale: 1.12,
          }}
          animate={{
            scale: 1,
          }}
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

        {/* DARK OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-black/55"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">

          <div className="max-w-4xl">

            {/* LABEL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="text-xs uppercase tracking-[0.45em] text-[#D0A86B]">
                Partnership
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              className="
                mt-7
                font-heading
                text-5xl
                leading-tight
                md:text-7xl
              "
              initial={{
                opacity: 0,
                y: 55,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Become a SOLTERO
              <br />
              Partner
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              className="
                mx-auto
                mt-10
                max-w-3xl
                text-base
                leading-8
                text-white/80
                md:text-lg
              "
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Join SOLTERO and discover a refined partnership built around
              exceptional bridal collections, timeless design and a shared
              passion for creating unforgettable experiences.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              className="mt-12"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.a
                href="#partnership-form"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#B9935D]
                  px-11
                  py-5
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-white
                "
                whileHover={{
                  backgroundColor: "#A88352",
                  letterSpacing: "0.45em",
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                Become a Partner
              </motion.a>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* PARTNERSHIP FORM */}
      {/* ========================= */}

      <section
        id="partnership-form"
        className="mx-auto max-w-[1200px] px-6 py-32"
      >
        <div className="text-center">

          <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
            Work With Us
          </p>

          <h2 className="mt-5 font-heading text-5xl text-[#2A2A2A]">
            Let&apos;s Create Something Beautiful
          </h2>

        </div>
      </section>

    </main>
  );
}
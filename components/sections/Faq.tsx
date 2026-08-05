"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Yes. We offer private bridal consultations to ensure every bride receives a personalized experience.",
  },
  {
    question: "How long is a bridal appointment?",
    answer:
      "Appointments typically last between 90 and 120 minutes, giving you plenty of time to explore our collections.",
  },
  {
    question: "Can I bring guests?",
    answer:
      "Of course. We recommend bringing up to 3 guests to make your experience comfortable and intimate.",
  },
  {
    question: "Do you offer alterations?",
    answer:
      "Yes. Professional alterations are available to ensure your gown fits perfectly for your special day.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#faf8f5] py-32">
      <div className="mx-auto max-w-4xl px-6">

        <FadeIn>
          <div className="mb-16 text-center">
            <span className="uppercase tracking-[0.4em] text-[#b8915d]">
              FAQ
            </span>

            <h2 className="mt-6 font-heading text-5xl text-[#2A2A2A]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
            >
              <div className="border-b border-[#e5ddd3] pb-6">
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-xl text-[#2A2A2A]">
                    {faq.question}
                  </h3>

                  <span className="text-3xl text-[#978065]">
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                {open === index && (
                  <p className="mt-5 leading-8 text-neutral-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
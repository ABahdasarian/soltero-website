export default function FAQPage() {
  const faqs = [
    {
      question: "Do I need to book an appointment?",
      answer:
        "Yes. We recommend booking an appointment to ensure a private consultation with one of our bridal stylists.",
    },
    {
      question: "How long does an appointment last?",
      answer:
        "Appointments usually last between 60 and 90 minutes, giving you plenty of time to explore our collections.",
    },
    {
      question: "Can I bring guests?",
      answer:
        "Of course. We recommend bringing up to three guests so you can enjoy a comfortable and intimate experience.",
    },
    {
      question: "When should I order my wedding dress?",
      answer:
        "Ideally 6–9 months before your wedding to allow enough time for production and alterations.",
    },
    {
      question: "Do you offer alterations?",
      answer:
        "Yes. Professional alteration services are available to ensure your gown fits perfectly.",
    },
    {
      question: "Do you sell accessories?",
      answer:
        "Yes. We offer veils, gloves, jewellery and bridal accessories to complete your look.",
    },
  ];

  return (
    <main className="pt-24">
      <section className="bg-[#111] py-32 text-center text-white">
        <p className="uppercase tracking-[0.45em] text-[#d8b176]">
          SOLTERO
        </p>

        <h1 className="mt-6 text-6xl font-light md:text-8xl">
          Frequently Asked Questions
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
          Everything you need to know before visiting our boutique.
        </p>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="mb-6 rounded-sm border border-neutral-200 bg-white p-8"
            >
              <summary className="cursor-pointer text-xl font-medium">
                {faq.question}
              </summary>

              <p className="mt-5 leading-8 text-neutral-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
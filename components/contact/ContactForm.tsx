"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        "/api/contact-message",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message."
        );
      }

      setStatus("success");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#ECE6DF] bg-white p-10 lg:p-14"
    >
      <div className="mb-10">
        <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
          Send a Message
        </p>

        <h2 className="mt-4 font-heading text-4xl text-[#2A2A2A]">
          Get In Touch
        </h2>

        <p className="mt-5 text-[16px] leading-8 text-[#777]">
          Complete the form below and our team will
          respond as soon as possible.
        </p>
      </div>

      <div className="space-y-6">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(event) =>
            setSubject(event.target.value)
          }
          required
          className="h-14 w-full border border-[#E6E1DA] px-5 text-[15px] outline-none transition focus:border-[#B9935D]"
        />

        <textarea
          rows={7}
          placeholder="Tell us how we can help you."
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          required
          className="w-full resize-none border border-[#E6E1DA] p-5 text-[15px] leading-7 outline-none transition focus:border-[#B9935D]"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#B9935D] py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#A88352] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading"
            ? "Sending..."
            : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm leading-7 text-green-600">
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-sm leading-7 text-red-600">
            {errorMessage}
          </p>
        )}

        {status === "idle" && (
          <p className="text-center text-sm leading-7 text-[#888]">
            We usually reply within one business day.
          </p>
        )}

      </div>
    </form>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { accessories } from "../../../data/accessories";

type DescriptionBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "sizes"; items: string[] }
  | { type: "tags"; items: string[] };

const headingAliases: Record<string, string> = {
  materials: "Materials & Details",
  details: "Materials & Details",
  "✦ materials": "Materials & Details",
  care: "Jewellery Care",
  "jewellery care": "Jewellery Care",
  "✦ jewellery care": "Jewellery Care",
  "necklace sizes": "Necklace Lengths",
  "necklace size options": "Necklace Lengths",
  "necklace lengths": "Necklace Lengths",
  "available sizes": "Available Sizes",
  "✦ available sizes": "Available Sizes",
  "bracelet size": "Bracelet Size",
  "bracelet size options": "Bracelet Size",
  bracelet: "Bracelet Details",
  necklace: "Necklace Details",
  "necklace — 2 looks in 1": "Two Looks in One",
  "model size": "Model Size",
  "✦ model size": "Model Size",
  "perfect for": "Perfect For",
  "✦ perfect for": "Perfect For",
  "gift ready": "Gift Ready",
  "✦ gift ready": "Gift Ready",
};

function normaliseHeading(line: string) {
  const key = line
    .trim()
    .replace(/^✦\s*/, "")
    .replace(/:$/, "")
    .toLowerCase();

  return headingAliases[key] ?? null;
}

function isSizeLine(line: string) {
  const value = line.trim();

  return (
    /^\d+(?:\.\d+)?\s*(?:in(?:ches)?|["”″])\s*\([^)]*\)/i.test(value) ||
    /^\d+(?:\.\d+)?\s*(?:cm|mm)\s*\([^)]*\)/i.test(value) ||
    /^\d+(?:\.\d+)?\s*(?:in(?:ches)?|["”″])\s*\+\s*\d/i.test(value) ||
    /^\d+(?:\.\d+)?\s*(?:cm|mm)\b/i.test(value)
  );
}

function parseDescription(description: string): DescriptionBlock[] {
  const lines = description
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && line !== "────────────");

  const blocks: DescriptionBlock[] = [];

  let paragraph: string[] = [];
  let list: string[] = [];
  let sizes: string[] = [];
  let tags: string[] = [];
  let section = "";

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({
        type: "paragraph",
        text: paragraph.join(" "),
      });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({
        type: "list",
        items: [...list],
      });
      list = [];
    }
  };

  const flushSizes = () => {
    if (sizes.length) {
      blocks.push({
        type: "sizes",
        items: [...sizes],
      });
      sizes = [];
    }
  };

  const flushTags = () => {
    if (tags.length) {
      blocks.push({
        type: "tags",
        items: [...tags],
      });
      tags = [];
    }
  };

  for (const originalLine of lines) {
    const line = originalLine;

    // Handle inline materials, such as:
    // Materials: Pearls • Crystal beads • Stainless steel
    const materialsMatch = line.match(/^Materials:\s*(.+)$/i);

    if (materialsMatch) {
      flushParagraph();
      flushList();
      flushSizes();
      flushTags();

      blocks.push({
        type: "heading",
        text: "Materials & Details",
      });

      const items = materialsMatch[1]
        .split(/\s*•\s*/)
        .map((item) => item.trim())
        .filter(Boolean);

      if (items.length > 1) {
        blocks.push({
          type: "list",
          items,
        });
      } else {
        blocks.push({
          type: "paragraph",
          text: materialsMatch[1],
        });
      }

      section = "materials";
      continue;
    }

    // Recognise headings with or without a colon or decorative symbol.
    const heading = normaliseHeading(line);

    if (heading) {
      flushParagraph();
      flushList();
      flushSizes();
      flushTags();

      blocks.push({
        type: "heading",
        text: heading,
      });

      section = heading.toLowerCase();
      continue;
    }

    // Split inline occasions into tags.
    if (line.includes("♡")) {
      flushParagraph();
      flushList();
      flushSizes();
      flushTags();

      const items = line
        .split("♡")
        .map((item) => item.trim())
        .filter(Boolean);

      blocks.push({
        type: "tags",
        items,
      });

      continue;
    }

    const isSizeSection =
      section.includes("necklace lengths") ||
      section.includes("available sizes") ||
      section.includes("bracelet size");

    // Handle bullet points.
    if (line.startsWith("•")) {
      flushParagraph();
      flushTags();

      const item = line.replace(/^•\s*/, "");

      if (isSizeSection || isSizeLine(item)) {
        flushList();
        sizes.push(item);
      } else {
        flushSizes();
        list.push(item);
      }

      continue;
    }

    // Detect sizes even if they do not have bullet points.
    if (isSizeLine(line)) {
      flushParagraph();
      flushList();
      flushTags();

      sizes.push(line);
      continue;
    }

    // Keep ordinary lines together as readable paragraphs.
    flushList();
    flushSizes();
    flushTags();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushSizes();
  flushTags();

  return blocks;
}

function Description({ text }: { text: string }) {
  const blocks = parseDescription(text);

  return (
    <div className="mt-6 w-full space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="border-b border-[#E5D9C9] pb-2 font-heading text-lg font-normal tracking-wide text-[#2A2A2A]"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="text-sm leading-7 text-[#77716A] md:text-[15px]"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="grid w-full grid-cols-1 gap-2">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start gap-3 text-sm leading-6 text-[#77716A] md:text-[15px]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B9935D]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "sizes") {
          return (
            <div
              key={index}
              className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {block.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex min-h-[58px] min-w-0 items-center justify-center border border-[#E8DED1] bg-white/40 px-3 py-3 text-center text-sm leading-5 text-[#62594F] transition duration-300 hover:border-[#B9935D] hover:bg-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          );
        }

        return (
          <div key={index} className="flex w-full flex-wrap gap-2">
            {block.items.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="border border-[#E5D9C9] bg-white/40 px-3 py-2 text-xs leading-5 text-[#716456]"
              >
                {item}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function AccessoryDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const accessory = accessories.find((item) => item.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!accessory) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F8F6F3] px-6 text-center">
        <h1 className="font-heading text-2xl font-normal text-[#2A2A2A]">
          Piece not found
        </h1>

        <Link
          href="/accessories"
          className="mt-6 border-b border-[#B9935D] pb-1 text-sm text-[#2A2A2A] transition hover:text-[#B9935D]"
        >
          Back to accessories
        </Link>
      </main>
    );
  }

  const images =
    accessory.images?.length > 0
      ? accessory.images
      : [accessory.coverImage];

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#F8F6F3] px-5 pb-20 pt-10 md:px-10 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 text-[11px] tracking-[0.18em] text-[#91877B]">
          <Link href="/" className="transition hover:text-[#B9935D]">
            HOME
          </Link>
          <span className="mx-3">/</span>
          <Link
            href="/accessories"
            className="transition hover:text-[#B9935D]"
          >
            ACCESSORIES
          </Link>
          <span className="mx-3">/</span>
          <span className="text-[#2A2A2A]">DETAILS</span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <section className="mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#EEEAE4]">
              <Image
                src={images[activeImage]}
                alt={`${accessory.name} — photo ${activeImage + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous photograph"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7DED2] bg-[#F8F6F3]/90 text-xl text-[#2A2A2A] transition hover:bg-white"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next photograph"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7DED2] bg-[#F8F6F3]/90 text-xl text-[#2A2A2A] transition hover:bg-white"
                  >
                    ›
                  </button>

                  <span className="absolute bottom-4 right-4 bg-[#F8F6F3]/90 px-3 py-1.5 text-xs tracking-wider text-[#2A2A2A]">
                    {activeImage + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-6">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View photograph ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`relative aspect-[4/5] overflow-hidden bg-[#EEEAE4] transition ${
                      activeImage === index
                        ? "ring-1 ring-[#B9935D] ring-offset-2 ring-offset-[#F8F6F3]"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${accessory.name} thumbnail ${index + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </section>

          <section className="mx-auto w-full min-w-0 max-w-xl pt-1 md:pt-4">
            <p className="text-[11px] tracking-[0.24em] text-[#B9935D]">
              SOLTERO · BRIDAL ACCESSORIES
            </p>

            <h1 className="mt-5 font-heading text-3xl font-normal leading-tight text-[#2A2A2A] md:text-4xl lg:text-[42px]">
              {accessory.name}
            </h1>

            <div className="mt-6 h-px w-16 bg-[#B9935D]" />

            {accessory.price !== null && (
              <p className="mt-6 text-lg text-[#2A2A2A]">
                £{accessory.price.toFixed(2)}
              </p>
            )}

            <Description text={accessory.description} />

            <div className="mt-10 border-t border-[#E7DED2] pt-7">
              <Link
                href="/contact"
                className="flex min-h-14 w-full items-center justify-center bg-[#B9935D] px-6 py-4 text-center text-xs tracking-[0.2em] text-white transition duration-300 hover:bg-[#9E7A49]"
              >
                ENQUIRE ABOUT THIS PIECE
              </Link>

              <p className="mt-4 text-center text-xs leading-6 text-[#91877B]">
                For enquiries about availability, sizing and ordering,
                please contact us.
              </p>
            </div>

            <Link
              href="/accessories"
              className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.15em] text-[#77716A] transition hover:text-[#B9935D]"
            >
              <span aria-hidden="true">←</span>
              BACK TO ACCESSORIES
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

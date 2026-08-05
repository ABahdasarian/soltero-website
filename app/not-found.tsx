import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">

      <div className="max-w-2xl text-center">

        <p className="text-[12px] uppercase tracking-[0.45em] text-[#B9935D]">
          Error 404
        </p>

        <h1 className="mt-8 font-heading text-7xl leading-none text-[#2A2A2A] md:text-8xl">
          Page Not
          <br />
          Found
        </h1>

        <div className="mx-auto mt-10 h-px w-24 bg-[#B9935D]" />

        <p className="mx-auto mt-10 max-w-xl text-[17px] leading-9 text-[#666]">
          The page you're looking for doesn't exist or may have
          been moved. Let's help you find your way back.
        </p>

        <Link
          href="/"
          className="mt-14 inline-flex items-center justify-center border border-[#B9935D] bg-[#B9935D] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-transparent hover:text-[#B9935D]"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}
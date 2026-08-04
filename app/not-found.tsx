import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6">
      <div className="text-center">
        <span className="uppercase tracking-[0.45em] text-[#b8915d]">
          SOLTERO
        </span>

        <h1 className="mt-6 text-8xl font-light">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-light">
          Dress Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-neutral-500">
          The gown you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/collection"
          className="mt-12 inline-flex border border-black px-10 py-5 uppercase tracking-[0.3em] transition hover:bg-black hover:text-white"
        >
          Back to Catalog
        </Link>
      </div>
    </main>
  );
}
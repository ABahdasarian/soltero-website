import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6">
      <div className="text-center">
        <p className="uppercase tracking-[0.45em] text-[#b8915d]">
          SOLTERO
        </p>

        <h1 className="mt-6 text-8xl font-light md:text-[180px]">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-light">
          Page Not Found
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          The page you're looking for doesn't exist or has been moved.
          Return to the homepage to continue exploring our bridal
          collections.
        </p>

        <Link
          href="/"
          className="mt-12 inline-block bg-[#b8915d] px-10 py-5 uppercase tracking-[0.25em] text-white transition hover:bg-[#9f7847]"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
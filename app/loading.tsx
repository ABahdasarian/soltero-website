export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">

      <div className="animate-soltero text-center">

        <h1 className="font-heading text-6xl tracking-[0.35em] text-[#B9935D]">
          SOLTERO
        </h1>

        <div className="mx-auto mt-10 h-px w-28 overflow-hidden bg-[#ECE6DF]">

          <div className="h-full w-full animate-pulse bg-[#B9935D]" />

        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.45em] text-[#888]">
          Loading Experience
        </p>

      </div>

    </main>
  );
}
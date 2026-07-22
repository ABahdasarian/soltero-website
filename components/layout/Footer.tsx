import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-light">Subscribe</h2>

            <p className="mt-6 text-stone-600">
              Get inspiration & updates to your inbox
            </p>

            <form className="mt-10 flex max-w-md gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border-b border-black bg-transparent py-2 outline-none"
              />

              <button className="font-medium">
                Sign Up
              </button>
            </form>
          </div>

          <div className="flex flex-col items-end justify-between">
            <div className="flex gap-6 text-lg">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">TikTok</a>
              <a href="#">Facebook</a>
            </div>

            <p className="mt-10 text-stone-500">
              © 2026 Soltero Bridal
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
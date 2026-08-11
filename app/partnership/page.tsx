import FadeIn from "@/components/ui/FadeIn";

export default function PartnershipPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <FadeIn>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-[#B9935D]">
              Partnership
            </span>

            <h1 className="mt-6 font-heading text-5xl leading-tight text-[#2A2A2A] md:text-6xl">
              Couture Bridal Wholesale
            </h1>

            <h2 className="mt-3 font-heading text-4xl leading-tight text-[#2A2A2A] md:text-5xl">
              Become an Authorized Partner
            </h2>

            <div className="mx-auto mt-8 h-px w-16 bg-[#B9935D]" />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-600">
              We welcome bridal boutiques and selected retail partners who
              share our appreciation for timeless elegance, exceptional
              craftsmanship and modern bridal design.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form className="mt-16 space-y-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-[#DDD5CD] bg-white px-5 py-4 text-sm text-[#2A2A2A] outline-none transition placeholder:text-neutral-400 focus:border-[#B9935D]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                className="w-full border border-[#DDD5CD] bg-white px-5 py-4 text-sm text-[#2A2A2A] outline-none transition placeholder:text-neutral-400 focus:border-[#B9935D]"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label
                htmlFor="phone"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                Mobile Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+44 345 245 754"
                className="w-full border border-[#DDD5CD] bg-white px-5 py-4 text-sm text-[#2A2A2A] outline-none transition placeholder:text-neutral-400 focus:border-[#B9935D]"
                required
              />
            </div>

            {/* Shop */}
            <div>
              <label
                htmlFor="shop"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                Link to your shop
              </label>

              <input
                id="shop"
                name="shop"
                type="url"
                placeholder="www.example.com"
                className="w-full border border-[#DDD5CD] bg-white px-5 py-4 text-sm text-[#2A2A2A] outline-none transition placeholder:text-neutral-400 focus:border-[#B9935D]"
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                Country
              </label>

              <select
                id="country"
                name="country"
                defaultValue=""
                className="w-full appearance-none border border-[#DDD5CD] bg-white px-5 py-4 text-sm text-[#2A2A2A] outline-none transition focus:border-[#B9935D]"
                required
              >
                <option value="" disabled>
                  Select country
                </option>

                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Ireland">Ireland</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                City
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="Your city"
                className="w-full border border-[#DDD5CD] bg-white px-5 py-4 text-sm text-[#2A2A2A] outline-none transition placeholder:text-neutral-400 focus:border-[#B9935D]"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-sm text-[#2A2A2A]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Tell us about your boutique..."
                className="w-full resize-none border border-[#DDD5CD] bg-white px-5 py-4 text-sm leading-7 text-[#2A2A2A] outline-none transition placeholder:text-neutral-400 focus:border-[#B9935D]"
              />
            </div>

            {/* Privacy */}
            <label className="flex cursor-pointer items-start gap-4 text-sm leading-6 text-neutral-600">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1 h-4 w-4 accent-[#B9935D]"
              />

              <span>
                I agree with the{" "}
                <a
                  href="/privacy"
                  className="text-[#2A2A2A] underline underline-offset-4 transition hover:text-[#B9935D]"
                >
                  Privacy Policy
                </a>{" "}
                of SOLTERO.
              </span>
            </label>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full border border-[#B9935D] bg-[#B9935D] px-8 py-5 text-xs uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#927A5D]"
              >
                Send Partnership Request
              </button>
            </div>
          </form>
        </FadeIn>
      </section>
    </main>
  );
}
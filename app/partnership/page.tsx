<section className="relative h-[650px] overflow-hidden">

  {/* Background image */}
  <div
    className="absolute inset-0 scale-105 animate-[heroZoom_1.8s_ease-out_forwards]"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/cwh8h4x4/image/upload/v1787524455/partnership.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">

    <div className="max-w-4xl">

      {/* Label */}
      <div className="animate-[fadeUp_0.8s_ease-out_0.1s_both]">
        <span className="text-xs uppercase tracking-[0.45em] text-[#D0A86B]">
          Partnership
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          mt-7
          font-heading
          text-5xl
          leading-tight
          md:text-7xl
          animate-[fadeUp_1s_ease-out_0.3s_both]
        "
      >
        Become a SOLTERO
        <br />
        Partner
      </h1>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-10
          max-w-3xl
          text-base
          leading-8
          text-white/80
          md:text-lg
          animate-[fadeUp_1s_ease-out_0.55s_both]
        "
      >
        Join SOLTERO and discover a refined partnership built around
        exceptional bridal collections, timeless design and a shared
        passion for creating unforgettable experiences.
      </p>

      {/* Button */}
      <div className="mt-12 animate-[fadeUp_1s_ease-out_0.8s_both]">

        <a
          href="#partnership-form"
          className="
            inline-flex
            items-center
            justify-center
            bg-[#B9935D]
            px-11
            py-5
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-white
            transition-all
            duration-500
            hover:bg-[#A88352]
            hover:tracking-[0.45em]
          "
        >
          Become a Partner
        </a>

      </div>

    </div>

  </div>

</section>
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "white";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
}: Props) {
  const variants = {
  gold:
    "border border-[#B9935D] bg-[#B9935D] text-white hover:bg-[#A88352] hover:border-[#A88352]",

  outline:
    "border border-[#B9935D] bg-transparent text-[#B9935D] hover:bg-[#B9935D] hover:text-white",

  white:
    "border border-white bg-transparent text-white hover:bg-white hover:text-[#2A2A2A]",

  dark:
    "border border-[#2A2A2A] bg-[#2A2A2A] text-white hover:bg-[#444444] hover:border-[#444444]",
};

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        px-10
        py-4
        text-[11px]
        uppercase
        tracking-[0.35em]
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
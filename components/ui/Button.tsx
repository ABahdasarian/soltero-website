type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-black px-10 py-4 text-white transition hover:scale-105 hover:bg-neutral-800">
      {children}
    </button>
  );
}
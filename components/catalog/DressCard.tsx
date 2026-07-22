import Image from "next/image";

type DressCardProps = {
  name: string;
  image: string;
};

export default function DressCard({
  name,
  image,
}: DressCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center text-lg font-medium">
        {name}
      </h3>

      <p className="mt-2 text-center text-sm text-neutral-500">
        View Collection →
      </p>
    </article>
  );
}
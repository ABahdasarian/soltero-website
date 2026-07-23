import Image from "next/image";
import Link from "next/link";

type DressCardProps = {
  name: string;
  slug: string;
  image: string;
};

export default function DressCard({
  name,
  slug,
  image,
}: DressCardProps) {
  return (
    <Link href={`/dress/${slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center text-lg font-light">
        {name}
      </h3>
    </Link>
  );
}
import Image from "next/image";

type CollectionCardProps = {
  title: string;
  image: string;
};

export default function CollectionCard({
  title,
  image,
}: CollectionCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center text-xl">{title}</h3>

      <p className="mt-2 text-center text-sm">
        View Collection →
      </p>
    </article>
  );
}
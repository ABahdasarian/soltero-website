import Image from "next/image";
import { getCloudinaryCover } from "@/lib/cloudinary";

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
          src={getCloudinaryCover(image)}
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
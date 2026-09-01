import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  throw new Error("Cloudinary server environment variables are missing");
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export async function getCloudinaryDressImages(
  dressSlug: string
) {
  try {
    /*
     * Slug страницы → начало имени файлов в Cloudinary.
     */
    const cloudinaryNameMap: Record<string, string> = {
      cecilie: "cecilia",
    };

    const normalizedSlug = dressSlug.toLowerCase();

    const prefix =
      cloudinaryNameMap[normalizedSlug] ??
      normalizedSlug;

    /*
     * Ищем все файлы в Cloudinary:
     *
     * beatrice → beatrice1, beatrice2, beatrice3...
     * coraline → coraline1, coraline2, coraline3...
     * cecilie → cecilia1, cecilia2, cecilia3...
     */
    const result = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      prefix,
      max_results: 500,
    });

    const images = result.resources ?? [];

    /*
     * Сортировка:
     *
     * dress1
     * dress2
     * dress3
     * ...
     * dress10
     */
    images.sort((a: any, b: any) =>
      a.public_id.localeCompare(
        b.public_id,
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      )
    );

    console.log(
      `Cloudinary images for ${dressSlug}:`,
      images.map((image: any) => image.public_id)
    );

    return images.map((image: any) => ({
      publicId: image.public_id,
      url: image.secure_url,
      width: image.width,
      height: image.height,
      format: image.format,
    }));
  } catch (error: any) {
    console.error(
      `Cloudinary dress images error for ${dressSlug}:`,
      {
        message: error?.message,
        name: error?.name,
        http_code: error?.http_code,
      }
    );

    return [];
  }
}
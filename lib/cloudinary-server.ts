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

/**
 * Получает все фотографии платья из Cloudinary
 * по префиксу public_id.
 *
 * Например:
 *
 * beatrice1
 * beatrice2
 * beatrice3
 * beatrice7
 *
 * будут найдены через prefix = "beatrice"
 */
export async function getCloudinaryDressImages(
  dressSlug: string
) {
  try {
    const prefix = dressSlug.toLowerCase();

    /*
     * 1. Ищем фотографии внутри папки.
     *
     * Например:
     * soltero/collections/echoes/Celesta/
     */
    const folderName =
      dressSlug.charAt(0).toUpperCase() + dressSlug.slice(1);

    const folderResult = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      prefix: `soltero/collections/echoes/${folderName}/`,
      max_results: 500,
    });

    /*
     * 2. Ищем фотографии в корне Cloudinary.
     *
     * Например:
     * celesta1
     * celesta2
     * celesta3
     */
    const rootResult = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      prefix,
      max_results: 500,
    });

    /*
     * Объединяем результаты.
     */
    const allImages = [
      ...(folderResult.resources ?? []),
      ...(rootResult.resources ?? []),
    ];

    /*
     * Убираем дубликаты.
     */
    const uniqueImages = Array.from(
      new Map(
        allImages.map((image: any) => [
          image.public_id,
          image,
        ])
      ).values()
    );

    /*
     * Сортируем по имени:
     *
     * celesta1
     * celesta2
     * celesta3
     * celesta4
     */
    uniqueImages.sort((a: any, b: any) =>
      a.public_id.localeCompare(
        b.public_id,
        undefined,
        { numeric: true }
      )
    );

    console.log(
      `Cloudinary images for ${dressSlug}:`,
      uniqueImages.map((image: any) => image.public_id)
    );

    return uniqueImages.map((image: any) => ({
      publicId: image.public_id,
      url: image.secure_url,
      width: image.width,
      height: image.height,
      format: image.format,
    }));

  } catch (error: any) {
    console.error("Cloudinary dress images error:", {
      message: error?.message,
      name: error?.name,
      http_code: error?.http_code,
    });

    throw error;
  }
}
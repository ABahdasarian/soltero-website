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

    console.log(
      "Searching Cloudinary images with prefix:",
      prefix
    );

    const result = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      prefix,
      max_results: 500,
    });

    console.log(
      "Cloudinary images found:",
      result.resources?.length || 0
    );

    return result.resources
      .sort((a: any, b: any) =>
        a.public_id.localeCompare(b.public_id)
      )
      .map((image: any) => ({
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
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  throw new Error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is missing in .env.local");
}

interface CloudinaryOptions {
  width?: number;
  quality?: number | "auto";
}

export function getCloudinaryImage(
  path: string,
  options: CloudinaryOptions = {}
) {
  const { width = 1200, quality = "auto" } = options;

  let cleanPath = path.replace("/images/dresses/", "");
  cleanPath = cleanPath.replace(/\.[^.]+$/, "");
  cleanPath = cleanPath.toLowerCase();

  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_${quality},w_${width}/soltero/collections/${cleanPath}`;
}

export function getCloudinaryCover(name: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_900/${name}`;
}

export function getCloudinaryPageImage(name: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_fill,g_auto/${name}`;
}

export function getCloudinaryLogo(width = 260) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${width}/v1785940734/logo.png`;
}
require("dotenv").config({ path: ".env.local" });

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

console.log("🚀 Script started");

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloud:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

const ROOT = path.join(__dirname, "../public/images/dresses");

console.log("ROOT:", ROOT);
console.log("Exists:", fs.existsSync(ROOT));

async function uploadFolder(folder) {
  console.log("📂 Folder:", folder);

  const files = fs.readdirSync(folder);

  for (const file of files) {
    const full = path.join(folder, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      await uploadFolder(full);
      continue;
    }

    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue;

    const relative = path.relative(ROOT, full).replace(/\\/g, "/");
    const publicId = relative.replace(/\.[^.]+$/, "");

    console.log("⬆ Upload:", publicId);

    const result = await cloudinary.uploader.upload(full, {
      public_id: `soltero/collections/${publicId}`,
      overwrite: true,
      unique_filename: false,
      use_filename: false,
      resource_type: "image",
    });

    console.log("✅ Uploaded:", result.public_id);
  }
}

(async () => {
  try {
    await uploadFolder(ROOT);
    console.log("🎉 Upload finished");
  } catch (err) {
    console.error("❌ ERROR:");
    console.error(err);
  }
})();
import { NextResponse } from "next/server";
import { getCloudinaryDressImages } from "@/lib/cloudinary-server";

type Props = {
  params: Promise<{
    dress: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Props
) {
  try {
    const { dress } = await params;

    const images = await getCloudinaryDressImages(dress);

    return NextResponse.json({
      dress,
      images,
    });
  } catch (error: any) {
    console.error("Cloudinary API error:", error);

    return NextResponse.json(
      {
        error: "Failed to load Cloudinary images",
        message: error?.message || "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
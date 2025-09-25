import type { Metadata } from "next";

type SeoMetadataProps = {
  title: string;
  description: string;
  keywords: string[];
  images?: string | string[];
};

export async function generateSeoMetadata({
  title = "TinyTales",
  description = "",
  keywords = [],
  images,
}: SeoMetadataProps): Promise<Metadata> {
  // Process images to ensure they're in the correct format
  const processedImages = images
    ? Array.isArray(images)
      ? images
      : [images]
    : [];

  // Convert image strings to proper OpenGraph image objects with alt text
  const ogImages = processedImages?.map((img) =>
    typeof img === "string"
      ? {
          url: img,
          width: 1200,
          height: 630,
          alt: title,
        }
      : img
  );

  // Return comprehensive metadata
  return {
    title,
    description,
    keywords: keywords,

    openGraph: {
      title,
      description,
      url: `https://frontend-task-next.vercel.app`,
      siteName: "TinyTales",
      images: ogImages,
    },

    alternates: {
      canonical: `https://frontend-task-next.vercel.app`,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: processedImages,
      creator: "@TinyTales",
    },
  };
}

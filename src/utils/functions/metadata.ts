import { Metadata } from "next";

export const generateMetadata = ({
  title = "Rentline | Modern Property Management",
  description = "Manage properties, tenants, payments, and maintenance in one powerful platform. Built for modern landlords.",
  image = "/dashboard_link_preview.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  noIndex?: boolean;
} = {}): Metadata => {
  const baseUrl = "https://rentline.io";

  return {
    metadataBase: new URL(baseUrl),

    title,
    description,

    keywords: [
      "property management",
      "landlord software",
      "tenant management",
      "rent collection",
      "real estate SaaS",
    ],

    alternates: {
      canonical: baseUrl,
    },

    themeColor: "#7c3aed",

    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png" },
      ],
      other: [
        {
          rel: "manifest",
          url: "/site.webmanifest",
        },
        {
          rel: "icon",
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "icon",
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },

    openGraph: {
      type: "website",
      url: baseUrl,
      title,
      description,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
      creator: "Daniel Kruger",
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
};
import { LandingTabs } from "./_components/landing-tabs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel Genius - Marketplace for Digital Creators",
  description:
    "Join our platform to showcase and sell your digital creations. Perfect for artists, musicians, designers, and creators.",
  keywords: [
    "digital creator marketplace",
    "sell digital art",
    "creator store",
  ],
  openGraph: {
    title: "Marketplace for Digital Creators",
    description:
      "Join our platform to showcase and sell your digital creations.",
    url: "https://pixelgenius.ir",
    images: [
      {
        url: "https://pixelgenius.ir/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marketplace for Digital Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace for Digital Creators",
    description: "Showcase and sell your digital work globally.",
    images: ["https://pixelgenius.ir/og-image.png"],
  },
};

export const revalidate = 60;

export default function Page() {
  return <LandingTabs defaultValue="/" />;
}

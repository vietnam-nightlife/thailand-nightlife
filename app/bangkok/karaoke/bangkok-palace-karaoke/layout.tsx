import type { Metadata } from "next";

const BASE_URL = "https://www.thailandnightlifetravel.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "태국 가라오케 | 방콕·파타야 가라오케 정보",
    template: "%s | 태국 가라오케",
  },

  description:
    "태국 방콕과 파타야 가라오케 정보를 지역별로 확인하세요.",

  alternates: {
    canonical: "/karaoke",
  },

  openGraph: {
    title: "태국 가라오케 | 방콕·파타야 가라오케 정보",
    description:
      "태국 방콕과 파타야 가라오케 정보를 지역별로 확인하세요.",
    type: "website",
    url: `${BASE_URL}/karaoke`,
    locale: "ko_KR",
    siteName: "THAI BOOM",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function KaraokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

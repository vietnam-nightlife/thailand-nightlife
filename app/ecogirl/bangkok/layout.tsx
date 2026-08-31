import type { Metadata } from "next";

const baseUrl = "https://thailandnightlifetravel.com";

export const metadata: Metadata = {
  title: "방콕 에코걸 | 방콕 에코걸 프로필 및 여행 동행",

  description:
    "방콕 에코걸 프로필을 확인하고 방콕 여행 일정에 맞는 동행 정보를 알아보세요. 다양한 방콕 에코걸 프로필과 사진을 확인할 수 있습니다.",

  keywords: [
    "방콕 에코걸",
    "방콕 에코걸 추천",
    "방콕 에코걸 프로필",
    "방콕 에코걸 후기",
    "방콕 여행",
    "방콕 동행",
    "태국 에코걸",
    "태국 여행",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: `${baseUrl}/ecogirl/bangkok`,
  },

  openGraph: {
    type: "website",
    url: `${baseUrl}/ecogirl/bangkok`,
    locale: "ko_KR",
    siteName: "태국 밤문화 가이드",

    title: "방콕 에코걸 | 방콕 에코걸 프로필",

    description:
      "방콕 여행 일정에 맞는 다양한 에코걸 프로필과 사진을 확인해보세요.",
  },

  twitter: {
    card: "summary_large_image",
    title: "방콕 에코걸 | 방콕 에코걸 프로필",
    description:
      "방콕 여행 일정에 맞는 다양한 에코걸 프로필과 사진을 확인해보세요.",
  },
};

export default function BangkokEcoGirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

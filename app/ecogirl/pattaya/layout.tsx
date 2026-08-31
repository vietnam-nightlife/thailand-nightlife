import type { Metadata } from "next";

const baseUrl = "https://thailandnightlifetravel.com";

export const metadata: Metadata = {
  title: "파타야 에코걸 추천 | 파타야 에코걸 프로필 및 여행 동행",

  description:
    "파타야 에코걸 추천 프로필을 확인해보세요. 파타야 여행 일정에 맞는 다양한 에코걸 프로필과 사진을 확인하고 여행 동행 정보를 알아볼 수 있습니다.",

  keywords: [
    "파타야 에코걸",
    "파타야 에코걸 추천",
    "파타야 에코걸 프로필",
    "파타야 에코걸 후기",
    "파타야 에코걸 사진",
    "파타야 여행",
    "파타야 여행 동행",
    "파타야 동행",
    "태국 에코걸",
    "태국 여행",
  ],

  authors: [
    {
      name: "Thailand Nightlife",
    },
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
    canonical: `${baseUrl}/ecogirl/pattaya`,
  },

  openGraph: {
    title: "파타야 에코걸 추천 | 파타야 에코걸 프로필",
    description:
      "파타야 여행 일정에 맞는 다양한 에코걸 프로필과 사진을 확인해보세요.",
    type: "website",
    url: `${baseUrl}/ecogirl/pattaya`,
    locale: "ko_KR",
    siteName: "태국 밤문화 가이드",
  },

  twitter: {
    card: "summary_large_image",
    title: "파타야 에코걸 추천 | 파타야 에코걸 프로필",
    description:
      "파타야 여행 일정에 맞는 다양한 에코걸 프로필과 사진을 확인해보세요.",
  },
};

export default function PattayaEcoGirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

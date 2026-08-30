import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "파타야 드래곤 스웨디시 | 파타야 마사지 추천 · 가격 · 위치 · 후기",

  description:
    "파타야 드래곤 스웨디시 마사지 매장 정보입니다. 파타야 3rd Road에 위치한 드래곤 스웨디시의 매장 외관, 리셉션, 마사지룸 사진과 위치, 영업시간, 마사지 가격 정보를 확인해보세요.",

  keywords: [
    "파타야 드래곤 스웨디시",
    "파타야 드래곤 마사지",
    "파타야 마사지",
    "파타야 마사지 추천",
    "파타야 스웨디시",
    "파타야 스웨디시 마사지",
    "파타야 마사지 가격",
    "파타야 마사지샵",
    "파타야 마사지 위치",
    "파타야 3rd Road 마사지",
    "파타야 마사지 추천 2026",
    "태국 파타야 마사지",
  ],

  alternates: {
    canonical: "/pattaya/massage/dragon-swedish",
  },

  openGraph: {
    title:
      "파타야 드래곤 스웨디시 | 파타야 마사지 추천",

    description:
      "파타야 드래곤 스웨디시 마사지의 위치, 영업시간, 매장 사진과 마사지 정보를 한눈에 확인해보세요.",

    type: "website",

    locale: "ko_KR",

    siteName: "THAI BOOM",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DragonSwedishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

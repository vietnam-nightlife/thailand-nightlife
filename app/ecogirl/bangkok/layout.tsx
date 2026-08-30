import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "방콕 에코걸 | 방콕 에코걸 프로필 및 여행 동행",
  description:
    "방콕 에코걸 프로필을 확인하고 방콕 여행 일정에 맞는 동행 정보를 알아보세요. 다양한 방콕 에코걸 프로필과 사진을 확인할 수 있습니다.",
  keywords: [
    "방콕 에코걸",
    "방콕 에코걸 추천",
    "방콕 에코걸 프로필",
    "방콕 여행",
    "방콕 동행",
    "태국 에코걸",
    "태국 여행",
  ],
  openGraph: {
    title: "방콕 에코걸 | 방콕 에코걸 프로필",
    description:
      "방콕 여행 일정에 맞는 다양한 에코걸 프로필과 사진을 확인해보세요.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BangkokEcoGirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

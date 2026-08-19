import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "태국 밤문화 가이드 | 방콕 파타야 불건마 & 가라오케",
    template: "%s | 태국 밤문화 가이드",
  },

  description:
    "태국 방콕과 파타야의 불건마, 가라오케, 밤문화 정보를 지역별로 정리한 태국 여행 가이드입니다. 위치, 가격, 영업시간 등 여행에 필요한 정보를 확인하세요.",

  keywords: [
    "태국 밤문화",
    "태국 유흥",
    "방콕 밤문화",
    "방콕 유흥",
    "파타야 밤문화",
    "파타야 유흥",
    "태국 불건마",
    "방콕 불건마",
    "파타야 불건마",
    "태국 가라오케",
    "방콕 가라오케",
    "파타야 가라오케",
    "태국 여행",
    "방콕 여행",
    "파타야 여행",
  ],

  authors: [{ name: "태국 밤문화 가이드" }],

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

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "태국 밤문화 가이드",
    title: "태국 밤문화 가이드 | 방콕 파타야 불건마 & 가라오케",
    description:
      "방콕과 파타야의 불건마, 가라오케, 밤문화 정보를 지역별로 확인해보세요.",
  },

  twitter: {
    card: "summary_large_image",
    title: "태국 밤문화 가이드",
    description:
      "방콕과 파타야의 불건마, 가라오케, 밤문화 정보를 지역별로 확인해보세요.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "태국 밤문화 가이드",
  description:
    "태국 방콕과 파타야의 밤문화, 마사지, 가라오케 정보를 제공하는 여행 가이드입니다.",
  inLanguage: "ko-KR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}

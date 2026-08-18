import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "태국 눈탱이 방지 위원회 | 방콕 파타야 마사지 & 가라오케",
  description: "방콕과 파타야의 마사지와 가라오케 정보를 지역별로 확인하고 비교하세요."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

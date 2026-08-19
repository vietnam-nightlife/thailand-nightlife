import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container py-14">

        {/* 사이트 이름 - 클릭하면 홈으로 이동 */}
        <Link href="/#top" className="inline-block group">
          <div className="text-xl font-black text-white">
            태국 <span className="text-red-500">눈탱이 방지 위원회</span>
          </div>

          <div className="mt-1 text-[10px] tracking-[.3em] text-zinc-600 group-hover:text-zinc-400 transition">
            THAILAND TRAVEL & NIGHTLIFE GUIDE
          </div>
        </Link>

        {/* 주요 페이지 */}
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-500">

          <Link href="/bangkok" className="hover:text-white transition">
            방콕
          </Link>

          <Link href="/pattaya" className="hover:text-white transition">
            파타야
          </Link>

          <Link href="/bangkok/massage" className="hover:text-white transition">
            방콕 마사지
          </Link>

          <Link href="/bangkok/karaoke" className="hover:text-white transition">
            방콕 가라오케
          </Link>

          <Link href="/pattaya/massage" className="hover:text-white transition">
            파타야 마사지
          </Link>

          <Link href="/pattaya/karaoke" className="hover:text-white transition">
            파타야 가라오케
          </Link>

        </div>

        {/* 안내 링크 */}
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-500">

          <Link href="/terms" className="hover:text-white transition">
            서비스이용약관
          </Link>

          <Link href="/privacy" className="hover:text-white transition">
            개인정보처리방침
          </Link>

          <Link href="/email-policy" className="hover:text-white transition">
            이메일무단수집거부
          </Link>

          <Link href="/advertising-policy" className="hover:text-white transition">
            광고정책
          </Link>

          <Link href="/copyright" className="hover:text-white transition">
            저작권정책
          </Link>

          <Link href="/about" className="hover:text-white transition">
            사이트소개
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            문의하기
          </Link>

        </div>

        {/* 설명 */}
        <div className="mt-8 text-sm leading-7 text-zinc-500">
          <p>
            © 2026 태국 눈탱이 방지 위원회 · THAILAND TRAVEL & NIGHTLIFE GUIDE
          </p>

          <p>
            본 사이트는 정보 제공 목적의 블로그이며 특정 업체의 영업을 대행하지 않습니다.
          </p>

          <p>
            이용·예약 등 거래는 각 업체와 직접 진행됩니다.
          </p>
        </div>

      </div>
    </footer>
  );
}

import Link from "next/link";
import ContactButtons from "@/components/ContactButtons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/90 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
        
        {/* 로고 */}
        <Link href="/" className="min-w-0 shrink">
          <div className="whitespace-nowrap text-base font-black tracking-tight sm:text-xl">
            태국 <span className="red">눈탱이 방지 위원회</span>
          </div>

          <div className="mt-0.5 whitespace-nowrap text-[8px] tracking-[.2em] text-zinc-600 sm:text-[9px] sm:tracking-[.28em]">
            THAILAND TRAVEL & NIGHTLIFE GUIDE
          </div>
        </Link>

        {/* PC 메뉴 */}
        <nav className="hidden shrink-0 items-center gap-5 text-white md:flex lg:gap-8">

          {/* 방콕 */}
          <Link
            href="/bangkok"
            className="whitespace-nowrap text-lg font-black text-white hover:text-red-400 lg:text-xl"
          >
            방콕
          </Link>

          {/* 파타야 */}
          <Link
            href="/pattaya"
            className="whitespace-nowrap text-lg font-black text-white hover:text-red-400 lg:text-xl"
          >
            파타야
          </Link>

          {/* 에코걸 */}
          <Link
            href="/ecogirl"
            className="whitespace-nowrap text-lg font-black text-white hover:text-red-400 lg:text-xl"
          >
            에코걸
          </Link>

        </nav>

        {/* 카카오톡 / 텔레그램 */}
        <div className="hidden min-w-0 max-w-[420px] flex-1 sm:block lg:max-w-[460px]">
          <ContactButtons />
        </div>

        {/* 모바일 문의 */}
        <Link
          href="/#contact"
          className="shrink-0 rounded-full bg-red-600 px-3 py-2 text-xs font-black hover:bg-red-500 sm:hidden"
        >
          문의하기
        </Link>

      </div>
    </header>
  );
}

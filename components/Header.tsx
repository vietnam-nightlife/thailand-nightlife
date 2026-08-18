import Link from "next/link";
import ContactButtons from "@/components/ContactButtons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="min-w-0">
          <div className="text-lg font-black tracking-tight sm:text-xl">
            태국 <span className="red">눈탱이 방지 위원회</span>
          </div>
          <div className="mt-0.5 text-[9px] tracking-[.28em] text-zinc-600">
            THAILAND TRAVEL & NIGHTLIFE GUIDE
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <Link href="/bangkok" className="text-2xl font-bold hover:text-white">방콕</Link>
          <Link href="/pattaya" className="text-2xl font-bold hover:text-white">파타야</Link>
        </nav>

        <div className="hidden sm:block">
          <ContactButtons />
        </div>
        <Link href="/#contact" className="rounded-full bg-red-600 px-4 py-2.5 text-xs font-black hover:bg-red-500 sm:hidden">
          문의하기
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container py-14">
        <div className="text-lg font-black">태국 <span className="red">눈탱이 방지 위원회</span></div>
        <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600">
          방콕과 파타야의 마사지와 가라오케 등 태국 여행 정보를 비교하고 확인할 수 있는 정보 사이트입니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-500">
          <Link href="/bangkok" className="hover:text-white">방콕</Link>
          <Link href="/pattaya" className="hover:text-white">파타야</Link>
          <Link href="/bangkok/massage" className="hover:text-white">방콕 마사지</Link>
          <Link href="/bangkok/karaoke" className="hover:text-white">방콕 가라오케</Link>
          <Link href="/pattaya/massage" className="hover:text-white">파타야 마사지</Link>
          <Link href="/pattaya/karaoke" className="hover:text-white">파타야 가라오케</Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { Place } from "@/lib/data";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/${place.city}/${place.category}/${place.slug}`}>
      <article className="card-hover overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

        {/* =========================
            이미지
        ========================== */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="img-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* 인기 업소 */}
          {place.featured && (
            <span className="absolute left-4 top-4 rounded-md bg-red-600 px-4 py-2 text-xs font-black text-white shadow-lg">
              추천 인기 업소
            </span>
          )}
        </div>

        {/* =========================
            업소 정보
        ========================== */}
        <div className="p-6">

          {/* 지역 */}
          <div className="text-xs font-medium text-zinc-500">
            {place.district}
          </div>

          {/* 업소명 - 한 번만 출력 */}
          <h3 className="mt-2 text-lg font-black">
            {place.name}
          </h3>

          {/* 평점 + 한국어 응대 + 재방문 추천 */}
          <div className="mt-4 flex flex-wrap items-center gap-2">

            {/* 별점 */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">★</span>

              <span className="font-black text-white">
                {place.rating}
              </span>
            </div>

            {/* 한국어 응대 */}
{place.koreanSupport ? (
  <span className="rounded-md bg-blue-600/20 px-3 py-1.5 text-xs font-black text-blue-400">
    💬 한국어 응대가능
  </span>
) : (
  <span className="rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-black text-zinc-400">
    ❌ 한국어 응대 X
  </span>
)}

            {/* 재방문 추천 */}
            <span className="rounded-md bg-red-600/20 px-3 py-1.5 text-xs font-black text-red-400">
              🔥 재방문 추천
            </span>

          </div>

          {/* 설명 */}
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-zinc-500">
            {place.description}
          </p>

          {/* 자세히 보기 */}
          <div className="mt-5 text-sm font-black red">
            자세히 보기 →
          </div>

        </div>
      </article>
    </Link>
  );
}

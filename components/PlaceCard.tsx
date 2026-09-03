import Link from "next/link";
import type { Place } from "@/lib/data";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/${place.city}/${place.category}/${place.slug}`}>
      <article className="card-hover overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

        {/* =========================
            이미지
        ========================== */}
        <div className="relative aspect-[3/2] overflow-hidden">
  <img
    src={place.image}
    alt={place.name}
    className="h-full w-full object-cover transition duration-700 hover:scale-105"
  />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

          {/* 추천 인기 업소 */}
          {place.featured && (
            <span className="absolute left-2 top-2 rounded-md bg-red-600 px-2 py-1 text-[10px] font-black leading-tight text-white shadow-lg sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-xs md:left-4 md:top-4 md:px-4 md:py-2">
              추천 인기 업소
            </span>
          )}
        </div>

        {/* =========================
            업소 정보
        ========================== */}
        <div className="p-3 sm:p-4 md:p-6">

          {/* 지역 */}
          <div className="text-[10px] font-medium text-zinc-500 sm:text-xs">
            {place.district}
          </div>

          {/* 업소명 */}
          <h3 className="mt-1 line-clamp-2 text-sm font-black leading-6 text-white sm:text-base md:mt-2 md:text-lg">
            {place.name}
          </h3>

          {/* =========================
              평점 + 한국어 응대 + 재방문 추천
          ========================== */}
          <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2 md:mt-4">

            {/* 별점 */}
            <div className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm">
              <span className="text-yellow-400">★</span>

              <span className="font-black text-white">
                {place.rating}
              </span>
            </div>

            {/* 한국어 응대 가능 */}
            {place.koreanSupport !== false && (
              <span className="hidden rounded-md bg-blue-600/20 px-2 py-1 text-[10px] font-black text-blue-400 md:inline-block md:px-3 md:py-1.5 md:text-xs">
                🔵 한국어 응대 가능
              </span>
            )}

            {/* 한국어 응대 불가 */}
            {place.koreanSupport === false && (
              <span className="hidden rounded-md bg-zinc-700/40 px-2 py-1 text-[10px] font-black text-zinc-400 md:inline-block md:px-3 md:py-1.5 md:text-xs">
                ❌ 한국어 응대 안됨
              </span>
            )}

            {/* 재방문 추천 */}
            <span className="hidden rounded-md bg-red-600/20 px-2 py-1 text-[10px] font-black text-red-400 md:inline-block md:px-3 md:py-1.5 md:text-xs">
              🔥 재방문 추천
            </span>

          </div>

          {/* 설명 */}
          <p className="mt-4 hidden line-clamp-2 text-sm leading-6 text-zinc-500 md:block">
            {place.description}
          </p>

          {/* 자세히 보기 */}
          <div className="mt-3 text-xs font-black red sm:mt-4 sm:text-sm md:mt-5">
            자세히 보기 →
          </div>

        </div>
      </article>
    </Link>
  );
}

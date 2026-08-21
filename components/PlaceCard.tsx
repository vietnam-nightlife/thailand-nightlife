import Link from "next/link";
import type { Place } from "@/lib/data";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/${place.city}/${place.category}/${place.slug}`}>
      <article className="card-hover overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">
        <div className="relative h-56 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="img-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {place.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-2 text-xs font-black">
              추천 인기 업소
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="mb-2 inline-flex items-center rounded-md bg-red-600/20 px-3 py-1 text-xs font-black text-red-400">
  🔥 인기 업소
</div>

<div className="text-xs text-zinc-500">
  {place.district}
</div>

<h3 className="mt-2 text-lg font-black">
  {place.name}
</h3>

          <h3 className="mt-2 text-lg font-black">
            {place.name}
          </h3>

<div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
  <span className="text-yellow-400">★</span>

  <span className="font-bold">
    {place.rating}
  </span>

  <span className="inline-block rounded-md bg-blue-600/20 px-2.5 py-1 text-[11px] font-black text-blue-400">
    💬 한국어 응대가능
  </span>

  <span className="inline-block rounded-md bg-red-600/20 px-2.5 py-1 text-[11px] font-black text-red-400">
    🔥 재방문 추천
  </span>
</div>

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-zinc-500">
            {place.description}
          </p>

          <div className="mt-5 text-sm font-black red">
            자세히 보기 →
          </div>
        </div>
      </article>
    </Link>
  );
}

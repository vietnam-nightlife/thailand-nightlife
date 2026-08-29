import Link from "next/link";
import { getEcoGirls } from "@/lib/ecogirl";

export default function PattayaEcoGirlPage() {
  const girls = getEcoGirls("pattaya");

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="container py-12">

        {/* 제목 */}
        <div className="mb-10">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            PATTAYA
          </div>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            파타야 에코걸
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            파타야 여행 일정에 맞춰 해변, 관광, 식사 및 주변 관광지 등을
            함께할 수 있는 에코걸 프로필을 확인해보세요.
          </p>
        </div>

        {/* 프로필 목록 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {girls.map((girl) => (
            <Link
              key={girl.slug}
              href={`/ecogirl/${girl.city}/${girl.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition hover:border-red-500/40"
            >

              {/* 사진 */}
              <div className="relative h-80 overflow-hidden bg-[#151515]">

                {girl.image ? (
                  <img
                    src={girl.image}
                    alt={girl.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-zinc-700">
                    사진 준비중
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="text-xs font-black tracking-[0.2em] text-red-400">
                    PATTAYA
                  </div>

                  <h2 className="mt-1 text-xl font-black">
                    {girl.name}
                  </h2>
                </div>

              </div>

              {/* 정보 */}
              <div className="p-5">

                <div className="flex gap-2">
                  <span className="rounded-lg bg-white/5 px-3 py-2 text-xs font-bold text-zinc-300">
                    {girl.age}세
                  </span>

                  {girl.height && (
                    <span className="rounded-lg bg-white/5 px-3 py-2 text-xs font-bold text-zinc-300">
                      {girl.height}
                    </span>
                  )}
                </div>

                {girl.languages && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {girl.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-md bg-blue-600/10 px-2.5 py-1 text-xs font-bold text-blue-400"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 text-sm font-black text-red-500">
                  프로필 보기 →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}

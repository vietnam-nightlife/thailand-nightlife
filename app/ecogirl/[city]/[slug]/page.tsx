import Link from "next/link";
import { notFound } from "next/navigation";
import { getEcoGirl, ecogirls } from "@/lib/ecogirl";

type Props = {
  params: Promise<{
    city: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ecogirls.map((girl) => ({
    city: girl.city,
    slug: girl.slug,
  }));
}

export default async function EcoGirlProfilePage({ params }: Props) {
  const { city, slug } = await params;

  const girl = getEcoGirl(city, slug);

  if (!girl) {
    notFound();
  }

  const cityName = girl.city === "bangkok" ? "방콕" : "파타야";

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      
      {/* 상단 */}
      <section className="container py-10">

        <Link
          href={`/ecogirl/${girl.city}`}
          className="text-sm font-bold text-zinc-500 hover:text-white"
        >
          ← {cityName} 에코걸
        </Link>

        {/* 프로필 */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

          {/* 메인 이미지 */}
          <div className="relative h-[420px] overflow-hidden bg-[#151515]">

            {girl.image ? (
              <img
                src={girl.image}
                alt={girl.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-zinc-700">
                사진 준비중
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <div className="text-xs font-black tracking-[0.25em] text-red-400">
                {girl.city.toUpperCase()}
              </div>

              <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                {girl.name}
              </h1>
            </div>
          </div>

          {/* 기본 정보 */}
          <div className="p-6 sm:p-8">

            <div className="grid gap-3 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs text-zinc-500">
                  나이
                </div>
                <div className="mt-2 text-lg font-black">
                  {girl.age}세
                </div>
              </div>

              {girl.height && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs text-zinc-500">
                    키
                  </div>
                  <div className="mt-2 text-lg font-black">
                    {girl.height}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs text-zinc-500">
                  지역
                </div>
                <div className="mt-2 text-lg font-black">
                  {cityName}
                </div>
              </div>

            </div>

            {/* 언어 */}
            {girl.languages && girl.languages.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-black">
                  언어
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {girl.languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-lg bg-blue-600/20 px-4 py-2 text-sm font-bold text-blue-400"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 특징 */}
            {girl.tags && girl.tags.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-black">
                  프로필 특징
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {girl.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold"
                    >
                      ✓ {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 소개 */}
            <div className="mt-8">
              <h2 className="text-xl font-black">
                프로필 소개
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {girl.description}
              </p>
            </div>

            {/* 갤러리 */}
            {girl.gallery && girl.gallery.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-black">
                  사진
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {girl.gallery.map((image, index) => (
                    <div
                      key={image}
                      className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#151515]"
                    >
                      <img
                        src={image}
                        alt={`${girl.name} 사진 ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 문의 */}
            <div className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-6">
              <h2 className="text-xl font-black">
                문의 및 예약
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                자세한 일정과 이용 가능 여부는 문의를 통해 확인해주세요.
              </p>

              <Link
                href="/#contact"
                className="mt-5 inline-flex rounded-xl bg-red-600 px-6 py-3 text-sm font-black text-white hover:bg-red-500"
              >
                문의하기 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

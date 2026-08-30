import Link from "next/link";

const cities = [
  {
    slug: "bangkok",
    english: "BANGKOK",
    name: "방콕 에코걸",
    image: "",
    description:
      "방콕 여행 일정에 맞춰 식사, 관광, 쇼핑, 야시장 등 다양한 여행 일정을 함께 즐길 수 있는 동행 서비스를 안내합니다.",
    tags: [
      "방콕 시내 관광",
      "왕궁 · 왓 아룬 · 왓 포",
      "쇼핑 및 맛집",
      "야시장 및 나이트라이프",
    ],
  },
  {
    slug: "pattaya",
    english: "PATTAYA",
    name: "파타야 에코걸",
    image:
      "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/ecogirl/pattaya/%ED%8C%8C%ED%83%80%EC%95%BC%20%EC%97%90%EC%BD%94%EA%B1%B82.webp",
    description:
      "파타야의 해변과 관광 명소, 야시장, 쇼핑 등 여행 일정에 맞는 다양한 동행 서비스를 확인할 수 있습니다.",
    tags: [
      "파타야 해변",
      "진리의 성전",
      "빅 부다",
      "야시장 · 클럽 · 핫플라",
    ],
  },
];

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="container mx-auto px-5 py-14 text-center sm:py-20">

          <div className="mb-4 text-xs font-black tracking-[0.3em] text-red-500 sm:text-sm">
            THAILAND TRAVEL COMPANION
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            방콕 · 파타야 에코걸
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            태국 여행 일정에 맞춰 관광, 식사, 쇼핑, 야시장 등
            <br className="hidden sm:block" />
            다양한 여행 일정을 함께 즐길 수 있는 동행 정보를 확인하세요.
          </p>

        </div>
      </section>


      {/* =====================================================
          CITY CARDS
      ====================================================== */}
      <section className="container mx-auto px-5 py-12 sm:py-16">

        <div className="grid gap-8 md:grid-cols-2">

          {cities.map((city) => (

            <Link
              key={city.slug}
              href={`/ecogirl/${city.slug}`}
              className="
                group
                block
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#101010]
                transition
                duration-300
                hover:border-red-500/40
                hover:bg-[#141414]
              "
            >

              {/* =================================================
                  IMAGE
                  세로 3:4 비율
              ================================================== */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">

                {city.image ? (
                  <img
                    src={city.image}
                    alt={city.name}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />
                ) : (
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-zinc-800/40
                      via-zinc-900/30
                      to-black
                    "
                  />
                )}

                {/* 사진 아래 자연스러운 어두운 그라데이션 */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/3
                    bg-gradient-to-t
                    from-black
                    via-black/60
                    to-transparent
                  "
                />

                {/* 사진 위 제목 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                  <div className="mb-2 text-xs font-black tracking-[0.3em] text-red-500">
                    {city.english}
                  </div>

                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    {city.name}
                  </h2>

                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================== */}
              <div className="p-6 sm:p-7">

                <p className="text-sm leading-7 text-zinc-400">
                  {city.description}
                </p>


                {/* =================================================
                    TAGS
                ================================================== */}
                <div className="mt-5 grid grid-cols-2 gap-2">

                  {city.tags.map((tag) => (

                    <div
                      key={tag}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-3
                        text-xs
                        font-bold
                        text-zinc-300
                      "
                    >
                      ✓ {tag}
                    </div>

                  ))}

                </div>


                {/* =================================================
                    PROFILE LINK
                ================================================== */}
                <div
                  className="
                    mt-6
                    text-sm
                    font-black
                    text-red-500
                    transition
                    group-hover:text-red-400
                  "
                >
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

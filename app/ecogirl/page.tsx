import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://thailandnightlifetravel.com";

const cities = [
  {
    slug: "bangkok",
    english: "BANGKOK",
    name: "방콕 에코걸",
    image:
      "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/ecogirl/bangkok/%EB%B0%A9%EC%BD%95%20%EC%97%90%EC%BD%94%EA%B1%B88.webp",
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
      "파타야 시내 데이트",
      "요트 투어",
      "야시장 · 클럽 · 핫플라",
    ],
  },
];

/* =====================================================
   SEO
===================================================== */

export const metadata: Metadata = {
  title: "태국 에코걸 | 방콕 에코걸 · 파타야 에코걸",

  description:
    "태국 에코걸 정보를 지역별로 확인하세요. 방콕 에코걸과 파타야 에코걸 정보를 확인하고 여행 일정에 맞는 동행 서비스를 안내받을 수 있습니다.",

  keywords: [
    "태국 에코걸",
    "방콕 에코걸",
    "파타야 에코걸",
    "방콕 에코걸 후기",
    "파타야 에코걸 후기",
    "태국 에코걸 추천",
    "방콕 에코걸 추천",
    "파타야 에코걸 추천",
    "태국 여행 동행",
    "방콕 여행 동행",
    "파타야 여행 동행",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: `${baseUrl}/ecogirl`,
  },

  openGraph: {
    type: "website",
    url: `${baseUrl}/ecogirl`,
    locale: "ko_KR",
    siteName: "태국 밤문화 가이드",

    title: "태국 에코걸 | 방콕 에코걸 · 파타야 에코걸",

    description:
      "방콕 에코걸과 파타야 에코걸 정보를 지역별로 확인하고 여행 일정에 맞는 동행 서비스를 알아보세요.",

    images: [
      {
        url: cities[0].image,
        width: 1200,
        height: 1600,
        alt: "방콕 에코걸",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "태국 에코걸 | 방콕 에코걸 · 파타야 에코걸",

    description:
      "태국 에코걸 정보를 지역별로 확인하고 여행 일정에 맞는 동행 서비스를 알아보세요.",

    images: [cities[0].image],
  },
};

/* =====================================================
   JSON-LD
===================================================== */

function EcoGirlJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "태국 에코걸 | 방콕 에코걸 · 파타야 에코걸",

    description:
      "태국 에코걸 정보를 지역별로 확인하고 방콕과 파타야 여행 일정에 맞는 동행 서비스를 안내하는 페이지입니다.",

    url: `${baseUrl}/ecogirl`,

    inLanguage: "ko-KR",

    isPartOf: {
      "@type": "WebSite",
      name: "태국 밤문화 가이드",
      url: baseUrl,
    },

    breadcrumb: {
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "태국 에코걸",
          item: `${baseUrl}/ecogirl`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      <EcoGirlJsonLd />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="container mx-auto px-5 py-14 text-center sm:py-20">

          <div className="mb-4 text-xs font-black tracking-[0.3em] text-red-500 sm:text-sm">
            THAILAND TRAVEL COMPANION
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            태국 에코걸
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            방콕 에코걸과 파타야 에코걸 정보를 지역별로 확인해보세요.
            <br className="hidden sm:block" />
            태국 여행 일정에 맞춰 관광, 식사, 쇼핑, 야시장 등
            다양한 여행 일정을 함께 즐길 수 있는 동행 정보를 안내합니다.
          </p>

        </div>
      </section>

      {/* =====================================================
          CITY CARDS
      ===================================================== */}

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

              {/* IMAGE */}

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">

                <img
                  src={city.image}
                  alt={`${city.name} 여행 동행 정보`}
                  loading={city.slug === "bangkok" ? "eager" : "lazy"}
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

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                  <div className="mb-2 text-xs font-black tracking-[0.3em] text-red-500">
                    {city.english}
                  </div>

                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    {city.name}
                  </h2>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6 sm:p-7">

                <p className="text-sm leading-7 text-zinc-400">
                  {city.description}
                </p>

                {/* TAGS */}

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

                {/* LINK */}

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

        {/* =====================================================
            SEO CONTENT
        ====================================================== */}

        <div className="mx-auto mt-16 max-w-4xl">

          <div className="border-t border-white/10 pt-10">

            <h2 className="text-2xl font-black text-white sm:text-3xl">
              태국 에코걸 지역별 안내
            </h2>

            <div className="mt-6 space-y-6 text-sm leading-8 text-zinc-400">

              <p>
                태국 여행을 준비하면서 방콕 에코걸 또는 파타야 에코걸
                정보를 찾고 있다면 여행 목적과 일정에 맞는 지역을 먼저
                확인하는 것이 좋습니다. 방콕과 파타야는 태국 여행에서
                많은 여행객들이 방문하는 대표적인 지역으로 각각 다른
                여행 분위기와 관광 환경을 가지고 있습니다.
              </p>

              <p>
                <strong className="font-bold text-zinc-200">
                  방콕 에코걸
                </strong>
                은 방콕 시내 관광과 맛집, 쇼핑, 야시장 등 다양한 일정을
                함께 계획하기에 적합합니다. 왕궁과 왓 아룬, 왓 포 같은
                대표적인 관광지를 비롯해 방콕의 다양한 여행 코스를
                함께 확인할 수 있습니다.
              </p>

              <p>
                <strong className="font-bold text-zinc-200">
                  파타야 에코걸
                </strong>
                은 파타야 해변과 시내 관광, 요트 투어, 야시장 및 다양한
                핫플레이스 등 파타야 여행 일정에 맞춰 정보를 확인할 수
                있습니다. 방콕과는 또 다른 분위기의 여행을 원하는 경우
                파타야 지역도 함께 비교해보는 것을 추천합니다.
              </p>

              <p>
                태국 에코걸 정보를 확인할 때는 단순히 사진만 확인하기보다
                실제 여행 일정과 원하는 활동, 방문 지역 등을 함께
                고려하는 것이 좋습니다. 여행 예정일과 인원, 원하는
                일정 등을 미리 준비하면 보다 편리하게 안내받을 수 있습니다.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

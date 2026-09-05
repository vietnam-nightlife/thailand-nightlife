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
      "방콕 여행 일정에 맞춰 식사, 관광, 쇼핑, 풀파티 등 다양한 여행 일정을 함께 즐길 수 있는 동행 서비스를 안내합니다.",
    tags: [
      "방콕 시내 관광",
      "클럽 · 풀파티",
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
      "파타야의 해변과 맛집 데이트, 풀파티, 쇼핑 등 여행 일정에 맞는 다양한 동행 서비스를 확인할 수 있습니다.",
    tags: [
      "파타야 해변",
      "파타야 시내 데이트",
      "요트 투어",
      "클럽 · 풀파티",
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
      "태국 에코걸 정보를 지역별로 확인하고 여행 일정에 맞는 동행 서비스를 안내받을 수 있습니다.",

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
            태국 여행에서 단순한 관광뿐 아니라 현지의 다양한 즐길 거리와 특별한 시간을 경험하고 싶다면 태국 에코걸 투어를 이용해보실 수 있습니다.

태국 에코걸은 크게 일반 에코걸과 가라오케 에코걸 방식으로 나누어지며, 각각 이용 방법과 특징이 조금씩 다릅니다. 여행 일정과 원하는 스타일에 맞춰 선택할 수 있다는 것이 장점입니다.
          </p>

        </div>
      </section>

      {/* =====================================================
          CITY CARDS
      ====================================================== */}

      <section className="container mx-auto px-5 py-12 sm:py-16">

        {/* PC 2개 / 모바일 2개 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2">

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

                {/* 모바일 글씨/여백 축소 */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-7">

                  <div className="mb-1 text-[9px] font-black tracking-[0.2em] text-red-500 sm:mb-2 sm:text-xs sm:tracking-[0.3em]">
                    {city.english}
                  </div>

                  <h2 className="text-base font-black leading-tight text-white sm:text-3xl">
                    {city.name}
                  </h2>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-3 sm:p-7">

                {/* 모바일 설명 글씨 축소 */}
                <p className="text-[11px] leading-5 text-zinc-400 sm:text-sm sm:leading-7">
                  {city.description}
                </p>

                {/* TAGS */}

                <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5">

                  {city.tags.map((tag) => (

                    <div
                      key={tag}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-2
                        py-2
                        text-[10px]
                        font-bold
                        leading-4
                        text-zinc-300
                        sm:px-4
                        sm:py-3
                        sm:text-xs
                        sm:leading-normal
                      "
                    >
                      ✓ {tag}
                    </div>

                  ))}

                </div>

                {/* LINK */}

                <div
                  className="
                    mt-3
                    text-xs
                    font-black
                    text-red-500
                    transition
                    group-hover:text-red-400
                    sm:mt-6
                    sm:text-sm
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
                은 방콕 시내 관광과 맛집, 쇼핑, 클럽, 풀파티 등 다양한 일정을
                함께 계획하기에 적합합니다. 왕궁과 왓 아룬, 왓 포 같은
                대표적인 관광지를 비롯해 방콕의 다양한 여행 코스를
                함께 확인할 수 있습니다.
              </p>

              <p>
                <strong className="font-bold text-zinc-200">
                  파타야 에코걸
                </strong>
                은 파타야 해변과 시내 관광, 요트 투어, 풀파티, 클럽 및 다양한
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

              <p>
              ★ 가라오케 에코걸이란?

일반적인 에코걸 방식과 달리 현지 가라오케에서 직접 만나보고 선택할 수 있는 시스템입니다.

사진만 보고 선택하는 것이 아니라 실제 현장에서 직접 분위기와 스타일을 확인한 후 선택할 수 있다는 점이 가장 큰 특징입니다.

가라오케 에코걸의 장점

1. 직접 확인 후 선택

사진만으로 판단하는 것이 아니라 현장에서 직접 만나보고 선택할 수 있어 보다 만족도 높은 선택이 가능합니다.

2. 다양한 선택지

일반적으로 많은 인원이 출근하기 때문에 한 곳에서 다양한 스타일의 여성을 비교해볼 수 있습니다.

3. 비교적 합리적인 가격

일반 에코걸과 비교했을 때 가라오케 시스템을 이용하는 방식이 오히려 부담이 적은 경우도 있습니다.

4. 체계적인 관리

업소에서 직접 관리하고 교육하는 경우가 많아 기본적인 서비스와 응대 부분에서도 장점이 있습니다.

가라오케 에코걸 이용 시 참고사항

가라오케 방식은 초이스가 시작되는 시점부터 이용 시간이 진행되는 시스템이기 때문에 일반 에코걸처럼 원하는 시간에 맞춰 자유롭게 일정을 조율하기는 어렵습니다.

또한 가라오케에서 활동하는 여성들은 기본적으로 업소에 출근하는 여성들이기 때문에 일반 에코걸과는 운영 방식에 차이가 있습니다.

태국 에코걸을 선택하는 이유

태국은 방콕과 파타야를 중심으로 다양한 관광과 야간 엔터테인먼트 문화가 발달해 있어 여행객들이 즐길 수 있는 콘텐츠가 매우 다양합니다.

에코걸 역시 이러한 태국 여행 문화 중 하나로 자리 잡고 있으며, 단순히 숙소에서 시간을 보내는 방식뿐 아니라 식사, 관광, 야시장, 클럽, 풀빌라 등 다양한 일정과 함께 활용할 수 있다는 점​이 특징입니다.

저희는 가능한 한 실제 출근 여부와 현지 상황을 확인하여 안내하는 것을 기본 원칙으로 하고 있습니다.

여행객이 현지에서 불필요하게 시간을 낭비하지 않도록 일정과 상황에 맞는 이용 방법을 안내해드리며, 이용 과정에서 문제가 발생하는 경우에도 최대한 빠르게 대응할 수 있도록 상담을 지원하고 있습니다.

태국 에코걸 이용 시스템
가라오케 에코걸

이용 시간 : 오후 6시 ~ 오전 6시

7,500바트 / 2회 기준

가라오케에서 직접 만나보고 초이스하는 방식으로 진행됩니다.

일반 에코걸

일반 에코걸은 원하는 이용 시간에 따라 다양한 방식으로 선택할 수 있습니다.

2시간 – 5,000바트 / 1회
6시간 – 8,000바트 / 1회
9시간 – 12,000바트 / 2회
24시간 – 25,000바트 / 3회 이상
2:1 에코걸

두 분이 함께 이용하는 경우에는 2:1 방식도 가능합니다.

6시간 – 22,000바트 / 각 1회
9시간 – 30,000바트 / 각 2회

※ 실제 이용 가능 여부와 세부 조건은 현지 상황 및 예약 일정에 따라 달라질 수 있으므로 상담을 통해 확인해주시기 바랍니다.

태국 에코걸과 함께 즐기는 추천 일정
1. 프라이빗 풀빌라

파타야는 고급 풀빌라가 다양하게 마련되어 있어 여러 명이 함께 여행하는 경우 특히 활용도가 높습니다.

낮에는 풀빌라에서 여유롭게 시간을 보내고 저녁에는 식사와 파티를 즐기는 등 여행 일정에 맞춰 자유롭게 구성할 수 있습니다.

2. 야시장 & 나이트라이프

방콕과 파타야에는 다양한 야시장과 야간 관광지가 있습니다.

방콕에서는 조드페어, 짜뚜짝, 카오산로드 등 유명한 장소를 둘러볼 수 있으며, 현지 음식과 쇼핑을 함께 즐기는 일정으로 구성하기 좋습니다.

태국 특유의 활기찬 밤거리와 현지 분위기를 경험하고 싶다면 야시장 일정도 추천드립니다.

3. 클럽 & 바

태국의 나이트라이프를 제대로 경험하고 싶다면 클럽이나 바를 일정에 포함하는 것도 좋은 방법입니다.

방콕과 파타야에는 다양한 분위기의 클럽과 바가 있어 여행 스타일에 맞춰 선택할 수 있습니다.

4. 관광 명소 데이트

에코걸과 함께 관광 중심의 일정을 계획하는 것도 가능합니다.

방콕
왓 아룬
방콕 왕궁
왓 포
왓 프라깨우
차오프라야강 주변
파타야
진리의 성전
빅 부다
티파니 쇼
황금절벽사원
파타야 해변

태국의 대표적인 관광 명소를 둘러보면서 식사와 카페 등을 함께 구성하면 보다 여유로운 여행 일정을 만들 수 있습니다.

방콕 & 파타야 에코걸 여행

방콕과 파타야는 태국 여행에서 가장 많은 여행객이 찾는 대표적인 지역으로, 두 지역을 함께 방문하는 일정도 많이 구성됩니다.

방콕에서는 쇼핑과 관광, 야시장, 나이트라이프 등을 즐기고 파타야에서는 해변과 풀빌라, 다양한 관광 및 야간 콘텐츠를 경험하는 방식으로 일정을 구성할 수 있습니다.

두 지역의 거리가 비교적 가까운 편이기 때문에 여행 일정에 따라 방콕 → 파타야 또는 파타야 → 방콕 형태로 이동하는 것도 가능합니다.

태국 에코걸 이용 전 알아두면 좋은 점

에코걸을 이용할 때는 단순히 사진이나 가격만 보고 선택하기보다는 실제 출근 여부, 이용 가능 시간, 지역, 원하는 일정과의 호환성 등을 함께 확인하는 것이 중요합니다.

특히 가라오케 방식과 일반 에코걸 방식은 운영 시스템 자체가 다르기 때문에 본인의 여행 스타일에 맞는 방식을 선택하는 것이 좋습니다.

가라오케 방식이 잘 맞는 경우
현장에서 직접 보고 선택하고 싶은 경우
여러 선택지를 한 번에 비교하고 싶은 경우
저녁부터 밤까지 나이트라이프를 즐기고 싶은 경우
일반 에코걸 방식이 잘 맞는 경우
원하는 시간에 맞춰 일정을 계획하고 싶은 경우
관광이나 식사 등 여행 일정과 함께 구성하고 싶은 경우
짧은 시간부터 장시간까지 다양한 옵션을 원하는 경우
태국 에코걸 투어

태국 여행은 관광지만 둘러보는 것보다 자신의 여행 스타일에 맞는 다양한 콘텐츠를 함께 경험할 때 더욱 풍성한 여행이 될 수 있습니다.

방콕과 파타야에서 에코걸 이용을 계획하고 있다면 가라오케 방식과 일반 에코걸 방식의 차이를 먼저 확인한 후 여행 일정에 맞춰 선택하는 것을 추천드립니다.

저희 태국 에코걸 투어는 여행객들이 현지에서 보다 편리하게 이용할 수 있도록 예약 가능 여부, 일정, 지역 및 이용 방법에 대한 상담을 지원​하고 있습니다.

궁금한 사항이나 본인의 여행 일정에 맞는 이용 방법이 궁금하신 경우 편하게 문의해주시기 바랍니다.

방콕 에코걸 / 파타야 에코걸 / 가라오케 에코걸 / 일반 에코걸 등 여행 일정에 맞춰 안내해드립니다.
<p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

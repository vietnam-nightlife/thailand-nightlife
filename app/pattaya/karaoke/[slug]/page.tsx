import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

/*
 * =====================================================
 * 파타야 모나리자 가라오케 상세페이지
 * 돈키호테 상세페이지와 동일한 구성
 * =====================================================
 */

const MONALISA_SLUG = "pattaya-monalisa-karaoke";
const KOREANA_SLUG = "pattaya-koreana-karaoke";
const XXX_SLUG = "pattaya-xxx-karaoke";

/*
 * =====================================================
 * GITHUB IMAGE
 * =====================================================
 */

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

function imageUrl(fileName: string) {
  return `${GITHUB_RAW}/${encodeURIComponent(fileName)}`;
}

/*
 * =====================================================
 * MONA LISA IMAGES
 * =====================================================
 */

const monalisaImages = [
  imageUrl("파타야 모나리자 가라오케 메인.webp"),
  imageUrl("파타야 모나리자 가라오케 외관.webp"),
  imageUrl("파타야 모나리자 가라오케 로비.webp"),
  imageUrl("파타야 모나리자 가라오케 룸1.webp"),
  imageUrl("파타야 모나리자 가라오케 룸2.webp"),
  imageUrl("파타야 모나리자 가라오케 룸3.webp"),
  imageUrl("파타야 모나리자 가라오케 푸잉.webp"),
];

/*
 * =====================================================
 * STATIC PARAMS
 * =====================================================
 */

export function generateStaticParams() {
  return [
    {
      slug: MONALISA_SLUG,
    },
    {
      slug: KOREANA_SLUG,
    },
    {
      slug: XXX_SLUG,
    },
  ];
}

/*
 * =====================================================
 * METADATA
 * =====================================================
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === MONALISA_SLUG) {
    return {
      title:
        "파타야 모나리자 가라오케 | Pattaya Mona Lisa Karaoke | 태국 눈탱이 방지 위원회",

      description:
        "파타야 모나리자 가라오케의 위치, 영업시간, 룸과 시설, 가격 및 방문 전 확인사항을 한곳에서 확인하세요.",

      keywords: [
        "파타야 모나리자 가라오케",
        "파타야 모나리자",
        "Pattaya Mona Lisa Karaoke",
        "Mona Lisa Karaoke Pattaya",
        "파타야 가라오케",
        "파타야 KTV",
        "파타야 한국식 가라오케",
        "파타야 가라오케 추천",
        "파타야 가라오케 가격",
        "파타야 가라오케 위치",
      ],

      alternates: {
        canonical: `/pattaya/karaoke/${slug}`,
      },

      openGraph: {
        title:
          "파타야 모나리자 가라오케 | Pattaya Mona Lisa Karaoke",

        description:
          "파타야 모나리자 가라오케 위치, 시설, 룸 사진 및 이용 정보를 확인하세요.",

        type: "website",

        images: [
          {
            url: monalisaImages[0],
            alt: "파타야 모나리자 가라오케",
          },
        ],
      },
    };
  }

  return {
    title: "파타야 가라오케 | 태국 눈탱이 방지 위원회",

    description:
      "파타야 가라오케의 위치와 영업시간 및 업소 정보를 확인하세요.",

    alternates: {
      canonical: `/pattaya/karaoke/${slug}`,
    },
  };
}

/*
 * =====================================================
 * BREADCRUMB
 * =====================================================
 */

function BreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "파타야",
        item: "/pattaya",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "가라오케",
        item: "/pattaya/karaoke",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "파타야 모나리자 가라오케",
        item:
          "/pattaya/karaoke/pattaya-monalisa-karaoke",
      },
    ],
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

/*
 * =====================================================
 * BUSINESS JSON-LD
 * =====================================================
 */

function MonaLisaBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",

    name: "Mona Lisa Karaoke",

    alternateName: [
      "Monalisa Karaoke",
      "파타야 모나리자 가라오케",
      "Pattaya Mona Lisa Karaoke",
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Pattaya City",
      addressRegion: "Chon Buri",
      postalCode: "20150",
      addressCountry: "TH",
    },

    telephone: "+66 89 008 7171",

    openingHours: "Mo-Su 18:00-00:00",

    priceRange: "฿฿",
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

/*
 * =====================================================
 * PAGE
 * =====================================================
 */

export default async function PattayaKaraokePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  if (
    slug !== MONALISA_SLUG &&
    slug !== KOREANA_SLUG &&
    slug !== XXX_SLUG
  ) {
    notFound();
  }

  /*
   * =====================================================
   * MONA LISA
   * =====================================================
   */

  if (slug === MONALISA_SLUG) {
    return (
      <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0b0b0d] text-white">

        <BreadcrumbJsonLd />
        <MonaLisaBusinessJsonLd />

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative h-[430px] w-full max-w-full overflow-hidden sm:h-[480px] md:h-[560px]">

          <img
            src={monalisaImages[0]}
            alt="파타야 모나리자 가라오케"
            className="h-full w-full max-w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">

            <div className="container pb-10 md:pb-12">

              <div className="text-xs font-black tracking-[.3em] text-red-500">
                PATTAYA · KARAOKE
              </div>

              <h1 className="mt-3 break-words text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
                파타야 모나리자 가라오케
              </h1>

              <p className="mt-3 max-w-2xl break-words text-sm leading-6 text-zinc-300 sm:mt-4 sm:leading-7 md:text-base">
                파타야에서 한국식 KTV를 찾는 여행객들에게
                알려진 모나리자 가라오케입니다.
                매장 위치와 영업시간, 룸과 시설,
                이용요금 및 방문 전 확인사항을
                한곳에서 확인할 수 있습니다.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  ★ 4.0
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  Google 리뷰 306개
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  파타야
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  18:00 - 00:00
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            GALLERY
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            모나리자 가라오케 룸 & 시설 사진
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            모나리자 가라오케의 외관과 로비,
            룸 및 내부 시설 분위기를 사진으로 확인해보세요.
            사진을 클릭하면 크게 볼 수 있습니다.
          </p>

          <ImageGallery
            images={monalisaImages}
            name="파타야 모나리자 가라오케"
          />

        </section>


        {/* =================================================
            PRICE
        ================================================= */}

        <section className="mt-10 w-full max-w-full overflow-hidden sm:mt-12">

          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="mb-7">

              <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
                PRICE MENU
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                모나리자 가라오케 가격 안내
              </h2>

              <p className="mt-2 text-sm text-gray-400 sm:text-base">
                이용 인원과 룸, 시간에 따라 실제 요금이 달라질 수 있습니다.
              </p>

            </div>


            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">


              {/* STANDARD */}

              <div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-cyan-400/30
                  bg-[#101014]
                  p-5 sm:p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-cyan-300
                  hover:shadow-[0_0_28px_rgba(34,211,238,0.22)]
                "
              >

                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    일반 룸
                  </h3>

                  <span
                    className="
                      shrink-0 rounded-full
                      border border-cyan-400/70
                      bg-cyan-500/10
                      px-3 py-1
                      text-[11px] font-bold text-cyan-300
                    "
                  >
                    BASIC
                  </span>

                </div>

                <div className="mt-5">

                  <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      기본 이용
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-cyan-300 sm:text-xl">
                      가격 문의
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      인원별 이용
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-cyan-300 sm:text-xl">
                      가격 문의
                    </span>

                  </div>

                </div>

              </div>


              {/* VIP */}

              <div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-amber-400/40
                  bg-[#101014]
                  p-5 sm:p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-300
                  hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]
                "
              >

                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    VIP 룸
                  </h3>

                  <span
                    className="
                      shrink-0 rounded-full
                      border border-amber-400/70
                      bg-amber-500/10
                      px-3 py-1
                      text-[11px] font-bold text-amber-300
                    "
                  >
                    VIP
                  </span>

                </div>

                <div className="mt-5">

                  <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      기본 이용
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-amber-300 sm:text-xl">
                      가격 문의
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      인원별 이용
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-amber-300 sm:text-xl">
                      가격 문의
                    </span>

                  </div>

                </div>

              </div>


              {/* DRINK */}

              <div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-fuchsia-500/40
                  bg-[#101014]
                  p-5 sm:p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-fuchsia-300
                  hover:shadow-[0_0_30px_rgba(217,70,239,0.28)]
                "
              >

                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    주류 & 음식
                  </h3>

                  <span
                    className="
                      shrink-0 rounded-full
                      border border-fuchsia-400/70
                      bg-fuchsia-500/10
                      px-3 py-1
                      text-[11px] font-bold text-fuchsia-300
                    "
                  >
                    MENU
                  </span>

                </div>

                <div className="mt-5">

                  <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      주류
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-fuchsia-300 sm:text-xl">
                      가격 문의
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      음식
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-fuchsia-300 sm:text-xl">
                      가격 문의
                    </span>

                  </div>

                </div>

              </div>


              {/* PICKUP */}

              <div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-pink-500/40
                  bg-[#101014]
                  p-5 sm:p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-pink-300
                  hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]
                "
              >

                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    픽업 서비스
                  </h3>

                  <span
                    className="
                      shrink-0 rounded-full
                      border border-pink-400/70
                      bg-pink-500/10
                      px-3 py-1
                      text-[11px] font-bold text-pink-300
                    "
                  >
                    PICKUP
                  </span>

                </div>

                <div className="mt-5">

                  <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">

                    <span className="text-sm text-gray-300 sm:text-base">
                      파타야 지역
                    </span>

                    <span className="whitespace-nowrap text-lg font-extrabold text-pink-300 sm:text-xl">
                      문의
                    </span>

                  </div>

                  <div className="py-4 text-sm leading-7 text-gray-400">
                    예약 시 숙소 위치와
                    픽업 가능 여부를 확인하세요.
                  </div>

                </div>

              </div>

            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-gray-600">
              ※ 가격 및 이용조건은 변경될 수 있습니다.
              방문 전 최신 가격과 포함사항을 확인해주세요.
            </p>

          </div>

        </section>


        {/* =================================================
            BASIC INFO
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="grid gap-4 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-xs text-zinc-500">
                업종
              </div>

              <div className="mt-2 font-bold">
                한국식 KTV · 가라오케
              </div>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-xs text-zinc-500">
                위치
              </div>

              <div className="mt-2 font-bold">
                파타야
              </div>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-xs text-zinc-500">
                영업시간
              </div>

              <div className="mt-2 font-bold">
                18:00 - 00:00
              </div>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-xs text-zinc-500">
                평점
              </div>

              <div className="mt-2 font-bold">
                ★ 4.0 · Google 리뷰
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            ABOUT MONA LISA
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            파타야 모나리자 가라오케
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-[15px] leading-8 text-zinc-400">

            <p>
              파타야 모나리자 가라오케(Mona Lisa Karaoke)는
              파타야에서 한국식 KTV를 찾는 여행객들에게
              알려진 가라오케 업소입니다.
            </p>

            <p>
              파타야 시내에서 이동하기 편리한 위치에 있으며,
              일행끼리 프라이빗하게 이용할 수 있는
              룸 형태의 공간을 중심으로 운영됩니다.
            </p>

            <p>
              노래와 함께 주류 및 음식을 즐길 수 있으며,
              방문 인원과 이용시간에 따라
              실제 이용조건이 달라질 수 있습니다.
            </p>

            <p>
              처음 방문하는 경우에는 예약 전에
              룸 이용 가능 여부와 가격,
              주류 및 음식 비용,
              추가 비용 등을 확인하는 것을 권장합니다.
            </p>

          </div>

        </section>


        {/* =================================================
            LOCATION
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              LOCATION
            </div>

            <h2 className="mt-3 text-3xl font-black">
              모나리자 가라오케 위치
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              모나리자 가라오케는 파타야 지역에
              위치한 것으로 안내되고 있습니다.
              방문 전 최신 지도 위치를 확인하는 것을 권장합니다.
            </p>

            <div className="mt-8 rounded-2xl bg-black/40 p-6">

              <div className="text-sm text-zinc-500">
                지역
              </div>

              <div className="mt-2 text-lg font-bold">
                Pattaya City, Chon Buri 20150
              </div>

              <div className="mt-1 text-sm leading-6 text-zinc-400">
                Pattaya · Na Kluea 일대
              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-500">
              지도에서 “Mona Lisa Karaoke Pattaya”를
              검색하면 최신 위치를 확인하는 데 도움이 됩니다.
            </p>

          </div>

        </section>


        {/* =================================================
            OPENING HOURS
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

              <div className="text-xs font-black tracking-[.3em] text-red-500">
                OPENING HOURS
              </div>

              <h2 className="mt-3 text-3xl font-black">
                영업시간
              </h2>

              <div className="mt-8 text-3xl font-black">
                18:00 - 00:00
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                현재 확인되는 정보에서는
                매일 오후 6시부터 자정까지 운영되는 것으로
                안내되고 있습니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

              <div className="text-xs font-black tracking-[.3em] text-red-500">
                VISIT
              </div>

              <h2 className="mt-3 text-3xl font-black">
                방문 전 확인
              </h2>

              <div className="mt-8 text-2xl font-black">
                예약 후 방문 권장
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                주말이나 저녁 시간대에는 방문 전
                예약 및 룸 이용 가능 여부를
                확인하는 것을 권장합니다.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            FACILITIES
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FACILITIES
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            모나리자 가라오케 시설
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-3xl">
                🎤
              </div>

              <h3 className="mt-4 font-black">
                노래방 시설
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                한국식 KTV 형태로 노래와 음악을
                즐길 수 있는 공간입니다.
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-3xl">
                🛋️
              </div>

              <h3 className="mt-4 font-black">
                프라이빗 룸
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                일행끼리 이용할 수 있는
                프라이빗 룸 형태의 공간입니다.
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-3xl">
                🚗
              </div>

              <h3 className="mt-4 font-black">
                픽업 서비스
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                예약 시 파타야 지역 픽업 가능 여부를
                함께 확인하는 것을 권장합니다.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            TRANSPORT
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              TRANSPORT
            </div>

            <h2 className="mt-3 text-3xl font-black">
              모나리자 가라오케 찾아가는 방법
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-400">

              <p>
                파타야 시내에서 이동한다면
                Grab이나 Bolt를 이용하는 방법이 편리합니다.
              </p>

              <p>
                차량 호출 앱에서
                “Mona Lisa Karaoke Pattaya”를 검색하고
                출발 전에 목적지 위치를 확인하세요.
              </p>

              <p>
                픽업 서비스를 이용하는 경우에는
                예약할 때 숙소 위치를 전달하고
                픽업 가능 여부를 확인하는 것이 좋습니다.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            GOOD TO KNOW
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GOOD TO KNOW
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방문 전 체크사항
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "방문 당일 영업시간 확인",
              "정확한 매장 위치 확인",
              "이용 가능한 룸 확인",
              "룸 이용요금 확인",
              "주류 및 음식 가격 확인",
              "추가 비용 여부 확인",
              "최종 결제금액 확인",
              "주말 및 피크타임 예약 확인",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#111] p-5 text-sm text-zinc-300"
              >

                <span className="mr-3 text-red-500">
                  ✓
                </span>

                {item}

              </div>

            ))}

          </div>

        </section>


        {/* =================================================
            FAQ
        ================================================= */}

        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            파타야 모나리자 가라오케 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-4">

            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                모나리자 가라오케 영업시간은 언제인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                현재 확인되는 정보에서는
                매일 18:00부터 00:00까지 운영되는 것으로
                안내되고 있습니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                모나리자 가라오케는 어디에 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                파타야 지역에 위치한 것으로 안내되고 있습니다.
                방문 전 Google 지도에서
                최신 위치를 확인하는 것을 권장합니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                가격은 얼마인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                룸 종류와 이용시간, 인원 및 주문 내용에 따라
                실제 이용금액이 달라질 수 있습니다.
                방문 전에 최신 가격과 포함사항을 확인하세요.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                예약을 하고 방문해야 하나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                저녁 시간대나 주말 방문이라면
                원하는 룸 이용을 위해 미리 예약하는 것을
                권장합니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                픽업 서비스가 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                예약 시 파타야 지역 픽업 가능 여부를
                확인하는 것을 권장합니다.
              </p>

            </details>

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <section className="container py-14 md:py-16">

          <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 text-center md:p-12">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              MONA LISA KARAOKE PATTAYA
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              파타야 모나리자 가라오케
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              파타야 모나리자 가라오케의
              위치와 영업시간, 룸과 시설,
              가격 및 방문 전 확인사항을
              한곳에서 확인해보세요.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href="https://monalizapattaya.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black hover:bg-red-500"
              >
                공식 예약처 보기
              </a>

              <Link
                href="/pattaya/karaoke"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black hover:bg-white/10"
              >
                파타야 가라오케 더보기
              </Link>

            </div>

          </div>

        </section>

      </main>
    );
  }


  /*
   * =====================================================
   * KOREANA
   * =====================================================
   */

  if (slug === KOREANA_SLUG) {
    return (
      <main className="min-h-screen bg-[#0b0b0d] p-10 text-white">

        <h1 className="text-4xl font-black">
          파타야 코리아나 가라오케
        </h1>

      </main>
    );
  }


  /*
   * =====================================================
   * XXX
   * =====================================================
   */

  if (slug === XXX_SLUG) {
    return (
      <main className="min-h-screen bg-[#0b0b0d] p-10 text-white">

        <h1 className="text-4xl font-black">
          파타야 XXX 가라오케
        </h1>

      </main>
    );
  }


  notFound();
}

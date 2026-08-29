import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

/*
 * =====================================================
 * 파타야 모나리자 가라오케 상세페이지
 * =====================================================
 *
 * 사용 이미지
 *
 * 파타야 모나리자 가라오케 메인.webp
 * 파타야 모나리자 가라오케 외관.webp
 * 파타야 모나리자 가라오케 로비.webp
 * 파타야 모나리자 가라오케 룸1.webp
 * 파타야 모나리자 가라오케 룸2.webp
 * 파타야 모나리자 가라오케 룸3.webp
 * 파타야 모나리자 가라오케 푸잉.webp
 *
 * 중요:
 * GITHUB_IMAGE에 실제 GitHub Raw 이미지 기본주소를 입력하세요.
 *
 * 예:
 * https://raw.githubusercontent.com/아이디/저장소/main
 *
 * 이미지가 저장된 폴더가 있다면:
 *
 * https://raw.githubusercontent.com/아이디/저장소/main/public/images
 *
 * =====================================================
 */


/*
 * =====================================================
 * GITHUB IMAGE BASE URL
 * =====================================================
 *
 * 기존 프로젝트에서 사용하던 실제 주소를 넣으세요.
 *
 * 예:
 * https://raw.githubusercontent.com/username/repository/main
 *
 */

const GITHUB_IMAGE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";


/*
 * =====================================================
 * SLUG
 * =====================================================
 */

const MONALISA_SLUG = "pattaya-monalisa-karaoke";
const KOREANA_SLUG = "pattaya-koreana-karaoke";
const XXX_SLUG = "pattaya-xxx-karaoke";


/*
 * =====================================================
 * IMAGE URL
 * =====================================================
 */

function githubImage(fileName: string) {
  return `${GITHUB_IMAGE.replace(/\/$/, "")}/${encodeURIComponent(fileName)}`;
}


/*
 * =====================================================
 * MONA LISA IMAGES
 * =====================================================
 */

const monalisaImages = [
  githubImage("파타야 모나리자 가라오케 메인.webp"),
  githubImage("파타야 모나리자 가라오케 외관.webp"),
  githubImage("파타야 모나리자 가라오케 로비.webp"),
  githubImage("파타야 모나리자 가라오케 룸1.webp"),
  githubImage("파타야 모나리자 가라오케 룸2.webp"),
  githubImage("파타야 모나리자 가라오케 룸3.webp"),
  githubImage("파타야 모나리자 가라오케 푸잉.webp"),
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
        "파타야 모나리자 가라오케의 위치, 영업시간, Google 평점, 룸과 시설, 이용방법 및 방문 전 체크사항을 확인하세요.",

      keywords: [
        "파타야 모나리자 가라오케",
        "파타야 모나리자",
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
          "파타야 모나리자 가라오케 위치, 영업시간, 룸과 시설 및 이용 정보를 확인하세요.",

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
      "파타야 가라오케의 위치와 영업시간 및 이용 정보를 확인하세요.",

    alternates: {
      canonical: `/pattaya/karaoke/${slug}`,
    },
  };
}


/*
 * =====================================================
 * BREADCRUMB JSON-LD
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
 * MAIN PAGE
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


  /*
   * =====================================================
   * CHECK SLUG
   * =====================================================
   */

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
      <main className="min-h-screen w-full overflow-x-hidden bg-[#0b0b0d] text-white">

        <BreadcrumbJsonLd />

        <MonaLisaBusinessJsonLd />


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative h-[430px] w-full overflow-hidden sm:h-[480px] md:h-[560px]">

          <img
            src={monalisaImages[0]}
            alt="파타야 모나리자 가라오케 메인"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">

            <div className="container pb-12">

              <div className="text-xs font-black tracking-[.3em] text-red-500">
                PATTAYA · KOREAN KTV
              </div>

              <h1 className="mt-3 break-words text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
                파타야 모나리자 가라오케
              </h1>

              <p className="mt-3 max-w-2xl break-words text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
                파타야에서 한국인 여행객들에게 알려진
                모나리자 가라오케입니다.
                위치와 영업시간, 룸과 시설,
                이용방법 및 방문 전 확인사항을
                한곳에서 확인해보세요.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">

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

        <section className="container py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            모나리자 가라오케 룸 & 시설 사진
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            모나리자 가라오케의 외관과 내부,
            룸 분위기를 사진으로 확인해보세요.
          </p>

          <ImageGallery
            images={monalisaImages}
            name="파타야 모나리자 가라오케"
          />

        </section>


        {/* =================================================
            PRICE GUIDE
        ================================================= */}

        <section className="mt-12 w-full overflow-hidden">

          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

            <div className="mb-10 text-center">

              <p className="text-xs font-black tracking-[0.35em] text-red-500">
                PRICE GUIDE
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                모나리자 가라오케 가격 안내
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                온라인에 공개된 가격은 자료에 따라 차이가
                있을 수 있어 방문 전 최신 이용조건을
                확인하는 것을 권장합니다.
              </p>

            </div>


            <div className="mx-auto max-w-3xl rounded-3xl border border-amber-500/40 bg-[#111] p-7 text-center shadow-[0_0_30px_rgba(245,158,11,0.08)] sm:p-9">

              <p className="text-xs font-black tracking-[0.3em] text-amber-400">
                CURRENT PRICE
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                이용요금
              </h3>

              <p className="mt-5 text-4xl font-black text-amber-400 sm:text-5xl">
                최신 가격 문의
              </p>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400">
                룸 타입, 인원, 이용시간 및 포함 항목에 따라
                실제 이용금액이 달라질 수 있습니다.
                예약 전 총 결제금액과 포함사항을
                확인하는 것이 좋습니다.
              </p>

            </div>


            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center">

                <div className="text-xs font-black tracking-[.2em] text-amber-400">
                  ROOM
                </div>

                <h3 className="mt-3 text-xl font-black">
                  프라이빗 룸
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  인원에 맞는 룸을
                  사전 확인하는 것을 권장합니다.
                </p>

              </div>


              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center">

                <div className="text-xs font-black tracking-[.2em] text-amber-400">
                  DRINK
                </div>

                <h3 className="mt-3 text-xl font-black">
                  주류 및 음식
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  주문 전 주류와 음식 가격,
                  포함 항목을 확인하세요.
                </p>

              </div>


              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center">

                <div className="text-xs font-black tracking-[.2em] text-amber-400">
                  PICKUP
                </div>

                <h3 className="mt-3 text-xl font-black">
                  픽업 서비스
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  공식 예약처에서는
                  파타야 지역 픽업 서비스를 안내하고 있습니다.
                </p>

              </div>

            </div>


            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-zinc-600">
              ※ 가격 및 이용조건은 변경될 수 있습니다.
              방문 전 최신 정보를 확인해주세요.
            </p>

          </div>

        </section>


        {/* =================================================
            BASIC INFO
        ================================================= */}

        <section className="container py-12">

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
                파타야 · 나끌루아 일대
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
                Google 평점
              </div>

              <div className="mt-2 font-bold">
                ★ 4.0 · 306개
              </div>
            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section className="container py-12">

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
              현재 확인되는 정보에서는 파타야 시내
              나끌루아(Na Kluea) 및 Pattaya City 일대에
              위치한 것으로 안내되고 있습니다.
            </p>

            <p>
              프라이빗 룸을 이용하면서 노래와 음식,
              주류 등을 함께 즐길 수 있는 형태이며,
              단체 방문을 포함한 예약 이용이 가능한 것으로
              확인됩니다.
            </p>

            <p>
              공식 예약처에서는 파타야 전 지역
              픽업 서비스를 안내하고 있어,
              처음 방문하는 여행객이라면 예약 시
              숙소 위치와 픽업 가능 여부를 함께
              확인하는 것이 편리합니다.
            </p>

          </div>

        </section>


        {/* =================================================
            LOCATION
        ================================================= */}

        <section className="container py-12">

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              LOCATION
            </div>

            <h2 className="mt-3 text-3xl font-black">
              모나리자 가라오케 위치
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              현재 공개된 지도·업소 정보에서는
              Pattaya City, Bang Lamung District,
              Chon Buri 20150 지역으로 확인됩니다.
            </p>

            <div className="mt-8 rounded-2xl bg-black/40 p-6">

              <div className="text-sm text-zinc-500">
                위치
              </div>

              <div className="mt-2 text-lg font-bold">
                Pattaya City, Chon Buri 20150
              </div>

              <div className="mt-2 text-sm leading-6 text-zinc-400">
                Pattaya 3rd Road · Soi 2 / Na Kluea 일대
              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-500">
              주소 표기가 자료마다 조금씩 다르게 나타나므로
              방문 전 Google 지도에서
              “Mona Lisa Karaoke Pattaya”를 검색해
              최신 위치를 확인하는 것을 권장합니다.
            </p>

          </div>

        </section>


        {/* =================================================
            OPENING HOURS
        ================================================= */}

        <section className="container py-12">

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
                현재 확인되는 지도 및 공식 안내 기준으로
                매일 오후 6시부터 자정까지 운영되는 것으로
                안내되고 있습니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

              <div className="text-xs font-black tracking-[.3em] text-red-500">
                RESERVATION
              </div>

              <h2 className="mt-3 text-3xl font-black">
                예약 및 방문
              </h2>

              <p className="mt-8 text-sm leading-7 text-zinc-500">
                주말이나 저녁 시간대 방문 예정이라면
                미리 예약하고 방문하는 것을 권장합니다.
                예약 시 인원과 방문시간,
                픽업 여부를 함께 확인하세요.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            FACILITIES
        ================================================= */}

        <section className="container py-12">

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
                프라이빗 룸 형태로 운영됩니다.
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
                공식 예약처에서 파타야 지역
                픽업 서비스를 안내하고 있습니다.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            TRANSPORT
        ================================================= */}

        <section className="container py-12">

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
                Grab 또는 Bolt를 이용해
                “Mona Lisa Karaoke”를 검색하는 방법이
                편리합니다.
              </p>

              <p>
                공식 예약처에서는 파타야 전 지역
                무료 픽업 서비스를 안내하고 있으므로
                예약 시 숙소 위치를 전달하고
                픽업 가능 여부를 확인하는 것도 좋습니다.
              </p>

              <p>
                처음 방문하는 경우에는 출발 전에
                지도상의 위치와 영업 여부를
                다시 확인하는 것을 권장합니다.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            GOOD TO KNOW
        ================================================= */}

        <section className="container py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GOOD TO KNOW
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방문 전 체크사항
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "방문 전 당일 영업시간 확인",
              "룸 이용료와 포함 항목 확인",
              "음식 및 주류 가격 확인",
              "추가 주문 비용 확인",
              "픽업 가능 여부 확인",
              "최종 결제금액 확인",
              "주말 및 피크타임 예약 확인",
              "Google 지도에서 최신 위치 확인",
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

        <section className="container py-12">

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
                현재 확인되는 정보에서는 매일
                18:00부터 00:00까지 운영되는 것으로
                안내되고 있습니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                위치는 어디인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Pattaya City, Chon Buri 20150 지역으로
                확인되며, 지도 자료에서는
                Pattaya 3rd Road 및 Soi 2,
                Na Kluea 일대가 함께 표시됩니다.
                방문 전 최신 지도 위치를 확인하세요.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                가격은 얼마인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                온라인에 공개된 가격 정보가 서로 다르므로
                이 페이지에서는 특정 금액을 확정하지 않았습니다.
                방문 인원과 룸, 이용시간에 따른
                최신 가격을 예약 전에 확인하는 것을 권장합니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-bold">
                픽업 서비스가 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                공식 예약처에서는 파타야 전 지역
                무료 픽업 서비스를 안내하고 있습니다.
                예약 시 숙소 위치와 픽업 가능 여부를
                함께 확인하세요.
              </p>

            </details>

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <section className="container py-16">

          <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 text-center md:p-12">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              MONA LISA KARAOKE PATTAYA
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              파타야 모나리자 가라오케
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              파타야 모나리자 가라오케의
              위치와 영업시간, 시설,
              이용방법 및 방문 전 체크사항을
              확인해보세요.
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

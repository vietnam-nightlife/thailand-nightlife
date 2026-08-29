import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const MONALISA_SLUG = "pattaya-karaoke-01";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

const monalisaMainImage =
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 메인.webp")}`;

const monalisaImages = [
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 외관.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 로비.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 룸1.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 룸2.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 룸3.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 모나리자 가라오케 푸잉.webp")}`,
];

export function generateStaticParams() {
  return [
    {
      slug: MONALISA_SLUG,
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== MONALISA_SLUG) {
    return {
      title: "파타야 가라오케",
    };
  }

  return {
    title:
      "파타야 모나리자 가라오케 | Pattaya Mona Lisa Karaoke",

    description:
      "파타야 모나리자 가라오케 위치, 룸, 시설, 영업시간, 이용정보와 사진을 한눈에 확인하세요.",

    keywords: [
      "파타야 모나리자 가라오케",
      "파타야 모나리자",
      "Pattaya Mona Lisa Karaoke",
      "Mona Lisa Karaoke Pattaya",
      "파타야 가라오케",
      "파타야 KTV",
      "파타야 가라오케 추천",
      "파타야 가라오케 가격",
    ],

    alternates: {
      canonical: `/pattaya/karaoke/${slug}`,
    },

    openGraph: {
      title: "파타야 모나리자 가라오케",
      description:
        "파타야 모나리자 가라오케 위치, 룸과 시설 및 이용정보",
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
        item: `/pattaya/karaoke/${MONALISA_SLUG}`,
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

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "파타야 모나리자 가라오케",
    alternateName: "Pattaya Mona Lisa Karaoke",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pattaya City",
      addressRegion: "Chon Buri",
      postalCode: "20150",
      addressCountry: "TH",
    },
    telephone: "+66 89 008 7171",
    openingHours: "Mo-Su 18:00-00:00",
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

export default async function PattayaKaraokePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== MONALISA_SLUG) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">

      <BreadcrumbJsonLd />
      <BusinessJsonLd />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[430px] overflow-hidden sm:h-[500px] md:h-[600px]">

        <img
          src={monalisaImages[0]}
          alt="파타야 모나리자 가라오케"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-10 md:pb-14">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              PATTAYA · KARAOKE
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              파타야 모나리자 가라오케
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              파타야에서 한국식 KTV를 찾는 여행객들을 위한
              모나리자 가라오케 정보입니다.
              위치, 시설, 룸 사진, 영업시간과
              방문 전 확인사항을 한곳에서 확인하세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                ★ 4.0
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Google 리뷰 306개
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                파타야
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                18:00 - 00:00
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          모나리자 가라오케 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          외관부터 로비, 룸까지 실제 준비된 사진을
          한곳에서 확인해보세요.
        </p>

        <div className="mt-8">
          <ImageGallery
            images={monalisaImages}
            name="파타야 모나리자 가라오케"
          />
        </div>

      </section>


      {/* =====================================================
          PRICE
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <div className="text-center">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            PRICE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            모나리자 가라오케 가격 안내
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            룸 종류와 인원, 이용시간 및 주문내용에 따라
            실제 금액이 달라질 수 있습니다.
          </p>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl border border-cyan-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-cyan-400">
              BASIC
            </span>

            <h3 className="mt-3 text-2xl font-black">
              일반 룸
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between border-b border-white/10 py-5">

                <span className="text-zinc-400">
                  기본 이용
                </span>

                <strong className="text-cyan-300">
                  가격 문의
                </strong>

              </div>

              <div className="flex justify-between py-5">

                <span className="text-zinc-400">
                  인원별 이용
                </span>

                <strong className="text-cyan-300">
                  가격 문의
                </strong>

              </div>

            </div>

          </div>


          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              VIP
            </span>

            <h3 className="mt-3 text-2xl font-black">
              VIP 룸
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between border-b border-white/10 py-5">

                <span className="text-zinc-400">
                  기본 이용
                </span>

                <strong className="text-amber-300">
                  가격 문의
                </strong>

              </div>

              <div className="flex justify-between py-5">

                <span className="text-zinc-400">
                  인원별 이용
                </span>

                <strong className="text-amber-300">
                  가격 문의
                </strong>

              </div>

            </div>

          </div>


          <div className="rounded-3xl border border-fuchsia-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-fuchsia-400">
              MENU
            </span>

            <h3 className="mt-3 text-2xl font-black">
              주류 & 음식
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between border-b border-white/10 py-5">

                <span className="text-zinc-400">
                  주류
                </span>

                <strong className="text-fuchsia-300">
                  가격 문의
                </strong>

              </div>

              <div className="flex justify-between py-5">

                <span className="text-zinc-400">
                  음식
                </span>

                <strong className="text-fuchsia-300">
                  가격 문의
                </strong>

              </div>

            </div>

          </div>


          <div className="rounded-3xl border border-pink-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-pink-400">
              PICKUP
            </span>

            <h3 className="mt-3 text-2xl font-black">
              픽업 서비스
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between py-5">

                <span className="text-zinc-400">
                  파타야 지역
                </span>

                <strong className="text-pink-300">
                  문의
                </strong>

              </div>

            </div>

          </div>

        </div>

        <p className="mt-7 text-center text-xs text-zinc-600">
          ※ 가격 및 이용조건은 변경될 수 있으므로
          방문 전 최신 정보를 확인해주세요.
        </p>

      </section>


      {/* =====================================================
          BASIC INFO
      ===================================================== */}

      <section className="container py-12">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              업종
            </p>

            <p className="mt-2 font-black">
              한국식 KTV · 가라오케
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              위치
            </p>

            <p className="mt-2 font-black">
              파타야
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              영업시간
            </p>

            <p className="mt-2 font-black">
              18:00 - 00:00
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              Google
            </p>

            <p className="mt-2 font-black">
              ★ 4.0 · 리뷰 306개
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          ABOUT MONA LISA
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          파타야 모나리자 가라오케
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          <p>
            파타야 모나리자 가라오케는
            파타야에서 한국식 KTV를 찾는 여행객들에게
            알려진 가라오케 업소입니다.
          </p>

          <p>
            일행끼리 프라이빗하게 이용할 수 있는
            룸 형태의 공간에서 노래와 함께
            주류와 음식을 즐기는 방식으로 이용할 수 있습니다.
          </p>

          <p>
            방문 인원과 룸 종류, 이용시간에 따라
            실제 이용조건이 달라질 수 있으므로
            예약 전에 가격과 포함사항을 확인하는 것을 권장합니다.
          </p>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            모나리자 가라오케 위치
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            파타야 지역에 위치한 모나리자 가라오케입니다.
            방문 전 지도에서 최신 위치를 확인하는 것을 권장합니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              지역
            </p>

            <p className="mt-2 text-lg font-black">
              Pattaya City, Chon Buri 20150
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Pattaya · Na Kluea 일대
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPENING HOURS
      ===================================================== */}

      <section className="container py-12">

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              OPENING HOURS
            </p>

            <h2 className="mt-3 text-3xl font-black">
              영업시간
            </h2>

            <p className="mt-8 text-4xl font-black">
              18:00 - 00:00
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              방문 전 당일 영업 여부를
              다시 확인하는 것을 권장합니다.
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black">
              예약 방문
            </h2>

            <p className="mt-8 text-2xl font-black">
              미리 예약 권장
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              주말이나 저녁시간에는 원하는 룸을 이용하기 위해
              미리 예약하는 것이 좋습니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          모나리자 가라오케 시설
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🎤
            </div>

            <h3 className="mt-4 text-xl font-black">
              노래방 시설
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              한국식 KTV 형태로
              노래와 음악을 즐길 수 있습니다.
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🛋️
            </div>

            <h3 className="mt-4 text-xl font-black">
              프라이빗 룸
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              일행끼리 편하게 이용할 수 있는
              룸 형태의 공간입니다.
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🚗
            </div>

            <h3 className="mt-4 text-xl font-black">
              픽업
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              예약 시 픽업 가능 여부를
              확인할 수 있습니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRANSPORT
      ===================================================== */}

      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            TRANSPORT
          </p>

          <h2 className="mt-3 text-3xl font-black">
            찾아가는 방법
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-400">

            <p>
              파타야 시내에서는 Grab 또는 Bolt를 이용하면
              편리하게 이동할 수 있습니다.
            </p>

            <p>
              차량 호출 시 “Mona Lisa Karaoke Pattaya”를
              검색하고 목적지를 확인하세요.
            </p>

            <p>
              픽업을 이용하는 경우 예약 시 숙소 위치를 전달하고
              픽업 가능 여부를 확인하는 것이 좋습니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHECK
      ===================================================== */}

      <section className="container py-12">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GOOD TO KNOW
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방문 전 체크사항
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[
            "방문 당일 영업시간 확인",
            "매장 위치 확인",
            "룸 이용 가능 여부 확인",
            "룸 이용요금 확인",
            "주류 및 음식 가격 확인",
            "추가 비용 확인",
            "최종 결제금액 확인",
            "주말 및 피크타임 예약 확인",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-[#111114] p-5 text-sm text-zinc-300"
            >
              <span className="mr-3 text-red-500">
                ✓
              </span>
              {item}
            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FAQ
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          자주 묻는 질문
        </h2>

        <div className="mt-8 space-y-4">

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              모나리자 가라오케 영업시간은?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 안내되는 영업시간은
              18:00 - 00:00입니다.
              방문 전 당일 영업 여부를 확인하세요.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              룸 종류와 인원, 이용시간 및 주문내용에 따라
              달라질 수 있으므로 예약 전 최신 가격을 확인하세요.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              예약해야 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              저녁이나 주말에는 원하는 룸을 이용하기 위해
              미리 예약하는 것을 권장합니다. 예약 없이 방문시에는 자리가 없거나 오래 기다리셔야 할 수 있습니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              픽업이 가능한가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              3인이상 무료 픽업을 해드리고있습니다. 몇분이신지 말씀하신 후 픽업 원하시는 위치를 말씀주시면 됩니다.
            </p>

          </details>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="container py-14 md:py-20">

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-[#111114] p-8 text-center md:p-14">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            MONA LISA KARAOKE PATTAYA
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            파타야 모나리자 가라오케
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            파타야 모나리자 가라오케의
            위치와 시설, 룸 사진 및 이용정보를
            확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
  href="/contact"
  className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
>
  문의하기
</a>

            <Link
              href="/pattaya/karaoke"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              파타야 가라오케 더보기
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

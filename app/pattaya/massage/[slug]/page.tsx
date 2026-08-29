import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const BANANA_SLUG = "pattaya-massage-01";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

// =========================================================
// 파타야 바나나 마사지 이미지
// =========================================================

const bananaMainImage =
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 메인.webp")}`;

const bananaImages = [
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 외관.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 로비.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 내부.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸1.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸2.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸3.webp")}`,
];

export function generateStaticParams() {
  return [
    {
      slug: BANANA_SLUG,
    },
  ];
}

// =========================================================
// SEO
// =========================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== BANANA_SLUG) {
    return {
      title: "파타야 마사지",
    };
  }

  return {
    title:
      "파타야 바나나 마사지 | Pattaya Banana Massage",

    description:
      "파타야 바나나 마사지 위치, 영업시간, 이용정보와 매장 사진을 한눈에 확인하세요.",

    keywords: [
      "파타야 바나나 마사지",
      "파타야 마사지",
      "Pattaya Banana Massage",
      "Banana Massage Pattaya",
      "파타야 마사지 추천",
      "파타야 마사지샵",
      "파타야 마사지 위치",
    ],

    alternates: {
      canonical: `/pattaya/massage/${slug}`,
    },

    openGraph: {
      title: "파타야 바나나 마사지",
      description:
        "파타야 바나나 마사지 위치, 영업시간과 이용정보",

      type: "website",

      images: [
        {
          url: bananaMainImage,
          alt: "파타야 바나나 마사지",
        },
      ],
    },
  };
}

// =========================================================
// Breadcrumb
// =========================================================

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
        name: "마사지",
        item: "/pattaya/massage",
      },

      {
        "@type": "ListItem",
        position: 4,
        name: "파타야 바나나 마사지",
        item: `/pattaya/massage/${BANANA_SLUG}`,
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

// =========================================================
// Business Schema
// =========================================================

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Banana Massage Sai3",

    alternateName:
      "파타야 바나나 마사지",

    address: {
      "@type": "PostalAddress",
      streetAddress: "345/17-18",
      addressLocality: "Pattaya",
      addressRegion: "Chon Buri",
      postalCode: "20150",
      addressCountry: "TH",
    },

    telephone: "+66 92 572 0100",

    openingHours: "Mo-Su 11:30-23:30",

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "17",
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

// =========================================================
// PAGE
// =========================================================

export default async function PattayaMassagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== BANANA_SLUG) {
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
          src={bananaMainImage}
          alt="파타야 바나나 마사지"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-10 md:pb-14">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              PATTAYA · MASSAGE
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              파타야 바나나 마사지
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              파타야에서 편안하게 마사지를 받을 수 있는
              바나나 마사지 정보를 한곳에서 확인하세요.
              위치, 영업시간과 매장 정보를 방문 전에 확인할 수 있습니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                ★ 4.5
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Google 리뷰 17개
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                파타야
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                11:30 - 23:30
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
          바나나 마사지 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          매장 외관과 내부 분위기, 마사지 공간을
          사진으로 확인해보세요.
        </p>

        <div className="mt-8">

          <ImageGallery
            images={bananaImages}
            name="파타야 바나나 마사지"
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
            바나나 마사지 가격 안내
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            마사지 종류와 이용시간에 따라 실제 가격이
            달라질 수 있으므로 방문 전 최신 가격을 확인해주세요.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-cyan-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-cyan-400">
              THAI
            </span>

            <h3 className="mt-3 text-2xl font-black">
              타이 마사지
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              전통적인 타이 마사지 프로그램은
              방문 전 최신 가격을 확인해주세요.
            </p>

            <strong className="mt-6 block text-cyan-300">
              가격 문의
            </strong>

          </div>

          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              OIL
            </span>

            <h3 className="mt-3 text-2xl font-black">
              오일 마사지
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              오일 마사지 이용 가능 여부와
              최신 가격을 방문 전 확인해주세요.
            </p>

            <strong className="mt-6 block text-amber-300">
              가격 문의
            </strong>

          </div>

          <div className="rounded-3xl border border-fuchsia-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-fuchsia-400">
              OTHER
            </span>

            <h3 className="mt-3 text-2xl font-black">
              기타 마사지
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              프로그램 및 이용시간은
              매장에 최신 내용을 확인해주세요.
            </p>

            <strong className="mt-6 block text-fuchsia-300">
              가격 문의
            </strong>

          </div>

        </div>

        <p className="mt-7 text-center text-xs text-zinc-600">
          ※ 현재 웹에서 확인되는 정확한 마사지별 가격 정보는
          확인되지 않아 임의로 금액을 기재하지 않았습니다.
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
              마사지
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
              11:30 - 23:30
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              Google
            </p>

            <p className="mt-2 font-black">
              ★ 4.5 · 리뷰 17개
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          ABOUT BANANA MASSAGE
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          파타야 바나나 마사지
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          <p>
            파타야 바나나 마사지는 파타야에서
            마사지와 휴식을 원하는 여행객들이
            찾아볼 수 있는 마사지 업소입니다.
          </p>

          <p>
            현재 확인되는 정보에 따르면
            파타야 345/17-18 주소에 위치하며,
            매일 11:30부터 23:30까지 운영되는 것으로
            안내되고 있습니다.
          </p>

          <p>
            마사지 종류와 이용시간에 따라
            가격과 이용조건이 달라질 수 있으므로
            방문 전에 최신 정보를 확인하는 것을 권장합니다.
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
            바나나 마사지 위치
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            파타야 345/17-18에 위치한 것으로
            확인됩니다. 방문 전 지도에서
            최신 위치를 다시 확인해주세요.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              주소
            </p>

            <p className="mt-2 text-lg font-black">
              345/17-18, Pattaya, Chon Buri 20150
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Thailand
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
              11:30 - 23:30
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              현재 확인되는 정보 기준입니다.
              방문 당일 영업 여부를 다시 확인해주세요.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              CONTACT
            </p>

            <h2 className="mt-3 text-3xl font-black">
              문의 및 방문
            </h2>

            <p className="mt-8 text-2xl font-black">
              +66 92 572 0100
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              방문 전 영업시간과 이용 가능한
              마사지 프로그램을 확인하는 것을 권장합니다.
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
          바나나 마사지 이용 정보
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              💆
            </div>

            <h3 className="mt-4 text-xl font-black">
              마사지
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              마사지 프로그램을 이용할 수 있는
              파타야 마사지 업소입니다.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🕐
            </div>

            <h3 className="mt-4 text-xl font-black">
              늦은 시간까지 운영
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              현재 안내된 영업시간은
              11:30부터 23:30까지입니다.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              📍
            </div>

            <h3 className="mt-4 text-xl font-black">
              파타야 위치
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              파타야 345/17-18 주소로
              안내되고 있습니다.
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
              파타야 시내에서는 Grab 또는 Bolt를
              이용하면 편리하게 이동할 수 있습니다.
            </p>

            <p>
              차량 호출 시 Banana Massage 또는
              주소 345/17-18을 확인하고
              목적지를 확인하는 것이 좋습니다.
            </p>

            <p>
              출발 전에 지도에서 현재 영업 위치를
              다시 확인하는 것을 권장합니다.
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
            "마사지 프로그램 확인",
            "마사지 이용시간 확인",
            "최신 가격 확인",
            "추가 비용 여부 확인",
            "결제 방법 확인",
            "혼잡 시간대 방문 여부 확인",
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
              바나나 마사지 영업시간은?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 확인되는 정보 기준으로
              매일 11:30부터 23:30까지 운영됩니다.
              방문 전 당일 영업 여부를 확인하세요.
            </p>

          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              바나나 마사지는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 확인되는 주소는
              345/17-18, Pattaya, Chon Buri 20150입니다.
            </p>

          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              마사지 가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              온라인에서 신뢰할 수 있는 최신
              마사지별 가격표를 확인하지 못했기 때문에
              임의의 가격은 표시하지 않았습니다.
              방문 전 최신 가격을 확인해주세요.
            </p>

          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              전화 문의가 가능한가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 확인되는 전화번호는
              +66 92 572 0100입니다.
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
            BANANA MASSAGE PATTAYA
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            파타야 바나나 마사지
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            파타야 바나나 마사지의 위치와
            영업시간, 이용정보를 확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href="/contact"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </a>

            <Link
              href="/pattaya/massage"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              파타야 마사지 더보기
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

/* =========================================================
   SLUG
========================================================= */

const BANANA_SLUG = "pattaya-massage-01";
const EIGHTY_EIGHT_SLUG = "pattaya-88-massage";
const DRAGON_SLUG = "pattaya-dragon-swedish-massage";

/* =========================================================
   BANANA
========================================================= */

const bananaMainImage =
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 메인.webp")}`;

const bananaImages = [
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 로비.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 리셉션.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸1.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸2.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸3.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 바나나 마사지 룸4.webp")}`,
];

const bananaPrice = [
  ["A코스 · 90분", "발 마사지 + 오일 마사지 + 서비스", "3,500"],
  [
    "B코스 · 120분",
    "발 마사지 + 바디 스크럽 + 오일 마사지 + 서비스",
    "4,000",
  ],
  [
    "C코스 · 120분",
    "발 마사지 + 오일 마사지 30분 (2:1) + 프리미엄 케어",
    "7,000",
  ],
  [
    "D코스 · 120분",
    "발 마사지 + 오일 마사지 30분 + 동반 고객 케어",
    "7,000",
  ],
  ["H코스 · 60분", "오일 마사지 30분 + 핸드 마무리", "2,500"],
  ["S코스 · 45분", "숏타임 마사지 코스", "2,700"],
];

/* =========================================================
   88 MASSAGE
========================================================= */

const eightyEightMainImage =
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 메인.webp")}`;

const eightyEightImages = [
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 느낌.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 리셉션.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 룸1.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 룸2.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 룸3.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("파타야 88 마사지 룸4.webp")}`,
];

const eightyEightPrice = [
  [
    "타이 / 발마사지 · 60분",
    "기본 타이 마사지 또는 발마사지",
    "400",
  ],
  [
    "오일 / 아로마마사지 · 60분",
    "오일을 이용한 릴랙싱 마사지",
    "500",
  ],
  [
    "전립선 A코스 마사지 · 90분",
    "전립선 A코스 마사지",
    "2,000",
  ],
  [
    "서비스 B코스 마사지 · 90분",
    "서비스 B코스 마사지",
    "3,000",
  ],
  [
    "황제 2:1 전립선 A · 90분",
    "2:1 프리미엄 마사지 코스",
    "3,000",
  ],
  [
    "황제 2:1 서비스 B · 90분",
    "2:1 프리미엄 서비스 코스",
    "4,000",
  ],
  [
    "황제 2:1 VIP 출장 · 90분",
    "VIP 출장 프리미엄 코스",
    "5,800",
  ],
];

/* =========================================================
   DRAGON SWEDISH
========================================================= */

/*
  드래곤 이미지는 별도 페이지/폴더를 사용합니다.
*/

const DRAGON_RAW =
  `${GITHUB_RAW}/app/pattaya/message/%5Bslug%5D/DragonSwedish`;

const dragonImage = (fileName: string) =>
  `${DRAGON_RAW}/${encodeURIComponent(fileName)}`;

const dragonMainImage = dragonImage(
  "파타야 드래곤 스웨디시 메인.webp"
);

const dragonImages = [
  dragonImage("파타야 드래곤 스웨디시 외관.webp"),
  dragonImage("파타야 드래곤 스웨디시 리셉션.webp"),
  dragonImage("파타야 드래곤 스웨디시 휴게실.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸1.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸2.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸3.webp"),
];

const dragonPrice = [
  [
    "A 코스 · 60분",
    "마사지 + 센슈얼 + 핸드",
    "2,500",
  ],
  [
    "B 코스 · 60분",
    "마사지 + 센슈얼 + @",
    "3,500",
  ],
  [
    "C 코스 · 90분",
    "전문 오일마사지 60분 + 센슈얼 + 핸드",
    "3,000",
  ],
  [
    "D 코스 · 90분",
    "전문 오일마사지 60분 + 센슈얼 + @",
    "4,000",
  ],
];

/* =========================================================
   GOOGLE MAP
========================================================= */

const getGoogleMapUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const getGoogleMapLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

/* =========================================================
   PAGE DATA
========================================================= */

function getPageData(slug: string) {
  if (slug === BANANA_SLUG) {
    return {
      slug,
      name: "파타야 바나나 마사지",
      english: "BANANA MASSAGE PATTAYA",
      rating: "4.5",
      reviews: "17",
      hours: "11:30 - 23:30",
      address: "345/17-18, Pattaya, Chon Buri 20150, Thailand",
      mainImage: bananaMainImage,
      images: bananaImages,
      galleryTitle: "바나나 마사지 사진",
      galleryDescription:
        "매장 외관과 내부 분위기, 마사지 공간을 사진으로 확인해보세요.",
      priceTitle: "파타야 바나나 마사지 가격표",
      priceDescription:
        "바나나 마사지에서 안내하는 코스별 구성과 가격입니다.",
      prices: bananaPrice,
      aboutTitle: "ABOUT BANANA MASSAGE",
      aboutText: [
        "파타야 바나나 마사지는 파타야에서 마사지와 휴식을 원하는 여행객들이 찾아볼 수 있는 마사지 업소입니다.",
        "다양한 시간대의 마사지 코스가 있어 짧게 이용하려는 여행객부터 여유롭게 이용하려는 여행객까지 코스를 비교해볼 수 있습니다.",
        "방문 전 원하는 코스와 이용시간, 가격 및 이용조건을 확인하는 것을 권장합니다.",
      ],
      locationTitle: "바나나 마사지 위치",
      facilityTitle: "바나나 마사지 이용 정보",
      ctaTitle: "파타야 바나나 마사지",
      ctaLabel: "BANANA MASSAGE PATTAYA",
    };
  }

  if (slug === EIGHTY_EIGHT_SLUG) {
    return {
      slug,
      name: "파타야 88 마사지",
      english: "88 MASSAGE & SPA PATTAYA",
      rating: "4.6",
      reviews: "349",
      hours: "11:00 - 23:00",
      address:
        "249, Soi Chalermphrakiat 6, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand",
      mainImage: eightyEightMainImage,
      images: eightyEightImages,
      galleryTitle: "88 마사지 사진",
      galleryDescription:
        "파타야 88 마사지 & 스파의 매장과 마사지 공간을 사진으로 확인해보세요.",
      priceTitle: "파타야 88 마사지 가격표",
      priceDescription:
        "확인 가능한 일반 마사지 코스 기준의 가격입니다. 가격과 운영 내용은 방문 전 다시 확인해주세요.",
      prices: eightyEightPrice,
      aboutTitle: "ABOUT 88 MASSAGE & SPA",
      aboutText: [
        "파타야 88 마사지 & 스파는 파타야 시내 Chalermphrakiat 6 인근에 위치한 마사지 업소입니다.",
        "타이 마사지와 오일 마사지 등을 제공하며 위치와 운영시간을 확인하기 편리한 곳입니다.",
        "방문 전 영업시간과 이용 가능 코스를 다시 확인하는 것을 권장합니다.",
      ],
      locationTitle: "88 마사지 위치",
      facilityTitle: "88 마사지 이용 정보",
      ctaTitle: "파타야 88 마사지",
      ctaLabel: "88 MASSAGE & SPA PATTAYA",
    };
  }

  /* =========================================================
     DRAGON
  ========================================================= */

  if (slug === DRAGON_SLUG) {
    return {
      slug,
      name: "파타야 드래곤 스웨디시",
      english: "DRAGON SWEDISH & SENSUAL MASSAGE",
      rating: "4.5",
      reviews: "0",
      hours: "11:00 - 00:00",
      address:
        "Pattaya 3rd Road, Pattaya, Chon Buri, Thailand",
      mainImage: dragonMainImage,
      images: dragonImages,
      galleryTitle: "드래곤 스웨디시 매장 사진",
      galleryDescription:
        "파타야 드래곤 스웨디시의 외관, 리셉션, 휴게실과 룸 내부 사진입니다.",
      priceTitle: "파타야 드래곤 스웨디시 가격표",
      priceDescription:
        "제공해주신 가격표를 기준으로 정리한 드래곤 스웨디시 이용 코스입니다.",
      prices: dragonPrice,
      aboutTitle: "ABOUT DRAGON SWEDISH",
      aboutText: [
        "파타야 드래곤 스웨디시는 파타야 3rd Road 인근에서 스웨디시 및 오일마사지 코스를 이용할 수 있는 마사지샵입니다.",
        "매장 외관과 리셉션, 휴게 공간, 마사지 룸 등의 실제 사진을 확인할 수 있어 방문 전에 매장 분위기를 살펴보기 좋습니다.",
        "코스는 60분과 90분 구성으로 나뉘며 방문 전 원하는 코스와 가격 및 이용 가능 여부를 확인하는 것을 권장합니다.",
      ],
      locationTitle: "드래곤 스웨디시 위치",
      facilityTitle: "드래곤 스웨디시 이용 정보",
      ctaTitle: "파타야 드래곤 스웨디시",
      ctaLabel: "DRAGON SWEDISH & SENSUAL MASSAGE",
    };
  }

  return null;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return [
    { slug: BANANA_SLUG },
    { slug: EIGHTY_EIGHT_SLUG },
    { slug: DRAGON_SLUG },
  ];
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageData(slug);

  if (!page) {
    return {
      title: "파타야 마사지",
    };
  }

  return {
    title: `${page.name} | Pattaya Massage`,
    description:
      `${page.name} 위치, 영업시간, 마사지 코스와 가격정보를 한눈에 확인하세요.`,
    keywords: [
      page.name,
      "파타야 마사지",
      "파타야 마사지 추천",
      "파타야 마사지샵",
      "Pattaya Massage",
    ],
    alternates: {
      canonical: `/pattaya/massage/${slug}`,
    },
    openGraph: {
      title: page.name,
      description:
        `${page.name} 위치, 영업시간, 마사지 코스와 가격정보`,
      type: "website",
      images: [
        {
          url: page.mainImage,
          alt: page.name,
        },
      ],
    },
  };
}

/* =========================================================
   BREADCRUMB
========================================================= */

function BreadcrumbJsonLd({
  page,
}: {
  page: ReturnType<typeof getPageData>;
}) {
  if (!page) return null;

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
        name: page.name,
        item: `/pattaya/massage/${page.slug}`,
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

/* =========================================================
   PAGE
========================================================= */

export default async function PattayaMassagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageData(slug);

  if (!page) {
    notFound();
  }

  /* =======================================================
     DRAGON
  ======================================================= */

  if (slug === DRAGON_SLUG) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">

        <BreadcrumbJsonLd page={page} />

        {/* HERO */}
        <section className="relative h-[480px] overflow-hidden sm:h-[560px] md:h-[650px]">

          <img
            src={page.mainImage}
            alt={page.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/50 to-black/10" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="container pb-10 md:pb-16">

              <p className="text-xs font-black tracking-[0.4em] text-[#d2a24c]">
                PATTAYA · DRAGON SWEDISH
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
                파타야 드래곤 스웨디시
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                파타야 드래곤 스웨디시의 매장 정보와
                이용 코스, 가격, 시설 사진을 한곳에서 확인하세요.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-[#c99a4a]/40 bg-[#c99a4a]/10 px-4 py-2 text-sm font-bold text-[#e0b866]">
                  ★ {page.rating}
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm">
                  Pattaya 3rd Road
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm">
                  {page.hours}
                </span>

              </div>

            </div>
          </div>

        </section>

        {/* INTRO */}
        <section className="container py-16 md:py-20">

          <div className="max-w-4xl">

            <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
              DRAGON SWEDISH
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              파타야 드래곤 스웨디시
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-zinc-400 md:text-base">
              파타야 3rd Road 인근에서 스웨디시 및 오일마사지
              코스를 이용할 수 있는 마사지샵입니다.
              실제 매장 사진과 코스별 가격을 함께 확인할 수 있도록
              정리했습니다.
            </p>

          </div>

        </section>

        {/* PRICE */}
        <section className="container py-14 md:py-20">

          <div className="mb-10">

            <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
              PRICE GUIDE
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              이용 코스 & 가격
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              제공해주신 가격표를 기준으로 정리했습니다.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {dragonPrice.map(([course, description, price]) => (

              <div
                key={course}
                className="relative overflow-hidden rounded-3xl border border-[#8d6a32]/50 bg-gradient-to-br from-[#17130c] to-[#0d0d0d] p-7 md:p-9"
              >

                <div className="absolute -right-2 -top-8 text-[130px] font-black leading-none text-[#d2a24c]/5">
                  {course.charAt(0)}
                </div>

                <div className="relative">

                  <p className="text-xs font-black tracking-[0.3em] text-[#d2a24c]">
                    {course}
                  </p>

                  <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                    <h3 className="max-w-md text-xl font-black leading-8 md:text-2xl">
                      {description}
                    </h3>

                    <div className="shrink-0">

                      <span className="text-3xl font-black text-[#dfb766]">
                        {price}
                      </span>

                      <span className="ml-1 text-sm font-bold text-zinc-500">
                        바트
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-6 rounded-2xl border border-[#8d6a32]/30 bg-[#11100c] p-5 text-sm leading-7 text-zinc-400">
            전문 마사지사 1명 + 센슈얼 아가씨 1명
            릴레이 시스템
          </div>

          <p className="mt-5 text-xs leading-6 text-zinc-600">
            ※ 가격 및 코스 내용은 매장 사정에 따라 변경될 수 있습니다.
            방문 전 최신 가격과 이용 가능 여부를 확인해주세요.
          </p>

        </section>

        {/* GALLERY */}
        <section className="container py-14 md:py-20">

          <div className="mb-9">

            <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
              GALLERY
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              매장 & 시설 사진
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              외관, 리셉션, 휴게실과 마사지 룸 내부를 확인해보세요.
            </p>

          </div>

          <div className="mt-8">
            <ImageGallery
              images={page.images}
              name={page.name}
            />
          </div>

        </section>

        {/* BASIC INFO */}
        <section className="container py-14 md:py-20">

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-[#8d6a32]/30 bg-[#11110f] p-7">

              <p className="text-xs font-black tracking-[0.3em] text-[#d2a24c]">
                LOCATION
              </p>

              <h3 className="mt-4 text-xl font-black">
                위치
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {page.address}
              </p>

            </div>

            <div className="rounded-3xl border border-[#8d6a32]/30 bg-[#11110f] p-7">

              <p className="text-xs font-black tracking-[0.3em] text-[#d2a24c]">
                HOURS
              </p>

              <h3 className="mt-4 text-xl font-black">
                영업시간
              </h3>

              <p className="mt-4 text-2xl font-black text-[#dfb766]">
                {page.hours}
              </p>

            </div>

            <div className="rounded-3xl border border-[#8d6a32]/30 bg-[#11110f] p-7">

              <p className="text-xs font-black tracking-[0.3em] text-[#d2a24c]">
                RATING
              </p>

              <h3 className="mt-4 text-xl font-black">
                평점
              </h3>

              <p className="mt-4 text-2xl font-black text-[#dfb766]">
                ★ {page.rating}
              </p>

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section className="container py-14 md:py-20">

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
              ABOUT
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              드래곤 스웨디시 이용 안내
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-zinc-400">

              {page.aboutText.map((text) => (
                <p key={text}>
                  {text}
                </p>
              ))}

            </div>

          </div>

        </section>

        {/* CHECK */}
        <section className="container py-14 md:py-20">

          <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
            INFORMATION
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            방문 전 확인사항
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "방문 전 최신 가격 확인",
              "원하는 코스 및 이용시간 확인",
              "당일 영업 여부 확인",
              "매장 위치 확인",
              "현장 이용 가능 여부 확인",
              "추가 비용 여부 확인",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111114] p-5 text-sm text-zinc-300"
              >
                <span className="mr-3 text-[#d2a24c]">
                  ✓
                </span>
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* FAQ */}
        <section className="container py-14 md:py-20">

          <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-4">

            <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

              <summary className="cursor-pointer font-black">
                드래곤 스웨디시 영업시간은?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                현재 안내된 영업시간은 {page.hours}입니다.
                방문 전 당일 영업 여부를 확인해주세요.
              </p>

            </details>

            <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

              <summary className="cursor-pointer font-black">
                드래곤 스웨디시는 어디에 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {page.address}
              </p>

            </details>

            <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

              <summary className="cursor-pointer font-black">
                이용 코스와 가격은 어떻게 되나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                A, B 코스는 60분이며 C, D 코스는
                90분 구성입니다. 자세한 가격은 위 가격표를
                확인해주세요.
              </p>

            </details>

          </div>

        </section>

        {/* CTA */}
        <section className="container py-16 md:py-24">

          <div className="rounded-3xl border border-[#8d6a32]/40 bg-gradient-to-b from-[#17130d] to-[#0d0d0d] p-8 text-center md:p-14">

            <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
              DRAGON SWEDISH
            </p>

            <h2 className="mt-5 text-3xl font-black md:text-5xl">
              파타야 드래곤 스웨디시
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              매장 위치와 영업시간, 이용 코스 및 가격,
              실제 시설 사진을 확인해보세요.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href="/contact"
                className="rounded-xl bg-[#b7893e] px-7 py-3 text-sm font-black text-black transition hover:bg-[#d2a24c]"
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

  /* =======================================================
     BANANA / 88
  ======================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">

      <BreadcrumbJsonLd page={page} />

      {/* HERO */}
      <section className="relative h-[430px] overflow-hidden sm:h-[500px] md:h-[600px]">

        <img
          src={page.mainImage}
          alt={page.name}
          className="h-full w-full object-cover brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-10 md:pb-14">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              PATTAYA · MASSAGE
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              {page.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              {page.name}의 위치, 영업시간, 마사지 코스와 가격정보를
              한곳에서 확인할 수 있습니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                ★ {page.rating}
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Google 리뷰 {page.reviews}개
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                파타야
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                {page.hours}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          {page.galleryTitle}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          {page.galleryDescription}
        </p>

        <div className="mt-8">

          <ImageGallery
            images={page.images}
            name={page.name}
          />

        </div>

      </section>

      {/* PRICE */}
      <section className="container py-12 md:py-16">

        <div className="text-center">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            PRICE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {page.priceTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            {page.priceDescription}
          </p>

        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-5">

          {page.prices.map(([course, description, price]) => (

            <div
              key={course}
              className="rounded-3xl border border-white/10 bg-[#111114] p-6 md:p-8"
            >

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-sm font-black tracking-wider text-orange-500">
                    {course}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {description}
                  </h3>

                </div>

                <div className="shrink-0 text-3xl font-black text-white">

                  {price}

                  <span className="ml-1 text-lg text-orange-400">
                    바트
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-6 text-zinc-600">
          ※ 가격 및 코스 내용은 매장 사정에 따라 변경될 수 있으므로
          방문 전 최신 정보를 확인해주세요.
        </p>

      </section>

      {/* BASIC INFO */}
      <section className="container py-12">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["업종", "마사지"],
            ["위치", "파타야"],
            ["영업시간", page.hours],
            ["Google", `★ ${page.rating} · 리뷰 ${page.reviews}개`],
          ].map(([label, value]) => (

            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#111114] p-6"
            >

              <p className="text-xs text-zinc-500">
                {label}
              </p>

              <p className="mt-2 font-black">
                {value}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ABOUT */}
      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          {page.aboutTitle}
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          {page.name}
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          {page.aboutText.map((text) => (
            <p key={text}>
              {text}
            </p>
          ))}

        </div>

      </section>

      {/* LOCATION */}
      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            {page.locationTitle}
          </h2>

          {/* ADDRESS */}
          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              주소
            </p>

            <p className="mt-2 text-lg font-black leading-8">
              {page.address}
            </p>

          </div>

          {/* GOOGLE MAP */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">

            <iframe
              src={getGoogleMapUrl(page.address)}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`${page.name} Google 지도`}
            />

          </div>

          {/* GOOGLE MAP BUTTON */}
          <div className="mt-5">

            <a
              href={getGoogleMapLink(page.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-zinc-200"
            >
              📍 Google 지도에서 위치 보기
            </a>

          </div>

        </div>

      </section>

      {/* OPENING HOURS */}
      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            OPENING HOURS
          </p>

          <h2 className="mt-3 text-3xl font-black">
            영업시간
          </h2>

          <p className="mt-8 text-4xl font-black">
            {page.hours}
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            공개된 안내 기준이며, 방문 당일 영업 여부를 다시 확인해주세요.
          </p>

        </div>

      </section>

      {/* FACILITIES */}
      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          {page.facilityTitle}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {[
            [
              "💆",
              "마사지",
              "다양한 마사지 코스를 확인할 수 있습니다.",
            ],
            [
              "🕐",
              "영업시간",
              `현재 안내된 영업시간은 ${page.hours}입니다.`,
            ],
            [
              "📍",
              "파타야",
              "파타야 현지 마사지 업소입니다.",
            ],
          ].map(([icon, title, description]) => (

            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-[#111114] p-7"
            >

              <div className="text-3xl">
                {icon}
              </div>

              <h3 className="mt-4 text-xl font-black">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* TRANSPORT */}
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
              파타야 시내에서는 Grab 또는 Bolt를 이용하면 편리하게
              이동할 수 있습니다.
            </p>

            <p>
              차량 호출 시 매장 이름 또는 정확한 주소를 확인하고
              목적지를 설정하는 것이 좋습니다.
            </p>

            <p>
              출발 전에 지도에서 현재 위치와 영업 여부를 다시 확인하는
              것을 권장합니다.
            </p>

          </div>

        </div>

      </section>

      {/* GOOD TO KNOW */}
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
            "원하는 마사지 코스 확인",
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

      {/* FAQ */}
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
              {page.name} 영업시간은?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 공개된 안내 기준 영업시간은 {page.hours}입니다.
              방문 전 당일 영업 여부를 확인해주세요.
            </p>

          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              {page.name} 위치는 어디인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              {page.address}
            </p>

          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              마사지 코스는 어떤 것이 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              위 가격표에서 확인 가능한 마사지 코스와 이용시간,
              가격을 확인할 수 있습니다. 가격은 현장 사정에 따라
              변경될 수 있습니다.
            </p>

          </details>

        </div>

      </section>

      {/* CTA */}
      <section className="container py-14 md:py-20">

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-[#111114] p-8 text-center md:p-14">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            {page.ctaLabel}
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            {page.ctaTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            {page.name}의 위치와 영업시간, 코스 및 가격정보를
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

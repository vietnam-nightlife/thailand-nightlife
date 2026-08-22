import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { places, getPlace } from "@/lib/data";
import ImageGallery from "@/components/ImageGallery";

export function generateStaticParams() {
  return places.map((p) => ({
    city: p.city,
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    city: string;
    category: string;
    slug: string;
  }>;
}): Promise<Metadata> {
  const { city, category, slug } = await params;
  const place = getPlace(slug);

  if (!place || place.city !== city || place.category !== category) {
    return {
      title: "태국 마사지 정보 | 태국 눈탱이 방지 위원회",
      description:
        "방콕과 파타야의 마사지 및 여행 정보를 확인하세요.",
    };
  }

  const isKoreana = slug === "bangkok-karaoke-01";
  const isBarbie18 = slug === "bangkok-barbie18-massage";

  if (isBarbie18) {
    return {
      title:
        "방콕 바비18 마사지 | Sukhumvit Soi 18 | 태국 눈탱이 방지 위원회",
      description:
        "방콕 바비18 마사지의 위치, 영업시간, 룸과 시설, 가격 및 방문 전 참고사항을 확인하세요.",
      keywords: [
        "방콕 바비18 마사지",
        "방콕 Barbie18 Massage",
        "Barbie18 Massage Bangkok",
        "방콕 마사지",
        "수쿰빗 마사지",
        "수쿰빗 소이18 마사지",
        "아속 마사지",
        "프롬퐁 마사지",
        "방콕 마사지 가격",
        "방콕 마사지샵",
      ],
      alternates: {
        canonical: `/${city}/${category}/${slug}`,
      },
      openGraph: {
        title: "방콕 바비18 마사지 | Sukhumvit Soi 18",
        description:
          "방콕 바비18 마사지 위치, 시설, 가격 및 방문 정보를 확인하세요.",
        type: "website",
        images: [
          {
            url: place.image,
            alt: "방콕 바비18 마사지",
          },
        ],
      },
    };
  }

  if (isKoreana) {
    return {
      title:
        "방콕 코리아나 가라오케 | 수쿰빗 소이11 KTV | 태국 눈탱이 방지 위원회",
      description:
        "방콕 코리아나 가라오케 위치, 영업시간, 룸과 시설, 이용요금 및 방문 정보를 확인하세요.",
      alternates: {
        canonical: `/${city}/${category}/${slug}`,
      },
      keywords: [
        "방콕 코리아나 가라오케",
        "방콕 코리아나",
        "코리아나 가라오케",
        "방콕 가라오케",
        "방콕 KTV",
        "방콕 한국식 가라오케",
        "수쿰빗 가라오케",
        "수쿰빗 KTV",
      ],
      openGraph: {
        title:
          "방콕 코리아나 가라오케 | 수쿰빗 소이11 KTV",
        description:
          "방콕 코리아나 가라오케의 위치, 영업시간, 룸, 시설 및 이용 정보를 확인하세요.",
        type: "website",
        images: [
          {
            url: place.image,
            alt: "방콕 코리아나 가라오케",
          },
        ],
      },
    };
  }

  const cityName = city === "bangkok" ? "방콕" : "파타야";
  const categoryName =
    category === "massage" ? "마사지" : "가라오케";

  return {
    title: `${place.name} | ${cityName} ${categoryName} | 태국 눈탱이 방지 위원회`,
    description:
      `${place.name}의 위치, 영업시간, 평점 및 업소 정보를 확인해보세요.`,
    alternates: {
      canonical: `/${city}/${category}/${slug}`,
    },
    openGraph: {
      title: `${place.name} | ${cityName} ${categoryName}`,
      description:
        `${place.name}의 위치, 영업시간 및 업소 정보를 확인하세요.`,
      type: "website",
      images: [
        {
          url: place.image,
          alt: place.name,
        },
      ],
    },
  };
}

function PlaceBreadcrumbJsonLd({
  cityName,
  citySlug,
  category,
  categoryName,
  placeName,
  placeSlug,
}: {
  cityName: string;
  citySlug: string;
  category: string;
  categoryName: string;
  placeName: string;
  placeSlug: string;
}) {
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
        name: cityName,
        item: `/${citySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `/${citySlug}/${category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: placeName,
        item: `/${citySlug}/${category}/${placeSlug}`,
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

function KoreanaBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "CLUB Koreana",
    alternateName: [
      "Koreana KTV",
      "방콕 코리아나 가라오케",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Soi Sukhumvit 11",
      addressLocality: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    telephone: "+66 82 223 2929",
    openingHours: "Mo-Su 19:00-03:00",
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

function Barbie18BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Barbie18 Massage",
    alternateName: [
      "Barbie18 Massage",
      "Barbie18 Nuru Massage",
      "방콕 바비18 마사지",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sukhumvit Soi 18",
      addressLocality: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    url: "https://barbie18massage.com/",
    telephone: "+66 98 685 4108",
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

export default async function PlaceDetail({
  params,
}: {
  params: Promise<{
    city: string;
    category: string;
    slug: string;
  }>;
}) {
  const { city, category, slug } = await params;

  const place = getPlace(slug);

  if (
    !place ||
    place.city !== city ||
    place.category !== category
  ) {
    notFound();
  }

    // =========================================================
  // 방콕 CUBE 마사지 상세페이지
  // 바비18 마사지와 동일한 상세페이지 구조
  // =========================================================

  if (slug === "bangkok-cube-nuru-massage") {
    const cubeImages = place.gallery ?? [];

    return (
      <main className="min-h-screen bg-[#0b0b0d] text-white">

        {/* =================================================
            HERO
        ================================================== */}
        <section className="relative h-[520px] overflow-hidden md:h-[560px]">
          <img
            src={place.image}
            alt="방콕 큐브 마사지 CUBE Nuru Massage"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="container pb-10 md:pb-12">

              <div className="text-xs font-black tracking-[.3em] text-red-500">
                BANGKOK · MASSAGE
              </div>

              <h1 className="mt-3 text-4xl font-black md:text-6xl">
                방콕 큐브 마사지
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">
                방콕 수쿰빗 소이 22에 위치한 CUBE Nuru Massage입니다.
                매장 위치와 운영시간, 내부 시설, 룸 분위기와
                방문 전 확인사항을 한곳에서 확인할 수 있습니다.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  CUBE Nuru Massage
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  Sukhumvit Soi 22
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  방콕 수쿰빗
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  누루 마사지
                </span>

              </div>
            </div>
          </div>
        </section>


        {/* =================================================
            QUICK INFO
        ================================================== */}
        <section className="container py-10 md:py-12">

          <div className="grid gap-4 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                업종
              </div>

              <div className="mt-2 font-bold">
                마사지샵 · Nuru Massage
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                위치
              </div>

              <div className="mt-2 font-bold">
                수쿰빗 소이 22
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                운영시간
              </div>

              <div className="mt-2 font-bold">
                11:00 - 02:00
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                평점
              </div>

              <div className="mt-2 font-bold">
                ★ 4.7 · Google 리뷰
              </div>
            </div>

          </div>
        </section>


        {/* =================================================
            ABOUT
        ================================================== */}
        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            ABOUT CUBE
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방콕 큐브 마사지
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-[15px] leading-8 text-zinc-400">

            <p>
              방콕 큐브 마사지(CUBE Nuru Massage)는
              방콕 수쿰빗 소이 22에 위치한 마사지샵으로
              알려져 있습니다.
            </p>

            <p>
              수쿰빗 소이 22는 BTS 프롬퐁과 가까운
              수쿰빗 지역에 위치해 있어 주변 호텔이나
              식당과 함께 방문 일정을 구성하기 좋은 지역입니다.
            </p>

            <p>
              CUBE는 누루 마사지와 오일 마사지 등을
              제공하는 형태로 소개되고 있으며,
              공개된 매장 사진에서는 리셉션 공간과
              개별 룸, 다양한 내부 시설을 확인할 수 있습니다.
            </p>

            <p>
              특히 객실별 분위기와 시설 구성이 서로 다를 수
              있으므로 방문 전에 이용 가능한 룸과
              당일 운영 여부를 확인하는 것이 좋습니다.
            </p>

            <p>
              온라인에 등록된 가격과 운영시간은 변경될 수
              있으므로 실제 방문 전 최신 정보를 확인하는 것을
              권장합니다.
            </p>

          </div>
        </section>


        {/* =================================================
            GALLERY
        ================================================== */}
        {cubeImages.length > 0 && (
          <section className="container py-10 md:py-12">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              GALLERY
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              큐브 마사지 룸 & 시설 사진
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              CUBE 마사지의 매장과 리셉션,
              객실 및 내부 시설 분위기를 사진으로 확인해보세요.
              사진을 클릭하면 크게 볼 수 있습니다.
            </p>

            <ImageGallery
              images={cubeImages}
              name="방콕 큐브 마사지"
            />

          </section>
        )}


        {/* =================================================
            LOCATION
        ================================================== */}
        <section className="container py-10 md:py-12">

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              LOCATION
            </div>

            <h2 className="mt-3 text-3xl font-black">
              방콕 큐브 마사지 위치
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              CUBE Nuru Massage는 방콕 수쿰빗
              소이 22(Sukhumvit Soi 22) 인근에
              위치한 것으로 확인됩니다.
            </p>

            <div className="mt-8 rounded-2xl bg-black/40 p-6">

              <div className="text-sm text-zinc-500">
                주소
              </div>

              <div className="mt-2 text-lg font-bold">
                20/2 Sukhumvit Soi 22
              </div>

              <div className="mt-1 text-sm leading-6 text-zinc-400">
                Khlong Tan, Khlong Toei,
                Bangkok 10110, Thailand
              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-500">
              수쿰빗 소이 22 방향으로 이동한 뒤
              지도에서 CUBE Massage를 검색하면
              위치를 확인할 수 있습니다.
            </p>

          </div>
        </section>


        {/* =================================================
            HOURS
        ================================================== */}
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
                11:00 - 02:00
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                공개된 최근 자료에서는 오전 11시부터
                새벽 시간대까지 운영되는 것으로 확인됩니다.
              </p>

              <p className="mt-4 text-xs leading-6 text-zinc-600">
                ※ 요일에 따라 마감시간이 다르게 표시되는
                자료도 있으므로 방문 당일 정확한 운영시간을
                확인하세요.
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
                당일 운영 여부 확인
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                운영시간과 이용 가능한 룸,
                당일 가격 및 이용 조건은 변경될 수 있으므로
                방문 전에 확인하는 것을 권장합니다.
              </p>

            </div>

          </div>
        </section>


        {/* =========================================================
    CUBE NURU MASSAGE 가격표
========================================================= */}
<section className="mt-12 w-full">
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

  {/* 제목 */}
  <div className="mb-7">
    <p className="text-[12px] font-bold tracking-[0.35em] text-fuchsia-400 uppercase">
      PRICE MENU
    </p>

    <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
      큐브 마사지 가격표
    </h2>

    <p className="mt-2 text-sm sm:text-base text-gray-400">
      CUBE Nuru Massage에서 확인할 수 있는 마사지 코스 및 이용 요금입니다.
    </p>
  </div>

  {/* 가격 카드 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

    {/* 스탠다드 */}
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
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          스탠다드 코스
        </h3>
      </div>

      <div className="mt-5 space-y-0">
        <div className="flex items-center justify-between gap-4 py-4 border-b border-white/10">
          <span className="text-sm sm:text-base text-gray-300">
            60분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-cyan-300">
            3,100 B
            <span className="text-sm text-gray-500 font-bold"> / 4,100 B</span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm sm:text-base text-gray-300">
            90분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-cyan-300">
            3,700 B
            <span className="text-sm text-gray-500 font-bold"> / 4,700 B</span>
          </span>
        </div>
      </div>
    </div>


    {/* 일본식 누루매트 */}
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
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          일본식 누루매트
        </h3>

        <span
          className="
            shrink-0 rounded-full
            border border-fuchsia-400/70
            bg-fuchsia-500/10
            px-3 py-1
            text-[11px] sm:text-xs
            font-bold text-fuchsia-300
          "
        >
          HOT
        </span>
      </div>

      <div className="mt-5 space-y-0">
        <div className="flex items-center justify-between gap-4 py-4 border-b border-white/10">
          <span className="text-sm sm:text-base text-gray-300">
            60분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-fuchsia-300">
            3,900 B
            <span className="text-sm text-gray-500 font-bold"> / 4,900 B</span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm sm:text-base text-gray-300">
            90분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-fuchsia-300">
            4,500 B
            <span className="text-sm text-gray-500 font-bold"> / 5,500 B</span>
          </span>
        </div>
      </div>
    </div>


    {/* VIP 자쿠지 룸 */}
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
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          VIP 자쿠지 룸
        </h3>

        <span
          className="
            shrink-0 rounded-full
            border border-amber-400/70
            bg-amber-500/10
            px-3 py-1
            text-[11px] sm:text-xs
            font-bold text-amber-300
          "
        >
          VIP
        </span>
      </div>

      <div className="mt-5 space-y-0">
        <div className="flex items-center justify-between gap-4 py-4 border-b border-white/10">
          <span className="text-sm sm:text-base text-gray-300">
            60분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-amber-300">
            3,500 B
            <span className="text-sm text-gray-500 font-bold"> / 4,500 B</span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm sm:text-base text-gray-300">
            90분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-amber-300">
            4,300 B
            <span className="text-sm text-gray-500 font-bold"> / 5,300 B</span>
          </span>
        </div>
      </div>
    </div>


    {/* VIP 자쿠지 일본식 누루매트 */}
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-pink-500/50
        bg-[#101014]
        p-5 sm:p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-pink-300
        hover:shadow-[0_0_32px_rgba(236,72,153,0.30)]
      "
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          VIP 자쿠지 일본식 누루매트
        </h3>

        <span
          className="
            shrink-0 rounded-full
            border border-pink-400/70
            bg-pink-500/10
            px-3 py-1
            text-[11px] sm:text-xs
            font-bold text-pink-300
          "
        >
          PREMIUM
        </span>
      </div>

      <div className="mt-5 space-y-0">
        <div className="flex items-center justify-between gap-4 py-4 border-b border-white/10">
          <span className="text-sm sm:text-base text-gray-300">
            60분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-pink-300">
            4,300 B
            <span className="text-sm text-gray-500 font-bold"> / 5,300 B</span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm sm:text-base text-gray-300">
            90분 코스
          </span>

          <span className="whitespace-nowrap text-lg sm:text-xl font-extrabold text-pink-300">
            5,100 B
            <span className="text-sm text-gray-500 font-bold"> / 6,100 B</span>
          </span>
        </div>
      </div>
    </div>
   </div>    
  </div>
</section>

        {/* =================================================
            FACILITIES
        ================================================== */}
        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FACILITIES
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            큐브 마사지 룸 및 시설
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-3xl">
                🛋️
              </div>

              <h3 className="mt-4 font-black">
                개별 룸
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                공개된 내부 사진을 통해
                개별적으로 이용할 수 있는
                룸 형태의 시설을 확인할 수 있습니다.
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-3xl">
                🛁
              </div>

              <h3 className="mt-4 font-black">
                욕조 및 샤워 시설
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                일부 객실에서는 욕조와 샤워 공간이
                포함된 형태의 시설을 확인할 수 있습니다.
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <div className="text-3xl">
                ✨
              </div>

              <h3 className="mt-4 font-black">
                다양한 룸 구성
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                공개된 사진 기준으로 객실마다
                분위기와 시설 구성이 다를 수 있어
                방문 전 원하는 룸을 확인하는 것이 좋습니다.
              </p>

            </div>

          </div>
        </section>


        {/* =================================================
            TRANSPORT
        ================================================== */}
        <section className="container py-10 md:py-12">

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              TRANSPORT
            </div>

            <h2 className="mt-3 text-3xl font-black">
              큐브 마사지 찾아가는 방법
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-400">

              <p>
                CUBE 마사지는 수쿰빗 소이 22에
                위치한 것으로 확인됩니다.
              </p>

              <p>
                아속에서 이동하는 경우 BTS를 이용해
                프롬퐁 방향으로 이동한 뒤 수쿰빗 소이 22
                방향으로 이동하는 방법이 편리합니다.
              </p>

              <p>
                Grab이나 Bolt를 이용한다면
                목적지에 CUBE Massage 또는
                CUBE Nuru Massage를 검색하면
                보다 쉽게 이동할 수 있습니다.
              </p>

              <p>
                처음 방문한다면 지도에서 주소를 확인하고
                매장 위치를 미리 확인한 후 이동하는 것을
                권장합니다.
              </p>

            </div>

          </div>
        </section>


        {/* =================================================
            GOOD TO KNOW
        ================================================== */}
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
              "이용 가능한 코스와 가격 확인",
              "원하는 룸 이용 가능 여부 확인",
              "추가 비용이 있는지 사전 확인",
              "최종 결제금액 확인",
              "주말 및 저녁 시간대 방문 전 문의",
              "온라인에 표시된 정보와 현장 안내 비교",
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
        ================================================== */}
        <section className="container py-10 md:py-12">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방콕 큐브 마사지 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-4">

            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                큐브 마사지는 어디에 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                방콕 수쿰빗 소이 22에 위치한 것으로
                확인됩니다. 주소는 20/2 Sukhumvit Soi 22,
                Bangkok 10110으로 안내되고 있습니다.
              </p>
            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                영업시간은 언제인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                최근 공개 자료에서는 오전 11시부터
                새벽 2시 전후까지 운영되는 것으로
                확인됩니다. 요일별 마감시간이 다르게
                표시되는 자료도 있으므로 방문 전 확인하세요.
              </p>
            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                가격은 얼마인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                공개 자료에서는 약 2,000바트부터
                상위 룸 기준 약 8,500바트까지의
                가격대가 확인됩니다. 코스와 룸에 따라
                가격이 달라질 수 있으므로 방문 전에
                최신 가격을 확인하는 것이 좋습니다.
              </p>
            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                룸 사진을 볼 수 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                네. 이 페이지의 갤러리에서 현재 등록된
                CUBE 마사지의 리셉션과 룸,
                내부 시설 사진을 확인할 수 있습니다.
              </p>
            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                방문 전에 확인할 사항이 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                영업시간, 정확한 위치, 당일 이용 가능 여부,
                최신 가격과 이용 조건을 방문 전에
                확인하는 것을 권장합니다.
              </p>
            </details>

          </div>

        </section>


        {/* =================================================
            FINAL INFO
        ================================================== */}
        <section className="container py-14 md:py-16">

          <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 text-center md:p-12">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              CUBE NURU MASSAGE BANGKOK
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              방콕 큐브 마사지
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              수쿰빗 소이 22에 위치한 CUBE Nuru Massage의
              위치, 룸과 시설, 가격 정보 및 방문 전
              체크사항을 확인해보세요.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href="/contact"
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black hover:bg-red-500"
              >
                문의하기
              </a>

              <Link
                href="/bangkok/massage"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black hover:bg-white/10"
              >
                방콕 마사지 더보기
              </Link>

            </div>

          </div>

        </section>

      </main>
    );
  }
  
  const cityName =
    city === "bangkok" ? "방콕" : "파타야";

  const categoryName =
    category === "massage"
      ? "마사지"
      : "가라오케";

  const isKoreana =
    slug === "bangkok-karaoke-01";

  const isBarbie18 =
    slug === "bangkok-barbie18-massage";

  /*
   * =====================================================
   * 방콕 바비18 마사지
   * =====================================================
   */

  if (isBarbie18) {
    const barbieImages = place.gallery ?? [];

    return (
      <main>
        <PlaceBreadcrumbJsonLd
          cityName="방콕"
          citySlug="bangkok"
          category="massage"
          categoryName="마사지"
          placeName="방콕 바비18 마사지"
          placeSlug="bangkok-barbie18-massage"
        />

        <Barbie18BusinessJsonLd />

        {/* =================================================
            HERO
        ================================================== */}
        <section className="relative h-[520px] overflow-hidden md:h-[560px]">
          <img
            src={place.image}
            alt="방콕 바비18 마사지 메인"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="container pb-10 md:pb-12">
              <div className="text-xs font-black tracking-[.3em] text-red-500">
                BANGKOK · MASSAGE
              </div>

              <h1 className="mt-3 text-4xl font-black md:text-6xl">
                방콕 바비18 마사지
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">
                방콕 수쿰빗 소이 18에 위치한 Barbie18 Massage입니다.
                위치와 영업시간, 내부 시설, 룸 분위기 및
                방문 전 확인사항을 한곳에서 확인할 수 있습니다.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  Barbie18 Massage
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  Sukhumvit Soi 18
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  방콕 수쿰빗
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  마사지
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            QUICK INFO
        ================================================== */}
        <section className="container py-10 md:py-12">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                업종
              </div>

              <div className="mt-2 font-bold">
                마사지샵
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                위치
              </div>

              <div className="mt-2 font-bold">
                수쿰빗 소이 18
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                운영시간
              </div>

              <div className="mt-2 font-bold">
                12:00 - 00:00
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-xs text-zinc-500">
                주변 지역
              </div>

              <div className="mt-2 font-bold">
                아속 · 프롬퐁
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================== */}
        <section className="container py-10 md:py-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            ABOUT BARBIE18
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방콕 바비18 마사지
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-[15px] leading-8 text-zinc-400">
            <p>
              방콕 바비18 마사지(Barbie18 Massage)는
              수쿰빗 소이 18에 위치한 마사지샵으로
              안내되고 있습니다.
            </p>

            <p>
              외부 업소 정보에서는 프롬퐁 또는 아속
              생활권에서 접근할 수 있는 곳으로 소개되고
              있으며, 수쿰빗 주요 호텔과 식당을 함께
              이용하기 좋은 위치에 있습니다.
            </p>

            <p>
              매장 내부는 리셉션 공간과 개별 룸으로
              구성되어 있으며, 외부 공개 사진을 통해
              일반 룸과 욕조가 있는 룸 등의 시설을
              확인할 수 있습니다.
            </p>

            <p>
              방문 전에는 당일 운영시간과 이용 가능한
              코스 및 가격을 확인하는 것이 좋습니다.
              온라인에 등록된 정보는 시기에 따라
              변경될 수 있습니다.
            </p>
          </div>
        </section>

        {/* =================================================
            GALLERY
        ================================================== */}
        {barbieImages.length > 0 && (
          <section className="container py-10 md:py-12">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              GALLERY
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              바비18 마사지 룸 & 시설 사진
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              바비18 마사지의 리셉션과 휴게공간,
              룸 및 내부 시설 분위기를 사진으로 확인해보세요.
              사진을 클릭하면 크게 볼 수 있습니다.
            </p>

            <ImageGallery
              images={barbieImages}
              name="방콕 바비18 마사지"
            />
          </section>
        )}

        {/* =================================================
            LOCATION
        ================================================== */}
        <section className="container py-10 md:py-12">
          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              LOCATION
            </div>

            <h2 className="mt-3 text-3xl font-black">
              방콕 바비18 마사지 위치
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              바비18 마사지는 방콕 수쿰빗 소이 18
              인근에 위치한 것으로 안내되고 있습니다.
              아속과 프롬퐁 사이의 수쿰빗 지역에서
              이동하기 좋은 위치입니다.
            </p>

            <div className="mt-8 rounded-2xl bg-black/40 p-6">
              <div className="text-sm text-zinc-500">
                주소
              </div>

              <div className="mt-2 text-lg font-bold">
                Sukhumvit Soi 18
              </div>

              <div className="mt-1 text-sm leading-6 text-zinc-400">
                Khlong Toei, Bangkok 10110, Thailand
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-500">
              공개된 외부 자료에는 상세 번지가
              서로 다르게 표기되는 경우가 있으므로,
              처음 방문한다면 지도 위치를 확인하거나
              업소에 정확한 위치를 문의하는 것이 좋습니다.
            </p>
          </div>
        </section>

        {/* =================================================
            HOURS
        ================================================== */}
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
                12:00 - 00:00
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                최근 확인되는 외부 자료에서는
                정오부터 자정까지 운영되는 정보가
                확인됩니다.
              </p>

              <p className="mt-4 text-xs leading-6 text-zinc-600">
                ※ 다른 외부 자료에는 11:00 - 01:00으로
                표기된 경우도 있으므로 방문 당일
                정확한 운영시간을 확인하세요.
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
                당일 운영 여부 확인
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                영업시간이나 이용 가능한 룸,
                당일 가격은 변동될 수 있으므로
                방문 전에 확인하는 것을 권장합니다.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
    BARBIE18 PRICE MENU
========================================================= */}
<section className="mt-12 w-full">
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

    {/* PRICE MENU 제목 */}
    <div className="mb-7">
      <div className="text-[11px] font-bold tracking-[0.35em] text-pink-500">
        PRICE MENU
      </div>

      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        바비18 마사지 가격표
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
        바비18 마사지에서 확인할 수 있는 마사지 코스 및 이용 요금입니다.
      </p>
    </div>

    {/* 가격표 */}
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">

      {/* =====================================================
          오일 마사지
      ===================================================== */}
      <div
        className="
          group rounded-2xl
          border border-cyan-500/30
          bg-[#111114]
          p-5 sm:p-6
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/80
          hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
        "
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">
            오일 마사지
          </h3>

          <span
            className="
              shrink-0 rounded-full
              border border-cyan-400/50
              px-3 py-1
              text-[10px] font-bold
              text-cyan-300
              transition-all duration-300
              group-hover:bg-cyan-400
              group-hover:text-black
            "
          >
            STANDARD
          </span>
        </div>

        <div>

          {/* 30분 */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              30분 코스
            </span>

            <span className="shrink-0 text-xl font-extrabold text-cyan-300 sm:text-2xl">
              1,800 B
            </span>
          </div>

          {/* 60분 */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              60분 코스
            </span>

            <span className="shrink-0 text-xl font-extrabold text-cyan-300 sm:text-2xl">
              2,300 B
            </span>
          </div>

          {/* 90분 */}
          <div className="flex items-center justify-between gap-4 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              90분 코스
            </span>

            <div className="shrink-0 text-right">
              <span className="text-xl font-extrabold text-cyan-300 sm:text-2xl">
                3,000 B
              </span>
              <span className="ml-2 text-xs font-bold text-gray-500">
                (2번)
              </span>
            </div>
          </div>

        </div>
      </div>


      {/* =====================================================
          누루 마사지
      ===================================================== */}
      <div
        className="
          group rounded-2xl
          border border-fuchsia-500/30
          bg-[#111114]
          p-5 sm:p-6
          transition-all duration-300
          hover:-translate-y-1
          hover:border-fuchsia-400/80
          hover:shadow-[0_0_35px_rgba(217,70,239,0.18)]
        "
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">
            누루 마사지
          </h3>

          <span
            className="
              shrink-0 rounded-full
              border border-fuchsia-400/60
              px-3 py-1
              text-[10px] font-bold
              text-fuchsia-300
              transition-all duration-300
              group-hover:bg-fuchsia-400
              group-hover:text-black
            "
          >
            HOT
          </span>
        </div>

        <div>

          {/* 60분 */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              60분 코스
            </span>

            <span className="shrink-0 text-xl font-extrabold text-fuchsia-300 sm:text-2xl">
              3,000 B
            </span>
          </div>

          {/* 90분 */}
          <div className="flex items-center justify-between gap-4 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              90분 코스
            </span>

            <div className="shrink-0 text-right">
              <span className="text-xl font-extrabold text-fuchsia-300 sm:text-2xl">
                3,700 B
              </span>
              <span className="ml-2 text-xs font-bold text-gray-500">
                (2번)
              </span>
            </div>
          </div>

        </div>
      </div>


      {/* =====================================================
          누루 마사지 자쿠지 VIP
      ===================================================== */}
      <div
        className="
          group rounded-2xl
          border border-amber-500/30
          bg-[#111114]
          p-5 sm:p-6
          transition-all duration-300
          hover:-translate-y-1
          hover:border-amber-400/80
          hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]
        "
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">
            누루 마사지
            <span className="ml-2 text-amber-400">
              (자쿠지 VIP)
            </span>
          </h3>

          <span
            className="
              shrink-0 rounded-full
              border border-amber-400/60
              px-3 py-1
              text-[10px] font-bold
              text-amber-300
              transition-all duration-300
              group-hover:bg-amber-400
              group-hover:text-black
            "
          >
            VIP
          </span>
        </div>

        <div>

          {/* 60분 */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              60분 코스
            </span>

            <span className="shrink-0 text-xl font-extrabold text-amber-300 sm:text-2xl">
              3,500 B
            </span>
          </div>

          {/* 90분 */}
          <div className="flex items-center justify-between gap-4 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              90분 코스
            </span>

            <div className="shrink-0 text-right">
              <span className="text-xl font-extrabold text-amber-300 sm:text-2xl">
                4,000 B
              </span>
              <span className="ml-2 text-xs font-bold text-gray-500">
                (2번)
              </span>
            </div>
          </div>

        </div>
      </div>


      {/* =====================================================
          누루 마사지 2:1
      ===================================================== */}
      <div
        className="
          group rounded-2xl
          border border-pink-500/30
          bg-[#111114]
          p-5 sm:p-6
          transition-all duration-300
          hover:-translate-y-1
          hover:border-pink-400/80
          hover:shadow-[0_0_35px_rgba(236,72,153,0.20)]
        "
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">
            누루 마사지
            <span className="ml-2 text-pink-300">
              (2:1)
            </span>
          </h3>

          <span
            className="
              shrink-0 rounded-full
              border border-pink-400/60
              px-3 py-1
              text-[10px] font-bold
              text-pink-300
              transition-all duration-300
              group-hover:bg-pink-400
              group-hover:text-black
            "
          >
            PREMIUM
          </span>
        </div>

        <div>

          {/* 60분 */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              60분 코스
            </span>

            <span className="shrink-0 text-xl font-extrabold text-pink-300 sm:text-2xl">
              5,500 B
            </span>
          </div>

          {/* 90분 */}
          <div className="flex items-center justify-between gap-4 py-4">
            <span className="text-sm text-gray-300 sm:text-base">
              90분 코스
            </span>

            <div className="shrink-0 text-right">
              <span className="text-xl font-extrabold text-pink-300 sm:text-2xl">
                6,500 B
              </span>
              <span className="ml-2 text-xs font-bold text-gray-500">
                (2번)
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
        
        {/* =================================================
            FACILITIES
        ================================================== */}
        <section className="container py-10 md:py-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FACILITIES
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            룸 및 시설
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-3xl">
                🛋️
              </div>

              <h3 className="mt-4 font-black">
                개인 룸
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                외부 공개 사진을 통해 개인적으로
                이용할 수 있는 룸 구성을 확인할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-3xl">
                🛁
              </div>

              <h3 className="mt-4 font-black">
                욕조 시설
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                일부 룸에는 욕조가 포함된 형태의
                시설이 확인됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <div className="text-3xl">
                ✨
              </div>

              <h3 className="mt-4 font-black">
                깔끔한 실내 분위기
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                공개된 내부 사진에서는 리셉션과
                룸이 비교적 정돈된 형태로 확인됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            TRANSPORT
        ================================================== */}
        <section className="container py-10 md:py-12">
          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              TRANSPORT
            </div>

            <h2 className="mt-3 text-3xl font-black">
              찾아가는 방법
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-400">
              <p>
                바비18 마사지는 수쿰빗 소이 18에
                위치한 것으로 안내되고 있습니다.
              </p>

              <p>
                아속 지역에서 이동하는 경우
                수쿰빗 소이 18 방향으로 이동하기 전 미리 카카오톡이나 텔레그램으로
                 미리 방문전 예약을 하시는걸 권장드립니다.
              </p>

              <p>
                BTS Asok 및 MRT Sukhumvit 인근에서
                이동할 경우 도보 또는 현지 교통수단을
                이용할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            GOOD TO KNOW
        ================================================== */}
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
              "이용 가능한 코스와 가격 확인",
              "원하는 룸 이용 가능 여부 확인",
              "추가 비용이 있는지 사전 확인",
              "최종 결제금액 확인",
              "주말 및 저녁 시간대 방문 전 문의",
              "온라인에 표시된 정보와 현장 안내 비교",
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
        ================================================== */}
        <section className="container py-10 md:py-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방콕 바비18 마사지 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                바비18 마사지는 어디에 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                방콕 수쿰빗 소이 18에 위치한 것으로
                안내되고 있습니다. 아속과 프롬퐁
                사이의 수쿰빗 지역에서 접근할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                영업시간은 언제인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                최근 확인되는 외부 자료에서는
                12:00부터 00:00까지 운영되는 정보가
                확인됩니다. 다른 자료에는 11:00~01:00으로
                표시되기도 하므로 방문 전 확인하세요.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                마사지 가격은 얼마인가요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                공개 자료 기준 오일 마사지 30분
                ฿1,800, 60분 ฿2,300, 90분 ฿3,000으로
                안내된 가격이 있습니다. 
                누루 추가 금액은 따로 있으니 
                실제 가격은
                방문 전에 확인하는 것이 좋습니다.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                룸 사진을 볼 수 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                네. 이 페이지의 갤러리에서 현재 등록된
                바비18 마사지의 리셉션과 룸,
                내부 시설 사진을 확인할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
              <summary className="cursor-pointer font-bold">
                방문 전에 확인할 사항이 있나요?
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                영업시간, 정확한 위치, 당일 이용 가능
                여부와 최신 가격을 방문 전에 확인하는
                것을 권장합니다.
              </p>
            </details>
          </div>
        </section>

        {/* =================================================
            FINAL INFO
        ================================================== */}
        <section className="container py-14 md:py-16">
          <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 text-center md:p-12">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              BARBIE18 MASSAGE BANGKOK
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              방콕 바비18 마사지
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              수쿰빗 소이 18에 위치한 바비18 마사지의
              위치, 시설, 가격 및 방문 전 체크사항을
              확인해보세요.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://open.kakao.com/o/snvQKD4h"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black hover:bg-red-500"
              >
                문의 하기
              </a>

              <Link
                href="/bangkok/massage"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black hover:bg-white/10"
              >
                방콕 마사지 더보기
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /*
   * =====================================================
   * 일반 업소 페이지
   * =====================================================
   */

  if (!isKoreana) {
    return (
      <main>
        <PlaceBreadcrumbJsonLd
          cityName={cityName}
          citySlug={city}
          category={category}
          categoryName={categoryName}
          placeName={place.name}
          placeSlug={place.slug}
        />

        <section className="relative h-[520px] overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="container pb-12">
              <div className="text-xs font-black tracking-[.3em] text-red-500">
                {cityName} · {categoryName}
              </div>

              <h1 className="mt-3 text-4xl font-black md:text-6xl">
                {place.name}
              </h1>

              <div className="mt-4 text-sm text-zinc-300">
                ★ {place.rating} · 리뷰 {place.reviews}개 ·{" "}
                {place.district}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            ABOUT
          </div>

          <h2 className="mt-3 text-3xl font-black">
            업소 정보
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            {place.description}
          </p>
        </section>

        {place.gallery &&
          place.gallery.length > 0 && (
            <section className="container pb-20">
              <div className="text-xs font-black tracking-[.3em] text-red-500">
                GALLERY
              </div>

              <h2 className="mt-3 text-3xl font-black">
                룸 & 시설 사진
              </h2>

              <ImageGallery
                images={place.gallery}
                name={place.name}
              />
            </section>
          )}

        <section className="container pb-20">
          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
            <h2 className="text-2xl font-black">
              기본 정보
            </h2>

            <dl className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <dt className="text-sm text-zinc-500">
                  주소
                </dt>

                <dd className="mt-2">
                  {place.address}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-zinc-500">
                  영업시간
                </dt>

                <dd className="mt-2">
                  {place.hours}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-zinc-500">
                  평점
                </dt>

                <dd className="mt-2">
                  ★ {place.rating} ({place.reviews})
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    );
  }

  /*
   * =====================================================
   * 방콕 코리아나 상세페이지
   * 기존 페이지 유지
   * =====================================================
   */

  const koreanaImages = place.gallery ?? [];

  return (
    <main>
      <PlaceBreadcrumbJsonLd
        cityName="방콕"
        citySlug="bangkok"
        category="karaoke"
        categoryName="가라오케"
        placeName="방콕 코리아나 가라오케"
        placeSlug="bangkok-karaoke-01"
      />

      <KoreanaBusinessJsonLd />

      <section className="relative h-[560px] overflow-hidden">
        <img
          src={place.image}
          alt="방콕 코리아나 가라오케 메인"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-12">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              BANGKOK · KOREAN KTV
            </div>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              방콕 코리아나 가라오케
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">
              방콕 수쿰빗 소이 11에 위치한 한국식 KTV.
              코리아나 가라오케의 위치, 영업시간,
              룸과 시설 및 방문 정보를 확인하세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                ★ 4.4
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                Google 리뷰 57개
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                수쿰빗 소이 11
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                19:00 - 03:00
              </span>
            </div>
          </div>
        </div>
      </section>

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
              수쿰빗 소이 11
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="text-xs text-zinc-500">
              영업시간
            </div>

            <div className="mt-2 font-bold">
              19:00 - 03:00
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="text-xs text-zinc-500">
              방문 전 확인
            </div>

            <div className="mt-2 font-bold">
              운영시간 및 이용조건 확인
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="text-xs font-black tracking-[.3em] text-red-500">
          ABOUT KOREANA
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방콕 코리아나 가라오케
        </h2>

        <div className="mt-8 max-w-4xl space-y-5 text-[15px] leading-8 text-zinc-400">
          <p>
            방콕 코리아나 가라오케(CLUB Koreana)는
            방콕 수쿰빗 소이 11에 위치한 한국식 KTV입니다.
          </p>

          <p>
            나나와 아속 사이의 수쿰빗 소이 11은
            호텔과 레스토랑, 바와 야간 엔터테인먼트
            시설이 밀집한 지역입니다.
          </p>

          <p>
            코리아나는 프라이빗 룸을 이용하면서
            한국 노래와 가라오케를 즐길 수 있는
            형태로 소개되고 있습니다.
          </p>

          <p>
            처음 방문하는 경우에는 룸 이용료,
            음식 및 주류 가격, 이용시간과 추가비용을
            주문 전에 확인하는 것이 좋습니다.
          </p>
        </div>
      </section>

      {koreanaImages.length > 0 && (
        <section className="container py-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            코리아나 룸 & 시설 사진
          </h2>

          <ImageGallery
            images={koreanaImages}
            name="방콕 코리아나 가라오케"
          />
        </section>
      )}

      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            LOCATION
          </div>

          <h2 className="mt-3 text-3xl font-black">
            방콕 코리아나 가라오케 위치
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            코리아나 가라오케는 방콕 수쿰빗
            소이 11(Sukhumvit Soi 11)에 위치한 것으로
            안내되고 있습니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">
            <div className="text-sm text-zinc-500">
              주소
            </div>

            <div className="mt-2 text-lg font-bold">
              Soi Sukhumvit 11
            </div>

            <div className="mt-1 text-sm text-zinc-400">
              Khlong Toei Nuea, Watthana,
              Bangkok 10110, Thailand
            </div>
          </div>
        </div>
      </section>

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
              19:00 - 03:00
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              방문 당일 영업시간을 확인하는 것을
              권장합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              CONTACT
            </div>

            <h2 className="mt-3 text-3xl font-black">
              문의 및 방문
            </h2>

            <p className="mt-8 text-sm leading-7 text-zinc-500">
              주말이나 사람이 몰리는 시간대에는
              방문 전에 영업 여부와 이용 조건을
              확인하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-7 md:p-10">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            PRICE GUIDE
          </div>

          <h2 className="mt-3 text-3xl font-black">
            코리아나 가라오케 가격
          </h2>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-400">
            실제 이용금액은 룸, 이용시간, 음식,
            주류 및 기타 조건에 따라 달라질 수
            있으므로 방문 전에 확인하세요.
          </p>
        </div>
      </section>

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
            "추가시간 요금 확인",
            "서비스 비용 확인",
            "최종 결제금액 확인",
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

      <section className="container py-16">
        <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 text-center md:p-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            KOREANA KTV BANGKOK
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            방콕 코리아나 가라오케
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            수쿰빗 소이 11에 위치한 코리아나
            가라오케의 위치와 영업시간,
            이용조건을 확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black hover:bg-red-500"
            >
              문의하기
            </a>

            <Link
              href="/bangkok/karaoke"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black hover:bg-white/10"
            >
              방콕 가라오케 더보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

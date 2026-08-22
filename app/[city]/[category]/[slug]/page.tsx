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
  // 방콕 CUBE 마사지 전용 상세페이지
  // =========================================================
  if (slug === "bangkok-cube-massage") {
    return (
      <main className="min-h-screen bg-[#0b0b0d] text-white">
        {/* 상단 메인 이미지 */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-[3/2] overflow-hidden rounded-b-2xl">
              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover"
              />

              {/* 이미지 어두운 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* 상단 지역/카테고리 */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  방콕 · 마사지
                </span>
              </div>

              {/* 메인 제목 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="mb-2 text-sm font-medium text-white/70">
                  CUBE Nuru Massage
                </p>

                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                  방콕 큐브 마사지
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    {place.rating}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/40" />

                  <span>{place.district}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 본문 */}
        <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* 왼쪽 본문 */}
            <div className="min-w-0">
              {/* 소개 */}
              <section className="rounded-2xl border border-white/10 bg-[#111114] p-5 md:p-7">
                <div className="mb-5">
                  <span className="text-sm font-semibold text-red-400">
                    CUBE MASSAGE
                  </span>

                  <h2 className="mt-2 text-2xl font-bold">
                    방콕 큐브 마사지
                  </h2>
                </div>

                <p className="leading-8 text-white/65">
                  {place.description}
                </p>

                <p className="mt-4 leading-8 text-white/65">
                  매장 내부와 객실 분위기는 실제 사진을 통해 확인할 수
                  있으며, 방문 전 운영시간과 이용 가능 여부를 확인하는
                  것이 좋습니다.
                </p>
              </section>

              {/* 기본 정보 */}
              <section className="mt-6 rounded-2xl border border-white/10 bg-[#111114] p-5 md:p-7">
                <h2 className="text-xl font-bold">기본 정보</h2>

                <div className="mt-5 divide-y divide-white/10">
                  <div className="flex gap-4 py-4">
                    <div className="w-20 shrink-0 text-sm text-white/40">
                      위치
                    </div>
                    <div className="text-sm text-white/80">
                      {place.address}
                    </div>
                  </div>

                  <div className="flex gap-4 py-4">
                    <div className="w-20 shrink-0 text-sm text-white/40">
                      운영시간
                    </div>
                    <div className="text-sm text-white/80">
                      {place.hours}
                    </div>
                  </div>

                  <div className="flex gap-4 py-4">
                    <div className="w-20 shrink-0 text-sm text-white/40">
                      지역
                    </div>
                    <div className="text-sm text-white/80">
                      {place.district}
                    </div>
                  </div>

                  <div className="flex gap-4 py-4">
                    <div className="w-20 shrink-0 text-sm text-white/40">
                      한국어
                    </div>
                    <div className="text-sm text-white/80">
                      {place.koreanSupport === false
                        ? "한국어 응대 불가"
                        : "한국어 응대 가능"}
                    </div>
                  </div>
                </div>
              </section>

              {/* 매장 사진 */}
              {place.gallery && place.gallery.length > 0 && (
                <section className="mt-6 rounded-2xl border border-white/10 bg-[#111114] p-5 md:p-7">
                  <div className="mb-5">
                    <h2 className="text-xl font-bold">매장 사진</h2>
                    <p className="mt-1 text-sm text-white/40">
                      실제 매장과 룸 분위기를 사진으로 확인하세요.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {place.gallery.map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className="group relative aspect-[3/2] overflow-hidden rounded-xl bg-white/5"
                      >
                        <img
                          src={image}
                          alt={`방콕 큐브 마사지 ${index + 1}`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* 워터마크 */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <span className="rotate-[-12deg] text-center text-sm font-semibold tracking-wider text-white/25 md:text-base">
                            태국 눈탱이 방지위원회
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 이용 전 확인사항 */}
              <section className="mt-6 rounded-2xl border border-white/10 bg-[#111114] p-5 md:p-7">
                <h2 className="text-xl font-bold">방문 전 확인사항</h2>

                <div className="mt-5 space-y-3 text-sm leading-7 text-white/60">
                  <p>
                    • 방문 전 운영시간 및 이용 가능 여부를 확인해 주세요.
                  </p>
                  <p>
                    • 현장에서 안내되는 이용 조건과 비용을 이용 전에
                    확인하는 것이 좋습니다.
                  </p>
                  <p>
                    • 사진은 매장 분위기와 시설을 확인하기 위한 참고용으로
                    이용해 주세요.
                  </p>
                  <p>
                    • 매장 운영 상황에 따라 이용 가능한 시설이나 시간이
                    달라질 수 있습니다.
                  </p>
                </div>
              </section>
            </div>

            {/* 오른쪽 정보 카드 */}
            <aside className="lg:sticky lg:top-6 lg:h-fit">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111114]">
                {/* 카드 이미지 */}
                <div className="relative aspect-[3/2]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-lg font-bold">
                      CUBE Nuru Massage
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      {place.district}
                    </div>
                  </div>
                </div>

                {/* 카드 정보 */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      이용자 평점
                    </span>

                    <span className="font-semibold">
                      <span className="text-yellow-400">★</span>{" "}
                      {place.rating}
                    </span>
                  </div>

                  <div className="mt-4 rounded-xl bg-white/5 p-4">
                    <div className="text-xs text-white/40">
                      운영시간
                    </div>
                    <div className="mt-1 font-medium">
                      {place.hours}
                    </div>
                  </div>

                  {/* 문의하기 */}
                  <a
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center rounded-xl bg-red-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-400"
                  >
                    문의하기
                  </a>

                  <p className="mt-3 text-center text-xs leading-5 text-white/35">
                    문의하기를 누르면 사이트 내 문의 페이지로 이동합니다.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* 하단 */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-white/30">
            방콕 큐브 마사지 · CUBE Nuru Massage
          </div>
        </div>
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

        {/* =========================================
    바비18 마사지 가격표
========================================= */}
<section className="border-b border-white/10">
  <div className="container py-8 md:py-10">

    <div className="mb-6">
      <div className="text-[10px] font-black tracking-[.3em] red">
        PRICE MENU
      </div>

      <h2 className="mt-2 text-xl font-black md:text-2xl">
        바비18 마사지 가격표
      </h2>

      <p className="mt-2 text-xs text-zinc-500 md:text-sm">
        바비18 마사지에서 확인할 수 있는 마사지 코스 및 이용 요금입니다.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">

      {/* 오일 마사지 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-lg font-black">
          오일 마사지
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-sm text-zinc-300">
              30분 코스
            </span>
            <span className="font-black text-amber-400">
              1,800 B
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-sm text-zinc-300">
              60분 코스
            </span>
            <span className="font-black text-amber-400">
              2,300 B
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-300">
              90분 코스
            </span>
            <span className="font-black text-amber-400">
              3,000 B <span className="text-xs text-zinc-500">(2번)</span>
            </span>
          </div>

        </div>
      </div>


      {/* 누루 마사지 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-lg font-black">
          누루 마사지
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-sm text-zinc-300">
              60분 코스
            </span>
            <span className="font-black text-amber-400">
              3,000 B
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-300">
              90분 코스
            </span>
            <span className="font-black text-amber-400">
              3,700 B <span className="text-xs text-zinc-500">(2번)</span>
            </span>
          </div>

        </div>
      </div>


      {/* 누루 마사지 자쿠지 VIP */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-lg font-black">
          누루 마사지 <span className="text-amber-400">(자쿠지 VIP)</span>
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-sm text-zinc-300">
              60분 코스
            </span>
            <span className="font-black text-amber-400">
              3,500 B
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-300">
              90분 코스
            </span>
            <span className="font-black text-amber-400">
              4,000 B <span className="text-xs text-zinc-500">(2번)</span>
            </span>
          </div>

        </div>
      </div>


      {/* 누루 마사지 2:1 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-lg font-black">
          누루 마사지 <span className="text-amber-400">(2:1)</span>
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-sm text-zinc-300">
              60분 코스
            </span>
            <span className="font-black text-amber-400">
              5,500 B
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-300">
              90분 코스
            </span>
            <span className="font-black text-amber-400">
              6,500 B <span className="text-xs text-zinc-500">(2번)</span>
            </span>
          </div>

        </div>
      </div>

    </div>

    <p className="mt-5 text-[11px] leading-5 text-zinc-600">
      ※ 가격 및 코스 구성은 현장 상황에 따라 변경될 수 있으므로 방문 전 확인하시기 바랍니다.
    </p>

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

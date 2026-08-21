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
      title: "태국 가라오케 정보 | 태국 눈탱이 방지 위원회",
      description:
        "방콕과 파타야의 가라오케와 KTV 정보를 확인하세요.",
    };
  }

  const cityName = city === "bangkok" ? "방콕" : "파타야";
  const categoryName =
    category === "massage" ? "마사지" : "가라오케";

  const isKoreana =
    slug === "bangkok-karaoke-01";

  if (isKoreana) {
    return {
      title:
        "방콕 코리아나 가라오케 | 수쿰빗 소이11 KTV | 태국 눈탱이 방지 위원회",

      description:
        "방콕 코리아나 가라오케 위치, 영업시간, 룸과 시설, 이용요금 및 방문 정보를 확인하세요. 수쿰빗 소이 11에 위치한 한국식 KTV입니다.",

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
        "방콕 나나 가라오케",
        "방콕 아속 가라오케",
        "Koreana KTV Bangkok",
        "Koreana Karaoke Bangkok",
        "Club Koreana Bangkok",
      ],

      openGraph: {
        title:
          "방콕 코리아나 가라오케 | 수쿰빗 소이11 KTV",
        description:
          "방콕 코리아나 가라오케의 위치, 영업시간, 룸, 시설, 이용요금 및 방문 정보를 확인하세요.",
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
      streetAddress:
        "Soi Sukhumvit 11",
      addressLocality: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    telephone: "+66 82 223 2929",
    openingHours: "Mo-Su 19:00-03:00",
    priceRange: "฿฿",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "57",
      bestRating: "5",
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

  const cityName =
    city === "bangkok" ? "방콕" : "파타야";

  const categoryName =
    category === "massage"
      ? "마사지"
      : "가라오케";

  const isKoreana =
    slug === "bangkok-karaoke-01";

  /*
   * 일반 업소 페이지
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
   * ===============================
   * 방콕 코리아나 상세페이지
   * ===============================
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

      {/* =========================
          HERO
      ========================== */}
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
              룸과 시설, 이용요금 및 방문 정보를 확인하세요.
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

      {/* =========================
          QUICK INFO
      ========================== */}
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
              인기시간 필수 예약
            </div>
            <div className="mt-2 font-bold">
              8시부터 매우 혼잡
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
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
            나나와 아속 사이에 위치한 수쿰빗 소이 11은
            방콕에서 호텔과 레스토랑, 바와 야간
            엔터테인먼트 시설이 밀집한 지역으로,
            여행객이 저녁 시간에 이동하기 편리한 곳입니다.
          </p>

          <p>
            코리아나는 프라이빗 룸을 이용하면서
            한국 노래와 가라오케를 즐길 수 있는
            형태로 소개되고 있습니다.
          </p>

          <p>
            외부 공개 자료에서는 3층 규모의 공간과
            20개 이상의 프라이빗룸, 좋은 음향과
            현대적인 인테리어, 한국 음식 등을
            특징으로 소개하고 있습니다.
          </p>

          <p>
            처음 방문하는 경우에는 룸 이용료,
            음식 및 주류 가격, 이용시간과 추가비용을
            주문 전에 확인하는 것이 좋습니다.
          </p>
        </div>
      </section>

      {/* =========================
          GALLERY
      ========================== */}
      {koreanaImages.length > 0 && (
        <section className="container py-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            코리아나 룸 & 시설 사진
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            실제 업소의 룸과 시설 분위기를 사진으로
            확인해보세요. 사진을 클릭하면 크게 볼 수 있습니다.
          </p>

          <ImageGallery
            images={koreanaImages}
            name="방콕 코리아나 가라오케"
          />
        </section>
      )}

      {/* =========================
          LOCATION
      ========================== */}
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
              ชั้น 3-4 Soi Sukhumvit 11
            </div>

            <div className="mt-1 text-sm text-zinc-400">
              Khlong Toei Nuea, Watthana,
              Bangkok 10110, Thailand
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-500">
            수쿰빗 소이 11은 나나와 아속 지역 사이에
            위치해 있어 주변 호텔이나 관광지에서
            택시, Grab 또는 BTS를 이용해 접근하기
            편리한 지역입니다.
          </p>
        </div>
      </section>

      {/* =========================
          HOURS
      ========================== */}
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
              현재 확인되는 업체 정보 기준으로
              매일 19:00부터 다음날 03:00까지
              운영되는 것으로 안내되고 있습니다.
            </p>

            <p className="mt-4 text-xs leading-6 text-zinc-600">
              ※ 현지 업소의 영업시간은 변경될 수 있으므로
              방문 당일 확인을 권장합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
            <div className="text-xs font-black tracking-[.3em] text-red-500">
              CONTACT
            </div>

            <h2 className="mt-3 text-3xl font-black">
              문의 및 예약
            </h2>

            <div className="mt-8 text-2xl font-black">
              오른쪽 카카오톡, 텔레그램을 이용하여 문의해주세요!
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              주말이나 사람이 몰리는 첫타임 시간대에는
              방문 전에 카카오톡 및 텔레그램으로 미리 연락해
              영업 여부와 룸 이용 가능 여부를
              확인하는 것을 권장합니다.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PRICE
      ========================== */}
      <section className="container py-12">
        <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-7 md:p-10">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            PRICE GUIDE
          </div>

          <h2 className="mt-3 text-3xl font-black">
            코리아나 가라오케 가격
          </h2>

          <div className="mt-8 flex flex-wrap items-end gap-3">
            <span className="text-4xl font-black">
              약 600 - 1,000
            </span>

            <span className="pb-1 text-zinc-400">
              THB / 1인
            </span>
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-400">
            현재 공개된 외부 자료에서는 코리아나의
            이용 가격을 약 600~1,000바트/인 수준으로
            소개하고 있습니다.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400">
            다만 실제 결제금액은 룸, 이용시간,
            주문하는 음식과 주류 및 기타 이용조건에
            따라 달라질 수 있습니다.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="font-bold text-white">
              ⚠️ 방문 전 반드시 확인
            </div>

            <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-500">
              <li>• 룸 이용료 포함 여부</li>
              <li>• 음식 및 주류 가격</li>
              <li>• 이용시간 및 추가시간 요금</li>
              <li>• 서비스 비용 및 기타 추가비용</li>
              <li>• 최종 결제금액</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
          ROOMS & FACILITIES
      ========================== */}
      <section className="container py-12">
        <div className="text-xs font-black tracking-[.3em] text-red-500">
          ROOMS & FACILITIES
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          룸 및 시설
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="text-3xl">
              🎤
            </div>

            <h3 className="mt-4 font-black">
              한국식 KTV
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              한국 노래를 중심으로 가라오케를
              즐길 수 있는 KTV 형태의 공간입니다.
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
              외부 자료에서는 20개 이상의
              프라이빗룸을 갖춘 대형 KTV로
              소개되고 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="text-3xl">
              🔊
            </div>

            <h3 className="mt-4 font-black">
              음향 및 시설
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              공개된 리뷰와 소개 자료에서
              음향시설과 룸 분위기가 장점으로
              언급되고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          FOOD
      ========================== */}
      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FOOD & DRINK
          </div>

          <h2 className="mt-3 text-3xl font-black">
            음식 및 주류
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            코리아나는 가라오케뿐 아니라 음식과
            주류를 함께 이용할 수 있는 한국식
            KTV 형태로 소개되고 있습니다.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-zinc-400">
            공개된 리뷰에서는 음식의 신선도와
            한국식 메뉴에 대한 긍정적인 평가가
            확인됩니다.
          </p>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            ※ 메뉴와 가격은 방문 시점에 따라
            변경될 수 있으므로 주문 전에 확인하세요.
          </p>
        </div>
      </section>

      {/* =========================
          GOOD TO KNOW
      ========================== */}
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
            "주류 및 음식 가격 확인",
            "추가시간 요금 확인",
            "서비스 비용 확인",
            "최종 결제금액 확인",
            "주말 및 피크타임 예약 권장",
            "원하는 룸이 있다면 사전 문의",
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

      {/* =========================
          FAQ
      ========================== */}
      <section className="container py-12">
        <div className="text-xs font-black tracking-[.3em] text-red-500">
          FAQ
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방콕 코리아나 가라오케 자주 묻는 질문
        </h2>

        <div className="mt-8 space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-bold">
              방콕 코리아나 가라오케는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              방콕 수쿰빗 소이 11에 위치한 것으로
              안내되고 있습니다. 나나와 아속 지역에서
              접근하기 편리한 위치입니다.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-bold">
              코리아나 가라오케 영업시간은 언제인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 확인되는 업체 정보 기준으로
              매일 19:00부터 03:00까지 운영되는
              것으로 안내되고 있습니다.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-bold">
              코리아나 가라오케 가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              공개된 외부 자료에서는 약 600~1,000바트/인
              수준으로 소개되고 있습니다. 다만 실제
              결제금액은 룸과 이용시간, 음식 및 주류 등에
              따라 달라질 수 있으므로 방문 전에
              확인하는 것이 좋습니다.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-bold">
              프라이빗룸이 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              네. 외부 자료에서는 20개 이상의
              프라이빗룸을 갖춘 대형 KTV로
              소개되고 있습니다.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-bold">
              문의는 어떻게 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              업소 이용 및 예약에 관한 문의는 문의하기를 통해
              카카오톡 또는 텔레그램으로 확인하실 수 있습니다.
              방문 전 영업 여부와 이용 조건을 미리 확인하는 것을 권장합니다!
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-bold">
              예약을 해야 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              피크타임이나 주말에는 대기할 수 있다는
              외부 정보가 있어, 여러 명이 방문하거나
              특정 룸을 원하는 경우 사전 문의를
              권장합니다.
            </p>
          </details>
        </div>
      </section>

      {/* =========================
          FINAL INFO
      ========================== */}
      <section className="container py-16">
        <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 text-center md:p-12">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            KOREANA KTV BANGKOK
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            방콕 코리아나 가라오케
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            수쿰빗 소이 11에서 한국식 KTV와
            프라이빗룸을 찾는다면 방문 전 위치,
            영업시간, 이용요금과 룸 조건을
            확인해보세요.
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

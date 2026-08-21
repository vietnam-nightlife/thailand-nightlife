import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { places, getPlace } from "@/lib/data";

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
      title: "방콕 가라오케 | 태국 밤문화 정보",
      description:
        "방콕 가라오케와 KTV의 위치, 시설, 이용 정보 및 문의 방법을 확인하세요.",
    };
  }

  const cityName = city === "bangkok" ? "방콕" : "파타야";
  const categoryName =
    category === "massage" ? "마사지" : "가라오케";

  const isKoreana = slug === "bangkok-karaoke-01";

  const title = isKoreana
    ? "방콕 코리아나 가라오케 | 수쿰빗 소이 11 KTV"
    : `${place.name} | ${cityName} ${categoryName}`;

  const description = isKoreana
    ? "방콕 코리아나 가라오케 정보를 확인하세요. 수쿰빗 소이 11 위치, 한국식 KTV, 프라이빗 룸, 시설 및 방문 전 문의 방법을 안내합니다."
    : `${place.name}의 위치, 시설, 영업정보 및 이용 안내를 확인해보세요.`;

  return {
    title,
    description,

    keywords: [
      "방콕 가라오케",
      "방콕 KTV",
      "방콕 코리아나 가라오케",
      "코리아나 가라오케",
      "방콕 한국식 가라오케",
      "방콕 수쿰빗 가라오케",
      "수쿰빗 소이11 가라오케",
      "방콕 노래방",
      "방콕 KTV 추천",
    ],

    alternates: {
      canonical: `/${city}/${category}/${slug}`,
    },

    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: place.image,
          alt: place.name,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================================================
   Breadcrumb JSON-LD
========================================================= */

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

/* =========================================================
   LocalBusiness JSON-LD
========================================================= */

function PlaceBusinessJsonLd({
  place,
}: {
  place: {
    name: string;
    description: string;
    address: string;
    image: string;
    rating: number;
    reviews: number;
  };
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: place.name,

    description: place.description,

    image: place.image,

    address: {
      "@type": "PostalAddress",
      streetAddress: place.address,
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: place.rating,
      reviewCount: place.reviews,
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

/* =========================================================
   FAQ JSON-LD
========================================================= */

function PlaceFaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "방콕 코리아나 가라오케는 어디에 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "방콕 수쿰빗 소이 11 지역에 위치한 것으로 안내되고 있습니다. 방문 전 정확한 위치와 이용 가능 여부를 문의하는 것을 권장합니다.",
        },
      },

      {
        "@type": "Question",
        name: "코리아나 가라오케는 어떤 곳인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "방콕에서 한국식 KTV 시스템을 이용할 수 있는 가라오케로 소개되고 있으며 다양한 크기의 프라이빗 룸과 노래방 시설을 갖춘 것으로 안내되고 있습니다.",
        },
      },

      {
        "@type": "Question",
        name: "방문 전에 예약해야 하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "주말이나 방문객이 많은 시간에는 룸 이용 가능 여부가 달라질 수 있으므로 방문 전에 문의하는 것을 권장합니다.",
        },
      },

      {
        "@type": "Question",
        name: "문의 및 예약은 어떻게 하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "전화보다는 카카오톡 또는 텔레그램 등 온라인 상담 채널을 통해 방문 날짜, 시간, 인원 및 이용 조건을 문의하는 방식이 편리합니다.",
        },
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
   페이지
========================================================= */

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

  return (
    <main className="bg-black text-white">

      {/* =====================================================
          SEO STRUCTURED DATA
      ====================================================== */}

      <PlaceBreadcrumbJsonLd
        cityName={cityName}
        citySlug={city}
        category={category}
        categoryName={categoryName}
        placeName={place.name}
        placeSlug={place.slug}
      />

      <PlaceBusinessJsonLd
        place={place}
      />

      {isKoreana && <PlaceFaqJsonLd />}

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative h-[520px] overflow-hidden">

        <img
          src={place.image}
          alt={`${place.name} 메인 이미지`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-12">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              {isKoreana
                ? "KOREANA KTV BANGKOK"
                : `${cityName} · ${categoryName}`}
            </div>

            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              {place.name}
            </h1>

            <div className="mt-4 text-sm text-zinc-300">
              {place.district}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="container py-16">

        <div className="text-xs font-black tracking-[.3em] text-red-500">
          ABOUT
        </div>

        <h2 className="mt-3 text-3xl font-black">
          {isKoreana
            ? "방콕 코리아나 가라오케"
            : "업소 정보"}
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          {isKoreana
            ? "방콕 수쿰빗 소이 11에서 한국식 KTV를 찾는 여행객들이 확인할 수 있는 가라오케 정보입니다. 다양한 크기의 프라이빗 룸과 한국식 노래방 시스템을 이용할 수 있는 곳으로 소개되고 있으며, 방문 전 위치와 이용 가능 여부를 확인하는 것을 권장합니다."
            : place.description}
        </p>

      </section>

      {/* =====================================================
          KOREANA FEATURES
      ====================================================== */}

      {isKoreana && (
        <section className="container pb-20">

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7">

              <div className="text-sm font-black text-red-500">
                LOCATION
              </div>

              <h3 className="mt-3 text-xl font-black">
                수쿰빗 소이 11
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                방콕 수쿰빗 소이 11 지역에 위치해
                접근성이 좋은 것으로 알려져 있습니다.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7">

              <div className="text-sm font-black text-red-500">
                KTV
              </div>

              <h3 className="mt-3 text-xl font-black">
                한국식 KTV
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                한국 노래를 즐길 수 있는 KTV 시스템과
                프라이빗 룸을 중심으로 운영되는 곳으로
                소개되고 있습니다.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7">

              <div className="text-sm font-black text-red-500">
                PRIVATE ROOM
              </div>

              <h3 className="mt-3 text-xl font-black">
                프라이빗 룸
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                인원과 이용 목적에 따라 룸 조건이
                달라질 수 있으므로 방문 전 문의를
                권장합니다.
              </p>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          GALLERY
      ====================================================== */}

      {place.gallery &&
        place.gallery.length > 0 && (

          <section className="container pb-20">

            <div className="text-xs font-black tracking-[.3em] text-red-500">
              GALLERY
            </div>

            <h2 className="mt-3 text-3xl font-black">
              룸 & 시설 사진
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              실제 업소의 룸과 시설을 사진으로 확인해보세요.
              사진을 클릭하면 크게 볼 수 있습니다.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {place.gallery.map((image, index) => (

                <a
                  key={`${image}-${index}`}
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
                >

                  <div className="relative">

                    <img
                      src={image}
                      alt={`${place.name} 룸 및 시설 사진 ${index + 1}`}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">

                      <span className="rounded-full bg-black/70 px-5 py-3 text-sm font-black opacity-0 transition group-hover:opacity-100">
                        크게 보기
                      </span>

                    </div>

                  </div>

                </a>

              ))}

            </div>

          </section>
        )}

      {/* =====================================================
          BASIC INFORMATION
      ====================================================== */}

      <section className="container pb-20">

        <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            INFORMATION
          </div>

          <h2 className="mt-3 text-3xl font-black">
            기본 정보
          </h2>

          <dl className="mt-8 grid gap-8 md:grid-cols-3">

            <div>

              <dt className="text-sm text-zinc-600">
                위치
              </dt>

              <dd className="mt-2 text-zinc-300">
                {place.address}
              </dd>

            </div>

            <div>

              <dt className="text-sm text-zinc-600">
                지역
              </dt>

              <dd className="mt-2 text-zinc-300">
                {place.district}
              </dd>

            </div>

            <div>

              <dt className="text-sm text-zinc-600">
                이용 안내
              </dt>

              <dd className="mt-2 text-zinc-300">
                방문 전 문의 권장
              </dd>

            </div>

          </dl>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section className="container pb-20">

        <div className="rounded-3xl border border-red-900/60 bg-[#100606] p-8 md:p-14">

          <div className="text-center">

            <div className="text-xs font-black tracking-[.35em] text-red-500">
              CONTACT
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              문의 및 예약
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
              방문 전 위치, 이용 가능 여부, 룸 조건 및
              이용 관련 문의가 필요하다면
              온라인 상담을 이용해주세요.
            </p>

            <p className="mx-auto mt-3 max-w-3xl leading-8 text-zinc-500">
              문의 시 방문 예정 날짜와 시간,
              인원을 함께 알려주시면 보다 빠른
              상담이 가능합니다.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              {/* =================================================
                  카카오톡
                  실제 오픈채팅 링크가 있으면 아래 href 교체
              ================================================== */}

              <a
                href="https://open.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-yellow-400 px-8 py-4 text-center font-black text-black transition hover:scale-[1.02] hover:opacity-90"
              >
                카카오톡 문의하기
              </a>

              {/* =================================================
                  텔레그램
                  실제 텔레그램 상담 주소가 있으면 아래 href 교체
              ================================================== */}

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center font-black transition hover:bg-white/10"
              >
                텔레그램 문의하기
              </a>

            </div>

            <p className="mt-6 text-xs text-zinc-600">
              영업시간 및 이용 조건은 변경될 수 있으므로
              방문 전 문의를 권장합니다.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      {isKoreana && (

        <section className="container pb-20">

          <div className="text-xs font-black tracking-[.3em] text-red-500">
            FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black">
            자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-4">

            <details className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-black">
                방콕 코리아나 가라오케는 어디에 있나요?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                방콕 수쿰빗 소이 11 지역에 위치한 것으로
                안내되고 있습니다. 방문 전 정확한 위치와
                이용 가능 여부를 문의하는 것을 권장합니다.
              </p>

            </details>

            <details className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-black">
                어떤 시설을 이용할 수 있나요?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                한국식 KTV 시스템과 프라이빗 룸을 중심으로
                소개되고 있습니다. 룸 크기와 이용 조건은
                방문 시점에 따라 달라질 수 있습니다.
              </p>

            </details>

            <details className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-black">
                방문 전에 예약해야 하나요?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                주말이나 방문객이 많은 시간에는 룸 이용
                가능 여부가 달라질 수 있으므로 방문 전에
                문의하는 것을 권장합니다.
              </p>

            </details>

            <details className="rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer font-black">
                문의 및 예약은 어떻게 하나요?
              </summary>

              <p className="mt-4 leading-7 text-zinc-400">
                전화보다는 카카오톡 또는 텔레그램을 통해
                문의하는 방식으로 안내하고 있습니다.
                방문 예정 날짜, 시간, 인원 및 궁금한
                사항을 함께 남겨주세요.
              </p>

            </details>

          </div>

        </section>

      )}

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="container pb-24">

        <div className="rounded-3xl border border-red-900/70 bg-[#0c0303] px-6 py-14 text-center md:px-10">

          <div className="text-xs font-black tracking-[.35em] text-red-500">
            KOREANA KTV BANGKOK
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            방콕 코리아나 가라오케
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            수쿰빗 소이 11에서 한국식 KTV와
            프라이빗 룸을 찾으신다면 방문 전
            위치와 이용 가능 여부를 확인해보세요.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://open.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-black text-black hover:opacity-90"
            >
              카카오톡 문의하기
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-black hover:bg-white/10"
            >
              텔레그램 문의하기
            </a>

            <Link
              href="/bangkok/karaoke"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-black hover:bg-white/10"
            >
              방콕 가라오케 더보기
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

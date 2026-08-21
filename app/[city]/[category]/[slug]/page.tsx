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
      title: "태국 유흥 가이드 | 태국 눈탱이 방지 위원회",
      description:
        "태국 방콕과 파타야의 마사지와 가라오케 업소 정보를 확인하세요.",
    };
  }

  const cityName = city === "bangkok" ? "방콕" : "파타야";

  const categoryName =
    category === "massage" ? "마사지" : "가라오케";

  return {
    title: `${place.name} | ${cityName} ${categoryName} | 태국 눈탱이 방지 위원회`,

    description: `${place.name}의 위치, 가격, 영업시간, 평점 및 업소 정보를 확인해보세요.`,

    alternates: {
      canonical: `/${city}/${category}/${slug}`,
    },

    openGraph: {
      title: `${place.name} | ${cityName} ${categoryName}`,

      description: `${place.name}의 위치, 가격, 영업시간 및 업소 정보를 확인하세요.`,

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
   업소 상세 페이지
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
    category === "massage" ? "마사지" : "가라오케";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          SEO Breadcrumb
      ===================================================== */}

      <PlaceBreadcrumbJsonLd
        cityName={cityName}
        citySlug={city}
        category={category}
        categoryName={categoryName}
        placeName={place.name}
        placeSlug={place.slug}
      />

      {/* =====================================================
          메인 이미지
      ===================================================== */}

      <section className="relative h-[520px] overflow-hidden">
        <img
          src={place.image}
          alt={`${place.name} 메인 이미지`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-5 pb-12 md:px-8">
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

      {/* =====================================================
          업소 설명
      ===================================================== */}

      <section className="container mx-auto px-5 py-16 md:px-8">
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

      {/* =====================================================
          갤러리
      ===================================================== */}

      {place.gallery && place.gallery.length > 0 && (
        <section className="container mx-auto px-5 pb-20 md:px-8">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black">
            룸 & 시설 사진
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            실제 업소의 룸과 시설을 사진으로 확인해보세요.
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
                <img
                  src={image}
                  alt={`${place.name} 룸 및 시설 사진 ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          기본 정보
      ===================================================== */}

      <section className="container mx-auto px-5 pb-20 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
          <div className="text-sm font-black">
            기본 정보
          </div>

          <dl className="mt-6 grid gap-6 text-sm md:grid-cols-3">
            <div>
              <dt className="text-zinc-600">
                주소
              </dt>

              <dd className="mt-2 text-zinc-300">
                {place.address}
              </dd>
            </div>

            <div>
              <dt className="text-zinc-600">
                영업시간
              </dt>

              <dd className="mt-2 text-zinc-300">
                {place.hours}
              </dd>
            </div>

            <div>
              <dt className="text-zinc-600">
                평점
              </dt>

              <dd className="mt-2 text-zinc-300">
                ★ {place.rating} ({place.reviews})
              </dd>
            </div>
          </dl>

          <Link
            href={`/${city}/${category}`}
            className="mt-8 block rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-black transition hover:bg-white/10"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </section>

      {/* =====================================================
          CONTACT
          전화번호 제거
          문의하기로 변경
      ===================================================== */}

      <section className="container mx-auto px-5 pb-20 md:px-8">
        <div className="rounded-3xl border border-red-900/60 bg-[#0d0505] p-8 text-center md:p-14">

          <div className="text-xs font-black tracking-[.35em] text-red-500">
            CONTACT
          </div>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            문의 및 예약
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            {place.name} 이용 및 예약에 대해 궁금한 사항이
            있으신 경우 문의하기를 이용해주세요.
            카카오톡 또는 텔레그램을 통해 자세한 안내를
            받을 수 있습니다.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="rounded-xl bg-red-600 px-8 py-4 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </Link>

            <Link
              href={`/${city}/${category}`}
              className="rounded-xl border border-white/10 bg-[#151515] px-8 py-4 text-sm font-black transition hover:bg-[#222]"
            >
              {cityName} {categoryName} 더보기
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="container mx-auto px-5 pb-24 md:px-8">

        <div className="text-xs font-black tracking-[.3em] text-red-500">
          FAQ
        </div>

        <h2 className="mt-3 text-3xl font-black">
          자주 묻는 질문
        </h2>

        <div className="mt-8 space-y-4">

          <details className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-black">
              ▼ 문의는 어떻게 하나요?
            </summary>

            <p className="mt-5 leading-8 text-zinc-400">
              업소 이용 및 예약에 관한 문의는 문의하기를
              통해 확인하실 수 있습니다. 카카오톡 또는
              텔레그램을 이용하여 자세한 이용 안내를
              확인해주세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-black">
              ▼ 방문 전에 무엇을 확인해야 하나요?
            </summary>

            <p className="mt-5 leading-8 text-zinc-400">
              방문 전 영업 여부와 이용 시간, 가격 및
              이용 조건 등을 미리 확인하는 것을 권장합니다.
              실제 운영 상황에 따라 정보가 달라질 수 있으므로
              방문 전에 문의를 통해 최신 정보를 확인해주세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-black">
              ▼ 업소 정보는 항상 동일한가요?
            </summary>

            <p className="mt-5 leading-8 text-zinc-400">
              업소의 영업시간, 가격, 서비스 및 이용 조건은
              변경될 수 있습니다. 본 페이지의 정보와 실제
              현장 상황이 다를 수 있으므로 방문 전 최신
              정보를 확인하는 것을 권장합니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <summary className="cursor-pointer font-black">
              ▼ 룸과 시설 사진을 볼 수 있나요?
            </summary>

            <p className="mt-5 leading-8 text-zinc-400">
              페이지에 등록된 경우 GALLERY 영역에서
              업소의 룸과 시설 사진을 확인할 수 있습니다.
              사진을 클릭하면 큰 화면으로 확인할 수 있습니다.
            </p>
          </details>

        </div>
      </section>

    </main>
  );
}

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
      title: "태국 유흥 가이드",
      description: "태국 방콕과 파타야의 업소 정보를 확인하세요.",
    };
  }

  const cityName = city === "bangkok" ? "방콕" : "파타야";
  const categoryName =
    category === "massage" ? "마사지" : "가라오케";

  return {
    title: `${place.name} | ${cityName} ${categoryName}`,
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

function BreadcrumbJsonLd({
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

function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="text-xs font-bold tracking-[0.25em] text-red-500">
        {label}
      </div>

      <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
        {title}
      </h2>
    </div>
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
    category === "massage" ? "마사지" : "가라오케";

  return (
    <main className="min-h-screen bg-black text-white">
      <BreadcrumbJsonLd
        cityName={cityName}
        citySlug={city}
        category={category}
        categoryName={categoryName}
        placeName={place.name}
        placeSlug={place.slug}
      />

      {/* =========================================
          BREADCRUMB
      ========================================== */}
      <div className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-6xl px-5 py-4 text-xs text-zinc-500">
          <Link href="/" className="hover:text-white">
            홈
          </Link>

          <span className="mx-2">/</span>

          <Link
            href={`/${city}`}
            className="hover:text-white"
          >
            {cityName}
          </Link>

          <span className="mx-2">/</span>

          <Link
            href={`/${city}/${category}`}
            className="hover:text-white"
          >
            {categoryName}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-zinc-300">
            {place.name}
          </span>
        </div>
      </div>

      {/* =========================================
          HERO
      ========================================== */}
      <section className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-6xl px-5 py-8 md:py-12">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-red-600 px-3 py-1 font-bold">
                {categoryName}
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-400">
                {cityName}
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-400">
                {place.district}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              {place.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="font-bold text-yellow-400">
                ★ {place.rating}
              </span>

              <span className="text-zinc-400">
                리뷰 {place.reviews}개
              </span>

              <span className="text-zinc-500">
                {place.district}
              </span>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img
              src={place.image}
              alt={place.name}
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
          </div>

          {/* 갤러리 */}
          {place.gallery && place.gallery.length > 0 && (
  <ImageGallery
    images={place.gallery.slice(0, 6)}
    name={place.name}
  />
)}
        </div>
      </section>

      {/* =========================================
          QUICK INFO
      ========================================== */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#111] md:grid-cols-4">
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
              <div className="text-xs text-zinc-500">
                위치
              </div>

              <div className="mt-2 font-bold">
                {place.district}
              </div>
            </div>

            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
              <div className="text-xs text-zinc-500">
                영업시간
              </div>

              <div className="mt-2 font-bold">
                {place.hours}
              </div>
            </div>

            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
              <div className="text-xs text-zinc-500">
                평점
              </div>

              <div className="mt-2 font-bold text-yellow-400">
                ★ {place.rating}
              </div>
            </div>

            <div className="p-6">
              <div className="text-xs text-zinc-500">
                리뷰
              </div>

              <div className="mt-2 font-bold">
                {place.reviews}개
              </div>
            </div>
          </div>

          {/* 문의 버튼 */}
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <a
              href="#contact"
              className="rounded-xl bg-red-600 px-5 py-4 text-center text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </a>

            <a
              href="#location"
              className="rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-center text-sm font-black transition hover:bg-white/10"
            >
              위치 확인하기
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT
      ========================================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          label="ABOUT"
          title="업소 정보"
        />

        <div className="mt-7 max-w-4xl text-sm leading-8 text-zinc-400 md:text-base">
          {place.description}
        </div>
      </section>

      {/* =========================================
          CHECKLIST
      ========================================== */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            label="CHECK LIST"
            title="예약 전 체크하세요"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "방문 전 가격과 포함사항을 확인하세요.",
              "희망 방문 시간을 미리 확인하세요.",
              "룸 타입과 이용 조건을 확인하세요.",
              "현장 방문 전 위치를 다시 확인하세요.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111] p-5 text-sm text-zinc-300"
              >
                <span className="mr-3 text-red-500">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PRICE
      ========================================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          label="PRICE"
          title="가격 안내"
        />

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
          <div className="text-sm leading-8 text-zinc-400">
            이곳에 실제 가격표와 이용 요금을 입력하세요.
            <br />
            룸 가격, 시간, 인원, 주류, 추가 비용 등의
            정보를 넣을 수 있습니다.
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/5 p-4 text-sm font-bold">
              <div>항목</div>
              <div>가격</div>
            </div>

            <div className="grid grid-cols-2 border-b border-white/10 p-4 text-sm text-zinc-400">
              <div>기본 이용</div>
              <div>내용 입력</div>
            </div>

            <div className="grid grid-cols-2 p-4 text-sm text-zinc-400">
              <div>추가 비용</div>
              <div>내용 입력</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROS / CAUTIONS
      ========================================== */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            label="GUIDE"
            title="장점 & 주의사항"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-lg font-black">
                장점
              </div>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-zinc-400">
                <li>• 장점을 입력하세요.</li>
                <li>• 시설 및 분위기를 입력하세요.</li>
                <li>• 추천 포인트를 입력하세요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-lg font-black">
                주의사항
              </div>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-zinc-400">
                <li>• 이용 전 확인사항을 입력하세요.</li>
                <li>• 추가 비용 여부를 입력하세요.</li>
                <li>• 예약 관련 주의사항을 입력하세요.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          HOURS
      ========================================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          label="HOURS"
          title="영업시간"
        />

        <div className="mt-7 rounded-2xl border border-white/10 bg-[#111] p-7">
          <div className="text-sm text-zinc-400">
            영업시간
          </div>

          <div className="mt-3 text-xl font-black">
            {place.hours}
          </div>
        </div>
      </section>

      {/* =========================================
          LOCATION
      ========================================== */}
      <section
        id="location"
        className="bg-[#080808]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            label="LOCATION"
            title="위치"
          />

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <div className="p-7">
              <div className="text-xs text-zinc-500">
                주소
              </div>

              <div className="mt-3 text-lg font-bold">
                {place.address}
              </div>
            </div>

            <div className="flex h-72 items-center justify-center border-t border-white/10 bg-[#151515] text-sm text-zinc-600">
              지도 영역
              <br />
              추후 Google Maps / 지도 삽입
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DETAIL
      ========================================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          label="DETAIL"
          title="상세 안내"
        />

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
          <div className="max-w-4xl text-sm leading-8 text-zinc-400">
            이곳에 업소의 상세한 설명을 입력하세요.
            <br />
            <br />
            업소 분위기, 시설, 룸 구성, 이용 방법,
            추천 대상, 방문 팁 등을 자유롭게 작성할 수
            있습니다.
            <br />
            <br />
            나중에 이 부분을 실제 업소 정보로 교체하면
            됩니다.
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ
      ========================================== */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            label="FAQ"
            title="자주 묻는 질문"
          />

          <div className="mt-8 space-y-3">
            {[
              "가격은 어떻게 확인하나요?",
              "예약이 필요한가요?",
              "영업시간은 어떻게 되나요?",
              "위치는 어디인가요?",
            ].map((question) => (
              <details
                key={question}
                className="group rounded-2xl border border-white/10 bg-[#111] p-5"
              >
                <summary className="cursor-pointer list-none font-bold">
                  {question}
                </summary>

                <div className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-zinc-400">
                  이곳에 질문에 대한 답변을 입력하세요.
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          REVIEWS
      ========================================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          label="REVIEWS"
          title="이용자 후기"
        />

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">
          <div className="flex flex-wrap items-end gap-4">
            <div className="text-4xl font-black text-yellow-400">
              ★ {place.rating}
            </div>

            <div className="text-sm text-zinc-500">
              총 {place.reviews}개의 후기
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-sm text-zinc-500">
            실제 이용자 후기를 이곳에 추가하세요.
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT
      ========================================== */}
      <section
        id="contact"
        className="bg-[#080808]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center md:p-12">
            <div className="text-xs font-bold tracking-[0.25em] text-red-500">
              CONTACT
            </div>

            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              문의 및 예약
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              예약 방법과 문의 채널을 이곳에
              입력하세요.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button className="rounded-xl bg-red-600 px-8 py-4 text-sm font-black hover:bg-red-500">
                카카오톡 문의
              </button>

              <button className="rounded-xl border border-white/10 bg-[#111] px-8 py-4 text-sm font-black hover:bg-white/10">
                텔레그램 문의
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BACK TO LIST
      ========================================== */}
      <div className="mx-auto max-w-6xl px-5 py-12">
        <Link
          href={`/${city}/${category}`}
          className="block rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-center text-sm font-bold transition hover:bg-white/10"
        >
          ← {cityName} {categoryName} 목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
}

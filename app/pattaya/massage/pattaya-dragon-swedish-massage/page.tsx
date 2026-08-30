import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const GITHUB_BASE =
  "https://github.com/vietnam-nightlife/thailand-nightlife/raw/refs/heads/main";

const DRAGON_RAW =
  `${GITHUB_BASE}/app/pattaya/message/pattaya-dragon-swedish-massage`;

const dragonImage = (fileName: string) =>
  `${DRAGON_RAW}/${encodeURIComponent(fileName)}?v=2`;

const DRAGON_SLUG = "pattaya-dragon-swedish-massage";

const dragonMainImage = dragonImage("파타야 드래곤 스웨디시 메인.webp");

const dragonImages = [
  dragonImage("파타야 드래곤 스웨디시 외관.webp"),
  dragonImage("파타야 드래곤 스웨디시 리셉션.webp"),
  dragonImage("파타야 드래곤 스웨디시 휴게실.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸1.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸2.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸3.webp"),
];

const dragonPrice = [
  ["A 코스 · 60분", "마사지 + 센슈얼 + 핸드", "2,500"],
  ["B 코스 · 60분", "마사지 + 센슈얼 + @", "3,500"],
  ["C 코스 · 90분", "전문 오일마사지 60분 + 센슈얼 + 핸드", "3,000"],
  ["D 코스 · 90분", "전문 오일마사지 60분 + 센슈얼 + @", "4,000"],
] as const;

const page = {
  slug: DRAGON_SLUG,
  name: "파타야 드래곤 스웨디시",
  english: "DRAGON SWEDISH & SENSUAL MASSAGE",
  rating: "4.5",
  reviews: "0",
  hours: "11:00 - 00:00",
  address: "Pattaya 3rd Road, Pattaya, Chon Buri, Thailand",
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
};

const getGoogleMapUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const getGoogleMapLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

export const metadata: Metadata = {
  title: `${page.name} | Pattaya Massage`,
  description:
    `${page.name} 위치, 영업시간, 마사지 코스와 가격정보를 한눈에 확인하세요.`,
  keywords: [
    page.name,
    "파타야 드래곤 스웨디시",
    "파타야 스웨디시",
    "파타야 마사지",
    "파타야 마사지 추천",
    "파타야 마사지샵",
    "Pattaya Massage",
    "Dragon Swedish Massage",
  ],
  alternates: {
    canonical: `/pattaya/massage/${DRAGON_SLUG}`,
  },
  openGraph: {
    title: page.name,
    description:
      `${page.name} 위치, 영업시간, 마사지 코스와 가격정보`,
    type: "website",
    url: `/pattaya/massage/${DRAGON_SLUG}`,
    images: [
      {
        url: page.mainImage,
        alt: page.name,
      },
    ],
  },
};

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
        name: page.name,
        item: `/pattaya/massage/${DRAGON_SLUG}`,
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

export default function PattayaDragonSwedishMassagePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">
      <BreadcrumbJsonLd />

      {/* =====================================================
          1. HERO
      ===================================================== */}
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
                파타야
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                {page.hours}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. PHOTO
      ===================================================== */}
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

      {/* =====================================================
          3. PRICE
      ===================================================== */}
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

        <div className="mx-auto mt-7 max-w-4xl rounded-2xl border border-white/10 bg-[#111114] p-5 text-sm leading-7 text-zinc-400">
          전문 마사지사 1명 + 센슈얼 아가씨 1명
          <br />
          릴레이 시스템
        </div>

        <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-6 text-zinc-600">
          ※ 가격 및 코스 내용은 매장 사정에 따라 변경될 수 있으므로
          방문 전 최신 정보를 확인해주세요.
        </p>
      </section>

      {/* =====================================================
          4. BASIC INFO
      ===================================================== */}
      <section className="container py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["업종", "마사지"],
            ["위치", "파타야"],
            ["영업시간", page.hours],
            ["평점", `★ ${page.rating}`],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#111114] p-6"
            >
              <p className="text-xs text-zinc-500">{label}</p>

              <p className="mt-2 font-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          5. ABOUT
      ===================================================== */}
      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          {page.aboutTitle}
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          {page.name}
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">
          {page.aboutText.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      {/* =====================================================
          6. LOCATION + GOOGLE MAP
      ===================================================== */}
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
            <p className="text-xs text-zinc-500">주소</p>

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

      {/* =====================================================
          7. OPENING HOURS
      ===================================================== */}
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

      {/* =====================================================
          8. FACILITIES
      ===================================================== */}
      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          {page.facilityTitle}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["💆", "마사지", "다양한 마사지 코스를 확인할 수 있습니다."],
            ["🕐", "영업시간", `현재 안내된 영업시간은 ${page.hours}입니다.`],
            ["📍", "파타야", "파타야 현지 마사지 업소입니다."],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-[#111114] p-7"
            >
              <div className="text-3xl">{icon}</div>

              <h3 className="mt-4 text-xl font-black">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          9. TRANSPORT
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

      {/* =====================================================
          10. GOOD TO KNOW
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
              <span className="mr-3 text-red-500">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          11. FAQ
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
              이용 코스와 가격은 어떻게 되나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              A, B 코스는 60분이며 C, D 코스는 90분 구성입니다.
              자세한 가격은 위 가격표를 확인해주세요.
            </p>
          </details>
        </div>
      </section>

      {/* =====================================================
          12. CTA
      ===================================================== */}
      <section className="container py-16 md:py-24">
        <div className="rounded-3xl border border-[#8d6a32]/40 bg-gradient-to-b from-[#17130d] to-[#0d0d0d] p-8 text-center md:p-14">
          <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
            DRAGON SWEDISH
          </p>

          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            {page.name}
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

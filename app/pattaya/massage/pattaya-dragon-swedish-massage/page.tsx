import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

const DRAGON_RAW =
  `${GITHUB_RAW}/app/pattaya/message/pattaya-dragon-swedish-massage`;

const dragonImage = (fileName: string) =>
  `${DRAGON_RAW}/${encodeURIComponent(fileName)}`;

const mainImage = dragonImage("파타야 드래곤 스웨디시 메인.webp");

const images = [
  dragonImage("파타야 드래곤 스웨디시 외관.webp"),
  dragonImage("파타야 드래곤 스웨디시 리셉션.webp"),
  dragonImage("파타야 드래곤 스웨디시 휴게실.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸1.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸2.webp"),
  dragonImage("파타야 드래곤 스웨디시 룸3.webp"),
];

const prices = [
  ["A 코스 · 60분", "마사지 + 센슈얼 + 핸드", "2,500"],
  ["B 코스 · 60분", "마사지 + 센슈얼 + @", "3,500"],
  ["C 코스 · 90분", "전문 오일마사지 60분 + 센슈얼 + 핸드", "3,000"],
  ["D 코스 · 90분", "전문 오일마사지 60분 + 센슈얼 + @", "4,000"],
] as const;

const page = {
  name: "파타야 드래곤 스웨디시",
  english: "DRAGON SWEDISH & SENSUAL MASSAGE",
  rating: "4.5",
  hours: "11:00 - 00:00",
  address: "Pattaya 3rd Road, Pattaya, Chon Buri, Thailand",
};

const getGoogleMapUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const getGoogleMapLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
    "Pattaya Massage",
    "Dragon Swedish Massage",
  ],
  alternates: {
    canonical: "/pattaya/massage/pattaya-dragon-swedish-massage",
  },
  openGraph: {
    title: page.name,
    description:
      `${page.name} 위치, 영업시간, 마사지 코스와 가격정보`,
    type: "website",
    url: "/pattaya/massage/pattaya-dragon-swedish-massage",
    images: [
      {
        url: mainImage,
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
        item: "/pattaya/massage/pattaya-dragon-swedish-massage",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function PattayaDragonSwedishMassagePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">

      <BreadcrumbJsonLd />

      {/* HERO */}
      <section className="relative h-[480px] overflow-hidden sm:h-[560px] md:h-[650px]">
        <img
          src={mainImage}
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
          {prices.map(([course, description, price]) => (
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
            images={images}
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
            <h3 className="mt-4 text-xl font-black">위치</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {page.address}
            </p>
          </div>

          <div className="rounded-3xl border border-[#8d6a32]/30 bg-[#11110f] p-7">
            <p className="text-xs font-black tracking-[0.3em] text-[#d2a24c]">
              HOURS
            </p>
            <h3 className="mt-4 text-xl font-black">영업시간</h3>
            <p className="mt-4 text-2xl font-black text-[#dfb766]">
              {page.hours}
            </p>
          </div>

          <div className="rounded-3xl border border-[#8d6a32]/30 bg-[#11110f] p-7">
            <p className="text-xs font-black tracking-[0.3em] text-[#d2a24c]">
              RATING
            </p>
            <h3 className="mt-4 text-xl font-black">평점</h3>
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
            <p>
              파타야 드래곤 스웨디시는 파타야 3rd Road 인근에서
              스웨디시 및 오일마사지 코스를 이용할 수 있는 마사지샵입니다.
            </p>
            <p>
              매장 외관과 리셉션, 휴게 공간, 마사지 룸 등의 실제 사진을
              확인할 수 있어 방문 전에 매장 분위기를 살펴보기 좋습니다.
            </p>
            <p>
              코스는 60분과 90분 구성으로 나뉘며 방문 전 원하는 코스와
              가격 및 이용 가능 여부를 확인하는 것을 권장합니다.
            </p>
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
              <span className="mr-3 text-[#d2a24c]">✓</span>
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
              90분 구성입니다. 자세한 가격은 위 가격표를 확인해주세요.
            </p>
          </details>

        </div>
      </section>

      {/* LOCATION */}
      <section className="container py-14 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
            LOCATION
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            드래곤 스웨디시 위치
          </h2>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">
            <p className="text-xs text-zinc-500">주소</p>
            <p className="mt-2 text-lg font-black leading-8">
              {page.address}
            </p>
          </div>

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
          <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
            OPENING HOURS
          </p>

          <h2 className="mt-3 text-3xl font-black">영업시간</h2>

          <p className="mt-8 text-4xl font-black">{page.hours}</p>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            공개된 안내 기준이며, 방문 당일 영업 여부를 다시 확인해주세요.
          </p>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          드래곤 스웨디시 이용 정보
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

      {/* TRANSPORT */}
      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
          <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
            TRANSPORT
          </p>

          <h2 className="mt-3 text-3xl font-black">찾아가는 방법</h2>

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
        <p className="text-xs font-black tracking-[0.35em] text-[#d2a24c]">
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
              <span className="mr-3 text-[#d2a24c]">✓</span>
              {item}
            </div>
          ))}
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

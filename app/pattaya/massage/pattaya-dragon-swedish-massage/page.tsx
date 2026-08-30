import type { Metadata } from "next";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

const image = (fileName: string) =>
  `${GITHUB_RAW}/${encodeURIComponent(fileName)}`;

const mainImage = image("파타야 드래곤 스웨디시 메인.webp");

const galleryImages = [
  image("파타야 드래곤 스웨디시 외관.webp"),
  image("파타야 드래곤 스웨디시 리셉션.webp"),
  image("파타야 드래곤 스웨디시 휴게실.webp"),
  image("파타야 드래곤 스웨디시 룸1.webp"),
  image("파타야 드래곤 스웨디시 룸2.webp"),
  image("파타야 드래곤 스웨디시 룸3.webp"),
];

const priceList = [
  {
    course: "A 코스",
    time: "60분",
    price: "2,500B",
    description: "마사지 기본 코스",
  },
  {
    course: "B 코스",
    time: "60분",
    price: "3,500B",
    description: "마사지 코스",
  },
  {
    course: "C 코스",
    time: "90분",
    price: "3,000B",
    description: "전문 오일마사지 60분 코스",
  },
  {
    course: "D 코스",
    time: "90분",
    price: "4,000B",
    description: "전문 오일마사지 60분 코스",
  },
];

export const metadata: Metadata = {
  title: "파타야 드래곤 스웨디시 마사지",
  description:
    "파타야 드래곤 스웨디시 마사지의 매장 사진, 가격표, 위치와 이용 정보를 확인하세요.",
  keywords: [
    "파타야 드래곤 스웨디시",
    "파타야 스웨디시",
    "파타야 마사지",
    "드래곤 스웨디시 마사지",
    "Pattaya Dragon Swedish Massage",
  ],
  alternates: {
    canonical: "/pattaya/massage/pattaya-dragon-swedish-massage",
  },
  openGraph: {
    title: "파타야 드래곤 스웨디시 마사지",
    description:
      "파타야 드래곤 스웨디시 마사지 매장 사진과 가격, 위치 정보를 확인하세요.",
    type: "website",
    images: [
      {
        url: mainImage,
        alt: "파타야 드래곤 스웨디시 마사지",
      },
    ],
  },
};

function BreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "/" },
      { "@type": "ListItem", position: 2, name: "파타야", item: "/pattaya" },
      {
        "@type": "ListItem",
        position: 3,
        name: "마사지",
        item: "/pattaya/massage",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "파타야 드래곤 스웨디시 마사지",
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

export default function DragonSwedishMassagePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">
      <BreadcrumbJsonLd />

      {/* HERO */}
      <section className="relative h-[430px] overflow-hidden sm:h-[500px] md:h-[600px]">
        <Image
          src={mainImage}
          alt="파타야 드래곤 스웨디시 마사지"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-10 md:pb-14">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              PATTAYA · MASSAGE
            </p>

            <h1 className="mt-3 max-w-5xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              파타야 드래곤 스웨디시 마사지
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
              파타야 드래곤 스웨디시의 매장 분위기와 가격,
              위치 및 이용 정보를 한 페이지에서 확인할 수 있습니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                ★ 4.5
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                파타야
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                스웨디시 마사지
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                11:00 - 00:00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container py-14 md:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          ABOUT
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          파타야 드래곤 스웨디시
        </h2>

        <div className="mt-7 max-w-4xl space-y-5 text-[15px] leading-8 text-zinc-400">
          <p>
            파타야 드래곤 스웨디시는 파타야에서 스웨디시 마사지를
            찾는 여행객들이 매장 위치와 시설, 가격 정보를 확인할 수
            있도록 정리한 페이지입니다.
          </p>
          <p>
            외관과 리셉션, 휴게 공간 및 룸 사진을 함께 확인할 수 있어
            방문 전에 매장 분위기를 미리 살펴보기 좋습니다.
          </p>
          <p>
            코스와 가격은 현장 운영 상황에 따라 변경될 수 있으므로
            방문 전 최신 정보를 확인하는 것을 권장합니다.
          </p>
        </div>
      </section>

      {/* PRICE */}
      <section className="container py-14 md:py-20">
        <div className="text-center">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            PRICE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            파타야 드래곤 스웨디시 가격표
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            제공해주신 가격표 이미지를 기준으로 정리한 코스입니다.
            실제 이용 조건과 가격은 방문 전 확인해주세요.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl grid gap-5 md:grid-cols-2">
          {priceList.map((item) => (
            <div
              key={item.course}
              className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#17130c] via-[#111114] to-[#0c0c0e] p-6 md:p-8"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-amber-400/5 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black tracking-[0.2em] text-amber-400">
                      {item.course}
                    </p>
                    <h3 className="mt-3 text-xl font-black md:text-2xl">
                      {item.description}
                    </h3>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-black text-amber-300 md:text-3xl">
                      {item.price}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{item.time}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-zinc-500">
                  총 이용시간 {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-6 text-zinc-600">
          ※ 가격 및 코스 내용은 매장 사정에 따라 변경될 수 있습니다.
          방문 전 최신 가격과 이용 가능 여부를 확인해주세요.
        </p>
      </section>

      {/* PRICE IMAGE */}
      <section className="container py-14 md:py-20">
        <div className="text-center">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            MENU IMAGE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            공식 가격표 이미지
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-500">
            제공받은 가격표 이미지를 그대로 확인할 수 있습니다.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-amber-500/20 bg-[#111114] shadow-2xl">
          <Image
            src={image("파타야 드래곤 스웨디시 가격표.webp")}
            alt="파타야 드래곤 스웨디시 가격표"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
            unoptimized
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="container py-14 md:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          룸 & 시설 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          외관, 리셉션, 휴게실과 룸 내부 사진을 확인해보세요.
        </p>

        <div className="mt-8">
          <ImageGallery
            images={galleryImages}
            name="파타야 드래곤 스웨디시"
          />
        </div>
      </section>

      {/* BASIC INFO */}
      <section className="container py-14">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            INFORMATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            기본 정보
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["업종", "스웨디시 마사지"],
              ["위치", "Pattaya 3rd Road"],
              ["영업시간", "11:00 - 00:00"],
              ["평점", "★ 4.5"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-xs text-zinc-500">{label}</p>
                <p className="mt-2 font-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="container py-14 md:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          LOCATION
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          파타야 드래곤 스웨디시 위치
        </h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
          <p className="text-xs text-zinc-500">주소</p>
          <p className="mt-3 text-lg font-black leading-8">
            Pattaya 3rd Road, Pattaya, Chon Buri, Thailand
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-black/30 p-5">
              <p className="text-xs text-zinc-500">영업시간</p>
              <p className="mt-2 font-black">11:00 - 00:00</p>
            </div>

            <div className="rounded-2xl bg-black/30 p-5">
              <p className="text-xs text-zinc-500">이용 안내</p>
              <p className="mt-2 font-black">방문 전 최신 정보 확인</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="container py-14 md:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GOOD TO KNOW
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방문 전 체크사항
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "방문 당일 영업시간 확인",
            "매장 위치 확인",
            "원하는 마사지 코스 확인",
            "이용시간 확인",
            "최신 가격 확인",
            "추가 비용 여부 확인",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#111114] p-5 text-sm text-zinc-300"
            >
              <span className="mr-3 text-red-500">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-14 md:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FAQ
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          자주 묻는 질문
        </h2>

        <div className="mt-8 space-y-4">
          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              드래곤 스웨디시 영업시간은?
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 페이지에 안내된 영업시간은 11:00 - 00:00입니다.
              방문 당일 영업 여부는 다시 확인해주세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              드래곤 스웨디시는 어디에 있나요?
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Pattaya 3rd Road, Pattaya, Chon Buri, Thailand로 안내되어 있습니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              가격은 얼마인가요?
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              페이지의 가격표에서 A, B, C, D 코스와 이용시간 및 가격을
              확인할 수 있습니다. 실제 가격은 방문 전 확인해주세요.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-950/20 to-[#111114] p-8 text-center md:p-14">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            DRAGON SWEDISH PATTAYA
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            파타야 드래곤 스웨디시
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            매장 사진과 가격, 위치 및 이용 정보를 확인하고
            방문 전 최신 정보를 다시 확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </a>

            <a
              href="/pattaya/massage"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              파타야 마사지 더보기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

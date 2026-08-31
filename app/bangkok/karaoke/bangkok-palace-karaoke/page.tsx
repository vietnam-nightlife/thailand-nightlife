import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

const gungjeonMainImage =
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 메인.webp")}`;

const gungjeonImages = [
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 입구.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 초이스1.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 초이스2.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 룸1.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 룸2.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("방콕 궁전 가라오케 룸3.webp")}`,
];

export const metadata: Metadata = {
  title: "방콕 궁전 가라오케 | Bangkok Kung Jeon KTV",
  description:
    "방콕 궁전 가라오케의 위치, 룸, 시설, 영업시간, 가격과 이용정보를 한곳에서 확인하세요.",
  keywords: [
    "방콕 궁전 가라오케",
    "방콕 궁전 KTV",
    "Kung Jeon KTV Bangkok",
    "Bangkok Kung Jeon KTV",
    "방콕 가라오케",
    "방콕 KTV",
    "방콕 코리아타운 가라오케",
    "수쿰빗 가라오케",
    "아속 가라오케",
  ],
  alternates: {
    canonical: "/bangkok/karaoke/bangkok-palace-karaoke",
  },
  openGraph: {
    title: "방콕 궁전 가라오케",
    description:
      "방콕 수쿰빗 코리아타운에 위치한 궁전 KTV의 위치, 룸, 시설과 이용정보",
    type: "website",
    images: [
      {
        url: gungjeonMainImage,
        alt: "방콕 궁전 가라오케",
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
        name: "방콕",
        item: "/bangkok",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "가라오케",
        item: "/bangkok/karaoke",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "방콕 궁전 가라오케",
        item: "/bangkok/karaoke/bangkok-palace-karaoke",
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

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "궁전 KTV",
    alternateName: "Kung Jeon KTV",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sukhumvit Plaza 3F, 9, 20 Suk Chai Alley",
      addressLocality: "Khlong Toei",
      addressRegion: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    openingHours: "Mo-Su 19:00-04:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BangkokGungjeonKaraokePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">
      <BreadcrumbJsonLd />
      <BusinessJsonLd />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative h-[430px] overflow-hidden sm:h-[500px] md:h-[600px]">
        <img
          src={gungjeonMainImage}
          alt="방콕 궁전 가라오케"
          className="h-full w-full object-cover brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-10 md:pb-14">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              BANGKOK · KARAOKE
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              방콕 궁전 가라오케
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              방콕 수쿰빗 코리아타운에 위치한 궁전 KTV 정보입니다.
              위치, 룸, 시설, 영업시간과 가격 정보를 방문 전 확인할 수 있도록
              정리했습니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Since 2007
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Sukhumvit Plaza 3F
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                19:00 - 04:00
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Asok 도보권
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          궁전 가라오케 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          외관부터 로비와 프라이빗 룸까지 사진을 한곳에서 확인해보세요.
        </p>

        <div className="mt-8">
          <ImageGallery
            images={gungjeonImages}
            name="방콕 궁전 가라오케"
          />
        </div>
      </section>

      {/* =====================================================
          PALACE PRICE GUIDE
      ===================================================== */}
      <section className="mt-12 w-full overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

          <div className="mb-10 text-center">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              PRICE GUIDE
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              궁전 가라오케 가격표
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              룸 이용료와 주류 세트, 프리미엄 위스키 및 Lady 차지 안내입니다.
            </p>
          </div>

          {/* ROOM */}
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-500/40 bg-[#111] p-7 text-center shadow-[0_0_30px_rgba(245,158,11,0.08)] sm:p-9">
            <p className="text-xs font-black tracking-[0.3em] text-amber-400">
              ROOM PRICE
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              룸 이용 요금
            </h3>

            <p className="mt-4 text-sm text-zinc-400">
              Small ~ VIP Big Room
            </p>

            <p className="mt-4 text-4xl font-black text-amber-400 sm:text-5xl">
              500B ~ 2,000B
            </p>

            <p className="mt-3 text-xs text-zinc-500">
              룸 타입 및 이용 조건에 따라 달라질 수 있습니다.
            </p>
          </div>

          {/* DRINK SET */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="mb-7 text-center">
              <p className="text-xs font-black tracking-[0.3em] text-amber-400">
                DRINK SET
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                주류 세트
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center transition hover:border-amber-300">
                <h4 className="text-xl font-black text-white">
                  소주 세트
                </h4>

                <p className="mt-3 text-3xl font-black text-amber-400">
                  4,200B
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  소주 6병 + 기본 안주
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center transition hover:border-amber-300">
                <h4 className="text-xl font-black text-white">
                  소맥 세트
                </h4>

                <p className="mt-3 text-3xl font-black text-amber-400">
                  4,200B
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  소주 3병 + 맥주 5병 + 기본 안주
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center transition hover:border-amber-300">
                <h4 className="text-xl font-black text-white">
                  맥주 세트
                </h4>

                <p className="mt-3 text-3xl font-black text-amber-400">
                  4,200B
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  맥주 8병 + 기본 안주
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-[#111] p-6 text-center transition hover:border-amber-300">
                <h4 className="text-xl font-black text-white">
                  양주 세트
                </h4>

                <p className="mt-3 text-3xl font-black text-amber-400">
                  5,100B
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  골든블루 1병 + 기본 안주 2
                </p>
              </div>

            </div>
          </div>

          {/* PREMIUM */}
          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-amber-500/40 bg-[#15110a] p-7 text-center sm:p-10">
            <p className="text-xs font-black tracking-[0.3em] text-amber-400">
              PREMIUM WHISKY
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              프리미엄 위스키 세트
            </h3>

            <p className="mt-4 text-4xl font-black text-amber-400 sm:text-5xl">
              9,750B
            </p>

            <p className="mt-5 text-lg font-bold text-white">
              골드라벨 or 헤네시
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              위스키 1병 + 기본 안주 2 + 믹서 10
            </p>

            <p className="mt-5 text-xs text-zinc-500">
              모든 금액은 팁 포함된 금액입니다.
            </p>
          </div>

          {/* LADY CHARGE */}
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-red-500/30 bg-[#120c0c] p-7 sm:p-9">
            <div className="text-center">
              <p className="text-xs font-black tracking-[0.3em] text-red-400">
                LADY CHARGE
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Lady 차지
              </h3>
            </div>

            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                <p className="text-sm font-bold text-zinc-400">
                  TC
                </p>

                <p className="mt-2 text-2xl font-black text-amber-400">
                  600B
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  1시간
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                <p className="text-sm font-bold text-zinc-400">
                  ST
                </p>

                <p className="mt-2 text-2xl font-black text-amber-400">
                  4,000B
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  2시간
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                <p className="text-sm font-bold text-zinc-400">
                  LT
                </p>

                <p className="mt-2 text-2xl font-black text-amber-400">
                  6,000B
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  6시간
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          BASIC INFORMATION
      ===================================================== */}
      <section className="container py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["업종", "프리미엄 KTV · 가라오케"],
            ["위치", "Sukhumvit Plaza 3F"],
            ["영업시간", "매일 19:00 - 04:00"],
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

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          ABOUT KUNG JEON
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방콕 궁전 가라오케
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          <p>
            궁전 KTV는 방콕 수쿰빗 코리아타운인 Sukhumvit Plaza 3층에
            위치한 KTV입니다.
          </p>

          <p>
            한국어 및 중국어 노래방 시스템을 갖추고 있으며, 한국 노래와
            중국어 노래를 선택할 수 있는 것이 특징입니다.
          </p>

          <p>
            룸은 소형, 중형, VIP, VVIP 타입으로 구분되어 있어 방문 인원과
            목적에 맞춰 선택할 수 있습니다.
          </p>

          <p>
            방문 전에는 룸 이용료와 주류 세트, 서비스 차지 및 카드 수수료를
            포함한 최종 결제금액을 확인하는 것을 권장합니다.
          </p>

        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}
      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            궁전 가라오케 위치
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            방콕 수쿰빗 코리아타운인 Sukhumvit Plaza 3층에 위치합니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              주소
            </p>

            <p className="mt-2 text-lg font-black">
              Sukhumvit Plaza 3F, 9, 20 Suk Chai Alley,
              Khlong Toei Nuea, Khlong Toei, Bangkok 10110
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              BTS Asok 역 도보권 · MRT Sukhumvit 역 도보권
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          OPENING HOURS / RESERVATION
      ===================================================== */}
      <section className="container py-12">
        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              OPENING HOURS
            </p>

            <h2 className="mt-3 text-3xl font-black">
              영업시간
            </h2>

            <p className="mt-8 text-4xl font-black">
              19:00 - 04:00
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              방문 전 당일 영업시간과 룸 이용 가능 여부를 다시 확인하세요.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black">
              예약 방문
            </h2>

            <p className="mt-8 text-2xl font-black">
              미리 예약 권장
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              주말이나 피크 시간대에는 원하는 룸을 이용하기 위해 미리
              예약하고 방문하는 것이 좋습니다.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FACILITIES
      ===================================================== */}
      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          궁전 가라오케 시설
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
            <div className="text-3xl">🎤</div>

            <h3 className="mt-4 text-xl font-black">
              한국·중국 노래방 시스템
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              한국어와 중국어 노래를 선택할 수 있는 노래방 시스템을
              운영합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
            <div className="text-3xl">🛋️</div>

            <h3 className="mt-4 text-xl font-black">
              프라이빗 룸
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              소형, 중형, VIP, VVIP 등 다양한 룸 타입이 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
            <div className="text-3xl">🥃</div>

            <h3 className="mt-4 text-xl font-black">
              주류 세트
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              위스키, 소주, 맥주 등 다양한 주류 세트를 이용할 수 있습니다.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          TRANSPORT
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
              BTS Asok 역에서 Sukhumvit Plaza 코리아타운 방향으로 이동하면
              편리합니다.
            </p>

            <p>
              MRT Sukhumvit 역에서도 도보 이동이 가능합니다.
            </p>

            <p>
              차량으로 이동할 경우 Sukhumvit Plaza를 목적지로 설정한 뒤
              건물 3층의 궁전 KTV를 확인하세요.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          GOOD TO KNOW
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
            "Sukhumvit Plaza 3층 위치 확인",
            "원하는 룸 타입 이용 가능 여부 확인",
            "룸 이용료 확인",
            "주류 세트 가격 및 구성 확인",
            "서비스 차지 확인",
            "카드 결제 시 추가 수수료 확인",
            "최종 결제금액 확인",
            "주말 및 피크타임 예약 확인",
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

      {/* =====================================================
          FAQ
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
              궁전 가라오케 영업시간은?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 안내되는 영업시간은 매일 19:00 - 04:00입니다.
              방문 전 당일 영업 여부를 확인하세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              궁전 가라오케는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              방콕 수쿰빗 코리아타운 Sukhumvit Plaza 3층에 있습니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              룸 이용료는 500B~2,000B이며, 소주 세트 4,200B,
              소맥 세트 4,200B, 맥주 세트 4,200B, 양주 세트 5,100B,
              프리미엄 위스키 세트 9,750B로 안내되어 있습니다.
              Lady 차지는 TC 600B, ST 4,000B, LT 6,000B입니다.
              실제 결제금액은 방문 전에 확인하세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              어떤 룸을 선택할 수 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              소형, 중형, VIP, VVIP 타입이 안내되어 있습니다.
              실제 이용 가능 룸은 예약 상황에 따라 달라질 수 있습니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              예약은 어떻게 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              방문 날짜, 시간, 인원과 원하는 룸 타입을 미리 문의하는 것을
              권장합니다.
            </p>
          </details>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="container py-14 md:py-20">

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-[#111114] p-8 text-center md:p-14">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            KUNG JEON KTV BANGKOK
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            방콕 궁전 가라오케
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            방콕 궁전 가라오케의 위치와 룸, 시설 및 이용정보를
            방문 전에 확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href="/contact"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </a>

            <Link
              href="/bangkok/karaoke"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              방콕 가라오케 더보기
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

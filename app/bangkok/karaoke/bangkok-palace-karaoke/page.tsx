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
      { "@type": "ListItem", position: 1, name: "홈", item: "/" },
      { "@type": "ListItem", position: 2, name: "방콕", item: "/bangkok" },
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
    telephone: "+66 81 742 5155",
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
          <ImageGallery images={gungjeonImages} name="방콕 궁전 가라오케" />
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="text-center">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            PRICE GUIDE
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            궁전 가라오케 가격 안내
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            공개된 가격을 기준으로 정리했습니다. 룸 이용료와 실제 총액은
            인원, 이용시간 및 주문내용에 따라 달라질 수 있으므로 방문 전
            확인하세요.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/30 bg-[#111114] p-7">
            <span className="text-xs font-black tracking-[0.25em] text-cyan-400">
              WHISKY
            </span>
            <h3 className="mt-3 text-2xl font-black">위스키 세트</h3>
            <div className="mt-7 border-t border-white/10">
              <div className="flex justify-between border-b border-white/10 py-5">
                <span className="text-zinc-400">12년급 세트</span>
                <strong className="text-cyan-300">3,800 ฿</strong>
              </div>
              <div className="flex justify-between py-5">
                <span className="text-zinc-400">17년급 프리미엄 세트</span>
                <strong className="text-cyan-300">4,800 ฿</strong>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7">
            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              SOJU
            </span>
            <h3 className="mt-3 text-2xl font-black">소주 세트</h3>
            <div className="mt-7 border-t border-white/10">
              <div className="flex justify-between py-5">
                <span className="text-zinc-400">소주 5~6병 + 과일 + 안주</span>
                <strong className="text-amber-300">3,200 ฿</strong>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-fuchsia-400/30 bg-[#111114] p-7">
            <span className="text-xs font-black tracking-[0.25em] text-fuchsia-400">
              BEER
            </span>
            <h3 className="mt-3 text-2xl font-black">맥주 세트</h3>
            <div className="mt-7 border-t border-white/10">
              <div className="flex justify-between py-5">
                <span className="text-zinc-400">맥주 세트</span>
                <strong className="text-fuchsia-300">가격 문의</strong>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-400/30 bg-[#111114] p-7">
            <span className="text-xs font-black tracking-[0.25em] text-pink-400">
              ROOM
            </span>
            <h3 className="mt-3 text-2xl font-black">룸 이용료</h3>
            <div className="mt-7 border-t border-white/10">
              <div className="flex justify-between border-b border-white/10 py-5">
                <span className="text-zinc-400">소형 / 중형</span>
                <strong className="text-pink-300">문의</strong>
              </div>
              <div className="flex justify-between py-5">
                <span className="text-zinc-400">VIP / VVIP</span>
                <strong className="text-pink-300">문의</strong>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-7 text-center text-xs text-zinc-600">
          ※ 카드 결제 및 서비스 차지 등 추가 비용이 있을 수 있으므로 실제
          결제 전 총액을 확인하세요.
        </p>
      </section>

      <section className="container py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["업종", "프리미엄 KTV · 가라오케"],
            ["위치", "Sukhumvit Plaza 3F"],
            ["영업시간", "매일 19:00 - 04:00"],
            ["문의", "081-742-5155"],
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

      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            LOCATION
          </p>
          <h2 className="mt-3 text-3xl font-black">궁전 가라오케 위치</h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            방콕 수쿰빗 코리아타운인 Sukhumvit Plaza 3층에 위치합니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">
            <p className="text-xs text-zinc-500">주소</p>
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

      <section className="container py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              OPENING HOURS
            </p>
            <h2 className="mt-3 text-3xl font-black">영업시간</h2>
            <p className="mt-8 text-4xl font-black">19:00 - 04:00</p>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              방문 전 당일 영업시간과 룸 이용 가능 여부를 다시 확인하세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              RESERVATION
            </p>
            <h2 className="mt-3 text-3xl font-black">예약 방문</h2>
            <p className="mt-8 text-2xl font-black">미리 예약 권장</p>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              주말이나 피크 시간대에는 원하는 룸을 이용하기 위해 미리
              예약하고 방문하는 것이 좋습니다.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              공식 문의 전화: 081-742-5155
            </p>
          </div>
        </div>
      </section>

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
            <h3 className="mt-4 text-xl font-black">한국·중국 노래방 시스템</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              한국어와 중국어 노래를 선택할 수 있는 노래방 시스템을
              운영합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
            <div className="text-3xl">🛋️</div>
            <h3 className="mt-4 text-xl font-black">프라이빗 룸</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              소형, 중형, VIP, VVIP 등 다양한 룸 타입이 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
            <div className="text-3xl">🥃</div>
            <h3 className="mt-4 text-xl font-black">주류 세트</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              위스키, 소주, 맥주 등 다양한 주류 세트를 이용할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            TRANSPORT
          </p>
          <h2 className="mt-3 text-3xl font-black">찾아가는 방법</h2>

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
              <span className="mr-3 text-red-500">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

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
              공개된 가격 기준 위스키 12년급 세트 3,800바트, 17년급
              프리미엄 세트 4,800바트, 소주 세트 3,200바트입니다.
              룸 이용료와 최종 결제금액은 방문 전에 확인하세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              어떤 룸을 선택할 수 있나요?
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              소형, 중형, VIP, VVIP 타입이 안내되어 있습니다. 실제 이용
              가능 룸은 예약 상황에 따라 달라질 수 있습니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              예약은 어떻게 하나요?
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              문의 전화 081-742-5155로 방문 날짜, 시간, 인원과 원하는
              룸 타입을 미리 문의하는 것을 권장합니다.
            </p>
          </details>
        </div>
      </section>

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

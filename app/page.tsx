import CityCard from "@/components/CityCard";
import PlaceCard from "@/components/PlaceCard";
import ContactButtons from "@/components/ContactButtons";
import { cities, places } from "@/lib/data";

import bgImage from "../thailand-bg.webp";
import mobileBgImage from "../thailand-mobile.webp";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "태국 밤문화 가이드 | 방콕·파타야 불건마 & 가라오케",
  description:
    "태국 방콕과 파타야의 불건마, 마사지, 가라오케 정보를 지역별로 확인하세요. 위치, 가격, 영업시간 등 여행에 필요한 정보를 비교해보세요.",
  keywords: [
    "태국 밤문화",
    "태국 유흥",
    "방콕 밤문화",
    "파타야 밤문화",
    "방콕 불건마",
    "파타야 불건마",
    "방콕 가라오케",
    "파타야 가라오케",
    "태국 마사지",
  ],
  openGraph: {
    title: "태국 밤문화 가이드 | 방콕·파타야",
    description:
      "방콕과 파타야의 불건마, 마사지, 가라오케 정보를 확인하세요.",
    type: "website",
  },
};

export default function Home() {
  const featured = places.filter((p) => p.featured);

  return (
    <main id="top">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobileBgImage.src}
          />

          <img
            src={bgImage.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="container relative z-10 py-20 md:py-28">

          <div className="max-w-4xl">

            <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-black tracking-widest text-red-400">
              THAILAND TRAVEL & NIGHTLIFE
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
              태국 밤문화 <br />
              <span className="red">눈탱이 맞지 마세요.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white md:text-zinc-400 md:text-lg">
              방콕과 파타야에서 이용할 수 있는 마사지와 가라오케 정보를
              지역별로 확인하세요. 가격, 위치, 영업시간 등 여행자가 필요한
              정보를 한곳에서 비교할 수 있도록 구성했습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#cities"
                className="rounded-xl bg-red-600 px-7 py-4 text-sm font-black hover:bg-red-500"
              >
                지역 선택하기
              </a>

              <a
                href="#popular"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-black hover:bg-white/10"
              >
                인기 업소 보기
              </a>

            </div>

          </div>


          {/* =================================================
              지역별 바로가기
          ================================================== */}
          <div className="mt-14 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">

            {/* 방콕 가라오케 */}
            <a
              href="/bangkok/karaoke"
              className="group rounded-2xl border border-red-400/50 bg-black/20 p-5 transition-all duration-300 hover:border-red-400 hover:bg-red-950/20 hover:shadow-[0_0_25px_rgba(248,113,113,0.15)]"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-red-400/20 bg-red-950/30 text-red-400 transition group-hover:scale-105">
                  <span className="text-3xl">🎤</span>
                </div>

                <div className="border-l border-red-400/30 pl-5">
                  <div className="text-2xl font-black text-red-300 transition group-hover:text-red-200">
                    방콕 가라오케
                  </div>

                  <div className="mt-2 text-sm font-medium text-zinc-300">
                    수쿰빗 인기 KTV →
                  </div>
                </div>

              </div>
            </a>


            {/* 방콕 불건마 */}
            <a
              href="/bangkok/massage"
              className="group rounded-2xl border border-amber-300/50 bg-black/20 p-5 transition-all duration-300 hover:border-amber-300 hover:bg-amber-950/20 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-950/30 text-amber-300 transition group-hover:scale-105">
                  <span className="text-3xl">🌸</span>
                </div>

                <div className="border-l border-amber-300/30 pl-5">
                  <div className="text-2xl font-black text-amber-200 transition group-hover:text-amber-100">
                    방콕 불건마
                  </div>

                  <div className="mt-2 text-sm font-medium text-zinc-300">
                    인기 해피엔딩 마사지 →
                  </div>
                </div>

              </div>
            </a>


            {/* 파타야 가라오케 */}
            <a
              href="/pattaya/karaoke"
              className="group rounded-2xl border border-purple-400/50 bg-black/20 p-5 transition-all duration-300 hover:border-purple-400 hover:bg-purple-950/20 hover:shadow-[0_0_25px_rgba(192,132,252,0.15)]"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-950/30 text-purple-400 transition group-hover:scale-105">
                  <span className="text-3xl">🎵</span>
                </div>

                <div className="border-l border-purple-400/30 pl-5">
                  <div className="text-2xl font-black text-purple-300 transition group-hover:text-purple-200">
                    파타야 가라오케
                  </div>

                  <div className="mt-2 text-sm font-medium text-zinc-300">
                    파타야 인기 KTV 보기 →
                  </div>
                </div>

              </div>
            </a>


            {/* 파타야 불건마 */}
            <a
              href="/pattaya/massage"
              className="group rounded-2xl border border-cyan-400/50 bg-black/20 p-5 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-950/30 text-cyan-300 transition group-hover:scale-105">
                  <span className="text-3xl">💙</span>
                </div>

                <div className="border-l border-cyan-400/30 pl-5">
                  <div className="text-2xl font-black text-cyan-300 transition group-hover:text-cyan-200">
                    파타야 불건마
                  </div>

                  <div className="mt-2 text-sm font-medium text-zinc-300">
                    인기 해피엔딩 마사지 →
                  </div>
                </div>

              </div>
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          추천 업소
          ★ 가장 먼저 표시
      ====================================================== */}
      <section
        id="popular"
        className="container pt-10 pb-12"
      >

        <div className="text-xs font-black tracking-[.3em] red">
          FEATURED
        </div>

        <h2 className="mt-2 text-4xl font-black">
          추천 업소
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {featured.map((place) => (
            <PlaceCard
              key={place.slug}
              place={place}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          지역 선택
      ====================================================== */}
      <section
        id="cities"
        className="container py-12"
      >

        <div className="text-xs font-black tracking-[.3em] red">
          DESTINATIONS
        </div>

        <h2 className="mt-2 text-4xl font-black">
          어느 지역을 찾으세요?
        </h2>

        <p className="mt-3 text-sm text-zinc-500">
          방콕과 파타야 정보를 지역별로 확인할 수 있습니다.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {cities.map((city) => (
            <CityCard
              key={city.slug}
              city={city}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          카테고리
      ====================================================== */}
      <section className="border-y border-white/10 bg-[#0c0c0c]">

        <div className="container py-12">

          <div className="text-xs font-black tracking-[.3em] red">
            CATEGORIES
          </div>

          <h2 className="mt-2 text-4xl font-black">
            무엇을 찾으세요?
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* 마사지 */}
            <a
              href="/bangkok/massage"
              className="card-hover rounded-3xl border border-white/10 bg-[#111] p-8"
            >

              <div className="text-5xl">
                💆
              </div>

              <h3 className="mt-6 text-2xl font-black">
                마사지
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                방콕과 파타야의 마사지 정보를 지역별로 확인하세요.
              </p>

              <div className="mt-6 text-sm font-black red">
                마사지 보기 →
              </div>

            </a>


            {/* 가라오케 */}
            <a
              href="/bangkok/karaoke"
              className="card-hover rounded-3xl border border-white/10 bg-[#111] p-8"
            >

              <div className="text-5xl">
                🎤
              </div>

              <h3 className="mt-6 text-2xl font-black">
                가라오케
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                방콕과 파타야의 가라오케 정보를 지역별로 확인하세요.
              </p>

              <div className="mt-6 text-sm font-black red">
                가라오케 보기 →
              </div>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT + FAQ
      ====================================================== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#0c0c0c]"
      >

        <div className="container py-16 text-center">

          <div className="text-xs font-black tracking-[.3em] red">
            CONTACT
          </div>

          <h2 className="mt-3 text-3xl font-black">
            업소 등록 및 정보 수정 문의
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            사이트에 업소를 등록하거나 가격·주소·영업시간 등의 정보 수정이
            필요한 경우 문의 채널을 이용하세요.
          </p>

          <div className="flex justify-center">
            <ContactButtons className="mt-6" />
          </div>


          {/* =================================================
              FAQ
          ================================================== */}
          <div className="mx-auto mt-12 max-w-4xl text-left">

            <h3 className="text-2xl font-black text-white">
              태국 유흥 자주 묻는 대표 질문 (FAQ)
            </h3>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">

              {/* FAQ 1 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    태국 한인 유흥은 어느 도시가 좋나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                  방콕과 파타야가 대표적인 지역입니다.
                  <br />
                  방콕은 수쿰빗을 중심으로 다양한 업소를 찾아볼 수 있으며,
                  파타야는 여행과 함께 유흥을 즐기려는 분들이 많이 찾는
                  지역입니다.
                  <br />
                  제 개인적인 생각으로는 파타야가 가성비도 좋고 유흥을
                  즐기기에는 더 최적화 되어있는것 같습니다.
                </div>

              </details>


              {/* FAQ 2 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    태국 유흥은 처음인데 어떻게 이용하면 되나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                  마사지 종류와 지역, 업소에 따라 가격이 다릅니다.
                  <br />
                  방문 전 가격과 이용시간, 추가 비용 여부를 확인하는 것이
                  좋습니다.
                  <br />
                  가라오케 및 마사지가 완전 처음이시라면 눈탱이 방지
                  위원회의 서실장이 실패 없는 곳으로 추천해드리겠습니다.
                </div>

              </details>


              {/* FAQ 3 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    태국 유흥 업소의 영업시간은 보통 어떻게 되나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                  태국 가라오케 및 영업시간은 방콕, 파타야 업소의 종류와
                  지역에 따라 다릅니다.
                  <br />
                  요일, 현지 상황, 업소 사정에 따라 영업시간이 변경될 수
                  있고 일반적으로 저녁 시간부터 영업을 시작해 늦은 새벽까지
                  영업하는 곳이 있고 오후 10시에 마감하는 곳도 있습니다.
                  <br />
                  방문 전 해당 업소에 운영시간을 문의주시면 감사드리고
                  무작정 찾아가서 헛걸음 하시는 일이 없도록 준비해
                  드리겠습니다.
                </div>

              </details>


              {/* FAQ 4 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    태국 현지에서 바가지나 추가요금을 피하려면 어떻게 해야 하나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                  방문 전에 업소의 위치와 가격 정보를 미리 확인하고,
                  현장에서 제시되는 가격과 조건도 이용 전에 다시 확인하는
                  것이 좋습니다.
                  <br />
                  저희 눈탱이 방지 위원회에서는 절대로 고객에게 바가지를
                  씌우는 일이 없으므로 걱정하지 않으셔도 됩니다.
                  <br />
                  또한 가격 정찰제와 투명한 가격으로 태국에 여행 온
                  여러분에게 많은 신뢰를 얻고 있습니다.
                </div>

              </details>


              {/* FAQ 5 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    업소 이용 시 주의해야 할 사항은 무엇인가요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                  업소를 이용하기 전 이용요금, 이용시간, 포함된 서비스 및
                  추가 비용 여부를 미리 눈탱이 방지위원회에서 확인하시는
                  것이 좋습니다.
                  <br />
                  업소마다 이용 조건이 다를 수 있으므로 예약이나 방문 전에
                  안내 받은 내용을 정확하게 확인하시기 바랍니다.
                  <br />
                  또한 눈탱이 방지 위원회에서 검증된 곳만을 추천 및
                  예약해 드리기 때문에 개인 소지품 관리 및 원하시는
                  서비스 등을 유도리 있게 이용하실 수 있는 장점이 있습니다.
                </div>

              </details>


              {/* FAQ 6 */}
              <details className="group">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    업소 예약이나 이용 관련 문의는 어디로 하면 되나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
                  업소 예약 및 이용에 관한 문의는 카카오톡 또는 텔레그램을
                  통해 문의를 하실 수 있습니다.
                  <br />
                  방문 예정일, 인원, 원하시는 업소 등을 같이 알려주시면
                  보다 빠르게 안내 받으실 수 있으며,
                  <br />
                  업소별 코스 및 이용시간, 요금 예약 가능 여부가 다를 수
                  있으므로 방문 전 미리 확인하시는 것을 권장합니다!
                </div>

              </details>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

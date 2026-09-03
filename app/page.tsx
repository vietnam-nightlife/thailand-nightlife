import Link from "next/link";
import CityCard from "@/components/CityCard";
import PlaceCard from "@/components/PlaceCard";
import ContactButtons from "@/components/ContactButtons";
import { cities, places } from "@/lib/data";

import bgImage from "../thailand-bg.webp";
import mobileBgImage from "../thailand-mobile.webp";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "태국 밤문화 가이드 | 방콕·파타야·에코걸",
  description:
    "방콕과 파타야의 마사지와 가라오케,에코걸 정보를 지역별로 확인하세요.",
};

export default function Home() {
  const featured = places.filter((p) => p.featured);

  return (
    <main id="top">

      {/* =================================================
          HERO
      ================================================== */}
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

        <div className="container relative z-10 py-12 md:py-16">

          <div className="max-w-4xl">

            {/* 상단 라벨 */}
            <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-black tracking-widest text-red-400">
              THAILAND TRAVEL & NIGHTLIFE
            </div>


            {/* 메인 제목 */}
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
              태국 밤문화
              <br />
              <span className="red">
                눈탱이 맞지 마세요.
              </span>
            </h1>


            {/* 설명 */}
            <p className="mt-5 max-w-2xl text-base leading-8 text-white md:text-zinc-400 md:text-lg">
              방콕과 파타야에서 이용할 수 있는 마사지와 가라오케,에코걸 정보를
              지역별로 확인하세요.
            </p>


            {/* =================================================
                지역 추천 네온 버튼
            ================================================== */}
            <div className="mt-7 flex flex-wrap gap-4">

              {/* 방콕 */}
              <a
                href="/bangkok"
                className="group relative min-w-[200px] overflow-hidden rounded-2xl border border-red-500/80 bg-black/10 px-7 py-5 text-center backdrop-blur-[2px] shadow-[0_0_8px_rgba(239,68,68,0.45),0_0_20px_rgba(239,68,68,0.15),inset_0_0_14px_rgba(239,68,68,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-500/5 hover:shadow-[0_0_12px_rgba(239,68,68,0.7),0_0_32px_rgba(239,68,68,0.28),inset_0_0_20px_rgba(239,68,68,0.1)]"
              >
                <div className="relative z-10">

                  <div className="text-[10px] font-black tracking-[0.25em] text-red-300">
                    BANGKOK
                  </div>

                  <div className="mt-1 text-lg font-black text-white drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                    방콕 추천 업소
                  </div>

                  <div className="mt-1 text-xs font-medium text-zinc-300">
                    마사지 · 가라오케 →
                  </div>

                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-red-400/20" />

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-500/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />

              </a>


              {/* 파타야 */}
              <a
                href="/pattaya"
                className="group relative min-w-[200px] overflow-hidden rounded-2xl border border-blue-500/80 bg-black/10 px-7 py-5 text-center backdrop-blur-[2px] shadow-[0_0_8px_rgba(59,130,246,0.45),0_0_20px_rgba(59,130,246,0.15),inset_0_0_14px_rgba(59,130,246,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/5 hover:shadow-[0_0_12px_rgba(59,130,246,0.7),0_0_32px_rgba(59,130,246,0.28),inset_0_0_20px_rgba(59,130,246,0.1)]"
              >
                <div className="relative z-10">

                  <div className="text-[10px] font-black tracking-[0.25em] text-blue-300">
                    PATTAYA
                  </div>

                  <div className="mt-1 text-lg font-black text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                    파타야 추천 업소
                  </div>

                  <div className="mt-1 text-xs font-medium text-zinc-300">
                    마사지 · 가라오케 →
                  </div>

                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-400/20" />

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />

              </a>

            </div>
          </div>


          {/* =================================================
              에코걸 추천
          ================================================== */}
          <div className="mt-4 flex flex-wrap">

            <Link
              href="/ecogirl"
              className="group relative min-w-[200px] overflow-hidden rounded-2xl border border-yellow-400/80 bg-black/70 px-7 py-5 text-center shadow-[0_0_12px_rgba(250,204,21,0.7),inset_0_0_15px_rgba(250,204,21,0.08)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[0_0_22px_rgba(250,204,21,1),inset_0_0_20px_rgba(250,204,21,0.12)]"
            >

              {/* LED 빛 효과 */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />

              <div className="relative">

                <div className="text-[11px] font-black tracking-[0.25em] text-yellow-400">
                  THAILAND
                </div>

                <div className="mt-1 text-xl font-black text-yellow-300">
                  에코걸 추천
                </div>

                <div className="mt-2 text-sm font-bold text-white">
                  프로필 보러가기 →
                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* =================================================
          1. 추천 업소
      ================================================== */}
      <section
        id="popular"
        className="container py-8 md:py-10"
      >

        <div className="text-xs font-black tracking-[.3em] red">
          FEATURED
        </div>

        <h2 className="mt-2 text-3xl font-black md:text-4xl">
          추천 업소
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">

          {featured.map((place) => (
            <PlaceCard
              key={place.slug}
              place={place}
            />
          ))}

        </div>

      </section>


      {/* =================================================
          2. 어느 지역을 찾으세요?
      ================================================== */}
      <section
        id="cities"
        className="border-y border-white/10 bg-[#0c0c0c]"
      >

        <div className="container py-12 md:py-16">

          <div className="text-xs font-black tracking-[.3em] red">
            DESTINATIONS
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            어느 지역을 찾으세요?
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            방콕과 파타야 정보를 지역별로 확인하세요.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">

            {cities.map((city) => (
              <CityCard
                key={city.slug}
                city={city}
              />
            ))}

          </div>

        </div>

      </section>


{/* =================================================
    3. 무엇을 찾으세요?
================================================== */}
<section className="container py-12 md:py-16">

  <div className="text-xs font-black tracking-[.3em] red">
    CATEGORIES
  </div>

  <h2 className="mt-3 text-3xl font-black md:text-4xl">
    무엇을 찾으세요?
  </h2>

  <div className="mt-7 w-full">

    {/* =========================
    방콕 + 파타야
========================== */}
<div className="grid w-full grid-cols-2 gap-4 sm:gap-6">

  {/* =========================
      방콕
  ========================== */}
  <div
    className="relative overflow-hidden rounded-2xl border border-red-500/70 bg-[#111] p-2.5
    shadow-[0_0_10px_rgba(239,68,68,0.2)]
    sm:rounded-3xl sm:p-5"
  >

    <div className="text-[8px] font-black tracking-[0.2em] text-red-400 sm:text-[10px]">
      BANGKOK
    </div>

    <h3 className="mt-1 text-lg font-black text-white sm:text-2xl">
      방콕
    </h3>

    <p className="mt-1 text-[9px] leading-4 text-zinc-500 sm:text-xs">
      방콕의 마사지와 가라오케 정보를 확인하세요.
    </p>


    {/* 방콕 마사지 */}
    <a
      href="/bangkok/massage"
      className="mt-3 block rounded-xl border border-red-500/40 bg-red-500/5 px-2.5 py-3
      transition-all duration-300 hover:border-red-400 hover:bg-red-500/10
      sm:mt-4 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <div className="text-lg sm:text-2xl">
        💆
      </div>

      <div className="mt-1.5 text-xs font-black text-white sm:mt-2 sm:text-base">
        방콕 마사지
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-red-400 sm:text-[11px]">
        마사지 보기 →
      </div>
    </a>


    {/* 방콕 가라오케 */}
    <a
      href="/bangkok/karaoke"
      className="mt-2 block rounded-xl border border-red-500/40 bg-red-500/5 px-2.5 py-3
      transition-all duration-300 hover:border-red-400 hover:bg-red-500/10
      sm:mt-3 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <div className="text-lg sm:text-2xl">
        🎤
      </div>

      <div className="mt-1.5 text-xs font-black text-white sm:mt-2 sm:text-base">
        방콕 가라오케
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-red-400 sm:text-[11px]">
        가라오케 보기 →
      </div>
    </a>


    {/* 방콕 에코걸 */}
    <a
      href="/ecogirl/bangkok"
      className="mt-2 block rounded-xl border border-yellow-400/50 bg-yellow-400/5 px-2.5 py-3
      transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-400/10
      sm:mt-3 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <div className="text-lg sm:text-2xl">
        👩
      </div>

      <div className="mt-1.5 text-xs font-black text-white sm:mt-2 sm:text-base">
        방콕 에코걸
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-yellow-400 sm:text-[11px]">
        프로필 보기 →
      </div>
    </a>

  </div>


  {/* =========================
      파타야
  ========================== */}
  <div
    className="relative overflow-hidden rounded-2xl border border-blue-500/70 bg-[#111] p-2.5
    shadow-[0_0_10px_rgba(59,130,246,0.2)]
    sm:rounded-3xl sm:p-5"
  >

    <div className="text-[8px] font-black tracking-[0.2em] text-blue-400 sm:text-[10px]">
      PATTAYA
    </div>

    <h3 className="mt-1 text-lg font-black text-white sm:text-2xl">
      파타야
    </h3>

    <p className="mt-1 text-[9px] leading-4 text-zinc-500 sm:text-xs">
      파타야의 마사지와 가라오케 정보를 확인하세요.
    </p>


    {/* 파타야 마사지 */}
    <a
      href="/pattaya/massage"
      className="mt-3 block rounded-xl border border-blue-500/40 bg-blue-500/5 px-2.5 py-3
      transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10
      sm:mt-4 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <div className="text-lg sm:text-2xl">
        💆
      </div>

      <div className="mt-1.5 text-xs font-black text-white sm:mt-2 sm:text-base">
        파타야 마사지
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-blue-400 sm:text-[11px]">
        마사지 보기 →
      </div>
    </a>


    {/* 파타야 가라오케 */}
    <a
      href="/pattaya/karaoke"
      className="mt-2 block rounded-xl border border-blue-500/40 bg-blue-500/5 px-2.5 py-3
      transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10
      sm:mt-3 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <div className="text-lg sm:text-2xl">
        🎤
      </div>

      <div className="mt-1.5 text-xs font-black text-white sm:mt-2 sm:text-base">
        파타야 가라오케
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-blue-400 sm:text-[11px]">
        가라오케 보기 →
      </div>
    </a>


    {/* 파타야 에코걸 */}
    <a
      href="/ecogirl/pattaya"
      className="mt-2 block rounded-xl border border-yellow-400/50 bg-yellow-400/5 px-2.5 py-3
      transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-400/10
      sm:mt-3 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <div className="text-lg sm:text-2xl">
        👩
      </div>

      <div className="mt-1.5 text-xs font-black text-white sm:mt-2 sm:text-base">
        파타야 에코걸
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-yellow-400 sm:text-[11px]">
        프로필 보기 →
      </div>
    </a>

  </div>

</div>
    </div>

</section>


      {/* =================================================
          4. FAQ
      ================================================== */}
      <section
        id="faq"
        className="border-t border-white/10 bg-[#0c0c0c]"
      >

        <div className="container py-12 md:py-16">

          <div className="mx-auto max-w-4xl">

            <div className="text-xs font-black tracking-[.3em] red">
              FAQ
            </div>

            <h2 className="mt-3 text-3xl font-black text-white">
              태국 유흥 자주 묻는 대표 질문 (FAQ)
            </h2>


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


      {/* =================================================
          5. 문의
      ================================================== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#0c0c0c]"
      >

        <div className="container py-12 text-center md:py-16">

          <div className="text-xs font-black tracking-[.3em] red">
            CONTACT
          </div>

          <h2 className="mt-4 text-3xl font-black">
            업소 등록 및 정보 수정 문의
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            사이트에 업소를 등록하거나 가격, 주소, 영업시간 등의
            정보 수정이 필요한 경우 문의해주세요.
          </p>

          <div className="flex justify-center">

            <ContactButtons className="mt-8" />

          </div>

        </div>

      </section>

    </main>
  );
}

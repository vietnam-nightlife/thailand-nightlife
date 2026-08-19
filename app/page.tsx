import CityCard from "@/components/CityCard";
import PlaceCard from "@/components/PlaceCard";
import ContactButtons from "@/components/ContactButtons";
import { cities, places } from "@/lib/data";

import bgImage from "../thailand-bg.webp";
import mobileBgImage from "../thailand-mobile.webp";

export default function Home() {
  const featured = places.filter((p) => p.featured);

  return (
    <main>
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

        <div className="container relative z-10 py-28 md:py-36">
          <div className="max-w-4xl">

            <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-black tracking-widest text-red-400">
              THAILAND TRAVEL & NIGHTLIFE
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
              태국 밤문화 <br />
              <span className="red">눈탱이 맞지 마세요.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white md:text-zinc-400 md:text-lg">
              방콕과 파타야에서 이용할 수 있는 마사지와 가라오케 정보를 지역별로 확인하세요.
              가격, 위치, 영업시간 등 여행자가 필요한 정보를 한곳에서 비교할 수 있도록 구성했습니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
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

          {/* 지역별 바로가기 */}
          <div className="mt-20 grid max-w-4xl grid-cols-2 gap-3">

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

      <section id="cities" className="container py-24">
        <div className="text-xs font-black tracking-[.3em] red">
          DESTINATIONS
        </div>

        <h2 className="mt-3 text-4xl font-black">
          어느 지역을 찾으세요?
        </h2>

        <p className="mt-4 text-sm text-zinc-500">
          방콕과 파타야 정보를 지역별로 확인할 수 있습니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="container py-24">

          <div className="text-xs font-black tracking-[.3em] red">
            CATEGORIES
          </div>

          <h2 className="mt-3 text-4xl font-black">
            무엇을 찾으세요?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <a
              href="/bangkok/massage"
              className="card-hover rounded-3xl border border-white/10 bg-[#111] p-10"
            >
              <div className="text-5xl">💆</div>

              <h3 className="mt-8 text-2xl font-black">
                마사지
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                방콕과 파타야의 마사지 정보를 지역별로 확인하세요.
              </p>

              <div className="mt-8 text-sm font-black red">
                마사지 보기 →
              </div>
            </a>

            <a
              href="/bangkok/karaoke"
              className="card-hover rounded-3xl border border-white/10 bg-[#111] p-10"
            >
              <div className="text-5xl">🎤</div>

              <h3 className="mt-8 text-2xl font-black">
                가라오케
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                방콕과 파타야의 가라오케 정보를 지역별로 확인하세요.
              </p>

              <div className="mt-8 text-sm font-black red">
                가라오케 보기 →
              </div>
            </a>

          </div>
        </div>
      </section>

      <section id="popular" className="container py-24">

        <div className="text-xs font-black tracking-[.3em] red">
          FEATURED
        </div>

        <h2 className="mt-3 text-4xl font-black">
          추천 업소
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>

      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[#0c0c0c]"
      >
        <div className="container py-24 text-center">

          <div className="text-xs font-black tracking-[.3em] red">
            CONTACT
          </div>

          <h2 className="mt-4 text-3xl font-black">
            업소 등록 및 정보 수정 문의
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            사이트에 업소를 등록하거나 가격·주소·영업시간 등의 정보 수정이 필요한 경우 문의 채널을 이용하세요.
          </p>

          <div className="flex justify-center">
            <ContactButtons className="mt-8" />
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-left">

  <h3 className="text-2xl font-black text-white">
    태국 유흥 자주 묻는 질문
  </h3>

  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">

    <details className="group border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">
        <span className="mr-4 text-sm text-red-400">Q</span>
        <span className="flex-1">태국 한인 유흥은 어느 도시가 좋나요?</span>
        <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
        방콕과 파타야가 대표적인 지역입니다. 방콕은 수쿰빗을 중심으로 다양한 업소를
        찾아볼 수 있으며, 파타야는 여행과 함께 유흥을 즐기려는 분들이 많이 찾는 지역입니다.
      </div>
    </details>


    <details className="group border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">
        <span className="mr-4 text-sm text-red-400">Q</span>
        <span className="flex-1">태국 마사지 가격은 보통 얼마인가요?</span>
        <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
        마사지 종류와 지역, 업소에 따라 가격이 다릅니다. 방문 전 가격과 이용시간,
        추가 비용 여부를 확인하는 것이 좋습니다.
      </div>
    </details>


    <details className="group border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">
        <span className="mr-4 text-sm text-red-400">Q</span>
        <span className="flex-1">한국어 가능한 곳을 어떻게 찾나요?</span>
        <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
        업소 상세 페이지에서 직원 언어와 이용 가능한 서비스를 확인해 보세요.
        방문 전에 전화나 상담 채널을 통해 한국어 응대가 가능한지도 확인하는 것을 추천합니다.
      </div>
    </details>


    <details className="group border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">
        <span className="mr-4 text-sm text-red-400">Q</span>
        <span className="flex-1">호객 행위를 피하려면 어떻게 해야 하나요?</span>
        <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
        방문 전에 업소의 위치와 가격 정보를 미리 확인하고, 현장에서 제시되는
        가격과 조건도 이용 전에 다시 확인하는 것이 좋습니다.
      </div>
    </details>


    <details className="group">
      <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">
        <span className="mr-4 text-sm text-red-400">Q</span>
        <span className="flex-1">태국 한인 유흥 업소는 어떻게 등록하나요?</span>
        <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">
        업소 등록을 원하시는 경우 아래 상담 채널을 통해 업소명, 위치, 연락처,
        영업시간 및 대표 이미지 등의 정보를 보내주세요. 확인 후 등록 절차를 안내해 드립니다.
      </div>
    </details>

  </div>
</div>

        </div>
      </section>
    </main>
  );
}

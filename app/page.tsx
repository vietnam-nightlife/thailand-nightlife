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
              태국에서 <br /><span className="red">눈탱이 맞지 마세요.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              방콕과 파타야에서 이용할 수 있는 마사지와 가라오케 정보를 지역별로 확인하세요.
              가격, 위치, 영업시간 등 여행자가 필요한 정보를 한곳에서 비교할 수 있도록 구성했습니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#cities" className="rounded-xl bg-red-600 px-7 py-4 text-sm font-black hover:bg-red-500">지역 선택하기</a>
              <a href="#popular" className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-black hover:bg-white/10">인기 업소 보기</a>
            </div>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-3 gap-3">
            {[
              ["김민진", "주요 지역"], ["김종서", "주요 카테고리"], ["김민규", "정보 확인"]
            ].map(([n, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
                <div className="text-2xl font-black">{n}</div>
                <div className="mt-1 text-xs text-zinc-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="container py-24">
        <div className="text-xs font-black tracking-[.3em] red">DESTINATIONS</div>
        <h2 className="mt-3 text-4xl font-black">어느 지역을 찾으세요?</h2>
        <p className="mt-4 text-sm text-zinc-500">방콕과 파타야 정보를 지역별로 확인할 수 있습니다.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cities.map((city) => <CityCard key={city.slug} city={city} />)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="container py-24">
          <div className="text-xs font-black tracking-[.3em] red">CATEGORIES</div>
          <h2 className="mt-3 text-4xl font-black">무엇을 찾으세요?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a href="/bangkok/massage" className="card-hover rounded-3xl border border-white/10 bg-[#111] p-10">
              <div className="text-5xl">💆</div>
              <h3 className="mt-8 text-2xl font-black">마사지</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">방콕과 파타야의 마사지 정보를 지역별로 확인하세요.</p>
              <div className="mt-8 text-sm font-black red">마사지 보기 →</div>
            </a>
            <a href="/bangkok/karaoke" className="card-hover rounded-3xl border border-white/10 bg-[#111] p-10">
              <div className="text-5xl">🎤</div>
              <h3 className="mt-8 text-2xl font-black">가라오케</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">방콕과 파타야의 가라오케 정보를 지역별로 확인하세요.</p>
              <div className="mt-8 text-sm font-black red">가라오케 보기 →</div>
            </a>
          </div>
        </div>
      </section>

      <section id="popular" className="container py-24">
        <div className="text-xs font-black tracking-[.3em] red">FEATURED</div>
        <h2 className="mt-3 text-4xl font-black">추천 업소</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((place) => <PlaceCard key={place.slug} place={place} />)}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#0c0c0c]">
        <div className="container py-24 text-center">
          <div className="text-xs font-black tracking-[.3em] red">CONTACT</div>
          <h2 className="mt-4 text-3xl font-black">업소 등록 및 정보 수정 문의</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            사이트에 업소를 등록하거나 가격·주소·영업시간 등의 정보 수정이 필요한 경우 문의 채널을 이용하세요.
          </p>
          <ContactButtons className="mt-8" />
        </div>
      </section>
    </main>
  );
}

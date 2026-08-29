"use client";

import { useState } from "react";

const GITHUB_IMAGE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/ecogirl/pattaya";

const profiles = Array.from({ length: 11 }, (_, i) => {
  const number = i + 1;

  return {
    name: `파타야 에코걸 ${number}`,
    image: `${GITHUB_IMAGE}/파타야%20에코걸${number}.webp`,
  };
});

export default function PattayaEcoGirlPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? profiles.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === profiles.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* 상단 소개 */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="container py-14 sm:py-20">

          <div className="mb-3 text-sm font-black tracking-[0.25em] text-red-500">
            PATTAYA
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            파타야 에코걸
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            파타야 여행 일정에 맞춰 다양한 동행 프로필을 확인할 수 있습니다.
            원하는 사진을 클릭하면 크게 확인할 수 있습니다.
          </p>

        </div>
      </section>


      {/* 사진 목록 */}
      <section className="container py-10 sm:py-14">

        <div className="mb-8">
          <h2 className="text-xl font-black sm:text-2xl">
            파타야 에코걸
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            사진을 클릭하면 크게 볼 수 있습니다.
          </p>
        </div>


        {/* 사진 카드 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {profiles.map((profile, index) => (
            <button
              key={profile.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#101010]"
            >
              <div className="aspect-[3/4] overflow-hidden">

                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>
            </button>
          ))}

        </div>

      </section>


      {/* =========================
          사진 크게 보기
      ========================== */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedIndex(null)}
        >

          {/* 닫기 */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-3xl text-white hover:bg-black"
          >
            ×
          </button>


          {/* 왼쪽 화살표 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-4xl text-white hover:bg-black sm:left-6"
          >
            ‹
          </button>


          {/* 큰 사진 */}
          <img
            src={profiles[selectedIndex].image}
            alt={profiles[selectedIndex].name}
            className="max-h-[90vh] max-w-[85vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />


          {/* 오른쪽 화살표 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-4xl text-white hover:bg-black sm:right-6"
          >
            ›
          </button>


          {/* 사진 번호 */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white">
            {selectedIndex + 1} / {profiles.length}
          </div>

        </div>
      )}

    </main>
  );
}

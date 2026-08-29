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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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


        {/* 사진 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {profiles.map((profile) => (
            <button
              key={profile.name}
              type="button"
              onClick={() => setSelectedImage(profile.image)}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#101010] text-left"
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


      {/* 크게 보기 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="파타야 에코걸"
            className="max-h-[92vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </main>
  );
}

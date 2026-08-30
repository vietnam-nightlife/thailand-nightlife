"use client";

import { useState } from "react";

const profiles = Array.from({ length: 18 }, (_, index) => {
  const number = index + 1;

  return {
    number,
    name: `방콕 에코걸 ${number}`,
    image: `https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/ecogirl/bangkok/%EB%B0%A9%EC%BD%95%20%EC%97%90%EC%BD%94%EA%B1%B8${number}.webp`,
  };
});

export default function BangkokEcoGirlPage() {
  // 메인 프로필은 8번
  const [selected, setSelected] = useState(8);

  const currentProfile = profiles[selected - 1];

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="container mx-auto px-5 py-12 text-center sm:py-16">

          <div className="mb-4 text-xs font-black tracking-[0.3em] text-red-500 sm:text-sm">
            BANGKOK ECO GIRL
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            방콕 에코걸
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            방콕 여행과 함께 즐길 수 있는 다양한 에코걸 프로필을
            <br className="hidden sm:block" />
            확인해보세요.
          </p>

        </div>
      </section>


      {/* =====================================================
          MAIN PROFILE
      ====================================================== */}
      <section className="container mx-auto px-5 py-10 sm:py-14">

        <div className="mx-auto max-w-5xl">

          {/* 메인 이미지 */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

            <div className="grid md:grid-cols-[1fr_1fr]">

              {/* 사진 */}
              <div className="relative aspect-[3/4] bg-black md:aspect-auto md:min-h-[650px]">

                <img
                  src={currentProfile.image}
                  alt={currentProfile.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* 아래쪽 그라데이션 */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

                {/* 번호 */}
                <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-bold backdrop-blur">
                  PROFILE {currentProfile.number}
                </div>

              </div>


              {/* 설명 */}
              <div className="flex flex-col justify-center p-7 sm:p-10">

                <div className="text-xs font-black tracking-[0.3em] text-red-500">
                  BANGKOK
                </div>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  {currentProfile.name}
                </h2>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  방콕 여행 일정에 맞춰 함께 시간을 보내며
                  관광, 식사, 쇼핑 등 다양한 여행 일정을
                  즐길 수 있습니다.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-2">

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-zinc-300">
                    ✓ 방콕 시내
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-zinc-300">
                    ✓ 관광 동행
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-zinc-300">
                    ✓ 식사 · 쇼핑
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-zinc-300">
                    ✓ 여행 일정
                  </div>

                </div>

                <div className="mt-8 text-sm font-black text-red-500">
                  프로필을 선택해보세요 →
                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              PROFILE LIST
          ====================================================== */}
          <div className="mt-12">

            <div className="mb-6 flex items-end justify-between">

              <div>
                <div className="text-xs font-black tracking-[0.25em] text-red-500">
                  PROFILE
                </div>

                <h3 className="mt-2 text-2xl font-black">
                  방콕 에코걸 프로필
                </h3>
              </div>

              <div className="text-xs font-bold text-zinc-500">
                총 18명
              </div>

            </div>


            {/* 18명 */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

              {profiles.map((profile) => {

                const isSelected = selected === profile.number;

                return (
                  <button
                    key={profile.number}
                    type="button"
                    onClick={() => setSelected(profile.number)}
                    className={`group overflow-hidden rounded-2xl border bg-[#101010] text-left transition duration-300 ${
                      isSelected
                        ? "border-red-500"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >

                    {/* 프로필 사진 */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-black">

                      <img
                        src={profile.image}
                        alt={profile.name}
                        loading={profile.number === 8 ? "eager" : "lazy"}
                        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                          isSelected
                            ? "scale-[1.02]"
                            : "group-hover:scale-[1.03]"
                        }`}
                      />

                      {/* 선택된 프로필 표시 */}
                      {isSelected && (
                        <div className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-[10px] font-black">
                          SELECTED
                        </div>
                      )}

                    </div>


                    {/* 이름 */}
                    <div className="px-4 py-3">

                      <div className="text-[10px] font-black tracking-[0.2em] text-red-500">
                        PROFILE {profile.number}
                      </div>

                      <div className="mt-1 text-sm font-black text-white">
                        {profile.name}
                      </div>

                    </div>

                  </button>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM INFO
      ====================================================== */}
      <section className="border-t border-white/10 bg-[#090909]">

        <div className="container mx-auto px-5 py-12 text-center">

          <div className="text-xs font-black tracking-[0.25em] text-red-500">
            BANGKOK TRAVEL COMPANION
          </div>

          <h3 className="mt-3 text-xl font-black sm:text-2xl">
            방콕 여행을 더욱 편하게
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            여행 일정과 원하는 스타일에 맞춰
            편하게 문의하실 수 있습니다.
          </p>

        </div>

      </section>

    </main>
  );
}

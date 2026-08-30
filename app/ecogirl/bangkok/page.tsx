"use client";

import { useState } from "react";

const GITHUB_IMAGE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/ecogirl/bangkok";

const profiles = [
  {
    number: 1,
    name: "방콕 에코걸 1",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸1.webp")}`,
  },
  {
    number: 2,
    name: "방콕 에코걸 2",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸2.webp")}`,
  },
  {
    number: 3,
    name: "방콕 에코걸 3",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸3.webp")}`,
  },
  {
    number: 4,
    name: "방콕 에코걸 4",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸4.webp")}`,
  },
  {
    number: 5,
    name: "방콕 에코걸 5",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸5.webp")}`,
  },
  {
    number: 6,
    name: "방콕 에코걸 6",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸6.webp")}`,
  },
  {
    number: 7,
    name: "방콕 에코걸 7",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸7.webp")}`,
  },
  {
    number: 8,
    name: "방콕 에코걸 8",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸8.webp")}`,
  },
  {
    number: 9,
    name: "방콕 에코걸 9",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸9.webp")}`,
  },
  {
    number: 10,
    name: "방콕 에코걸 10",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸10.webp")}`,
  },
  {
    number: 11,
    name: "방콕 에코걸 11",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸11.webp")}`,
  },
  {
    number: 12,
    name: "방콕 에코걸 12",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸12.webp")}`,
  },
  {
    number: 13,
    name: "방콕 에코걸 13",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸13.webp")}`,
  },
  {
    number: 14,
    name: "방콕 에코걸 14",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸14.webp")}`,
  },
  {
    number: 15,
    name: "방콕 에코걸 15",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸15.webp")}`,
  },
  {
    number: 16,
    name: "방콕 에코걸 16",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸16.webp")}`,
  },
  {
    number: 17,
    name: "방콕 에코걸 17",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸17.webp")}`,
  },
  {
    number: 18,
    name: "방콕 에코걸 18",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("방콕 에코걸18.webp")}`,
  },

  // 실제 GitHub 파일명은 30~39
  {
    number: 19,
    name: "방콕 에코걸 19",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸30.webp")}`,
  },
  {
    number: 20,
    name: "방콕 에코걸 20",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸31.webp")}`,
  },
  {
    number: 21,
    name: "방콕 에코걸 21",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸32.webp")}`,
  },
  {
    number: 22,
    name: "방콕 에코걸 22",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸33.webp")}`,
  },
  {
    number: 23,
    name: "방콕 에코걸 23",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸34.webp")}`,
  },
  {
    number: 24,
    name: "방콕 에코걸 24",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸35.webp")}`,
  },
  {
    number: 25,
    name: "방콕 에코걸 25",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸36.webp")}`,
  },
  {
    number: 26,
    name: "방콕 에코걸 26",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸37.webp")}`,
  },
  {
    number: 27,
    name: "방콕 에코걸 27",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸38.webp")}`,
  },
  {
    number: 28,
    name: "방콕 에코걸 28",
    image: `${GITHUB_IMAGE}/${encodeURIComponent("에코걸39.webp")}`,
  },
];

export default function BangkokEcoGirlPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedIndex(null);
  };

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

      {/* HERO */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="container mx-auto px-5 py-14 sm:py-20">

          <div className="mb-3 text-sm font-black tracking-[0.25em] text-red-500">
            BANGKOK
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            방콕 에코걸
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            방콕 여행 일정에 맞춰 다양한 동행 프로필을
            확인할 수 있습니다.
            <br className="hidden sm:block" />
            원하는 사진을 클릭하면 큰 화면으로 확인할 수 있습니다.
          </p>

        </div>
      </section>


      {/* PROFILE LIST */}
      <section className="container mx-auto px-5 py-10 sm:py-14">

        <div className="mb-8">
          <h2 className="text-xl font-black sm:text-2xl">
            방콕 에코걸
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            사진을 클릭하면 크게 볼 수 있습니다.
          </p>
        </div>


        {/* PROFILE GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {profiles.map((profile, index) => (
            <button
              key={profile.number}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="
                group
                block
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#101010]
                text-left
                transition
                duration-300
                hover:border-red-500/50
              "
            >

              <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">

                <img
                  src={profile.image}
                  alt={profile.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

            </button>
          ))}

        </div>

      </section>


      {/* IMAGE MODAL */}
      {selectedIndex !== null && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
          "
          onClick={closeModal}
        >

          {/* CLOSE */}
          <button
            type="button"
            aria-label="닫기"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-black/70
              text-3xl
              font-light
              text-white
              transition
              hover:bg-black
              sm:right-6
              sm:top-6
            "
          >
            ×
          </button>


          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="이전 사진"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/70
              text-4xl
              font-light
              text-white
              transition
              hover:bg-red-600
              sm:left-6
              sm:h-14
              sm:w-14
            "
          >
            ‹
          </button>


          {/* IMAGE */}
          <div
            className="
              flex
              max-h-[92vh]
              max-w-[85vw]
              items-center
              justify-center
            "
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={profiles[selectedIndex].image}
              alt={profiles[selectedIndex].name}
              className="
                max-h-[90vh]
                max-w-[85vw]
                rounded-xl
                object-contain
                shadow-2xl
              "
            />

          </div>


          {/* NEXT */}
          <button
            type="button"
            aria-label="다음 사진"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/70
              text-4xl
              font-light
              text-white
              transition
              hover:bg-red-600
              sm:right-6
              sm:h-14
              sm:w-14
            "
          >
            ›
          </button>


          {/* NUMBER */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              rounded-full
              bg-black/80
              px-4
              py-2
              text-sm
              font-bold
              text-white
            "
          >
            {selectedIndex + 1} / {profiles.length}
          </div>

        </div>

      )}

    </main>
  );
}

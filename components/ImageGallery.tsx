"use client";

import { useEffect, useState } from "react";

type ImageGalleryProps = {
  images: string[];
  name: string;
};

export default function ImageGallery({
  images,
  name,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const close = () => {
    setSelectedIndex(null);
  };

  const previous = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  const next = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      {/* 썸네일 */}
      <div className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-6">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111] focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <img
              src={image}
              alt={`${name} 사진 ${index + 1}`}
              className="h-24 w-full object-cover transition duration-300 group-hover:scale-105 md:h-28"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
              <span className="text-xl opacity-0 transition group-hover:opacity-100">
                🔍
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* 확대 화면 */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* 닫기 */}
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur hover:bg-white/20"
            aria-label="닫기"
          >
            ×
          </button>

          {/* 이전 */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur hover:bg-white/20 md:left-8"
            aria-label="이전 사진"
          >
            ‹
          </button>

          {/* 큰 이미지 */}
          <div
            className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={images[selectedIndex]}
              alt={`${name} 사진 ${selectedIndex + 1}`}
              className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            />

            {/* 사진 번호 */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs text-white">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          {/* 다음 */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur hover:bg-white/20 md:right-8"
            aria-label="다음 사진"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

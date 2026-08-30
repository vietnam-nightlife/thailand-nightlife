import Image from "next/image";

const GITHUB_IMAGE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/pattaya/massage/%5Bslug%5D";

const images = [
  {
    src: `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%EC%99%B8%EA%B4%80.webp`,
    alt: "파타야 드래곤 스웨디시 외관",
  },
  {
    src: `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%EB%A6%AC%EC%85%89%EC%85%98.webp`,
    alt: "파타야 드래곤 스웨디시 리셉션",
  },
  {
    src: `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%ED%9C%B4%EA%B2%8C%EC%8B%A4.webp`,
    alt: "파타야 드래곤 스웨디시 휴게실",
  },
  {
    src: `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%EB%A3%B81.webp`,
    alt: "파타야 드래곤 스웨디시 룸1",
  },
  {
    src: `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%EB%A3%B82.webp`,
    alt: "파타야 드래곤 스웨디시 룸2",
  },
  {
    src: `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%EB%A3%B83.webp`,
    alt: "파타야 드래곤 스웨디시 룸3",
  },
];

const priceImage = `${GITHUB_IMAGE}/%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C%20%EA%B0%80%EA%B2%A9%ED%91%9C.webp`;

const priceList = [
  {
    name: "A",
    description: "마사지 + 센슈얼 + 핸드",
    detail: "센슈얼 → 앞/뒤 전신애무 서비스 기본 포함",
    time: "총 60분",
    price: "2,500바트",
  },
  {
    name: "B",
    description: "마사지 + 센슈얼 + @",
    detail: "센슈얼 → 앞/뒤 전신애무 서비스 기본 포함",
    time: "총 60분",
    price: "3,500바트",
  },
  {
    name: "C",
    description: "전문 오일마사지 60분 + 센슈얼 + 핸드",
    detail: "전문오일마사지 60분 + 센슈얼 + 핸드",
    time: "총 90분",
    price: "3,000바트",
  },
  {
    name: "D",
    description: "전문 오일마사지 60분 + 센슈얼 + @",
    detail: "전문오일마사지 60분 + 센슈얼 + @",
    time: "총 90분",
    price: "4,000바트",
  },
];

export default function DragonSwedishPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* HERO */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">

          <div className="mb-3 text-xs font-black tracking-[0.3em] text-red-500">
            PATTAYA · MASSAGE
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            파타야 드래곤 스웨디시 마사지
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
            파타야에서 스웨디시 마사지를 찾는 분들을 위한
            드래곤 스웨디시 마사지 정보를 정리했습니다.
            매장 사진과 가격표를 함께 확인할 수 있어
            방문 전에 기본적인 정보를 한눈에 살펴보기 좋습니다.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">

        {/* BASIC INFO */}
        <section className="mb-12">

          <div className="mb-6">
            <div className="text-xs font-black tracking-[0.25em] text-red-500">
              ABOUT
            </div>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              업체 정보
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-8 text-zinc-400 sm:text-base">
              파타야 드래곤 스웨디시 마사지입니다.
              매장 외관과 리셉션, 휴게공간, 마사지룸 등의
              실제 사진을 확인할 수 있으며,
              방문 전 위치와 영업시간, 가격정보를 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="text-xs font-black tracking-wider text-zinc-500">
                LOCATION
              </div>

              <div className="mt-3 text-lg font-black">
                파타야
              </div>

              <p className="mt-2 text-sm text-zinc-500">
                Pattaya, Chon Buri, Thailand
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="text-xs font-black tracking-wider text-zinc-500">
                CATEGORY
              </div>

              <div className="mt-3 text-lg font-black">
                스웨디시 마사지
              </div>

              <p className="mt-2 text-sm text-zinc-500">
                Swedish Massage
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="text-xs font-black tracking-wider text-zinc-500">
                OPENING HOURS
              </div>

              <div className="mt-3 text-lg font-black">
                11:00 - 00:00
              </div>

              <p className="mt-2 text-sm text-zinc-500">
                방문 전 영업 여부 확인 권장
              </p>
            </div>

          </div>

        </section>

        {/* PRICE */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.25em] text-red-500">
              PRICE
            </div>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              파타야 드래곤 스웨디시 가격표
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              아래 가격은 제공받은 가격표를 기준으로 정리한 내용입니다.
              현장 상황에 따라 변경될 수 있으니 방문 전 확인을 권장합니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {priceList.map((item) => (
              <div
                key={item.name}
                className="relative overflow-hidden rounded-2xl border border-[#8b6a32]/50 bg-gradient-to-br from-[#17130c] to-[#0d0d0d] p-6"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <div className="text-4xl font-black text-[#d5a94f]">
                      {item.name}
                    </div>

                    <div className="mt-3 text-base font-bold">
                      {item.description}
                    </div>
                  </div>

                  <div className="whitespace-nowrap rounded-lg border border-[#8b6a32] px-3 py-2 text-sm font-black text-[#e2bc68]">
                    {item.time}
                  </div>

                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-sm leading-6 text-zinc-400">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 text-2xl font-black text-[#e2bc68]">
                  {item.price}
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* PRICE IMAGE */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.25em] text-red-500">
              MENU
            </div>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              공식 가격표 이미지
            </h2>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#8b6a32]/40 bg-[#0b0b0b]">

            <Image
              src={priceImage}
              alt="파타야 드래곤 스웨디시 가격표"
              width={1024}
              height={1536}
              className="h-auto w-full"
              unoptimized
            />

          </div>

        </section>

        {/* GALLERY */}
        <section className="mb-14">

          <div className="mb-7">

            <div className="text-xs font-black tracking-[0.25em] text-red-500">
              GALLERY
            </div>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              룸 & 시설 사진
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              외관, 리셉션, 휴게실과 룸 내부 사진을 확인해보세요.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

            {images.map((image, index) => (
              <div
                key={image.src}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#101010] ${
                  index === 0 ? "col-span-2 sm:col-span-2" : ""
                }`}
              >

                <div className="relative aspect-[4/3]">

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* INFORMATION */}
        <section className="rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-8">

          <div className="text-xs font-black tracking-[0.25em] text-red-500">
            INFORMATION
          </div>

          <h2 className="mt-2 text-xl font-black sm:text-2xl">
            방문 전 확인사항
          </h2>

          <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">

            <p>
              • 가격과 이용 가능한 코스는 현장 상황에 따라 변경될 수 있습니다.
            </p>

            <p>
              • 영업시간 및 이용 가능 여부는 방문 전에 확인하는 것을 권장합니다.
            </p>

            <p>
              • 매장 사진은 실제 시설과 분위기를 확인하기 위한 참고용입니다.
            </p>

            <p>
              • 제공된 가격표를 기준으로 작성되었으며 최신 정보와 차이가 있을 수 있습니다.
            </p>

          </div>

        </section>

      </section>

    </main>
  );
}

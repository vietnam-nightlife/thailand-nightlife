import Image from "next/image";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/pattaya/massage/%5Bslug%5D";

const imageUrl = (name: string) =>
  `${IMAGE_BASE}/${encodeURIComponent(name)}`;

const gallery = [
  {
    name: "파타야 드래곤 스웨디시 외관.webp",
    alt: "파타야 드래곤 스웨디시 외관",
  },
  {
    name: "파타야 드래곤 스웨디시 리셉션.webp",
    alt: "파타야 드래곤 스웨디시 리셉션",
  },
  {
    name: "파타야 드래곤 스웨디시 휴게실.webp",
    alt: "파타야 드래곤 스웨디시 휴게실",
  },
  {
    name: "파타야 드래곤 스웨디시 룸1.webp",
    alt: "파타야 드래곤 스웨디시 룸 1",
  },
  {
    name: "파타야 드래곤 스웨디시 룸2.webp",
    alt: "파타야 드래곤 스웨디시 룸 2",
  },
  {
    name: "파타야 드래곤 스웨디시 룸3.webp",
    alt: "파타야 드래곤 스웨디시 룸 3",
  },
];

const prices = [
  {
    course: "A",
    title: "마사지 + 스웨디시 + 핸드",
    time: "60분",
    price: "2,500",
  },
  {
    course: "B",
    title: "마사지 + 스웨디시 + 추가 서비스",
    time: "60분",
    price: "3,500",
  },
  {
    course: "C",
    title: "전문 오일마사지 60분 + 스웨디시 + 핸드",
    time: "90분",
    price: "3,000",
  },
  {
    course: "D",
    title: "전문 오일마사지 60분 + 스웨디시 + 추가 서비스",
    time: "90분",
    price: "4,000",
  },
];

export default function PattayaDragonSwedishPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">

          <div className="mb-4 text-xs font-black tracking-[0.3em] text-red-500">
            PATTAYA · MASSAGE
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            파타야 드래곤 스웨디시
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
            파타야에서 스웨디시 마사지를 찾는 여행객들을 위한
            드래곤 스웨디시 이용 정보를 정리했습니다.
            매장 사진과 가격표를 한눈에 확인하고 방문 전에
            필요한 정보를 확인해보세요.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400">
              ★ 4.5
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-zinc-300">
              파타야
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-zinc-300">
              스웨디시 마사지
            </span>
          </div>

        </div>
      </section>


      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">

        {/* INTRO */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              ABOUT
            </div>

            <h2 className="mt-2 text-3xl font-black">
              드래곤 스웨디시
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-6 sm:p-8">

            <p className="text-sm leading-8 text-zinc-300 sm:text-base">
              파타야 드래곤 스웨디시는 파타야 지역에서
              스웨디시 마사지를 찾는 여행객들이 참고할 수 있도록
              매장 정보와 이용 가격을 정리한 페이지입니다.
            </p>

            <p className="mt-4 text-sm leading-8 text-zinc-400 sm:text-base">
              매장 외관과 리셉션, 휴게공간 및 룸 사진을 통해
              방문 전에 실제 매장 분위기를 확인할 수 있으며,
              아래에서 코스별 가격도 함께 확인할 수 있습니다.
            </p>

          </div>

        </section>


        {/* BASIC INFO */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              INFORMATION
            </div>

            <h2 className="mt-2 text-3xl font-black">
              기본 정보
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="text-xs font-bold tracking-wider text-zinc-500">
                위치
              </div>

              <div className="mt-3 text-lg font-black">
                파타야
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Pattaya 3rd Road
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="text-xs font-bold tracking-wider text-zinc-500">
                업종
              </div>

              <div className="mt-3 text-lg font-black">
                스웨디시 마사지
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Swedish Massage
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="text-xs font-bold tracking-wider text-zinc-500">
                영업시간
              </div>

              <div className="mt-3 text-lg font-black">
                11:00 - 00:00
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                방문 전 확인 권장
              </div>
            </div>

          </div>

        </section>


        {/* PRICE */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              PRICE
            </div>

            <h2 className="mt-2 text-3xl font-black">
              파타야 드래곤 스웨디시 가격
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              제공받은 가격표를 기준으로 정리한 코스별 가격입니다.
            </p>
          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            {prices.map((item) => (
              <div
                key={item.course}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-6 sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <div>
                    <div className="text-sm font-black tracking-widest text-red-500">
                      COURSE {item.course}
                    </div>

                    <h3 className="mt-3 max-w-sm text-lg font-black leading-7">
                      {item.title}
                    </h3>
                  </div>

                  <div className="ml-4 shrink-0 text-right">

                    <div className="text-xs text-zinc-500">
                      {item.time}
                    </div>

                    <div className="mt-1 text-2xl font-black text-red-500">
                      {item.price}
                      <span className="ml-1 text-sm">
                        THB
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>


        {/* PRICE IMAGE */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              MENU
            </div>

            <h2 className="mt-2 text-3xl font-black">
              드래곤 스웨디시 가격표
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              실제 제공받은 가격표 이미지입니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

            <Image
              src={imageUrl("파타야 드래곤 스웨디시 가격표.webp")}
              alt="파타야 드래곤 스웨디시 가격표"
              width={1024}
              height={1536}
              priority
              unoptimized
              className="mx-auto h-auto w-full max-w-4xl object-contain"
            />

          </div>

        </section>


        {/* GALLERY */}
        <section className="mb-14">

          <div className="mb-7">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              GALLERY
            </div>

            <h2 className="mt-2 text-3xl font-black">
              매장 사진
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              파타야 드래곤 스웨디시의 외관과 내부 시설을
              사진으로 확인할 수 있습니다.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

            {gallery.map((image, index) => (
              <div
                key={image.name}
                className={`overflow-hidden rounded-2xl border border-white/10 bg-[#101010] ${
                  index === 0
                    ? "col-span-2 sm:col-span-2"
                    : ""
                }`}
              >

                <Image
                  src={imageUrl(image.name)}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  unoptimized
                  className="aspect-[4/3] h-full w-full object-cover"
                />

              </div>
            ))}

          </div>

        </section>


        {/* GUIDE */}
        <section className="rounded-3xl border border-white/10 bg-[#101010] p-6 sm:p-8">

          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            GUIDE
          </div>

          <h2 className="mt-2 text-2xl font-black">
            방문 전 확인사항
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-2xl bg-white/[0.03] p-5">
              <h3 className="font-black">
                가격 확인
              </h3>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                가격은 제공받은 가격표를 기준으로 작성했으며
                현장 상황에 따라 변경될 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] p-5">
              <h3 className="font-black">
                영업시간 확인
              </h3>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                방문 전 실제 영업 여부와 이용 가능한 코스를
                확인하는 것을 권장합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] p-5">
              <h3 className="font-black">
                매장 사진
              </h3>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                사진은 방문 전 매장 분위기와 시설을 확인하기 위한
                참고용으로 이용해 주세요.
              </p>
            </div>

          </div>

        </section>

      </section>

    </main>
  );
}

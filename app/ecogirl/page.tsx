import Link from "next/link";

const sections = [
  {
    title: "방콕 에코걸",
    subtitle: "BANGKOK",
    description:
      "방콕 여행 일정에 맞춰 식사, 야시장, 관광, 쇼핑 등 다양한 일정을 함께 즐길 수 있는 동행 서비스를 안내합니다.",
    places: [
      "방콕 시내 관광",
      "왕궁 · 왓 아룬 · 왓 포",
      "쇼핑 및 맛집",
      "야시장 및 나이트라이프",
    ],
  },
  {
    title: "파타야 에코걸",
    subtitle: "PATTAYA",
    description:
      "파타야의 해변과 관광 명소, 야시장, 풀빌라 등 여행 일정에 맞는 다양한 동행 코스를 확인할 수 있습니다.",
    places: [
      "파타야 해변",
      "진리의 성전",
      "빅 부다",
      "야시장 · 클럽 · 풀빌라",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "사전 문의",
    description:
      "이용하고 싶은 날짜와 지역, 인원 및 원하는 일정 등을 미리 문의합니다.",
  },
  {
    number: "02",
    title: "프로필 확인",
    description:
      "일정에 맞는 동행 프로필과 기본 정보를 확인한 후 원하는 스타일을 선택합니다.",
  },
  {
    number: "03",
    title: "일정 조정",
    description:
      "선택한 일정과 가능한 시간을 확인하고 구체적인 만남 장소와 시간을 조정합니다.",
  },
  {
    number: "04",
    title: "일정 진행",
    description:
      "약속한 장소에서 만나 미리 정한 여행 및 동행 일정을 진행합니다.",
  },
];

const tips = [
  {
    title: "풀빌라 & 파티",
    description:
      "파타야는 다양한 풀빌라가 있어 여러 명이 함께 여행하는 경우 숙소와 여행 일정을 연계하기 좋습니다.",
  },
  {
    title: "야시장 데이트",
    description:
      "방콕과 파타야에는 다양한 야시장이 있어 식사와 쇼핑을 함께 즐기는 일정으로 구성하기 좋습니다.",
  },
  {
    title: "클럽 & 나이트라이프",
    description:
      "저녁 시간에는 태국의 다양한 나이트라이프를 경험할 수 있어 여행 일정에 맞춰 선택할 수 있습니다.",
  },
  {
    title: "관광 명소",
    description:
      "방콕의 왕궁과 왓 아룬, 파타야의 진리의 성전과 빅 부다 등 대표 관광지를 일정에 넣을 수 있습니다.",
  },
];

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-[#070707] to-[#070707]" />

        <div className="container relative py-20 md:py-28">

          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-black tracking-[0.25em] text-red-400">
              THAILAND ECO GIRL GUIDE
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              태국 에코걸
              <br />
              <span className="red">방콕 · 파타야</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              방콕과 파타야 여행을 준비하는 분들을 위한
              동행 서비스와 여행 일정 정보를 한곳에서 확인하세요.
              지역별 특징과 이용 방법, 추천 여행 코스를 정리했습니다.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          지역 선택
      ========================== */}
      <section className="container py-14">

        <div className="mb-8">
          <div className="text-xs font-black tracking-[0.2em] text-red-400">
            DESTINATION
          </div>

          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            방콕 · 파타야 에코걸
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            여행 목적과 일정에 맞춰 지역을 선택해보세요.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {sections.map((section) => {
  const href =
    section.subtitle === "BANGKOK"
      ? "/ecogirl/bangkok"
      : "/ecogirl/pattaya";

  return (
    <Link
      key={section.title}
      href={href}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/20">

        {/* =========================
            사진 영역
        ========================== */}
        <div className="relative h-64 bg-gradient-to-br from-zinc-900 via-[#111] to-black">

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <div className="text-xs font-black tracking-[0.25em] text-red-400">
              {section.subtitle}
            </div>

            <h3 className="mt-2 text-2xl font-black text-white">
              {section.title}
            </h3>
          </div>

        </div>

        {/* =========================
            설명
        ========================== */}
        <div className="p-6">

          <p className="text-sm leading-7 text-zinc-400">
            {section.description}
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {section.places.map((place) => (
              <div
                key={place}
                className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-bold text-zinc-300"
              >
                ✓ {place}
              </div>
            ))}
          </div>

          {/* 프로필 보기 */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-sm font-black text-red-400">
              프로필 보기
            </span>

            <span className="text-lg font-black text-red-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>

      </article>
    </Link>
  );
})}

              {/* 사진 영역 - 나중에 이미지 추가 */}
              <div className="relative h-64 bg-gradient-to-br from-zinc-900 via-[#111] to-black">

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="text-xs font-black tracking-[0.25em] text-red-400">
                    {section.subtitle}
                  </div>

                  <h3 className="mt-2 text-2xl font-black">
                    {section.title}
                  </h3>
                </div>

              </div>

              <div className="p-6">

                <p className="text-sm leading-7 text-zinc-400">
                  {section.description}
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {section.places.map((place) => (
                    <div
                      key={place}
                      className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-bold text-zinc-300"
                    >
                      ✓ {place}
                    </div>
                  ))}
                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* =========================
          이용 방법
      ========================== */}
      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="container py-16">

          <div className="mb-10">
            <div className="text-xs font-black tracking-[0.2em] text-red-400">
              HOW IT WORKS
            </div>

            <h2 className="mt-2 text-2xl font-black md:text-3xl">
              에코걸 이용 방법
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
              처음 이용하는 분들도 쉽게 확인할 수 있도록
              기본적인 진행 순서를 정리했습니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">

            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#111] p-6"
              >
                <div className="text-3xl font-black text-red-500">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          일반 / 가라오케
      ========================== */}
      <section className="container py-16">

        <div className="mb-10">
          <div className="text-xs font-black tracking-[0.2em] text-red-400">
            SERVICE TYPE
          </div>

          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            에코걸 서비스 유형
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <article className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-sm font-black text-red-400">
              TYPE 01
            </div>

            <h3 className="mt-3 text-2xl font-black">
              일반 에코걸
            </h3>

            <p className="mt-4 text-sm leading-8 text-zinc-400">
              사전에 일정과 시간을 조율한 뒤 여행 일정에 맞춰
              동행하는 형태입니다. 원하는 지역과 여행 코스를
              미리 정할 수 있다는 점이 특징입니다.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <div>✓ 사전 일정 조율</div>
              <div>✓ 여행 일정에 맞춘 시간 선택</div>
              <div>✓ 방콕 · 파타야 이용 가능</div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-sm font-black text-red-400">
              TYPE 02
            </div>

            <h3 className="mt-3 text-2xl font-black">
              가라오케 에코걸
            </h3>

            <p className="mt-4 text-sm leading-8 text-zinc-400">
              가라오케에서 직접 선택할 수 있는 형태로,
              일반적인 사전 일정 조율 방식과 운영 방식에
              차이가 있을 수 있습니다.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <div>✓ 현장에서 직접 확인</div>
              <div>✓ 가라오케 중심 이용</div>
              <div>✓ 업소별 운영 방식 확인 필요</div>
            </div>
          </article>

        </div>
      </section>

      {/* =========================
          여행 코스
      ========================== */}
      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="container py-16">

          <div className="mb-10">
            <div className="text-xs font-black tracking-[0.2em] text-red-400">
              TRAVEL TIPS
            </div>

            <h2 className="mt-2 text-2xl font-black md:text-3xl">
              함께 즐기기 좋은 여행 코스
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              에코걸 일정과 함께 구성하기 좋은 방콕 · 파타야 여행 코스입니다.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {tips.map((tip, index) => (
              <article
                key={tip.title}
                className="rounded-2xl border border-white/10 bg-[#111] p-6"
              >
                <div className="text-xs font-black text-red-500">
                  0{index + 1}
                </div>

                <h3 className="mt-4 text-lg font-black">
                  {tip.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {tip.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          방콕 추천 코스
      ========================== */}
      <section className="container py-16">

        <div className="grid gap-6 md:grid-cols-2">

          <article className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-xs font-black tracking-[0.2em] text-red-400">
              BANGKOK
            </div>

            <h3 className="mt-3 text-2xl font-black">
              방콕 하루 여행 코스
            </h3>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-sm font-black">오전</div>
                <div className="mt-1 text-sm text-zinc-500">
                  왕궁 · 왓 포 · 왓 아룬 등 관광
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-sm font-black">오후</div>
                <div className="mt-1 text-sm text-zinc-500">
                  쇼핑 · 맛집 · 마사지
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-sm font-black">저녁</div>
                <div className="mt-1 text-sm text-zinc-500">
                  식사 · 야시장 · 나이트라이프
                </div>
              </div>

            </div>
          </article>

          {/* =========================
              파타야 추천 코스
          ========================== */}
          <article className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-xs font-black tracking-[0.2em] text-red-400">
              PATTAYA
            </div>

            <h3 className="mt-3 text-2xl font-black">
              파타야 하루 여행 코스
            </h3>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-sm font-black">오전</div>
                <div className="mt-1 text-sm text-zinc-500">
                  해변 · 카페 · 자유 일정
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-sm font-black">오후</div>
                <div className="mt-1 text-sm text-zinc-500">
                  진리의 성전 · 빅 부다 등 관광
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-sm font-black">저녁</div>
                <div className="mt-1 text-sm text-zinc-500">
                  야시장 · 식사 · 나이트라이프
                </div>
              </div>

            </div>
          </article>

        </div>
      </section>

      {/* =========================
          가격 안내
      ========================== */}
      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="container py-16">

          <div className="mb-8">
            <div className="text-xs font-black tracking-[0.2em] text-red-400">
              PRICE GUIDE
            </div>

            <h2 className="mt-2 text-2xl font-black md:text-3xl">
              가격 확인 전 참고사항
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

            <p className="text-sm leading-8 text-zinc-400">
              에코걸 및 동행 서비스의 가격과 운영 방식은 지역,
              날짜, 시간, 인원 및 선택하는 서비스에 따라 달라질 수 있습니다.
              따라서 이용 전 최신 가격과 조건을 반드시 확인하는 것을 추천합니다.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-xs text-zinc-500">
                  CHECK 01
                </div>
                <div className="mt-2 text-sm font-black">
                  최신 가격 확인
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-xs text-zinc-500">
                  CHECK 02
                </div>
                <div className="mt-2 text-sm font-black">
                  일정 및 이용 조건 확인
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <div className="text-xs text-zinc-500">
                  CHECK 03
                </div>
                <div className="mt-2 text-sm font-black">
                  결제 및 취소 조건 확인
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          주의사항
      ========================== */}
      <section className="container py-16">

        <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-7">

          <div className="text-sm font-black text-red-400">
            이용 전 확인사항
          </div>

          <h2 className="mt-3 text-2xl font-black">
            방문 전에 꼭 확인하세요
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="text-sm leading-7 text-zinc-400">
              • 실제 이용 가능한 일정인지 사전에 확인하세요.
            </div>

            <div className="text-sm leading-7 text-zinc-400">
              • 가격과 포함 범위를 이용 전에 확인하세요.
            </div>

            <div className="text-sm leading-7 text-zinc-400">
              • 만남 장소와 시간을 정확하게 확인하세요.
            </div>

            <div className="text-sm leading-7 text-zinc-400">
              • 현지 법률과 업소별 이용 규정을 준수하세요.
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          문의
      ========================== */}
      <section className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="container py-16 text-center">

          <div className="text-xs font-black tracking-[0.2em] text-red-400">
            THAILAND TRAVEL
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            방콕 · 파타야 여행을
            <br />
            더 편하게 준비하세요
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            여행 날짜와 지역을 미리 정하고 원하는 일정에 맞춰
            동행 서비스를 확인하면 보다 편리하게 여행 계획을 세울 수 있습니다.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white transition hover:bg-red-500"
          >
            문의하기 →
          </Link>

        </div>
      </section>

    </main>
  );
}

export default function GuidePage() {
  return (
    <main>
      <section className="border-b border-white/10">
        <div className="container py-16">
          <div className="text-xs font-black tracking-[.3em] text-red-500">
            BANGKOK NIGHT LIFE TRAVEL GUIDE
          </div>

          <h1 className="mt-4 text-4xl font-black">
            방콕 밤문화 여행 가이드
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            태국 방콕 여행을 준비할 때 알아두면 좋은 불건마,
            가라오케, 여행 일정과 지역별 정보를 확인해보세요.
            여행 전에 위치와 영업시간, 가격 등의 정보를 미리
            확인하면 보다 편리하게 여행을 계획할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl space-y-12">

          <div>
            <h2 className="text-3xl font-bold">
              방콕 밤문화 여행을 준비하는 방법
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              방콕은 다양한 관광지와 음식점, 마사지샵,
              엔터테인먼트 시설이 모여 있는 태국의 대표적인
              여행지입니다. 여행 전에 방문할 지역과 이동 방법,
              이용할 시설의 위치와 영업시간을 미리 확인하는 것이 좋습니다.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              방콕 불건마 이용 가이드
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              방콕에는 다양한 마사지 업체가 있으며 지역과
              마사지 종류에 따라 가격과 운영시간이 달라질 수 있습니다.
              특히 남성 전용 마사지를 방문하기 전에 업체의 위치와 영업시간, 제공되는
              서비스를 확인해보세요.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              방콕 가라오케 이용 가이드
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              방콕의 가라오케는 지역과 매장에 따라 이용 방식과
              요금이 다를 수 있습니다. 방문 전에 위치와 영업시간,
              이용요금 및 예약 가능 여부를 확인하면 편리합니다.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              방콕 밤문화 여행 시 확인할 사항
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              여행 일정에 맞춰 이동 시간을 충분히 고려하고,
              방문하려는 장소의 최신 운영 정보를 확인하세요.
              특히 주말이나 공휴일에는 영업시간이 달라질 수 있으므로
              방문 전에 다시 확인하는 것이 좋습니다.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              방콕 여행 FAQ
            </h2>

            <div className="mt-8 space-y-8">

              <div>
                <h3 className="text-xl font-semibold">
                  방콕 여행은 언제 준비하는 것이 좋나요?
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  여행 일정과 방문할 지역을 먼저 정한 뒤
                  숙소와 교통편, 방문할 장소의 운영 정보를
                  확인하는 것이 좋습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  방콕에서 불건마를 이용할 때 무엇을 확인해야 하나요?
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  인원, 위치, 영업시간, 가격, 제공되는 마사지 종류 등을
                  방문 전에 확인하는 것이 좋습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  가라오케는 예약이 필요한가요?
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  첫타임 7시~9시는 많이 붐비는 시간대로 예약이 어려울 수 있습니다.
                  미리 카카오톡이나 텔레그램으로
                  방문 전에 예약 가능 여부를 확인하는 것이 좋습니다.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

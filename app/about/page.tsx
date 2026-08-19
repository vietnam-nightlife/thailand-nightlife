export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          ABOUT
        </div>

        <h1 className="mt-4 text-4xl font-black">
          사이트 소개
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-8 text-zinc-400">

          <p>
            태국 여행과 밤문화 정보를 한곳에서 확인할 수 있도록
            만들어진 정보 제공 사이트입니다.
          </p>

          <p>
            방콕과 파타야를 중심으로 가라오케, 마사지 및
            여행에 필요한 다양한 정보를 지역별로 제공합니다.
          </p>

          <p>
            이용자들이 방문 전에 필요한 정보를 확인하고
            보다 편리하게 비교할 수 있도록 구성하고 있습니다.
          </p>

        </div>

      </div>
    </main>
  );
}

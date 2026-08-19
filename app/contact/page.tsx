export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          CONTACT
        </div>

        <h1 className="mt-4 text-4xl font-black">
          문의하기
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400">
          업소 등록, 정보 수정, 광고 및 기타 사이트 이용과 관련된
          문의사항이 있으시면 아래 상담 채널을 이용해 주세요.
        </p>

        <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">

          <a
            href="#"
            className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6 transition hover:bg-yellow-400/10"
          >
            <div className="text-lg font-bold text-yellow-300">
              카카오톡 상담
            </div>

            <div className="mt-2 text-sm text-zinc-400">
              업소 등록 및 정보 수정 문의
            </div>
          </a>

          <a
            href="#"
            className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6 transition hover:bg-cyan-400/10"
          >
            <div className="text-lg font-bold text-cyan-300">
              텔레그램 상담
            </div>

            <div className="mt-2 text-sm text-zinc-400">
              사이트 관련 문의 및 상담
            </div>
          </a>

        </div>

        <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="text-xl font-bold">
            문의 가능한 내용
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
            <li>• 업소 신규 등록 문의</li>
            <li>• 기존 업소 정보 수정 문의</li>
            <li>• 업소 삭제 요청</li>
            <li>• 광고 및 제휴 문의</li>
            <li>• 사이트 이용 관련 문의</li>
          </ul>

        </div>

      </div>
    </main>
  );
}

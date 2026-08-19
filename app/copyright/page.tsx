export default function CopyrightPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          COPYRIGHT
        </div>

        <h1 className="mt-4 text-4xl font-black">
          저작권정책
        </h1>

        <div className="mt-10 max-w-4xl space-y-10 text-sm leading-8 text-zinc-400">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              1. 저작권의 보호
            </h2>

            <p>
              본 사이트에 게시된 글, 이미지, 디자인 및 기타 콘텐츠는
              별도로 표시된 경우를 제외하고 관련 저작권법에 따라 보호됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              2. 콘텐츠의 무단 이용 금지
            </h2>

            <p>
              본 사이트의 콘텐츠를 운영자의 사전 허가 없이 복제, 수정,
              배포, 전송, 판매 또는 상업적인 목적으로 이용하는 행위를 금지합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              3. 이미지 및 외부 콘텐츠
            </h2>

            <p>
              외부에서 제공받거나 사용 허가를 받은 이미지 및 콘텐츠의 경우
              해당 권리자의 이용 조건과 저작권 정책을 따릅니다.
            </p>

            <p className="mt-4">
              저작권 또는 이용 권한과 관련하여 문제가 있는 콘텐츠를 발견한 경우
              사이트 관리자에게 문의해 주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              4. 저작권 침해 신고
            </h2>

            <p>
              본 사이트에 게시된 콘텐츠가 저작권을 침해한다고 판단되는 경우
              해당 콘텐츠의 위치와 침해 사유를 포함하여 문의해 주시기 바랍니다.
            </p>

            <p className="mt-4">
              확인된 내용에 따라 필요한 조치를 취할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              5. 콘텐츠 이용 문의
            </h2>

            <p>
              본 사이트의 콘텐츠 이용 또는 게시와 관련된 문의는
              사이트의 문의하기 또는 상담 채널을 이용해 주시기 바랍니다.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

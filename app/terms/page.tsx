export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          TERMS
        </div>

        <h1 className="mt-4 text-4xl font-black">
          서비스 이용약관
        </h1>

        <div className="mt-10 max-w-4xl space-y-10 text-sm leading-8 text-zinc-400">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제1조 목적
            </h2>

            <p>
              본 약관은 태국 여행 및 밤문화 정보를 제공하는 본 사이트의
              서비스 이용과 관련하여 필요한 사항을 규정하는 것을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제2조 서비스의 내용
            </h2>

            <p>
              본 사이트는 방콕과 파타야를 비롯한 태국 지역의 여행,
              마사지, 가라오케 및 기타 관련 정보를 제공합니다.
            </p>

            <p className="mt-4">
              사이트에서 제공되는 정보는 이용자의 편의를 위한 정보 제공 목적이며,
              실제 영업 여부와 가격, 운영시간 등은 해당 업소에 직접 확인하시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제3조 정보의 정확성
            </h2>

            <p>
              본 사이트는 정확한 정보를 제공하기 위해 노력하지만,
              업소의 가격, 영업시간, 위치 및 서비스 내용 등이 변경될 수 있습니다.
            </p>

            <p className="mt-4">
              이용자는 방문 또는 이용 전에 해당 업소에 직접 확인하는 것을 권장합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제4조 이용자의 책임
            </h2>

            <p>
              이용자는 관련 법령과 공공질서를 준수하여 서비스를 이용해야 합니다.
            </p>

            <p className="mt-4">
              이용자가 본 사이트에서 제공하는 정보를 이용하여 발생한
              개인적인 거래 또는 이용 결과에 대해서는 이용자와 해당 업체 간의
              책임으로 처리될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제5조 저작권
            </h2>

            <p>
              본 사이트에 게시된 텍스트, 이미지, 디자인 및 기타 콘텐츠의
              저작권은 별도로 표시된 경우를 제외하고 사이트 또는 정당한 권리자에게 있습니다.
            </p>

            <p className="mt-4">
              사전 허가 없이 콘텐츠를 무단으로 복제하거나 배포하는 행위를 금지합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제6조 약관의 변경
            </h2>

            <p>
              본 사이트는 필요한 경우 서비스 운영을 위해 본 약관을 변경할 수 있습니다.
              변경된 약관은 사이트에 게시한 시점부터 적용될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              제7조 문의
            </h2>

            <p>
              서비스 이용과 관련하여 문의사항이 있는 경우
              사이트의 문의하기 또는 상담 채널을 이용해 주시기 바랍니다.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

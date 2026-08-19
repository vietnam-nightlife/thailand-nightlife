export default function AdPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          AD POLICY
        </div>

        <h1 className="mt-4 text-4xl font-black">
          광고정책
        </h1>

        <div className="mt-10 max-w-4xl space-y-10 text-sm leading-8 text-zinc-400">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              1. 광고 운영 원칙
            </h2>

            <p>
              본 사이트는 이용자에게 유용한 여행 및 생활 정보를 제공하기 위해
              관련 업체 및 서비스에 대한 광고와 홍보 정보를 게재할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              2. 광고와 정보의 구분
            </h2>

            <p>
              사이트에 게시되는 광고 또는 업체 홍보 내용은 일반적인 정보와
              구분될 수 있으며, 광고 내용 및 조건은 광고주가 제공한 정보를
              기준으로 작성될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              3. 광고주 정보
            </h2>

            <p>
              광고주가 제공하는 업체명, 가격, 서비스, 영업시간 등의 정보는
              변경될 수 있습니다.
            </p>

            <p className="mt-4">
              이용자는 실제 이용 전에 해당 업체에 직접 문의하여
              최신 정보를 확인하는 것을 권장합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              4. 광고와 이용자 거래
            </h2>

            <p>
              본 사이트에 광고 또는 홍보 정보가 게시되어 있더라도
              실제 상품 및 서비스의 거래는 이용자와 해당 업체 간에
              직접 이루어집니다.
            </p>

            <p className="mt-4">
              거래와 관련된 구체적인 조건 및 책임은 해당 업체와 이용자 간의
              계약 또는 거래 내용에 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              5. 광고 내용의 변경
            </h2>

            <p>
              본 사이트는 사이트 운영 및 광고주와의 협의에 따라
              광고의 위치, 내용, 형태 및 노출 기간 등을 변경할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              6. 광고 문의
            </h2>

            <p>
              광고 등록 및 광고 관련 문의는 사이트의 문의하기 또는
              상담 채널을 이용해 주시기 바랍니다.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

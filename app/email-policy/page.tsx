export default function EmailPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          EMAIL POLICY
        </div>

        <h1 className="mt-4 text-4xl font-black">
          이메일무단수집거부
        </h1>

        <div className="mt-10 max-w-4xl space-y-10 text-sm leading-8 text-zinc-400">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              이메일 주소 무단수집 거부
            </h2>

            <p>
              본 사이트에 게시된 이메일 주소는 전자우편 수집 프로그램이나
              그 밖의 기술적 장치를 이용하여 무단으로 수집하는 것을 거부합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              무단 수집 및 이용 금지
            </h2>

            <p>
              본 사이트에 게시된 이메일 주소를 무단으로 수집하거나,
              판매·배포 또는 광고성 정보 발송 등의 목적으로 이용하는 행위를 금지합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              관련 법령 준수
            </h2>

            <p>
              이메일 주소 등 개인정보의 수집 및 이용과 관련하여
              관계 법령을 준수하여야 하며, 이를 위반하여 발생하는 책임은
              해당 행위를 한 자에게 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              문의 및 신고
            </h2>

            <p>
              본 사이트의 이메일 주소가 무단으로 수집 또는 이용되고 있다고
              판단되는 경우 사이트의 문의하기 또는 상담 채널을 통해 알려주시기 바랍니다.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

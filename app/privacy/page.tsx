export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-5 py-20">

        <div className="text-xs font-black tracking-[.3em] text-red-400">
          PRIVACY
        </div>

        <h1 className="mt-4 text-4xl font-black">
          개인정보처리방침
        </h1>

        <div className="mt-10 max-w-4xl space-y-10 text-sm leading-8 text-zinc-400">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              1. 개인정보의 처리 목적
            </h2>

            <p>
              본 사이트는 이용자의 개인정보를 중요하게 생각하며,
              개인정보 보호 관련 법령을 준수하기 위해 노력하고 있습니다.
            </p>

            <p className="mt-4">
              본 사이트는 문의 접수 및 서비스 이용 과정에서 필요한 경우에 한하여
              최소한의 개인정보를 수집하고 이용합니다.
            </p>
          </section>


          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              2. 수집하는 개인정보
            </h2>

            <p>
              이용자가 문의하기 또는 상담을 요청하는 경우
              이름, 연락처, 이메일 주소 등 필요한 정보가 제공될 수 있습니다.
            </p>

            <p className="mt-4">
              실제 수집되는 개인정보의 항목은 이용자가 이용하는 서비스와
              문의 내용에 따라 달라질 수 있습니다.
            </p>
          </section>


          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              3. 개인정보의 이용 및 보관
            </h2>

            <p>
              수집된 개인정보는 문의에 대한 답변 및 서비스 제공,
              이용자 요청사항 처리 등의 목적으로 이용됩니다.
            </p>

            <p className="mt-4">
              개인정보는 이용 목적이 달성된 후 관련 법령에서 정한 기간이 있는 경우를
              제외하고 지체 없이 파기합니다.
            </p>
          </section>


          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              4. 개인정보의 제3자 제공
            </h2>

            <p>
              본 사이트는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만 법령에 따라 제공이 필요한 경우에는 예외로 할 수 있습니다.
            </p>
          </section>


          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              5. 개인정보 보호를 위한 노력
            </h2>

            <p>
              본 사이트는 이용자의 개인정보가 안전하게 관리될 수 있도록
              필요한 보호조치를 취하기 위해 노력하고 있습니다.
            </p>
          </section>


          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              6. 문의
            </h2>

            <p>
              개인정보 처리와 관련하여 문의사항이 있는 경우
              사이트의 문의하기 또는 상담 채널을 이용해 주시기 바랍니다.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

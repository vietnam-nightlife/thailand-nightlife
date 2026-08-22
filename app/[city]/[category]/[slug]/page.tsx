{/* =========================================================
   KOREANA PRICE GUIDE
   ========================================================= */}

<section className="w-full px-4 sm:px-6 lg:px-8 py-12">
  <div className="mx-auto w-full max-w-6xl">

    {/* PRICE GUIDE TITLE */}
    <div className="text-center mb-8">
      <p className="text-xs sm:text-sm font-black tracking-[0.35em] text-amber-400">
        PRICE GUIDE
      </p>

      <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
        코리아나 가라오케 가격
      </h2>

      <p className="mt-3 text-sm sm:text-base text-zinc-400">
        룸 이용요금 및 세트 메뉴, 레이디 차지 안내입니다.
      </p>
    </div>


    {/* =====================================================
       ROOM PRICE
       ===================================================== */}

    <div className="mb-12">

      <div className="mb-5 text-center">
        <p className="text-xs font-black tracking-[0.3em] text-amber-400">
          ROOM PRICE
        </p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
          룸 이용 요금
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          룸 이용료는 500B ~ 2,000B입니다.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">

        {/* SMALL */}
        <div className="
          group rounded-2xl border border-cyan-500/40
          bg-zinc-950/80 p-6
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400
          hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
        ">
          <div className="text-lg sm:text-xl font-black text-white">
            Small Room
          </div>

          <div className="mt-4">
            <span className="text-3xl sm:text-4xl font-black text-cyan-400">
              500B
            </span>
          </div>
        </div>


        {/* MEDIUM */}
        <div className="
          group rounded-2xl border border-blue-500/40
          bg-zinc-950/80 p-6
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-400
          hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
        ">
          <div className="text-lg sm:text-xl font-black text-white">
            Medium Room
          </div>

          <div className="mt-4">
            <span className="text-3xl sm:text-4xl font-black text-blue-400">
              1,000B
            </span>
          </div>
        </div>


        {/* LARGE */}
        <div className="
          group rounded-2xl border border-purple-500/40
          bg-zinc-950/80 p-6
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:border-purple-400
          hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]
        ">
          <div className="text-lg sm:text-xl font-black text-white">
            Large Room
          </div>

          <div className="mt-4">
            <span className="text-3xl sm:text-4xl font-black text-purple-400">
              1,500B
            </span>
          </div>
        </div>


        {/* VIP */}
        <div className="
          group rounded-2xl border border-amber-500/50
          bg-zinc-950/80 p-6
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:border-amber-400
          hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]
        ">
          <div className="text-lg sm:text-xl font-black text-white">
            VIP Room
          </div>

          <div className="mt-4">
            <span className="text-3xl sm:text-4xl font-black text-amber-400">
              2,000B
            </span>
          </div>
        </div>

      </div>
    </div>


    {/* =====================================================
       SET MENU
       ===================================================== */}

    <div className="mb-12">

      <div className="mb-6 text-center">
        <p className="text-xs font-black tracking-[0.3em] text-amber-400">
          DRINK SET
        </p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
          주류 세트
        </h3>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">


        {/* SOJU SET */}
        <div className="
          rounded-2xl border border-amber-500/40
          bg-zinc-950/80 p-6
          transition-all duration-300
          hover:border-amber-400
          hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]
        ">

          <div className="flex items-center justify-between gap-4">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              소주세트
            </h4>

            <span className="text-xl sm:text-2xl font-black text-amber-400 whitespace-nowrap">
              4,200B
            </span>
          </div>

          <div className="mt-4 h-px bg-white/10" />

          <p className="mt-4 text-sm sm:text-base leading-7 text-zinc-300">
            소주 6, 기본안주
          </p>
        </div>


        {/* SOMAEK SET */}
        <div className="
          rounded-2xl border border-amber-500/40
          bg-zinc-950/80 p-6
          transition-all duration-300
          hover:border-amber-400
          hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]
        ">

          <div className="flex items-center justify-between gap-4">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              소맥세트
            </h4>

            <span className="text-xl sm:text-2xl font-black text-amber-400 whitespace-nowrap">
              4,200B
            </span>
          </div>

          <div className="mt-4 h-px bg-white/10" />

          <p className="mt-4 text-sm sm:text-base leading-7 text-zinc-300">
            소주 3, 맥주 5, 기본안주
          </p>
        </div>


        {/* BEER SET */}
        <div className="
          rounded-2xl border border-amber-500/40
          bg-zinc-950/80 p-6
          transition-all duration-300
          hover:border-amber-400
          hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]
        ">

          <div className="flex items-center justify-between gap-4">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              맥주세트
            </h4>

            <span className="text-xl sm:text-2xl font-black text-amber-400 whitespace-nowrap">
              4,200B
            </span>
          </div>

          <div className="mt-4 h-px bg-white/10" />

          <p className="mt-4 text-sm sm:text-base leading-7 text-zinc-300">
            맥주 8, 기본안주
            <br />
            <span className="text-zinc-500">
              (사이공, 하이네켄, 레오)
            </span>
          </p>
        </div>


        {/* LIQUOR SET */}
        <div className="
          rounded-2xl border border-blue-500/40
          bg-zinc-950/80 p-6
          transition-all duration-300
          hover:border-blue-400
          hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
        ">

          <div className="flex items-center justify-between gap-4">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              양주세트
            </h4>

            <span className="text-xl sm:text-2xl font-black text-blue-400 whitespace-nowrap">
              5,100B
            </span>
          </div>

          <div className="mt-4 h-px bg-white/10" />

          <p className="mt-4 text-sm sm:text-base leading-7 text-zinc-300">
            골든블루 1, 기본안주 2
          </p>
        </div>


        {/* PREMIUM WHISKY */}
        <div className="
          md:col-span-2
          rounded-2xl border border-amber-500/60
          bg-gradient-to-br from-zinc-950 to-amber-950/20
          p-6 sm:p-8
          text-center
          transition-all duration-300
          hover:border-amber-300
          hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]
        ">

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              프리미엄 위스키세트
            </h4>

            <span className="text-2xl sm:text-3xl font-black text-amber-400">
              9,750B
            </span>
          </div>

          <p className="mt-4 text-base sm:text-lg font-bold text-amber-300">
            골드라벨 or 헤네시
          </p>

          <p className="mt-2 text-sm sm:text-base text-zinc-300">
            위스키 1 ｜ 기본안주 2 ｜ 믹서 10
          </p>

          <p className="mt-5 text-xs sm:text-sm text-zinc-500">
            모든 금액은 팁 포함된 금액입니다.
          </p>
        </div>

      </div>
    </div>


    {/* =====================================================
       LADY CHARGE
       ===================================================== */}

    <div className="max-w-4xl mx-auto">

      <div className="
        rounded-2xl
        border border-amber-500/50
        bg-gradient-to-br from-zinc-950 to-amber-950/20
        p-6 sm:p-8
        text-center
        transition-all duration-300
        hover:border-amber-300
        hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]
      ">

        <p className="text-xs font-black tracking-[0.3em] text-amber-400">
          LADY CHARGE
        </p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
          Lady 차지
        </h3>


        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div className="
            rounded-xl border border-white/10
            bg-white/[0.03] p-4
          ">
            <div className="text-sm text-zinc-400">
              TC
            </div>

            <div className="mt-1 text-xl font-black text-amber-400">
              600B
            </div>

            <div className="mt-1 text-sm text-zinc-400">
              1시간
            </div>
          </div>


          <div className="
            rounded-xl border border-white/10
            bg-white/[0.03] p-4
          ">
            <div className="text-sm text-zinc-400">
              ST
            </div>

            <div className="mt-1 text-xl font-black text-amber-400">
              4,000B
            </div>

            <div className="mt-1 text-sm text-zinc-400">
              2시간
            </div>
          </div>


          <div className="
            rounded-xl border border-white/10
            bg-white/[0.03] p-4
          ">
            <div className="text-sm text-zinc-400">
              LT
            </div>

            <div className="mt-1 text-xl font-black text-amber-400">
              6,000B
            </div>

            <div className="mt-1 text-sm text-zinc-400">
              6시간
            </div>
          </div>

        </div>

      </div>
    </div>


    {/* NOTICE */}

    <div className="mt-6 text-center">
      <p className="text-xs sm:text-sm leading-6 text-zinc-500">
        ※ 실제 이용요금은 룸, 이용시간, 주류 및 기타 조건에 따라 달라질 수 있습니다.
      </p>
    </div>

  </div>
</section>

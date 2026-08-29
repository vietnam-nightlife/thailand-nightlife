import Link from "next/link";

const GITHUB_IMAGE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main/app/ecogirl/pattaya";

const profiles = Array.from({ length: 11 }, (_, i) => {
  const number = i + 1;

  return {
    slug: `pattaya-ecogirl-${String(number).padStart(2, "0")}`,
    name: `파타야 에코걸 ${number}`,
    image: `${GITHUB_IMAGE}/파타야%20에코걸${number}.webp`,
  };
});

export default function PattayaEcoGirlPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* 상단 소개 */}
      <section className="border-b border-white/10 bg-[#090909]">
        <div className="container py-14 sm:py-20">

          <div className="mb-3 text-sm font-black tracking-[0.25em] text-red-500">
            PATTAYA
          </div>

          <h1 className="text-3xl font-black sm:text-5xl">
            파타야 에코걸
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            파타야 여행 일정에 맞춰 다양한 동행 프로필을 확인할 수 있습니다.
            원하는 프로필을 선택해 자세한 정보를 확인하세요.
          </p>

        </div>
      </section>


      {/* 사진 목록 */}
      <section className="container py-10 sm:py-14">

        <div className="mb-8">
          <h2 className="text-xl font-black sm:text-2xl">
            파타야 에코걸
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            원하는 프로필을 선택해 확인하세요.
          </p>
        </div>


        {/* 사진 카드 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {profiles.map((profile) => (
            <Link
              key={profile.slug}
              href={`/ecogirl/pattaya/${profile.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#101010]"
            >
              <div className="aspect-[3/4] overflow-hidden">

                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}

import { getPlace } from "@/lib/data";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MassageDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const place = getPlace(slug);

  if (!place) {
    notFound();
  }

  // 파타야 마사지 페이지만 허용
  if (place.city !== "pattaya" || place.category !== "massage") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* 메인 이미지 */}
      <section className="relative w-full overflow-hidden bg-black">
        <img
          src={place.image}
          alt={place.name}
          className="h-[420px] w-full object-cover md:h-[520px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-8">
          <p className="mb-2 text-sm font-medium text-white/80">
            PATTAYA · MASSAGE
          </p>

          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {place.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white">
            <span>★ {place.rating}</span>
            <span>리뷰 {place.reviews}</span>
            <span>{place.district}</span>
          </div>
        </div>
      </section>

      {/* 기본 정보 */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm text-gray-500">위치</p>
            <p className="font-semibold text-gray-900">
              {place.address}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm text-gray-500">영업시간</p>
            <p className="font-semibold text-gray-900">
              {place.hours}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm text-gray-500">평점</p>
            <p className="font-semibold text-gray-900">
              ★ {place.rating} / 5.0
            </p>
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {place.name} 소개
          </h2>

          <p className="leading-8 text-gray-600">
            {place.description}
          </p>
        </div>
      </section>

      {/* 가격표 */}
      {place.priceList && place.priceList.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-10">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {place.name} 가격표
            </h2>

            <div className="space-y-5">
              {place.priceList.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h3>

                      {item.description && (
                        <p className="mt-1 text-sm leading-6 text-gray-500">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {item.prices.map((price, priceIndex) => (
                      <div
                        key={`${price}-${priceIndex}`}
                        className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
                      >
                        <span className="text-gray-700">
                          {price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              ※ 가격 및 코스는 현장 사정에 따라 변경될 수 있습니다.
            </p>
          </div>
        </section>
      )}

      {/* 갤러리 */}
      {place.gallery && place.gallery.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            매장 사진
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {place.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={image}
                  alt={`${place.name} 사진 ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 하단 안내 */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            {place.name}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            방문 전 영업시간과 가격을 다시 확인해주세요.
          </p>
        </div>
      </section>
    </main>
  );
}

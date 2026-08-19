import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { cities, getCity, getPlaces } from "@/lib/data";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    return {
      title: "태국 밤문화 가이드",
      description: "방콕과 파타야의 밤문화, 마사지, 가라오케 정보를 확인하세요.",
    };
  }

  return {
    title: `${city.name} 밤문화 가이드 | 불건마 & 가라오케`,
    description: `${city.name}의 밤문화와 불건마, 가라오케 정보를 지역별로 확인하세요. 위치, 가격, 영업시간 등 여행에 필요한 정보를 비교해보세요.`,
    keywords: [
      `${city.name} 밤문화`,
      `${city.name} 유흥`,
      `${city.name} 불건마`,
      `${city.name} 가라오케`,
      `${city.name} 여행`,
      "태국 밤문화",
      "태국 불건마",
      "태국 가라오케",
    ],
        alternates: {
      canonical: `/${city.slug}`,
    },
    openGraph: {
      title: `${city.name} 밤문화 가이드 | 불건마 & 가라오케`,
      description: `${city.name}의 밤문화와 불건마, 가라오케 정보를 확인하세요.`,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const massage = getPlaces(citySlug, "massage");
  const karaoke = getPlaces(citySlug, "karaoke");

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <img src={city.image} alt={city.name} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="container relative py-28">
          <div className="text-xs font-black tracking-[.3em] red">{city.english}</div>
          <h1 className="mt-4 text-6xl font-black">{city.name}</h1>
          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">{city.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${city.slug}/massage`} className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black">불건마</Link>
            <Link href={`/${city.slug}/karaoke`} className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black">가라오케</Link>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex items-end justify-between">
          <div><div className="text-xs font-black tracking-[.3em] red">MASSAGE</div><h2 className="mt-2 text-3xl font-black">{city.name} 불건마</h2></div>
          <Link href={`/${city.slug}/massage`} className="text-sm text-zinc-500 hover:text-white">전체보기 →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {massage.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="container py-20">
          <div className="flex items-end justify-between">
            <div><div className="text-xs font-black tracking-[.3em] red">KARAOKE</div><h2 className="mt-2 text-3xl font-black">{city.name} 가라오케</h2></div>
            <Link href={`/${city.slug}/karaoke`} className="text-sm text-zinc-500 hover:text-white">전체보기 →</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {karaoke.map((p) => <PlaceCard key={p.slug} place={p} />)}
          </div>
        </div>
      </section>
              <section className="container py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              {city.name} 불건마 & 가라오케 FAQ
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  {city.name}에서 불건마와 가라오케를 어디서 찾을 수 있나요?
                </h3>
                <p className="mt-2 text-zinc-400">
                  위 페이지에서 불건마와 가라오케 업체 정보를 확인하고
                  위치, 가격, 영업시간 등을 비교해보세요.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  불건마 업소를 선택할 때 무엇을 확인해야 하나요?
                </h3>
                <p className="mt-2 text-zinc-400">
                  위치와 영업시간, 제공되는 서비스, 가격 및 이용자 정보를
                  함께 확인하는 것이 좋습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  가라오케를 이용하기 전에 확인할 사항은 무엇인가요?
                </h3>
                <p className="mt-2 text-zinc-400">
                  인원, 위치, 영업시간, 이용 요금 및 예약 가능 여부를 미리
                  확인하면 보다 편리하게 이용할 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {city.name} 여행 중 불건마와 가라오케를 함께 이용할 수 있나요?
                </h3>
                <p className="mt-2 text-zinc-400">
                  서실장의 추천으로는 당일날은 비행기의 피로를 마사지로 날려버리시고
                  <br />
                  저녁에 예쁜 푸잉들과 저녁을 함께 보내시는걸 추천 드립니다.
                  여행 일정과 영업시간을 확인하여 본인의 일정에 맞게
                  방문 계획을 세워보시면 좋을듯합니다!
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}

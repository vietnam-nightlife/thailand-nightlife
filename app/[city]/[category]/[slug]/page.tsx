import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { places, getPlace } from "@/lib/data";
import ContactButtons from "@/components/ContactButtons";

export function generateStaticParams() {
  return places.map((p) => ({ city: p.city, category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { city, category, slug } = await params;
  const place = getPlace(slug);

  if (!place || place.city !== city || place.category !== category) {
    return {
      title: "태국 유흥 가이드 | 태국 눈탱이 방지 위원회",
      description: "태국 방콕과 파타야의 업소 정보를 확인하세요.",
    };
  }

  const cityName = city === "bangkok" ? "방콕" : "파타야";
  const categoryName = category === "massage" ? "불건마" : "가라오케";

  return {
    title: `${place.name} | ${cityName} ${categoryName} | 태국 눈탱이 방지 위원회`,
    description: `${place.name}의 위치, 가격, 영업시간, 평점 및 업소 정보를 확인하세요.`,
    alternates: {
      canonical: `/${city}/${category}/${slug}`,
    },
    openGraph: {
      title: `${place.name} | ${cityName} ${categoryName}`,
      description: `${place.name}의 위치, 가격, 영업시간 및 업소 정보를 확인하세요.`,
      type: "website",
      images: [
        {
          url: place.image,
          alt: place.name,
        },
      ],
    },
  };
}

export default async function PlaceDetail({ params }: { params: Promise<{ city: string; category: string; slug: string }> }) {
  const { city, category, slug } = await params;
  const place = getPlace(slug);
  if (!place || place.city !== city || place.category !== category) notFound();

  const cityName = city === "bangkok" ? "방콕" : "파타야";
  const categoryName = category === "massage" ? "불건마" : "가라오케";

  return (
    <main>
      <section className="relative h-[520px] overflow-hidden">
        <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-12">
            <div className="text-xs font-black tracking-[.3em] red">{cityName} · {categoryName}</div>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">{place.name}</h1>
            <div className="mt-4 text-sm text-zinc-300">★ {place.rating} · 리뷰 {place.reviews}개 · {place.district}</div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="text-xs font-black tracking-[.3em] red">ABOUT</div>
            <h2 className="mt-3 text-3xl font-black">업소 정보</h2>
            <p className="mt-6 leading-8 text-zinc-400">{place.description}</p>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-[#111] p-7">
            <div className="text-sm font-black">기본 정보</div>
            <dl className="mt-6 space-y-5 text-sm">
              <div><dt className="text-zinc-600">주소</dt><dd className="mt-1 text-zinc-300">{place.address}</dd></div>
              <div><dt className="text-zinc-600">영업시간</dt><dd className="mt-1 text-zinc-300">{place.hours}</dd></div>
              <div><dt className="text-zinc-600">평점</dt><dd className="mt-1 text-zinc-300">★ {place.rating} ({place.reviews})</dd></div>
            </dl>
            <ContactButtons />
            <Link href={`/${city}/${category}`} className="mt-7 block rounded-xl bg-red-600 px-5 py-3 text-center text-sm font-black hover:bg-red-500">목록으로 돌아가기</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

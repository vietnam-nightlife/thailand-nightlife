import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { cities, getCity, getPlaces } from "@/lib/data";

export function generateStaticParams() {
  return cities.flatMap((city) =>
    ["massage", "karaoke"].map((category) => ({
      city: city.slug,
      category,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; category: string }>;
}): Promise<Metadata> {
  const { city: citySlug, category } = await params;
  const city = getCity(citySlug);

  if (!city || !["massage", "karaoke"].includes(category)) {
    return {
      title: "태국 유흥 가이드 | 태국 눈탱이 방지 위원회",
      description:
        "방콕과 파타야의 불건마와 가라오케 정보를 확인하세요.",
    };
  }

  const title = category === "massage" ? "불건마" : "가라오케";

  return {
    title: `${city.name} ${title} | 태국 눈탱이 방지 위원회`,
    description: `${city.name} ${title} 업소 정보를 확인하고 가격, 위치, 영업시간 등 필요한 정보를 비교해보세요.`,
    keywords: [
      `${city.name} ${title}`,
      `${city.name} 밤문화`,
      `${city.name} 유흥`,
      `${city.name} 여행`,
      "태국 밤문화",
      "태국 유흥",
    ],
    alternates: {
      canonical: `/${city.slug}/${category}`,
    },
    openGraph: {
      title: `${city.name} ${title} | 태국 눈탱이 방지 위원회`,
      description: `${city.name} ${title} 정보를 확인하세요.`,
      type: "website",
    },
  };
}

function CategoryBreadcrumbJsonLd({
  cityName,
  citySlug,
  category,
  categoryName,
}: {
  cityName: string;
  citySlug: string;
  category: string;
  categoryName: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cityName,
        item: `/${citySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `/${citySlug}/${category}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ city: string; category: string }>;
}) {
  const { city: citySlug, category } = await params;

  const city = getCity(citySlug);

  if (!city || !["massage", "karaoke"].includes(category)) {
    notFound();
  }

  const items = getPlaces(citySlug, category);
  const title = category === "massage" ? "불건마" : "가라오케";

  return (
    <main>
      <CategoryBreadcrumbJsonLd
        cityName={city.name}
        citySlug={city.slug}
        category={category}
        categoryName={title}
      />

      {/* 페이지 상단 */}
      <section className="border-b border-white/10">
        <div className="container py-12">
          <Link
            href={`/${city.slug}`}
            className="text-sm text-zinc-600 hover:text-white"
          >
            ← {city.name}
          </Link>

          <div className="mt-6 text-xs font-black tracking-[.3em] red">
            {city.english} {category.toUpperCase()}
          </div>

          <h1 className="mt-3 text-5xl font-black">
            {city.name} {title}
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-500">
            {city.name} 지역의 {title} 정보를 확인하세요.
          </p>
        </div>
      </section>

      {/* 업소 목록 */}
      <section className="container py-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <PlaceCard key={p.slug} place={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

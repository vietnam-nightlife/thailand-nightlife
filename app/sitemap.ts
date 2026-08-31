import type { MetadataRoute } from "next";
import { cities, places } from "@/lib/data";

const baseUrl = "https://thailandnightlifetravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // =========================================================
  // 도시 페이지
  // /bangkok
  // /pattaya
  // =========================================================

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // =========================================================
  // 카테고리 페이지
  // /bangkok/massage
  // /bangkok/karaoke
  // /pattaya/massage
  // /pattaya/karaoke
  // =========================================================

  const categoryPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    ["massage", "karaoke"].map((category) => ({
      url: `${baseUrl}/${city.slug}/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  // =========================================================
  // 에코걸 페이지
  // =========================================================

  const ecoGirlPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ecogirl`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecogirl/bangkok`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecogirl/pattaya`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // =========================================================
  // 업체 상세 페이지
  //
  // 예:
  // /bangkok/massage/bangkok-donquixote-massage
  // /bangkok/karaoke/bangkok-palace-karaoke
  // /pattaya/massage/pattaya-88-massage
  // =========================================================

  const placePages: MetadataRoute.Sitemap = places.map((place) => ({
    url: `${baseUrl}/${place.city}/${place.category}/${place.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: place.featured ? 0.8 : 0.6,
  }));

  // =========================================================
  // 전체 Sitemap
  // =========================================================

  return [
    // 홈
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // 주요 페이지
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // 에코걸
    ...ecoGirlPages,

    // 도시
    ...cityPages,

    // 카테고리
    ...categoryPages,

    // 업체 상세
    ...placePages,
  ];
}

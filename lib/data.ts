export type CitySlug = "bangkok" | "pattaya";
export type CategorySlug = "massage" | "karaoke";

export type City = {
  slug: CitySlug;
  name: string;
  english: string;
  description: string;
  image: string;
};

export type Place = {
  slug: string;
  name: string;
  city: CitySlug;
  category: CategorySlug;
  district: string;
  rating: number;
  reviews: number;
  description: string;
  address: string;
  hours: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
};

export const cities: City[] = [
  {
    slug: "bangkok",
    name: "방콕",
    english: "BANGKOK",
    description: "태국 방콕의 마사지와 가라오케 정보를 지역별로 확인하세요. 가격과 위치를 비교해 여행 중 불필요한 지출을 줄이는 데 도움을 드립니다.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1800&auto=format&fit=crop"
  },
  {
    slug: "pattaya",
    name: "파타야",
    english: "PATTAYA",
    description: "파타야 여행에 필요한 마사지와 가라오케 정보를 한곳에서 확인하세요. 실제 업소 정보는 등록 후 업데이트할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1800&auto=format&fit=crop"
  }
];

export const places: Place[] = [
  {
    slug: "bangkok-massage-01",
    name: "방콕 프리미엄 마사지",
    city: "bangkok",
    category: "massage",
    district: "아속",
    rating: 4.9,
    reviews: 128,
    description: "방콕 아속 지역에서 편안하게 이용할 수 있는 마사지샵 예시입니다. 실제 운영 정보와 메뉴는 등록 후 수정하세요.",
    address: "방콕 아속",
    hours: "10:00 - 02:00",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
{
  slug: "bangkok-karaoke-01",
  name: "방콕 코리아나 가라오케",
  city: "bangkok",
  category: "karaoke",
  district: "수쿰빗",
  rating: 4.8,
  reviews: 96,
  description:
    "방콕 수쿰빗에서 이용할 수 있는 코리아나 가라오케입니다. 룸 분위기와 시설을 직접 확인할 수 있도록 실제 룸 사진을 함께 제공합니다.",
  address: "방콕 수쿰빗",
  hours: "19:00 - 05:00",

  // 대표 이미지
  image: "/방콕 코리아나 가라오케 메인.png",

  // 상세페이지 룸 갤러리
  gallery: [
    "/방콕 코리아나 가라오케 메인.png",
    "/방콕 코리아나 가라오케 룸.png",
    "/방콕 코리아나 가라오케 룸2.png",
    "/방콕 코리아나 가라오케 룸3.png",
    "/방콕 코리아나 가라오케 쇼업.png",
  ],

  featured: true
},
  {
    slug: "pattaya-massage-01",
    name: "파타야 오션 마사지",
    city: "pattaya",
    category: "massage",
    district: "파타야 비치",
    rating: 4.8,
    reviews: 84,
    description: "파타야 비치 인근에서 이용하기 좋은 마사지샵 예시입니다. 실제 업소 정보와 가격표로 교체하세요.",
    address: "파타야 비치",
    hours: "10:00 - 01:00",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
  {
    slug: "pattaya-karaoke-01",
    name: "파타야 프리미엄 가라오케",
    city: "pattaya",
    category: "karaoke",
    district: "워킹스트리트",
    rating: 4.7,
    reviews: 61,
    description: "파타야 워킹스트리트 인근 가라오케 정보 예시입니다. 실제 업소 정보로 교체하세요.",
    address: "파타야 워킹스트리트",
    hours: "19:00 - 04:00",
    image: "https://images.unsplash.com/photo-1571266028243-d220c9c3b1d2?q=80&w=1400&auto=format&fit=crop",
    featured: true
  }
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getPlaces(city: string, category?: string) {
  return places.filter((p) => p.city === city && (!category || p.category === category));
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}

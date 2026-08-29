export type CitySlug = "bangkok" | "pattaya";
export type CategorySlug = "massage" | "karaoke";

export type City = {
  slug: CitySlug;
  name: string;
  english: string;
  description: string;
  image: string;
};

export type PriceItem = {
  name: string;
  description?: string;
  prices: string[];
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

  priceList?: PriceItem[];

  koreanSupport?: boolean;
};

const GITHUB_IMAGE =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

export const cities: City[] = [
  {
    slug: "bangkok",
    name: "방콕",
    english: "BANGKOK",
    description:
      "태국 방콕의 마사지와 가라오케 정보를 지역별로 확인하세요. 가격과 위치를 비교해 여행 중 불필요한 지출을 줄이는 데 도움을 드립니다.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1800&auto=format&fit=crop",
  },

  {
    slug: "pattaya",
    name: "파타야",
    english: "PATTAYA",
    description:
      "파타야 여행에 필요한 마사지와 가라오케 정보를 한곳에서 확인하세요. 실제 업소 정보는 등록 후 업데이트할 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1800&auto=format&fit=crop",
  },
];

export const places: Place[] = [

  // =========================================================
  // 방콕 돈키호테 마사지
  // =========================================================
  {
    slug: "bangkok-donquixote-massage",
    name: "방콕 돈키호테 마사지",
    city: "bangkok",
    category: "massage",
    district: "방콕",
    rating: 4.7,
    reviews: 0,

    description:
      "방콕 돈키호테 마사지입니다. 고급스러운 인테리어와 다양한 마사지룸을 갖춘 마사지 전문 매장으로, 매장 외관과 리셉션, 내부 시설 및 룸 사진을 실제 이미지로 확인할 수 있습니다.",

    address: "방콕 돈키호테 마사지",
    hours: "11:00 - 00:00",

    image: `${GITHUB_IMAGE}/방콕%20돈키호테%20메인.webp`,

    gallery: [
      `${GITHUB_IMAGE}/방콕%20돈키호테%20외관.webp`,
      `${GITHUB_IMAGE}/방콕%20돈키호테%20리셉션.webp`,
      `${GITHUB_IMAGE}/방콕%20돈키호테%20리셉션2.webp`,
      `${GITHUB_IMAGE}/방콕%20돈키호테%20휴게실.webp`,
      `${GITHUB_IMAGE}/방콕%20돈키호테%20룸1.webp`,
      `${GITHUB_IMAGE}/방콕%20돈키호테%20룸2.webp`,
    ],

    priceList: [
      {
        name: "기본 마사지",
        description: "기본 마사지 프로그램",
        prices: [
          "60분 3,000B",
          "90분 4,000B",
        ],
      },
      {
        name: "프리미엄 마사지",
        description: "프리미엄 마사지 프로그램",
        prices: [
          "60분 4,000B",
          "90분 5,000B",
        ],
      },
      {
        name: "VIP 룸",
        description: "프라이빗 VIP 룸 이용",
        prices: [
          "60분 4,500B",
          "90분 5,500B",
        ],
      },
    ],

    featured: true,
  },

  // =========================================================
  // 방콕 큐브 마사지
  // =========================================================
  {
    slug: "bangkok-cube-nuru-massage",
    name: "방콕 큐브 마사지",
    city: "bangkok",
    category: "massage",
    district: "수쿰빗 소이 22",
    rating: 4.6,
    reviews: 0,

    description:
      "방콕 수쿰빗 소이 22에 위치한 CUBE Nuru Massage입니다. 매장 외관과 내부 공간, 객실 분위기를 실제 사진으로 확인할 수 있습니다.",

    address: "방콕 수쿰빗 소이 22",
    hours: "11:00 - 02:00",

    image: `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20메인.webp`,

    gallery: [
      `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20외관.webp`,
      `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20리셉션.webp`,
      `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20휴게실.webp`,
      `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20룸1.webp`,
      `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20룸2.webp`,
      `${GITHUB_IMAGE}/방콕%20큐브%20마사지%20룸3.webp`,
    ],

    featured: true,
  },

  // =========================================================
  // 방콕 바비 마사지
  // =========================================================
  {
    slug: "bangkok-barbie18-massage",
    name: "방콕 바비 마사지",
    city: "bangkok",
    category: "massage",
    district: "수쿰빗 소이 18",
    rating: 4.6,
    reviews: 0,

    description:
      "방콕 수쿰빗 소이 18에 위치한 Barbie18 Massage입니다. 매장 분위기와 룸 시설을 실제 사진으로 확인할 수 있습니다.",

    address: "방콕 수쿰밋 소이 18",
    hours: "12:00 - 02:00",

    image: `${GITHUB_IMAGE}/방콕%20바비%20마사지%20메인.webp`,

    gallery: [
      `${GITHUB_IMAGE}/방콕%20바비%20마사지%20카운터.webp`,
      `${GITHUB_IMAGE}/방콕%20바비%20마사지%20휴게실.webp`,
      `${GITHUB_IMAGE}/방콕%20바비%20마사지%20느낌.webp`,
      `${GITHUB_IMAGE}/방콕%20바비%20마사지%20룸1.webp`,
      `${GITHUB_IMAGE}/방콕%20바비%20마사지%20룸2.webp`,
      `${GITHUB_IMAGE}/방콕%20바비%20마사지%20룸3.webp`,
    ],

    featured: true,

    koreanSupport: false,
  },

  // =========================================================
  // 방콕 가라오케
  // =========================================================
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

    image:
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20메인%20외관.webp`,

    gallery: [
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20쇼업2.webp`,
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20쇼업.webp`,
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20룸4.webp`,
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20룸.webp`,
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20룸2.webp`,
      `${GITHUB_IMAGE}/방콕%20코리아나%20가라오케%20룸3.webp`,
    ],

    featured: true,
  },

  // =========================================================
  // 파타야 마사지
  // =========================================================
  {
    slug: "pattaya-massage-01",
    name: "파타야 오션 마사지",
    city: "pattaya",
    category: "massage",
    district: "파타야 비치",
    rating: 4.8,
    reviews: 84,

    description:
      "파타야 비치 인근에서 이용하기 좋은 마사지샵입니다. 실제 업소 정보와 가격표를 확인할 수 있습니다.",

    address: "파타야 비치",
    hours: "10:00 - 01:00",

    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1400&auto=format&fit=crop",

    featured: true,
  },

  // =========================================================
  // 파타야 모나리자 가라오케
  // =========================================================
  {
    slug: "pattaya-karaoke-01",
    name: "파타야 모나리자 가라오케",
    city: "pattaya",
    category: "karaoke",
    district: "파타야",
    rating: 4.0,
    reviews: 306,

    description:
      "파타야에서 한국식 KTV를 찾는 여행객들을 위한 모나리자 가라오케 정보입니다. 위치, 시설, 룸 사진, 영업시간과 방문 전 확인사항을 한곳에서 확인하세요.",

    address: "Pattaya City, Chon Buri 20150",
    hours: "18:00 - 00:00",

    // 메인 이미지
    image:
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20메인.webp`,

    // 상세페이지 갤러리
    gallery: [
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20외관.webp`,
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20로비.webp`,
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20룸1.webp`,
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20룸2.webp`,
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20룸3.webp`,
      `${GITHUB_IMAGE}/파타야%20모나리자%20가라오케%20푸잉.webp`,
    ],

    featured: true,
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getPlaces(city: string, category?: string) {
  return places.filter(
    (p) => p.city === city && (!category || p.category === category)
  );
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}

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
      "태국 방콕의 마사지와 가라오케 정보를 지역별로 확인하세요.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1800&auto=format&fit=crop",
  },

  {
    slug: "pattaya",
    name: "파타야",
    english: "PATTAYA",
    description:
      "파타야 여행에 필요한 마사지 정보를 한곳에서 확인하세요.",
    image:
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1800&auto=format&fit=crop",
  },
];

export const places: Place[] = [

  // =========================================================
  // 파타야 바나나 마사지
  // =========================================================
  {
    slug: "pattaya-massage-01",
    name: "파타야 바나나 마사지",
    city: "pattaya",
    category: "massage",
    district: "파타야",

    rating: 4.5,
    reviews: 17,

    description:
      "파타야에서 이용할 수 있는 바나나 마사지입니다. 편안한 마사지와 휴식을 원하는 여행객들이 방문하기 좋은 마사지샵으로, 방문 전 위치와 영업시간을 확인하고 이용하는 것을 추천합니다.",

    address: "345/17-18, Pattaya, Chon Buri 20150, Thailand",
    hours: "11:30 - 23:30",

    image:
      `${GITHUB_IMAGE}/파타야%20바나나%20마사지%20메인.webp`,

    featured: true,
  },


  // =========================================================
  // 파타야 88 마사지
  // =========================================================
  {
    slug: "pattaya-88-massage",
    name: "파타야 88 마사지",
    city: "pattaya",
    category: "massage",
    district: "파타야",

    rating: 4.6,
    reviews: 0,

    description:
      "파타야에서 이용할 수 있는 88 마사지입니다. 태국 마사지와 발마사지, 오일 및 아로마 마사지부터 전립선 A코스와 서비스 B코스, 2:1 관리 및 VIP 출장 코스까지 다양한 프로그램을 운영하고 있습니다. 매장 내부와 마사지룸 사진을 통해 실제 분위기를 확인할 수 있습니다.",

    address: "Pattaya, Chon Buri, Thailand",
    hours: "11:00 - 00:00",

    image:
      `${GITHUB_IMAGE}/파타야%2088%20마사지%20메인.png`,

    gallery: [
      `${GITHUB_IMAGE}/파타야%2088%20마사지%20룸1.png`,
      `${GITHUB_IMAGE}/파타야%2088%20마사지%20룸2.png`,
      `${GITHUB_IMAGE}/파타야%2088%20마사지%20룸3.png`,
      `${GITHUB_IMAGE}/파타야%2088%20마사지%20룸4.png`,
    ],

    priceList: [
      {
        name: "타이 / 발마사지",
        description:
          "전신 또는 발의 피로를 풀어주는 기본 코스",
        prices: [
          "60분 400바트",
        ],
      },

      {
        name: "오일 / 아로마마사지",
        description:
          "아로마 오일을 사용하여 몸과 마음의 긴장을 풀어주는 힐링 코스",
        prices: [
          "60분 500바트",
        ],
      },

      {
        name: "전립선 A코스 마사지",
        description:
          "전립선 집중 관리와 전신 마사지를 함께 받는 프리미엄 코스",
        prices: [
          "90분 2,000바트",
        ],
      },

      {
        name: "서비스 B코스 마사지",
        description:
          "섬세한 집중 관리와 특별한 서비스가 포함된 만족도 높은 코스",
        prices: [
          "90분 3,000바트",
        ],
      },

      {
        name: "황제 2:1 전립선 A",
        description:
          "두 명의 관리사가 동시에 케어하는 스페셜 관리 코스",
        prices: [
          "90분 3,000바트",
        ],
      },

      {
        name: "황제 2:1 서비스 B",
        description:
          "황제급 서비스와 2:1 관리가 만난 최고급 프리미엄 코스",
        prices: [
          "90분 4,000바트",
        ],
      },

      {
        name: "황제 2:1 VIP 출장",
        description:
          "최고급 VIP 케어를 원하는 분들을 위한 출장 전용 프리미엄 코스",
        prices: [
          "90분 5,800바트",
        ],
      },
    ],

    featured: true,

    koreanSupport: true,
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

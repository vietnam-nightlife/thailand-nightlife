export type EcoGirl = {
  slug: string;
  city: "bangkok" | "pattaya";
  name: string;
  age: number;
  height?: string;
  languages?: string[];
  description: string;
  image?: string;
  gallery?: string[];
  tags?: string[];
};

export const ecogirls: EcoGirl[] = [
  {
    slug: "bangkok-01",
    city: "bangkok",
    name: "방콕 프로필 01",
    age: 25,
    height: "165cm",
    languages: ["한국어", "태국어"],
    description:
      "방콕 여행 중 함께 시간을 보내며 식사, 관광, 쇼핑 등 여행 일정을 즐길 수 있는 프로필입니다.",
    image: "",
    gallery: [],
    tags: ["방콕", "한국어 가능", "여행 동행"],
  },

  {
    slug: "bangkok-02",
    city: "bangkok",
    name: "방콕 프로필 02",
    age: 27,
    height: "168cm",
    languages: ["태국어", "영어"],
    description:
      "방콕 여행 일정에 맞춰 식사와 관광, 쇼핑 등을 함께할 수 있는 프로필입니다.",
    image: "",
    gallery: [],
    tags: ["방콕", "영어 가능", "여행 동행"],
  },

  {
    slug: "pattaya-01",
    city: "pattaya",
    name: "파타야 프로필 01",
    age: 26,
    height: "166cm",
    languages: ["한국어", "태국어"],
    description:
      "파타야 여행 일정에 맞춰 식사와 관광, 해변 및 주변 관광지를 함께 둘러볼 수 있는 프로필입니다.",
    image: "",
    gallery: [],
    tags: ["파타야", "한국어 가능", "여행 동행"],
  },

  {
    slug: "pattaya-02",
    city: "pattaya",
    name: "파타야 프로필 02",
    age: 24,
    height: "164cm",
    languages: ["태국어", "영어"],
    description:
      "파타야 여행 일정에 맞춰 다양한 여행 일정을 함께할 수 있는 프로필입니다.",
    image: "",
    gallery: [],
    tags: ["파타야", "영어 가능", "여행 동행"],
  },
];

export function getEcoGirls(city: string) {
  return ecogirls.filter((item) => item.city === city);
}

export function getEcoGirl(city: string, slug: string) {
  return ecogirls.find(
    (item) => item.city === city && item.slug === slug
  );
}

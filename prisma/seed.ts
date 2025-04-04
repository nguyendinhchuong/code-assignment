/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

enum STORE_CATEGORY {
  SUSHI = 'SUSHI',
  UNAGI = 'UNAGI',
  TEMPURA = 'TEMPURA',
  TONKATSU = 'TONKATSU',
  YAKITORI = 'YAKITORI',
  SUKIYAKI = 'SUKIYAKI',
  SOBA = 'SOBA',
  RAMEN = 'RAMEN',
  YAKISOBA = 'YAKISOBA',
  OKONOMIYAKI = 'OKONOMIYAKI',
  DONBURI = 'DONBURI',
  ODEN = 'ODEN',
  KAISEKI = 'KAISEKI',
  HAMBAGU = 'HAMBAGU',
  TEPPANYAKI = 'TEPPANYAKI',
  CURRY = 'CURRY',
  YAKINIKU = 'YAKINIKU',
  NABE = 'NABE',
  CAFE = 'CAFE',
  IZAKAYA = 'IZAKAYA',
  OTHER = 'OTHER',
}

const textByStoreCategory = {
  [STORE_CATEGORY.SUSHI]: 'Sushi & Seafood',
  [STORE_CATEGORY.UNAGI]: 'Eel',
  [STORE_CATEGORY.TEMPURA]: 'Tempura',
  [STORE_CATEGORY.TONKATSU]: 'Tonkatsu & Kushikatsu',
  [STORE_CATEGORY.YAKITORI]: 'Yakitori & Skewers',
  [STORE_CATEGORY.SUKIYAKI]: 'Sukiyaki & Shabu-shabu',
  [STORE_CATEGORY.SOBA]: 'Soba & Udon',
  [STORE_CATEGORY.RAMEN]: 'Ramen & Tsukemen',
  [STORE_CATEGORY.YAKISOBA]: 'Yakisoba',
  [STORE_CATEGORY.OKONOMIYAKI]: 'Okonomiyaki & Takoyaki',
  [STORE_CATEGORY.DONBURI]: 'Rice Bowls',
  [STORE_CATEGORY.ODEN]: 'Oden',
  [STORE_CATEGORY.KAISEKI]: 'Kaiseki & Japanese Cuisine',
  [STORE_CATEGORY.HAMBAGU]: 'Hamburger Steak & Omurice',
  [STORE_CATEGORY.TEPPANYAKI]: 'Steak & Teppanyaki',
  [STORE_CATEGORY.CURRY]: 'Curry',
  [STORE_CATEGORY.YAKINIKU]: 'Yakiniku & Horumon',
  [STORE_CATEGORY.NABE]: 'Nabe',
  [STORE_CATEGORY.CAFE]: 'Cafe & Desserts',
  [STORE_CATEGORY.IZAKAYA]: 'Izakaya & Bar',
  [STORE_CATEGORY.OTHER]: 'Other Japanese Food',
};

const restaurants = [
  {
    rating: 4.2,
    rating_count: 139,
    category: "YAKITORI",
    city: "osaka",
    desc: "High-end omakase with unlimited sake at reasonable prices",
    id: "4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Kagurazaka Ishikawa Sushiharu Nakanoshima Sushiya",
    price_range: "3~5",
    featured: {
      text: "Top Yakitori Restaurant in Nakanoshima",
      icon: "stars-02",
    },
    isFavorite: true,
  },
  {
    rating: 4.5,
    rating_count: 200,
    category: "SUSHI",
    city: "tokyo",
    desc: "Offering fresh seafood and authentic sushi",
    id: "6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Sushi Ginza Ishikawa",
    price_range: "4~6",
    featured: {
      text: "Top Sushi Restaurant in Tokyo",
      icon: "stars-02",
    },
    isFavorite: false,
  },
  {
    rating: 4.7,
    rating_count: 180,
    category: "RAMEN",
    city: "kyoto",
    desc: "Known for rich broth and various toppings",
    id: "7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e",
    images: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Ramen Ichiran",
    price_range: "2~4",
    featured: {
      text: "Famous Ramen Spot in Kyoto",
      icon: "stars-02",
    },
    isFavorite: true,
  },
  {
    rating: 4.3,
    rating_count: 220,
    category: "TEMPURA",
    city: "nagoya",
    desc: "Where you can taste crispy tempura",
    id: "8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f",
    images: [
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Tempura Matsuya",
    price_range: "3~5",
    featured: {
      text: "Best Tempura Restaurant in Nagoya",
      icon: "stars-02",
    },
    isFavorite: false,
  },
  {
    rating: 4.6,
    rating_count: 190,
    category: "SOBA",
    city: "fukuoka",
    desc: "Famous for chewy noodles and rich broth",
    id: "9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g",
    images: [
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Udon Taro",
    price_range: "2~4",
    featured: {
      text: "Popular Udon Restaurant in Fukuoka",
      icon: "stars-02",
    },
    isFavorite: true,
  },
  {
    rating: 4.1,
    rating_count: 160,
    category: "YAKITORI",
    city: "osaka",
    desc: "Delicious and affordable yakitori specialty restaurant",
    id: "0eg7i6h5-lj21-9e52-g10e-k3gg5hh5620h",
    images: [
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Yakitori Hachibe",
    price_range: "1~3",
    featured: {
      text: "Hidden Gem Yakitori in Osaka",
      icon: "stars-02",
    },
    isFavorite: false,
  },
  {
    rating: 4.8,
    rating_count: 250,
    category: "SUSHI",
    city: "sapporo",
    desc: "Where you can enjoy authentic sushi made with fresh seafood",
    id: "1fh8j7i6-mk32-0f63-h11f-l4hh6ii6731i",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Sushi Sato",
    price_range: "4~6",
    featured: {
      text: "Popular Sushi Restaurant in Sapporo",
      icon: "stars-02",
    },
    isFavorite: true,
  },
  {
    rating: 4.4,
    rating_count: 170,
    category: "RAMEN",
    city: "hiroshima",
    desc: "Known for deeply flavored broth and springy noodles",
    id: "2gi9k8j7-nl43-1g74-i22g-m5ii7jj7842j",
    images: [
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Ramen Tatsuya",
    price_range: "2~4",
    featured: {
      text: "Recommended Ramen in Hiroshima",
      icon: "stars-02",
    },
    isFavorite: false,
  },
  {
    rating: 4.9,
    rating_count: 300,
    category: "TEMPURA",
    city: "yokohama",
    desc: "Serving premium tempura",
    id: "3hj0l9k8-om54-2h85-j33h-n6jj8kk8953k",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Tempura Yamaguchi",
    price_range: "5~7",
    featured: {
      text: "Recommended Tempura in Yokohama",
      icon: "stars-02",
    },
    isFavorite: true,
  },
  {
    rating: 4.0,
    rating_count: 150,
    category: "SOBA",
    city: "kobe",
    desc: "Known for light broth and chewy noodles",
    id: "4ik1m0l9-pn65-3i96-k44i-o7kk9ll9064l",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Udon Kageyama",
    price_range: "2~4",
    featured: {
      text: "Popular Udon Restaurant in Kobe",
      icon: "stars-02",
    },
    isFavorite: false,
  },
];

async function main() {

  const storeCategories = Object.values(STORE_CATEGORY).map(async (category) => {
    return await prisma.storeCategory.upsert({
      where: { name: category },
      update: {},
      create: {
        name: category,
        description: textByStoreCategory[category],
      },
    });
  });

  await Promise.all(storeCategories);

  restaurants.forEach(async (restaurant) => {
    await prisma.restaurant.upsert({
      where: {
        id: restaurant.id
      },
      update: {
        name: restaurant.name,
        desc: restaurant.desc,
        city: restaurant.city,
        rating: restaurant.rating,
        rating_count: restaurant.rating_count,
        price_range: restaurant.price_range,
        is_favorite: restaurant.isFavorite,
        category_name: restaurant.category,
        featured: {
          update: {
            text: restaurant.featured.text,
            icon: restaurant.featured.icon,
          },
        },
        images: {
          deleteMany: {},
          createMany: {
            data: restaurant.images.map((url) => ({
              url: url,
            })),
          },
        },
      },
      create: {
        name: restaurant.name,
        desc: restaurant.desc,
        city: restaurant.city,
        rating: restaurant.rating,
        rating_count: restaurant.rating_count,
        price_range: restaurant.price_range,
        is_favorite: restaurant.isFavorite,
        category_name: restaurant.category,
        featured: {
          create: {
            text: restaurant.featured.text,
            icon: restaurant.featured.icon,
          },
        },
        images: {
          createMany: {
            data: restaurant.images.map((url) => ({
              url: url,
            })),
          },
        },
      }
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

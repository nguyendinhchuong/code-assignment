import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '~/server/prisma';

const defaultSelect = {
  id: true,
  name: true,
  is_favorite: true,
  desc: true,
  price_range: true,
  rating: true,
  rating_count: true,
  city: true,
  images: {
    select: {
      id: true,
      url: true,
    },
  },
  category: {
    select: {
      name: true,
      description: true,
    },
  },
  featured: {
    select: {
      icon: true,
      text: true,
    },
  },
};

export const restaurantsRouter = router({
  list: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
        categoryName: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const restaurants = await prisma.restaurant.findMany({
        select: defaultSelect,
        where: {
          name: input.name
            ? {
                contains: input.name,
                mode: 'insensitive', // Case-insensitive search
              }
            : undefined,
          category: input.categoryName
            ? {
                name: {
                  equals: input.categoryName,
                  mode: 'insensitive', // Case-insensitive search
                },
              }
            : undefined,
        },
        orderBy: {
          rating: 'desc',
        },
      });

      return {
        restaurants,
      };
    }),
});

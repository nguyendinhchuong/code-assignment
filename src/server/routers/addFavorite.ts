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

export const addFavoriteRouter = router({
  toggle: publicProcedure
    .input(
      z.object({
        restaurantId: z.string(),
        isFavorite: z.boolean(),
      }),
    )
    .mutation(async ({ input }) => {
      const { restaurantId, isFavorite } = input;

      const updatedRestaurant = await prisma.restaurant.update({
        where: {
          id: restaurantId,
        },
        data: {
          is_favorite: isFavorite,
        },
        select: defaultSelect,
      });

      return updatedRestaurant;
    }),
});

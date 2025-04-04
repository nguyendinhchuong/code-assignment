import { router, publicProcedure } from '../trpc';
import { prisma } from '~/server/prisma';

const defaultSelect = {
  id: true,
  name: true,
  description: true,
  restaurants: {
    select: {
      id: true,
      name: true,
    },
  },
};

export const categoryRouter = router({
  list: publicProcedure.query(async () => {
    const categories = await prisma.storeCategory.findMany({
      select: defaultSelect,
      orderBy: {
        name: 'asc',
      },
    });

    return {
      categories,
    };
  }),
});

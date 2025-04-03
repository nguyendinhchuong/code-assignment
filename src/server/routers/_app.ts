/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { restaurantsRouter } from './getRestaurants';
import { addFavoriteRouter } from './addFavorite';
import { categoryRouter } from './getCategory';
export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  restaurants: restaurantsRouter,
  addFavorite: addFavoriteRouter,
  category: categoryRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;

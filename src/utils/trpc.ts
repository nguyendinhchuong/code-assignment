import { httpBatchStreamLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { NextPageContext } from 'next';
// ℹ️ Type-only import:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
import type { AppRouter } from '~/server/routers/_app';
import { transformer } from './transformer';

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // // reference for render.com
  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }

  // assume localhost
  return `http://127.0.0.1:${process.env.PORT ?? 3000}`;
}

/**
 * Extend `NextPageContext` with meta data that can be picked up by `responseMeta()` when server-side rendering
 */
export interface SSRContext extends NextPageContext {
  /**
   * Set HTTP Status code
   * @example
   * const utils = trpc.useUtils();
   * if (utils.ssrContext) {
   *   utils.ssrContext.status = 404;
   * }
   */
  status?: number;
}

/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @see https://trpc.io/docs/v11/react#3-create-trpc-hooks
 */
export const trpc = createTRPCNext<AppRouter, SSRContext>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @see https://trpc.io/docs/v11/ssr
     */
    return {
      /**
       * @see https://trpc.io/docs/v11/client/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchStreamLink({
          url: `${getBaseUrl()}/api/trpc`,
          transformer,
        }),
      ],
      /**
       * @see https://tanstack.com/query/v5/docs/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @see https://trpc.io/docs/v11/ssr
   */
  ssr: false,
  /**
   * @see https://trpc.io/docs/v11/data-transformers
   */
  transformer,
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

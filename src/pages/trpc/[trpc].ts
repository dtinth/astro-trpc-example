import type { APIRoute } from 'astro';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '../../server/context';
import { appRouter } from '../../server/router';
export const all: APIRoute = ({ params, request }) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: request,
    router: appRouter,
    createContext,
  });
};

import { Context, Next } from 'koa';
import { get10MoviesToHomePage } from '../utils/get-10-movies-to-home-page.util';

export const getMoviesToHomePage = async (ctx: Context, next: Next) => {
  const movies = await get10MoviesToHomePage();
  console.log(movies);

  ctx.response.body = movies;
  await next();
};

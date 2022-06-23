import { Context, Next } from 'koa';
import { countStarsToMovies } from '../utils/count-stars-to-movies.util';
import { get10MoviesToHomePage } from '../utils/get-10-movies-to-home-page.util';

export const getMoviesToHomePage = async (ctx: Context, next: Next) => {
  const movies = get10MoviesToHomePage();

  ctx.response.body = countStarsToMovies(movies);
  await next();
};

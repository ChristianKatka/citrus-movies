import { Context, Next } from 'koa';
import { getMovieByTitleNyTimes } from '../services/get-movie-by-title-ny-times.service';
import { getMovieByTitleOMDB } from '../services/get-movie-by-title-omdb.service';

export const searchMovieByTitle = async (ctx: Context, next: Next) => {
  const searchTerm = ctx.params.searchTerm;

  const ombdRes = await getMovieByTitleOMDB(searchTerm);
  const nyRes = await getMovieByTitleNyTimes(searchTerm);

  ctx.response.body = {
    ...ombdRes,
    nyTimesINFO: nyRes.results[0] ? nyRes.results[0] : undefined,
  };

  await next();
};

import { Context, Next } from 'koa';
import { getMovieByTitleNyTimes } from '../services/get-movie-by-title-ny-times.service';
import { getMovieByTitleOMDB } from '../services/get-movie-by-title-omdb.service';

export const searchMovieByTitle = async (ctx: Context, next: Next) => {
  const searchTerm = ctx.params.searchTerm;

  const ombdRes = await getMovieByTitleOMDB(searchTerm);
  const nyRes = await getMovieByTitleNyTimes(searchTerm);

  let nyTimesINFO = undefined;
  if (nyRes && nyRes.results != null && nyRes.results.length <= 1) {
    nyTimesINFO = nyRes.results[0];
  }

  if (ombdRes.Response === 'False') {
    ctx.response.status = 404;
  }

  ctx.response.body = {
    ...ombdRes,
    nyTimesINFO,
  };

  await next();
};

import { Context, Next } from 'koa';
import { getMovieByTitleNyTimes } from '../services/get-movie-by-title-ny-times.service';
import { getMovieByTitleOMDB } from '../services/get-movie-by-title-omdb.service';
import { addNyTimesReviewToMovie } from '../utils/add-ny-times-review-to-movie.util';
import { countStarsToMovie } from '../utils/count-stars-to-movie.util';

export const searchMovieByTitle = async (ctx: Context, next: Next) => {
  const searchTerm = ctx.params.searchTerm;

  const ombdRes = await getMovieByTitleOMDB(searchTerm);
  const nyRes = await getMovieByTitleNyTimes(searchTerm);

  if (ombdRes.Response === 'False') {
    ctx.response.status = 404;
  }

  const movieWithNyInfo = addNyTimesReviewToMovie(ombdRes, nyRes);
  const movieWithNyInfoAndReviewStars = countStarsToMovie(movieWithNyInfo);

  ctx.response.body = movieWithNyInfoAndReviewStars;

  await next();
};

import { getMovieByTitleNyTimes } from '../services/get-movie-by-title-ny-times.service';
import { getMovieByTitleOMDB } from '../services/get-movie-by-title-omdb.service';
import { addNyTimesReviewToMovie } from './add-ny-times-review-to-movie.util';
import { countStarsToMovie } from './count-stars-to-movie.util';

export const get10MoviesToHomePage = async () => {
  const tenMovieTitles = [
    'shutter island',
    'lord of the rings',
    'inception',
    'skyline',
    'grown ups',
    'harry potter',
    'iron man',
    'town',
    'toy story',
    'the other guys',
  ];

  const moviesPromises = tenMovieTitles.map(async (movieTitle) => {
    const ombdRes = await getMovieByTitleOMDB(movieTitle);
    const nyRes = await getMovieByTitleNyTimes(movieTitle);

    const movieWithNyInfo = addNyTimesReviewToMovie(ombdRes, nyRes);
    const movieWithNyInfoAndReviewStars = countStarsToMovie(movieWithNyInfo);

    return movieWithNyInfoAndReviewStars;
  });

  return Promise.all(moviesPromises);
};

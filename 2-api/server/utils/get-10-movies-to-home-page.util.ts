import { getMovieByTitleNyTimes } from '../services/get-movie-by-title-ny-times.service';
import { getMovieByTitleOMDB } from '../services/get-movie-by-title-omdb.service';

export const get10MoviesToHomePage = async () => {
  const shutterIslandOmdb = await getMovieByTitleOMDB('shutter island');
  const shutterIslandNy = await getMovieByTitleNyTimes('shutter island');

  const shutterIsland = {
    ...shutterIslandOmdb,
    nyTimesINFO: shutterIslandNy.results[0]
      ? shutterIslandNy.results[0]
      : undefined,
  };

  const lordOfTheRingsOmdb = await getMovieByTitleOMDB('lord of the rings');
  const lordOfTheRingsNy = await getMovieByTitleNyTimes('lord of the rings');

  const lordOfTheRings = {
    ...lordOfTheRingsOmdb,
    nyTimesINFO: lordOfTheRingsNy.results[0]
      ? lordOfTheRingsNy.results[0]
      : undefined,
  };

  return [shutterIsland, lordOfTheRings];
};

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

  const inceptionOmdb = await getMovieByTitleOMDB('inception');
  const inceptionNy = await getMovieByTitleNyTimes('inception');

  const inception = {
    ...inceptionOmdb,
    nyTimesINFO: inceptionNy.results[0] ? inceptionNy.results[0] : undefined,
  };

  const skylineOmdb = await getMovieByTitleOMDB('skyline');
  const skylineNy = await getMovieByTitleNyTimes('skyline');

  const skyline = {
    ...skylineOmdb,
    nyTimesINFO: skylineNy.results[0] ? skylineNy.results[0] : undefined,
  };

  const grownUpsOmdb = await getMovieByTitleOMDB('grown ups');
  const grownUpsNy = await getMovieByTitleNyTimes('grown ups');

  const grownUps = {
    ...grownUpsOmdb,
    nyTimesINFO: grownUpsNy.results[0] ? grownUpsNy.results[0] : undefined,
  };

  const harryPotterOmdb = await getMovieByTitleOMDB('harry potter');
  const harryPotterNy = await getMovieByTitleNyTimes('harry potter');

  const harryPotter = {
    ...harryPotterOmdb,
    nyTimesINFO: harryPotterNy.results[0]
      ? harryPotterNy.results[0]
      : undefined,
  };

  const ironManOmdb = await getMovieByTitleOMDB('iron man');
  const ironManNy = await getMovieByTitleNyTimes('iron man');

  const ironMan = {
    ...ironManOmdb,
    nyTimesINFO: ironManNy.results[0] ? ironManNy.results[0] : undefined,
  };

  const townOmdb = await getMovieByTitleOMDB('town');
  const townNy = await getMovieByTitleNyTimes('town');

  const town = {
    ...townOmdb,
    nyTimesINFO: townNy.results[0] ? townNy.results[0] : undefined,
  };

  const toyStoryOmdb = await getMovieByTitleOMDB('toy story');
  const toyStoryNy = await getMovieByTitleNyTimes('toy story');

  const toyStory = {
    ...toyStoryOmdb,
    nyTimesINFO: toyStoryNy.results[0] ? toyStoryNy.results[0] : undefined,
  };

  const theOtherGuysOmdb = await getMovieByTitleOMDB('the other guys');
  const theOtherGuysNy = await getMovieByTitleNyTimes('the other guys');

  const theOtherGuys = {
    ...theOtherGuysOmdb,
    nyTimesINFO: theOtherGuysNy.results[0]
      ? theOtherGuysNy.results[0]
      : undefined,
  };

  return [
    shutterIsland,
    lordOfTheRings,
    inception,
    skyline,
    grownUps,
    harryPotter,
    ironMan,
    town,
    toyStory,
    theOtherGuys,
  ];
};

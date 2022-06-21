import Router from 'koa-router';
import { getMoviesToHomePage } from '../controllers/get-movies-to-home-page.controller';
import { searchMovieByTitle } from '../controllers/search-movie-by-title.controller';

const movieRouter = new Router({ prefix: '/movie' });
movieRouter.get('/', getMoviesToHomePage);
movieRouter.post('/:searchTerm', searchMovieByTitle);

export { movieRouter };

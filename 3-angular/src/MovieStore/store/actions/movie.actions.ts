import { createAction, props } from '@ngrx/store';


export const checkIfNeedToLoadMoviesToHomePage =  createAction(
  '[Movie] Check If Need To Load Movies To Home Page'
);
export const getMoviesToHomePage = createAction(
  '[Movie] Get Movies To Home Page'
);
export const getMoviesToHomePageSuccess = createAction(
  '[Movie] Get Movies To Home Page Success',
  props<{ movies: any }>()
);
export const getMoviesToHomePageFailure = createAction(
  '[Movie] Get Movies To Home Page Failure',
  props<{ error: string }>()
);

export const searchMoviesUserTyping = createAction(
  '[Movie] Search Movies User Typing',
  props<{ searchTerm: string }>()
);

export const searchMovies = createAction(
  '[Movie] Search Movies',
  props<{ searchTerm: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Movie] Search Movies Success',
  props<{ movie: any }>()
);
export const searchMoviesFailure = createAction(
  '[Movie] Search Movies Failure',
  props<{ error: string }>()
);

export const selectMovie = createAction(
  '[Movie] Select Movie',
  props<{ movieTitle: string, movieTitleUrl: string }>()
);

export const clearMovieSelection = createAction(
  '[Movie] Clear Movie Selection'
);

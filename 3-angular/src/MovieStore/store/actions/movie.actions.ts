import { createAction, props } from '@ngrx/store';

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
  props<{ serchTerm: string }>()
);

export const searchMovies = createAction(
  '[Movie] Search Movies',
  props<{ serchTerm: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Movie] Search Movies Success',
  props<{ movies: any }>()
);
export const searchMoviesFailure = createAction(
  '[Movie] Search Movies Failure',
  props<{ error: string }>()
);

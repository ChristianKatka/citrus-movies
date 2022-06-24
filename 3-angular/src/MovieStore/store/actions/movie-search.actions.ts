import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/shared/models/movie.model';

export const searchMoviesUserTyping = createAction(
  '[Movie Search] Search Movies User Typing',
  props<{ searchTerm: string }>()
);

export const searchMovies = createAction(
  '[Movie Search] Search Movies',
  props<{ searchTerm: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Movie Search] Search Movies Success',
  props<{ movie: Movie | undefined }>()
);
export const searchMoviesFailure = createAction(
  '[Movie Search] Search Movies Failure',
  props<{ error: string }>()
);

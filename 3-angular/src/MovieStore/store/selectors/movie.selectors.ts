import { createSelector } from '@ngrx/store';
import { getMovieState } from '../reducers';

export const isLoading = createSelector(
  getMovieState,
  (state) => state.loading
);

export const getMovies = createSelector(getMovieState, (state) =>
  Object.values(state.movies)
);

export const getSelectedMovie = createSelector(getMovieState, (state) => {
  if (!state.selectedMovie) return;
  return state.movies[state.selectedMovie];
});

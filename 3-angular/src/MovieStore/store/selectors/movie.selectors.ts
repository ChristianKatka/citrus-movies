import { createSelector } from '@ngrx/store';
import { getMovieState } from '../reducers';

export const isLoading = createSelector(
  getMovieState,
  (state) => state.loading
);

export const getMoviesToHomePage = createSelector(getMovieState, (state) =>
  Object.values(state.moviesHomePage)
);

export const getSelectedMovie = createSelector(getMovieState, (state) => {
  if (!state.selectedMovie) return;
  return state.moviesHomePage[state.selectedMovie];
});

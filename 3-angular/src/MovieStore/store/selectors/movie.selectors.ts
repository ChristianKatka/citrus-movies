import { createSelector } from '@ngrx/store';
import { getMovieState } from '../reducers';

export const isLoading = createSelector(
  getMovieState,
  (state) => state.loading
);

export const getMoviesToHomePage = createSelector(
  getMovieState,
  (state) => state.moviesHomePage
);

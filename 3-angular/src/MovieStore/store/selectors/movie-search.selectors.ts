import { createSelector } from '@ngrx/store';
import { getSearchMovieState } from '../reducers';

export const isLoadingSearchMovies = createSelector(
  getSearchMovieState,
  (state) => state.loadingSearchedMovies
);

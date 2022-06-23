import { createSelector } from '@ngrx/store';
import { getSearchMovieState } from '../reducers';

export const isLoadingSearchMovies = createSelector(
  getSearchMovieState,
  (state) => state.loadingSearchedMovies
);

export const isUserSearchingMovies = createSelector(
  getSearchMovieState,
  (state) => state.searchTerm.length ? true : false
);
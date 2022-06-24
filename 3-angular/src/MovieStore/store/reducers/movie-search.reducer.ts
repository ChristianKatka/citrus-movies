import { Action, createReducer, on } from '@ngrx/store';
import { MovieActions } from '../actions';

export interface MovieSearchState {
  loadingSearchedMovies: boolean;
  searchTerm: string;
}

export const initialState: MovieSearchState = {
  loadingSearchedMovies: false,
  searchTerm: '',
};

const MovieSearchReducer = createReducer(
  initialState,

  on(MovieActions.searchMovies, (state, { searchTerm }) => ({
    ...state,
    loadingSearchedMovies: true,
    searchTerm,
  })),
  on(MovieActions.searchMoviesSuccess, (state, { movie }) => {
    if (!movie)
      return {
        ...state,
        loadingSearchedMovies: false,
      };
    return {
      ...state,
      loadingSearchedMovies: false,
    };
  })
);

export const reducer = (state: MovieSearchState | undefined, action: Action) =>
  MovieSearchReducer(state, action);

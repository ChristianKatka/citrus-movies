import { Action, createReducer, on } from '@ngrx/store';
import { MovieActions } from '../actions';

export interface MovieSearchState {
  searchedMovie: {};
  loadingSearchedMovies: boolean;
}

export const initialState: MovieSearchState = {
  searchedMovie: {},
  loadingSearchedMovies: false,
};

const MovieSearchReducer = createReducer(
  initialState,

  on(MovieActions.searchMovies, (state) => ({
    ...state,
    loadingSearchedMovies: true,
  })),
  on(MovieActions.searchMoviesSuccess, (state, { movie }) => {
    console.log(movie);

    return {
      ...state,
      loadingSearchedMovies: false,
      searchedMovie: movie,
    };
  })
);

export const reducer = (state: MovieSearchState | undefined, action: Action) =>
  MovieSearchReducer(state, action);

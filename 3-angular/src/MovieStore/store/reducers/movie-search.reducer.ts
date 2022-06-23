import { Action, createReducer, on } from '@ngrx/store';
import { Movie } from 'src/shared/models/movie.model';
import { MovieActions } from '../actions';

export interface MovieSearchState {
  // searchedMovie: Movie | undefined;
  loadingSearchedMovies: boolean;
  searchTerm: string;
}

export const initialState: MovieSearchState = {
  // searchedMovie: undefined,
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
      // searchedMovie: movie,
    };
  })
);

export const reducer = (state: MovieSearchState | undefined, action: Action) =>
  MovieSearchReducer(state, action);

import { Action, createReducer, on } from '@ngrx/store';
import { Movie } from 'src/shared/models/movie.model';
import { MovieActions } from '../actions';

export interface MovieState {
  movies: { [title: string]: Movie };
  selectedMovie: string | undefined;
  loading: boolean;
}

export const initialState: MovieState = {
  movies: {},
  selectedMovie: undefined,
  loading: false,
};

const MovieReducer = createReducer(
  initialState,

  on(MovieActions.getMoviesToHomePage, (state) => ({
    ...state,
    loading: true,
  })),

  on(MovieActions.selectMovie, (state, { movieTitle }) => ({
    ...state,
    selectedMovie: movieTitle,
  })),

  on(MovieActions.clearMovieSelection, (state) => ({
    ...state,
    selectedMovie: undefined,
  })),

  on(MovieActions.getMoviesToHomePageSuccess, (state, { movies }) => {
    const moviesList = movies.reduce(
      (items: { [title: string]: Movie }, item: Movie) => ({
        ...items,
        [item.Title]: item,
      }),
      {}
    );

    return {
      ...state,
      loading: false,
      movies: moviesList,
    };
  }),

  on(MovieActions.searchMoviesSuccess, (state, { movie }) => {
    if (!movie)
      return {
        ...state,
        movies: {},
      };

    const moviesList = [movie].reduce(
      (items: { [title: string]: Movie }, item: Movie) => ({
        ...items,
        [item.Title]: item,
      }),
      {}
    );
    return {
      ...state,
      movies: moviesList,
    };
  })
);

export const reducer = (state: MovieState | undefined, action: Action) =>
  MovieReducer(state, action);

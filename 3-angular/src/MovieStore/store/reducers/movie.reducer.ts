import { Action, createReducer, on } from '@ngrx/store';
import { MovieActions } from '../actions';
import { countStarsToMovies } from '../utils/count-stars-to-movies.util';

export interface MovieState {
  moviesHomePage: { [title: string]: {} };
  selectedMovie: string | undefined;
  loading: boolean;
}

export const initialState: MovieState = {
  moviesHomePage: {},
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
    // console.log(JSON.stringify(movies));
    const movieListWithStars = countStarsToMovies(movies);
    const moviesList = movieListWithStars.reduce(
      (items: { [title: string]: any }, item: any) => ({
        ...items,
        [item.Title]: item,
      }),
      {}
    );
    console.log(moviesList);

    return {
      ...state,
      loading: false,
      moviesHomePage: moviesList,
    };
  }),

  on(MovieActions.searchMoviesSuccess, (state, { movie }) => {
    if (!movie)
      return {
        ...state,
        moviesHomePage: {},
      };
    const movieListWithStars = countStarsToMovies([movie]);
    const moviesList = movieListWithStars.reduce(
      (items: { [title: string]: any }, item: any) => ({
        ...items,
        [item.Title]: item,
      }),
      {}
    );
    return {
      ...state,
      moviesHomePage: moviesList,
    };
  })
);

export const reducer = (state: MovieState | undefined, action: Action) =>
  MovieReducer(state, action);

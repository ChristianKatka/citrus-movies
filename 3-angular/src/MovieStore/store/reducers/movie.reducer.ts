import { Action, createReducer, on } from '@ngrx/store';
import { MovieActions } from '../actions';

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

  on(MovieActions.searchMovies, (state) => ({
    ...state,
    loading: true,
  })),

  on(MovieActions.getMoviesToHomePageSuccess, (state, { movies }) => {
    console.log(movies);
    const moviesList = movies.reduce(
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

  on(MovieActions.searchMoviesSuccess, (state, { movies }) => {
    console.log(movies);

    return {
      ...state,
    };
  })
);

export const reducer = (state: MovieState | undefined, action: Action) =>
  MovieReducer(state, action);

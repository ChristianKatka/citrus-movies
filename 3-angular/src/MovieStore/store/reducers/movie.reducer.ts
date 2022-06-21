import { Action, createReducer, on } from '@ngrx/store';
import { MovieActions } from '../actions';

export interface MovieState {
  movies: { [title: string]: {} };
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

  on(MovieActions.getMoviesToHomePageSuccess, (state, { movies }) => {
    console.log(movies);

    return {
      ...state,
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

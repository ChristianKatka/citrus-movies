import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppState } from '../../../app/store/reducers';
import * as fromMovie from './movie.reducer';
import * as fromSearchMovie from './movie-search.reducer';

export const featureKey = 'movie';
export interface MovieFeatureState {
  movie: fromMovie.MovieState;
  searchMovie: fromSearchMovie.MovieSearchState;
}

export interface MoviesExtendedAppState extends AppState {
  movies: MovieFeatureState;
}

export const reducers: ActionReducerMap<MovieFeatureState> = {
  movie: fromMovie.reducer,
  searchMovie: fromSearchMovie.reducer,
};

const getMovieFeatureState =
  createFeatureSelector<MovieFeatureState>(featureKey);

const getMovie = createFeatureSelector<fromMovie.MovieState>('movie');
export const getMovieState = createSelector(getMovieFeatureState, getMovie);


const getSearchMovie = createFeatureSelector<fromSearchMovie.MovieSearchState>('searchMovie');
export const getSearchMovieState = createSelector(getMovieFeatureState, getSearchMovie);

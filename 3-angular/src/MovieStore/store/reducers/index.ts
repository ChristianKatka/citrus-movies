import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppState } from '../../../app/store/reducers';
import * as fromMovie from './movie.reducer';

export const featureKey = 'movie';
export interface MovieFeatureState {
  movie: fromMovie.MovieState;
}

export interface MoviesExtendedAppState extends AppState {
  movies: MovieFeatureState;
}

export const reducers: ActionReducerMap<MovieFeatureState> = {
  movie: fromMovie.reducer,
};

const getMovieFeatureState =
  createFeatureSelector<MovieFeatureState>(featureKey);

const getMovie = createFeatureSelector<fromMovie.MovieState>('movie');
export const getMovieState = createSelector(getMovieFeatureState, getMovie);

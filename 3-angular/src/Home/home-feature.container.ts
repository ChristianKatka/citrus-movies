import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions } from 'src/MovieStore/store/actions';
import { MoviesExtendedAppState } from 'src/MovieStore/store/reducers';
import {
  MovieSearchSelectors,
  MovieSelectors,
} from 'src/MovieStore/store/selectors';

@Component({
  selector: 'citrus-movies-home',
  templateUrl: 'home-feature.container.html',
  styleUrls: ['home-feature.container.scss'],
})
export class HomeFeatureContainerComponent {
  isLoading$ = this.store.select(MovieSelectors.isLoading);

  movies$ = this.store.select(MovieSelectors.getMovies);

  isLoadingSearchMovies$ = this.store.select(
    MovieSearchSelectors.isLoadingSearchMovies
  );

  isUserSearchingMovies$ = this.store.select(
    MovieSearchSelectors.isUserSearchingMovies
  );

  constructor(private store: Store<MoviesExtendedAppState>) {}

  onSelectMovie(movieTitle: string) {
    const movieTitleUrl = movieTitle.replace(/\s+/g, '-').toLowerCase();
    this.store.dispatch(
      MovieActions.selectMovie({ movieTitle, movieTitleUrl })
    );
  }

  onSearchMoviesUserTyping(searchTerm: string) {
    this.store.dispatch(MovieActions.searchMoviesUserTyping({ searchTerm }));
  }
}

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
export class HomeFeatureContainerComponent implements OnInit {
  isLoading$ = this.store.select(MovieSelectors.isLoading);
  homePageMovies$ = this.store.select(MovieSelectors.getMoviesToHomePage);
  isLoadingSearchMovies$ = this.store.select(
    MovieSearchSelectors.isLoadingSearchMovies
  );

  constructor(private store: Store<MoviesExtendedAppState>) {}

  ngOnInit() {
    this.store.dispatch(MovieActions.checkIfNeedToLoadMoviesToHomePage());
  }

  onSelectMovie(movieTitle: string) {
    const movieTitleUrl = movieTitle.replace(/\s+/g, '-').toLowerCase();
    this.store.dispatch(
      MovieActions.selectMovie({ movieTitle, movieTitleUrl })
    );
  }

  onInputtedSearchText(searchTerm: string) {
    this.store.dispatch(MovieActions.searchMoviesUserTyping({ searchTerm }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions } from 'src/MovieStore/store/actions';
import { MoviesExtendedAppState } from 'src/MovieStore/store/reducers';
import { MovieSelectors } from 'src/MovieStore/store/selectors';

@Component({
  templateUrl: 'movie-feature.container.html',
  styleUrls: ['movie-feature.container.scss'],
})
export class MovieFeatureContainerComponent implements OnInit {
  // isLoading$ = this.store.select(MovieSelectors.isLoading);
  // homePageMovies$ = this.store.select(MovieSelectors.getMoviesToHomePage);

  // constructor(private store: Store<MoviesExtendedAppState>) {}

  ngOnInit() {
    // this.store.dispatch(MovieActions.getMoviesToHomePage());
  }
}

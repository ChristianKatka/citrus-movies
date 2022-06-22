import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions } from 'src/MovieStore/store/actions';
import { MoviesExtendedAppState } from 'src/MovieStore/store/reducers';
import { MovieSelectors } from 'src/MovieStore/store/selectors';

@Component({
  templateUrl: 'movie-feature.container.html',
  styleUrls: ['movie-feature.container.scss'],
})
export class MovieFeatureContainerComponent implements OnDestroy {
  selectedMovie$ = this.store.select(MovieSelectors.getSelectedMovie);

  constructor(private store: Store<MoviesExtendedAppState>) {}

  ngOnDestroy(): void {
    this.store.dispatch(MovieActions.clearMovieSelection());
  }
}

import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterActions } from 'src/app/store/actions';
import { MovieActions } from 'src/MovieStore/store/actions';
import { MoviesExtendedAppState } from 'src/MovieStore/store/reducers';
import { MovieSelectors } from 'src/MovieStore/store/selectors';

@Component({
  templateUrl: 'movie-feature.container.html',
})
export class MovieFeatureContainerComponent implements OnDestroy {
  selectedMovie$ = this.store.select(MovieSelectors.getSelectedMovie);

  constructor(private store: Store<MoviesExtendedAppState>) {}

  ngOnDestroy(): void {
    this.store.dispatch(MovieActions.clearMovieSelection());
  }

  onGoBack() {
    this.store.dispatch(RouterActions.back());
  }
}

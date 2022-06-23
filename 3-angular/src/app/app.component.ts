import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions } from 'src/MovieStore/store/actions';
import { MoviesExtendedAppState } from 'src/MovieStore/store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'citrus-movie';
  constructor(private store: Store<MoviesExtendedAppState>) {}

  ngOnInit() {
    this.store.dispatch(MovieActions.checkIfNeedToLoadMoviesToHomePage());
  }
}

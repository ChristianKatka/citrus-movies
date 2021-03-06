import { Injectable } from '@angular/core';
import { RouterActions } from '@app/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { MovieService } from 'src/MovieStore/services/movie.service';
import { MovieActions } from '../actions';
import { MoviesExtendedAppState } from '../reducers';
import { MovieSelectors } from '../selectors';

@Injectable()
export class MovieEffects {
  checkIfNeedToLoadMoviesToHomePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.checkIfNeedToLoadMoviesToHomePage),
      withLatestFrom(this.store.select(MovieSelectors.getMovies)),
      map(([action, movies]) => movies),
      switchMap((movies) => {
        if (movies.length === 0) {
          return of(MovieActions.getMoviesToHomePage());
        }
        return of(
          MovieActions.getMoviesToHomePageFailure({
            error: 'Movies already retrieved',
          })
        );
      })
    )
  );

  getMoviesToHomePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.getMoviesToHomePage),
      switchMap(() =>
        this.movieService.getMoviesToHomePage().pipe(
          map((movies) =>
            MovieActions.getMoviesToHomePageSuccess({
              movies,
            })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(
              MovieActions.getMoviesToHomePageFailure({
                error: 'error getting movies',
              })
            );
          })
        )
      )
    )
  );

  goToHomePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.getMoviesToHomePage),
      map(() =>
        RouterActions.navigate({
          commands: ['/'],
        })
      )
    )
  );

  selectMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.selectMovie),
      map(({ movieTitleUrl }) =>
        RouterActions.navigate({
          commands: ['/movies/', movieTitleUrl],
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store<MoviesExtendedAppState>
  ) {}
}

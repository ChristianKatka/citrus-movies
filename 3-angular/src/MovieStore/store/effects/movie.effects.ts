import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MovieService } from 'src/MovieStore/services/movie.service';
import { MovieActions } from '../actions';

@Injectable()
export class MovieEffects {
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

  searchMoviesUserTyping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMoviesUserTyping),
      debounceTime(environment.pendingDelayTime),
      map(({ serchTerm }) => MovieActions.searchMovies({ serchTerm }))
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMovies),
      switchMap(({ serchTerm }) =>
        this.movieService.searchMovies(serchTerm).pipe(
          map((movies) =>
            MovieActions.searchMoviesSuccess({
              movies,
            })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(
              MovieActions.searchMoviesFailure({
                error: 'error searching movies',
              })
            );
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}

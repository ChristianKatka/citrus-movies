import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MovieService } from 'src/MovieStore/services/movie.service';
import { Movie } from 'src/shared/models/movie.model';
import { MovieActions } from '../actions';

@Injectable()
export class MovieSearchEffects {
  searchMoviesUserTyping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMoviesUserTyping),
      debounceTime(environment.delayTime),
      map(({ searchTerm }) => MovieActions.searchMovies({ searchTerm }))
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMovies),
      switchMap(({ searchTerm }) =>
        this.movieService.searchMovies(searchTerm).pipe(
          map((movie: Movie) =>
            MovieActions.searchMoviesSuccess({
              movie,
            })
          ),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 404) {
              return of(
                MovieActions.searchMoviesSuccess({
                  movie: undefined,
                })
              );
            }
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

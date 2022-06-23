import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/shared/models/movie.model';

@Component({
  selector: 'citrus-movies-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input()
  movie: Movie | undefined | null = null;

  @Output()
  onSelectMovie: EventEmitter<string> = new EventEmitter();

  selectMovie(movieTitle: string) {
    this.onSelectMovie.emit(movieTitle);
  }
}

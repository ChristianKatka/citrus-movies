import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'citrus-movies-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input()
  movie: any;

  @Output()
  onSelectMovie: EventEmitter<string> = new EventEmitter();

  selectMovie(movieTitle: string) {
    this.onSelectMovie.emit(movieTitle);
  }
}

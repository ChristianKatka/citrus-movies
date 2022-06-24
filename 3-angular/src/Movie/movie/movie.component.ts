import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/shared/models/movie.model';

@Component({
  selector: 'citrus-movies-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.scss'],
})
export class MovieComponent {
  @Input()
  selectedMovie: Movie | undefined | null = null;

  @Output()
  goBack = new EventEmitter();
}

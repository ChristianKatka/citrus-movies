import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-movie-poster',
  templateUrl: 'movie-poster.component.html',
  styleUrls: ['movie-poster.component.scss'],
})
export class MoviePosterComponent {
  @Input()
  poster = '';
}

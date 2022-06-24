import { animate, style } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxMasonryAnimations } from 'ngx-masonry';
import { Movie } from 'src/shared/models/movie.model';

@Component({
  selector: 'citrus-movies-home-page-movies-cards',
  templateUrl: 'home-page-movies-cards.component.html',
  styleUrls: ['home-page-movies-cards.component.scss'],
})
export class HomePageMoviesCardsComponent {
  @Input()
  movies: Movie[] | undefined | null = null;

  @Input()
  isLoadingSearchMovies = false;

  @Input()
  isUserSearchingMovies = false;

  @Output()
  onSelectMovie: EventEmitter<string> = new EventEmitter();

  animations: NgxMasonryAnimations = {
    show: [
      style({opacity: 0}),
      animate('700ms ease-in', style({opacity: 1})),
    ],
    hide: [
      style({opacity: '*'}),
      animate('700ms ease-in', style({opacity: 0})),
    ]
  }
}

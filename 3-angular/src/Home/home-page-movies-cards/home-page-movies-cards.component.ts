import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'citrus-movies-home-page-movies-cards',
  templateUrl: 'home-page-movies-cards.component.html',
  styleUrls: ['home-page-movies-cards.component.scss'],
})
export class HomePageMoviesCardsComponent {
  @Input()
  homePageMovies: any;

  @Input()
  isLoadingSearchMovies: any;

  @Output()
  onSelectMovie: EventEmitter<string> = new EventEmitter();
}

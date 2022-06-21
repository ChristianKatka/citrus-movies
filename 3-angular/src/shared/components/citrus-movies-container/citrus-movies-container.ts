import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-container',
  templateUrl: 'citrus-movies-container.html',
})
export class CitrusMoviesContainer {
  @Input()
  width = '100%';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss'],
})
export class StarsComponent {
  @Input()
  starRatingbyImdb: any;
}

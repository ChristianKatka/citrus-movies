import { Component, Input } from '@angular/core';
import { Star } from 'src/shared/models/star.model';

@Component({
  selector: 'citrus-movies-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss'],
})
export class StarsComponent {
  @Input()
  starRatingbyImdb: Star | undefined = undefined;
}

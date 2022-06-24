import { Component, Input } from '@angular/core';
import { NyTimesInfo } from 'src/shared/models/movie.model';

@Component({
  selector: 'citrus-movies-ny-times-info',
  templateUrl: 'ny-times-info.component.html',
  styleUrls: ['ny-times-info.component.scss'],
})
export class NyTimesInfoComponent {
  @Input()
  nyTimesINFO: NyTimesInfo | undefined | null = null;
}

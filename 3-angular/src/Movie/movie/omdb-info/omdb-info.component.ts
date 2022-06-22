import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-omdb-info',
  templateUrl: 'omdb-info.component.html',
  styleUrls: ['omdb-info.component.scss'],
})
export class OmdbInfoComponent {
  @Input()
  plot: any;

  @Input()
  production: any;

  @Input()
  genre: any;

  @Input()
  year: any;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-omdb-info',
  templateUrl: 'omdb-info.component.html',
  styleUrls: ['omdb-info.component.scss'],
})
export class OmdbInfoComponent {
  @Input()
  plot = '';

  @Input()
  production = '';

  @Input()
  genre = '';

  @Input()
  year = '';
}

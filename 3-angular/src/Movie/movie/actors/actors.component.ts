import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-actors',
  templateUrl: 'actors.component.html',
  styleUrls: ['actors.component.scss'],
})
export class ActorsComponent {
  @Input()
  actors = '';
}

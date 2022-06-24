import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'citrus-movies-go-back-button',
  templateUrl: 'go-back-button.component.html',
  styleUrls: ['go-back-button.component.scss'],
})
export class GoBackComponent {
  @Output()
  goBack = new EventEmitter();
}

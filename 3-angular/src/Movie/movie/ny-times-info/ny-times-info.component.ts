import { Component, Input } from '@angular/core';

@Component({
  selector: 'citrus-movies-ny-times-info',
  templateUrl: 'ny-times-info.component.html',
  styleUrls: ['ny-times-info.component.scss'],
})
export class NyTimesInfoComponent {
  @Input()
  nyTimesINFO: any;
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'citrus-movies-top-search',
  templateUrl: 'top-search.component.html',
  styleUrls: ['top-search.component.scss'],
})
export class TopSearchComponent {
  @Output()
  inputtedSearchText: EventEmitter<string> = new EventEmitter();

  searchFormControl = new FormControl('');
  searchFormGroup = new FormGroup({
    search: this.searchFormControl,
  });

  userInput() {
    console.log('asd');
    console.log(this.searchFormGroup.value.search);
  }
}

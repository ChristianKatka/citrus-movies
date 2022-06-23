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

  onUserInput() {
    if (!this.searchFormGroup.value.search) return;
    this.inputtedSearchText.emit(this.searchFormGroup.value.search);
  }
}

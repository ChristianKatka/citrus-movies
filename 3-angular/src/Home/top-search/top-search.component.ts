import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'citrus-movies-top-search',
  templateUrl: 'top-search.component.html',
  styleUrls: ['top-search.component.scss'],
})
export class TopSearchComponent {
  @Output()
  searchMoviesUserTyping: EventEmitter<string> = new EventEmitter();

  searchFormControl = new FormControl('');
  searchFormGroup = new FormGroup({
    searchTerm: this.searchFormControl,
  });

  onSearchMoviesUserTyping() {
    if (!this.searchFormGroup.value.searchTerm) return;
    this.searchMoviesUserTyping.emit(this.searchFormGroup.value.searchTerm);
  }
}

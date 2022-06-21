import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { components } from '.';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material.module';
import { components } from '.';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}

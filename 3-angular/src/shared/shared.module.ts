import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material.module';
import { components, pipes } from '.';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  declarations: [...components, pipes],
  exports: [...components, pipes],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}

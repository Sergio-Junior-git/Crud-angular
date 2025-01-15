import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    CategoryPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,

  ],
  exports: [
    CategoryPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from './dropdown-search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    DropdownSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports:[
    DropdownSearchComponent
  ]
})
export class DropdownSearchModule { }

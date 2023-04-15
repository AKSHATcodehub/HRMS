import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownFilterComponent } from './dropdown-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    DropdownFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports:[
    DropdownFilterComponent
  ]
})
export class DropdownFilterModule { }

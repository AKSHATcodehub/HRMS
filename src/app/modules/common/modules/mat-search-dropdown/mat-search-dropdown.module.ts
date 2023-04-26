import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSearchDropdownComponent } from './mat-search-dropdown.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MatSearchDropdownComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    MatSearchDropdownComponent
  ]
})
export class MatSearchDropdownModule { }

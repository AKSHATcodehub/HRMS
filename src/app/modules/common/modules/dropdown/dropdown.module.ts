import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorPipe } from 'src/app/pipes/validation-error/validation-error.pipe';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ValidationErrorModule
  ],
  exports:[
    DropdownComponent
  ]
})
export class DropdownModule { }

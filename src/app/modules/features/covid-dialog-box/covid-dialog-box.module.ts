import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidDialogBoxComponent } from './covid-dialog-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    CovidDialogBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ValidationErrorModule,
    MatDialogModule
  ],
  exports:[
    CovidDialogBoxComponent
  ]
})
export class CovidDialogBoxModule { }

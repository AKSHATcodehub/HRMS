import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedDinnerRoutingModule } from './requested-dinner-routing.module';
import { RequestedDinnerComponent } from './requested-dinner.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomDropdownModule } from 'src/app/modules/common/modules/custom-dropdown/custom-dropdown.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestedDinnerComponent
  ],
  imports: [
    CommonModule,
    RequestedDinnerRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    CustomDropdownModule,
    AngularEditorModule,
    DropdownModule,
    ValidationErrorModule,
    ReactiveFormsModule
  ]
})
export class RequestedDinnerModule { }

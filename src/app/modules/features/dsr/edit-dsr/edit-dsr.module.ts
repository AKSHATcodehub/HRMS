import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDsrRoutingModule } from './edit-dsr-routing.module';
import { EditDsrComponent } from './edit-dsr.component';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    EditDsrComponent
  ],
  imports: [
    CommonModule,
    EditDsrRoutingModule,
    DropdownModule,
    MatFormFieldModule,
    NgxMatTimepickerModule,
    ValidationErrorModule,
    FormsModule,
    AngularEditorModule,
    MatInputModule
  ]
})
export class EditDsrModule { }
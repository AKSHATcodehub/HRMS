import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetsRoutingModule } from './request-assets-routing.module';
import { RequestAssetsComponent } from './request-assets.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarModule } from 'src/app/modules/common/modules/snackbar/snackbar.module';


@NgModule({
  declarations: [
    RequestAssetsComponent
  ],
  imports: [
    CommonModule,
    RequestAssetsRoutingModule,
    TableModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    ValidationErrorModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    SnackbarModule
  ]
})
export class RequestAssetsModule { }

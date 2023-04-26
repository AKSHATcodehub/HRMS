import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarModule } from 'src/app/modules/common/modules/snackbar/snackbar.module';
import { MatSearchDropdownModule } from 'src/app/modules/common/modules/mat-search-dropdown/mat-search-dropdown.module';

@NgModule({
  declarations: [
    BasicInformationComponent,

  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    DropdownModule,
    ReactiveFormsModule,
    ValidationErrorModule,
    MatSnackBarModule,
    SnackbarModule,
    MatSearchDropdownModule
  ],
  exports:[
    BasicInformationComponent
  ]
})
export class BasicInformationModule { }

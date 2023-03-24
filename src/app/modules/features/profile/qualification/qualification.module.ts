import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { DialogModule } from 'src/app/modules/common/modules/dialog/dialog.module';
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';


@NgModule({
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    // { provide: MdDialogRef, useValue: {} }, --> deprecated
    { provide: MatDialogRef, useValue: {} }
],
  declarations: [
    QualificationComponent,
    EditQualificationComponent
  ],
  imports: [
    CommonModule,
    QualificationRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatTableModule,
    ValidationErrorModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    MatDialogModule
  ],
  exports:[
    QualificationComponent
  ],
  
})
export class QualificationModule { }

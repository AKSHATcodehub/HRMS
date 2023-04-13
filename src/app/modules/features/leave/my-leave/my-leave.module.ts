import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SnackbarModule } from 'src/app/modules/common/modules/snackbar/snackbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    MyLeaveComponent
  ],
  imports: [
    CommonModule,
    MyLeaveRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    EditorModule,
    TableModule,
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ValidationErrorModule,
    AngularEditorModule,
    SnackbarModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers:[
    SnackbarService
  ]
})
export class MyLeaveModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { DsrRoutingModule } from './dsr-routing.module';
import { DsrComponent } from './dsr.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';
import { TableModule } from '../../common/modules/table/table.module';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SnackbarModule } from '../../common/modules/snackbar/snackbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { SnackbarService } from 'src/app/services/snackbar.service';
// import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@NgModule({
  declarations: [
    DsrComponent
  ],
  imports: [
    CommonModule,
    DsrRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    TableModule,
    MatExpansionModule,
    MatExpansionModule,
    MatIconModule,
    DropdownModule,
    EditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorModule,
    AngularEditorModule,
    MatSnackBarModule,
    SnackbarModule,
    NgxMatTimepickerModule
  ],
  providers:[
    SnackbarService
  ]
})
export class DsrModule { }

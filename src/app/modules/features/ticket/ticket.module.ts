import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';
import { TableModule } from '../../common/modules/table/table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarModule } from '../../common/modules/snackbar/snackbar.module';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    EditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    DropdownModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorModule,
    AngularEditorModule,
    MatSnackBarModule,
    SnackbarModule
  ]
})
export class TicketModule { }

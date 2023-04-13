import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { SnackbarService } from 'src/app/services/snackbar.service';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    ValidationErrorModule,
    FormsModule
  ],
  exports:[
    DialogComponent
  ],
  providers:[
    SnackbarService
  ]
})
export class DialogModule { }

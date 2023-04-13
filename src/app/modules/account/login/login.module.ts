import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarModule } from '../../common/modules/snackbar/snackbar.module';
import { SnackbarService } from 'src/app/services/snackbar.service';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    GetControlModule,
    ValidationErrorModule,
    MatSnackBarModule,
    SnackbarModule

  ],
  providers:[
    SnackbarService
  ]
})
export class LoginModule { }

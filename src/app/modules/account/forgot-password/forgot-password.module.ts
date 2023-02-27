import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class ForgotPasswordModule { }

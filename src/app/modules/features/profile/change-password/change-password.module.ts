import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
// import { CustomCarossuelComponent } from '../../home/custom-carossuel/custom-carossuel.component';
// import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorModule
    // HomeModule
  ],
  exports:[
    ChangePasswordComponent
  ]
})
export class ChangePasswordModule { }

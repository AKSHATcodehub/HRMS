import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorPipe } from 'src/app/pipes/validation-error/validation-error.pipe';
import { ClickOutsideDirective } from './click-outside.directive';
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  declarations: [
    DropdownComponent,
    ClickOutsideDirective,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ValidationErrorModule,
    ClickOutsideModule
  ],
  exports:[
    DropdownComponent
  ]
})
export class DropdownModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './custom-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    CustomDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  exports:[
    CustomDropdownComponent
  ]
})
export class CustomDropdownModule { }

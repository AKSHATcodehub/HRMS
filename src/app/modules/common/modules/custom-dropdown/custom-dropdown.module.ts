import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './custom-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomDropdownComponent
  ]
})
export class CustomDropdownModule { }

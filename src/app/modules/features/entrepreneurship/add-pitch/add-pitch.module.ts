import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPitchRoutingModule } from './add-pitch-routing.module';
import { AddPitchComponent } from './add-pitch.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    AddPitchComponent
  ],
  imports: [
    CommonModule,
    AddPitchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    ValidationErrorModule,
    ReactiveFormsModule,
    EditorModule
  ],
  exports:[
    AddPitchComponent
  ]
})
export class AddPitchModule { }

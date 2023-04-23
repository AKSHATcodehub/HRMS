import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { CustomDropdownModule } from 'src/app/modules/common/modules/custom-dropdown/custom-dropdown.module';


@NgModule({
  declarations: [
    InterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    TableModule,
    DropdownModule,
    CustomDropdownModule
  ]
})
export class InterviewModule { }

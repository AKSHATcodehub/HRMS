import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';


@NgModule({
  declarations: [
    TrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule
  ]
})
export class TrainingDetailsModule { }

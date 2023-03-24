import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTrainingRoutingModule } from './ongoing-training-routing.module';
import { OngoingTrainingComponent } from './ongoing-training.component';


@NgModule({
  declarations: [
    OngoingTrainingComponent
  ],
  imports: [
    CommonModule,
    OngoingTrainingRoutingModule
  ]
})
export class OngoingTrainingModule { }

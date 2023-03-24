import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingCardRoutingModule } from './training-card-routing.module';
import { TrainingCardComponent } from './training-card.component';


@NgModule({
  declarations: [
    TrainingCardComponent
  ],
  imports: [
    CommonModule,
    TrainingCardRoutingModule
  ],
  exports:[
    TrainingCardComponent
  ]
})
export class TrainingCardModule { }

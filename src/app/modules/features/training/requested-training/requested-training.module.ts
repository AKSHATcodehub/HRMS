import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingRoutingModule } from './requested-training-routing.module';
import { RequestedTrainingComponent } from './requested-training.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';


@NgModule({
  declarations: [
    RequestedTrainingComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingRoutingModule,
    TableModule
  ]
})
export class RequestedTrainingModule { }

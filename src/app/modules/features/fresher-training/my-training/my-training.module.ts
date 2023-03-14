import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { CardsModule } from 'src/app/modules/common/modules/cards/cards.module';


@NgModule({
  declarations: [
    MyTrainingComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    CardsModule
  ]
})
export class MyTrainingModule { }

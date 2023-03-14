import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import { DetailsComponent } from './details/details.component';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    TrainingDetailsComponent,
    DetailsComponent,
    SubTopicsComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
    MatTabsModule
  ]
})
export class TrainingDetailsModule { }

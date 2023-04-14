import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingRoutingModule } from './upcoming-training-routing.module';
import { UpcomingTrainingComponent } from './upcoming-training.component';
import { TrainingCardModule } from 'src/app/modules/common/modules/training-card/training-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogModule } from 'src/app/modules/common/modules/confirmation-dialog/confirmation-dialog.module';


@NgModule({
  declarations: [
    UpcomingTrainingComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingRoutingModule,
    TrainingCardModule,
    MatDialogModule,
    ConfirmationDialogModule
  ]
})
export class UpcomingTrainingModule { }

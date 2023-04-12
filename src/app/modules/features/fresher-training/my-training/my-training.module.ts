import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { CardsModule } from 'src/app/modules/common/modules/cards/cards.module';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { TrainingCardModule } from 'src/app/modules/common/modules/training-card/training-card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';


@NgModule({
  declarations: [
    MyTrainingComponent,
    FeedbackDialogComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    CardsModule,
    MatDialogModule,
    MatRadioModule,
    MatIconModule, 
    TrainingCardModule,
    ReactiveFormsModule
  ],
  providers:[
    SnackbarService
  ]
})
export class MyTrainingModule { }

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
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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
    ReactiveFormsModule,
    ValidationErrorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[
    SnackbarService
  ]
})
export class MyTrainingModule { }

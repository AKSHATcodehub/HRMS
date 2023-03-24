import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTraingsRoutingModule } from './my-traings-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { TrainingCardModule } from 'src/app/modules/common/modules/training-card/training-card.module';
import { RequestedTrainingPopupComponent } from './requested-training-popup/requested-training-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MyTrainingComponent,
    RequestedTrainingPopupComponent,

  ],
  imports: [
    CommonModule,
    MyTraingsRoutingModule,
    TrainingCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ]
})
export class MyTraingsModule { }

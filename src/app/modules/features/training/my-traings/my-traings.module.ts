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
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogModule } from 'src/app/modules/common/modules/confirmation-dialog/confirmation-dialog.module';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';


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
    MatButtonModule,
    MatIconModule,
    ConfirmationDialogModule,
    DropdownModule,
    ReactiveFormsModule,
    ValidationErrorModule
  ]
})
export class MyTraingsModule { }

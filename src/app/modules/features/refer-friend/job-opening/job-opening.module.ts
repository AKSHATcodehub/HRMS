import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    JobOpeningComponent,
  
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule,
    MatDialogModule
    
  ]
})
export class JobOpeningModule { }

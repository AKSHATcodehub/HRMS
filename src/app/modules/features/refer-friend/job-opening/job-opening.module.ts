import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    JobOpeningComponent,
  
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule,
    MatDialogModule,
    MatIconModule 
    
  ]
})
export class JobOpeningModule { }

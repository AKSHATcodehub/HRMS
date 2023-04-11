import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';
import { PerformanceDialogComponent } from './performance-dialog/performance-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PerformanceComponent,
    PerformanceDialogComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    DropdownModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class PerformanceModule { }

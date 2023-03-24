import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';


@NgModule({
  declarations: [
    PerformanceComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    DropdownModule
  ]
})
export class PerformanceModule { }

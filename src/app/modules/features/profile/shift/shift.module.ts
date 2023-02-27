import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftComponent } from './shift.component';


@NgModule({
  declarations: [
    ShiftComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule
  ],
  exports:[
    ShiftComponent
  ]
})
export class ShiftModule { }

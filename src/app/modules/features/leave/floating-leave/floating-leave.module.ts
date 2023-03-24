import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeaveRoutingModule } from './floating-leave-routing.module';
import { FloatingLeaveComponent } from './floating-leave.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';


@NgModule({
  declarations: [
    FloatingLeaveComponent
  ],
  imports: [
    CommonModule,
    FloatingLeaveRoutingModule,
    TableModule
  ]
})
export class FloatingLeaveModule { }

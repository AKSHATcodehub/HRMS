import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrDetailsRoutingModule } from './dsr-details-routing.module';
import { DsrDetailsComponent } from './dsr-details.component';

@NgModule({
  declarations: [
    DsrDetailsComponent
  ],
  imports: [
    CommonModule,
    DsrDetailsRoutingModule,

  ]
})
export class DsrDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrDetailsRoutingModule } from './dsr-details-routing.module';
import { DsrDetailsComponent } from './dsr-details.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DsrDetailsComponent
  ],
  imports: [
    CommonModule,
    DsrDetailsRoutingModule,
    MatIconModule

  ]
})
export class DsrDetailsModule { }

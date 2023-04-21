import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchCouponRoutingModule } from './lunch-coupon-routing.module';
import { LunchCouponComponent } from './lunch-coupon.component';
import { LunchCalendarModule } from '../lunch-calendar/lunch-calendar.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CouponsHistoryComponent } from './coupons-history/coupons-history.component';


@NgModule({
  declarations: [
    LunchCouponComponent,
    CouponsHistoryComponent
  ],
  imports: [
    CommonModule,
    LunchCouponRoutingModule,
    LunchCalendarModule,
    MatDialogModule
  ]
})
export class LunchCouponModule { }

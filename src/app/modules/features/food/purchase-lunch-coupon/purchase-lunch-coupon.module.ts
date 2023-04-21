import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseLunchCouponRoutingModule } from './purchase-lunch-coupon-routing.module';
import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LunchCalendarModule } from '../lunch-calendar/lunch-calendar.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PurchaseLunchCouponComponent
  ],
  imports: [
    CommonModule,
    PurchaseLunchCouponRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    LunchCalendarModule,
    MatIconModule
  ]
})
export class PurchaseLunchCouponModule { }

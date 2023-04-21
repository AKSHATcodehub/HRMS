import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';

const routes: Routes = [
  {path:'',component:PurchaseLunchCouponComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseLunchCouponRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchCouponComponent } from './lunch-coupon.component';

const routes: Routes = [
  {path:'',component:LunchCouponComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunchCouponRoutingModule { }

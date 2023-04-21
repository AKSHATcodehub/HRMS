import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LUNCH_COUPON, PURCHASE_LUNCH_COUPON, REQUESTED_DINNER } from 'src/app/constant/routes';
import { FoodComponent } from './food.component';

const routes: Routes = [
  { 
    path: '', 
    component: FoodComponent, 
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:LUNCH_COUPON.fullUrl
      },
      {
        path:LUNCH_COUPON.fullUrl,
        // pathMatch:'full',
        loadChildren:()=>import('./lunch-coupon/lunch-coupon.module').then(
          (module)=>module.LunchCouponModule
        )
      },
      {
        path:REQUESTED_DINNER.fullUrl,
        // pathMatch:'full',
        loadChildren:()=>import('./requested-dinner/requested-dinner.module').then(
          (module)=>module.RequestedDinnerModule
        )
      },
      {
        path:PURCHASE_LUNCH_COUPON.fullUrl,
        pathMatch:'full',
        loadChildren:()=>import('./purchase-lunch-coupon/purchase-lunch-coupon.module').then(
          (module)=>module.PurchaseLunchCouponModule
        )
      }
    ] 
  },
  {
    path:PURCHASE_LUNCH_COUPON.fullUrl,
    // pathMatch:'full',
    loadChildren:()=>import('./purchase-lunch-coupon/purchase-lunch-coupon.module').then(
      (module)=>module.PurchaseLunchCouponModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule {}

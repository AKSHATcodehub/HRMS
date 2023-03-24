import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAssetsComponent } from './request-assets.component';

const routes: Routes = [
  {
    path:'',component:RequestAssetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestAssetsRoutingModule { }

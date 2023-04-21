import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestedDinnerComponent } from './requested-dinner.component';

const routes: Routes = [
  {path:'',component:RequestedDinnerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedDinnerRoutingModule { }










import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestedTrainingComponent } from './requested-training.component';

const routes: Routes = [
  {path:'',component:RequestedTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedTrainingRoutingModule { }

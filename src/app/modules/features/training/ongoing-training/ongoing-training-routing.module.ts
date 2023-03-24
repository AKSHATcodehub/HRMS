import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingTrainingComponent } from './ongoing-training.component';

const routes: Routes = [
  {path:'',component:OngoingTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoingTrainingRoutingModule { }

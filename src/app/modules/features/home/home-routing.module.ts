import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOBDETAILS } from 'src/app/constant/routes';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:JOBDETAILS.fullUrl,
    component:JobDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

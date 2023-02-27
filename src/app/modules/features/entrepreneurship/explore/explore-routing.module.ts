import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH,STARTUP } from 'src/app/constant/routes';
import { ExploreComponent } from './explore.component';

const routes: Routes = [
  {
    path:'',component:ExploreComponent
  },
  // {
  //   path:STARTUP.fullUrl,
  //   redirectTo:ADD_PITCH.fullUrl,
  //   pathMatch:'full'
  // },
  {
    path:ADD_PITCH.fullUrl,
    loadChildren:()=>import('./../add-pitch/add-pitch.module').then(
      (m)=>m.AddPitchModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }

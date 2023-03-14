import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH } from 'src/app/constant/routes';
import { Explore1Component } from './explore1.component';

const routes: Routes = [
  {
    path:'',component:Explore1Component,
    
    children:[
      {
        path:ADD_PITCH.fullUrl,
        loadChildren:()=>import('./../add-pitch/add-pitch.module').then(
          (m)=>m.AddPitchModule
        )
      }
    ]
    
  },
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
export class Explore1RoutingModule { }

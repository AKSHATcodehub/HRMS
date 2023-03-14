import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH, STARTUP } from 'src/app/constant/routes';
import { EntrepreneurshipComponent } from './entrepreneurship.component';

const routes: Routes = [
  {
    path:'',component:EntrepreneurshipComponent, 
    
    children:[
      {
        path:'',
        loadChildren:()=>import('./explore1/explore1.module').then((m)=>m.Explore1Module)
      },
      {
        path:ADD_PITCH.fullUrl,
        loadChildren:()=>import('./add-pitch/add-pitch.module').then((m)=>m.AddPitchModule)
      }
    ]

  },
  {
    path:ADD_PITCH.fullUrl,
    loadChildren:()=>import('./add-pitch/add-pitch.module').then((m)=>m.AddPitchModule)
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurshipRoutingModule { }

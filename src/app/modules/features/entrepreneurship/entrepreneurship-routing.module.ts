import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH, STARTUP } from 'src/app/constant/routes';
import { EntrepreneurshipComponent } from './entrepreneurship.component';

const routes: Routes = [
  // {
  //   path:'',component:EntrepreneurshipComponent, 
  // },
  {
    path:'ent',
    loadChildren: ()=>import('./explore/explore.module').then((m)=>m.ExploreModule)
  }
  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurshipRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD, FEATURES } from 'src/app/constant/routes';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path:'',component:LoginComponent },
  { 
    path:FEATURES.fullUrl,
    loadChildren:()=>
      import('./../../features/features.module').then(
      (m)=>m.FeaturesModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

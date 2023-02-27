import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>
      import("./login/login.module").then(
        (m)=>m.LoginModule
      )
  },
  {
    path:'forgot_password',
    loadChildren:()=>
      import("./forgot-password/forgot-password.module").then(
        (m)=>m.ForgotPasswordModule
      )
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

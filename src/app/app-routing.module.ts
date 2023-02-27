import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADMIN, DASHBOARD, FEATURES, NOTFOUND } from './constant/routes';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>
      import("./modules/account/account.module").then(
        (m)=>m.AccountModule
      )
  },
  {
    path:ADMIN.fullUrl,
    loadChildren:()=>
    import("./modules/account/account.module").then(
      (m)=>m.AccountModule
    )
  },
 
  {
    path:'**',
    loadChildren:()=>import("./modules/not-found/not-found.module").then(
      (m)=>m.NotFoundModule
    )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

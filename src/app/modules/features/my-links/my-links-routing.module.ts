import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {
    path:'',component:MyLinksComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./policy-documents/policy-documents.module').then(
          (m)=>m.PolicyDocumentsModule
        )
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AssetsDeclarationComponent } from './assets-declaration.component';

const routes: Routes = [
  {
    path:'',component:AssetsDeclarationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsDeclarationRoutingModule { }

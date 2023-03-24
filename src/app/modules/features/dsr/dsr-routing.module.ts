import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrComponent } from './dsr.component';

const routes: Routes = [
  {path:'',component:DsrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrRoutingModule { }

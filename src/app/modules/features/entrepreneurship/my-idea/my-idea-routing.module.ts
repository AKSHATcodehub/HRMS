import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIdeaComponent } from './my-idea.component';

const routes: Routes = [
  {path:'',component:MyIdeaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyIdeaRoutingModule { }

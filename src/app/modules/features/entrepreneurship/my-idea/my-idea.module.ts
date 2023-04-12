import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyIdeaRoutingModule } from './my-idea-routing.module';
import { MyIdeaComponent } from './my-idea.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';


@NgModule({
  declarations: [
    MyIdeaComponent
  ],
  imports: [
    CommonModule,
    MyIdeaRoutingModule,
    TableModule
  ]
})
export class MyIdeaModule { }

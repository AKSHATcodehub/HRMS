import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { TableModule } from '../../common/modules/table/table.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    TableModule,
    MatIconModule
  ]
})
export class ProjectModule { }

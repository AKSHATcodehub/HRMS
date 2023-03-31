import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { ProjectStatusComponent } from './project-status/project-status.component';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectOverviewComponent,
    ProjectNotesComponent,
    ProjectReportsComponent,
    ProjectStatusComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TableModule
  ]
})
export class ProjectDetailsModule { }

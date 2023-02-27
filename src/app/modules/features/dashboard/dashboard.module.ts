import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule, MenuAllModule, TreeViewAllModule, ToolbarAllModule} from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    SidebarModule,
    MenuAllModule,
    TreeViewAllModule,
    ToolbarAllModule,
    DropDownListModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule

  ]
})
export class DashboardModule { }

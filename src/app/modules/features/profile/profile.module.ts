import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuAllModule, SidebarModule, ToolbarAllModule, TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { BasicInformationModule } from './basic-information/basic-information.module';
import { ProfilePictureModule } from './profile-picture/profile-picture.module';
import { QualificationModule } from './qualification/qualification.module';
import { ShiftModule } from './shift/shift.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { AppraisalModule } from './appraisal/appraisal.module';
@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
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
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    BasicInformationModule,
    ProfilePictureModule,
    QualificationModule,
    ShiftModule,
    ChangePasswordModule,
    AppraisalModule,
    MatTabsModule
  ]
})
export class ProfileModule { }

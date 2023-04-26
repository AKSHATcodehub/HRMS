import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SearchbarModule } from '../../common/modules/searchbar/searchbar.module';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSearchDropdownModule } from '../../common/modules/mat-search-dropdown/mat-search-dropdown.module';

@NgModule({
  declarations: [
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    SearchbarModule,
    MatIconModule,
    DropdownModule,
    ReactiveFormsModule,
    MatSearchDropdownModule
  
  ]
})
export class DirectoryModule { }

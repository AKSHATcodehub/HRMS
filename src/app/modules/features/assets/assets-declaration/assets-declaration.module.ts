import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDeclarationRoutingModule } from './assets-declaration-routing.module';
import { AssetsDeclarationComponent } from './assets-declaration.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'src/app/modules/common/modules/dropdown/dropdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';


@NgModule({
  declarations: [
    AssetsDeclarationComponent
  ],
  imports: [
    CommonModule,
    AssetsDeclarationRoutingModule,
    TableModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    ReactiveFormsModule,
    ValidationErrorModule
  ]
})
export class AssetsDeclarationModule { }

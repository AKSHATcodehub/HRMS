import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetsRoutingModule } from './request-assets-routing.module';
import { RequestAssetsComponent } from './request-assets.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    RequestAssetsComponent
  ],
  imports: [
    CommonModule,
    RequestAssetsRoutingModule,
    TableModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class RequestAssetsModule { }

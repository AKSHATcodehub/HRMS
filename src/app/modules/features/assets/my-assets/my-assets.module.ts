import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsRoutingModule } from './my-assets-routing.module';
import { MyAssetsComponent } from './my-assets.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';


@NgModule({
  declarations: [
    MyAssetsComponent
  ],
  imports: [
    CommonModule,
    MyAssetsRoutingModule,
    TableModule
  ]
})
export class MyAssetsModule { }

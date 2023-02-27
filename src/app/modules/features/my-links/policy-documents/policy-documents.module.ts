import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentsRoutingModule } from './policy-documents-routing.module';
import { PolicyDocumentsComponent } from './policy-documents.component';
import { TableModule } from 'src/app/modules/common/modules/table/table.module';


@NgModule({
  declarations: [
    PolicyDocumentsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentsRoutingModule,
    TableModule
  ]
})
export class PolicyDocumentsModule { }

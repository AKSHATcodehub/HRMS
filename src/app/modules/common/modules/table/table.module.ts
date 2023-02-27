import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }

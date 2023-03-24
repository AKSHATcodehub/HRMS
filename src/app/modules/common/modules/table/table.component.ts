import { NumberInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/interfaces/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  matHeaderRow: any = [];
  @Output() editEvent:EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter();
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() checkBox!: string;
  @Input() isFilterable: any;
  paginationSizes: number[] =[10];
  defaultPageSize: NumberInput =10;
  // @ViewChild(MatSort) set matSort(sort: MatSort) {
  //   this.dataSource.sort = sort;
  // }
  // @Output() getResponse = new EventEmitter;  
  // @Output() userDetail: EventEmitter<any> = new EventEmitter();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  public displayedColumns!: string[];
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.columns.forEach((item:any) => {
      this.matHeaderRow.push(item.heading)
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
  }

  editClick(element:any){
    this.editEvent.emit(element);
  }

  deleteClick(element:any){
    // console.log("this is table>>> >>>>>",element);
    this.deleteEvent.emit(element);
    
  }
  

}

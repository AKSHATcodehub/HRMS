import { NumberInput } from '@angular/cdk/coercion';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/interfaces/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit {

  matHeaderRow: any = [];
  @Output() editEvent:EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter();
  @Output() openFilledDsr:EventEmitter<any> = new EventEmitter();
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() checkBox!: string;
  @Input() isFilterable: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginationSizes: number[] =[10];
  @Input() defaultPageSize: number =10;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
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
  
  applyFilterTable(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  dsrAction(element:any){
    this.openFilledDsr.emit(element);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MANUAL_PUNCH_HEADING, MANUAL_PUNCH_TABLE_DATA } from './manual-punch-data';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datasource = new MatTableDataSource<any>(MANUAL_PUNCH_TABLE_DATA);
  headings = MANUAL_PUNCH_HEADING;

}

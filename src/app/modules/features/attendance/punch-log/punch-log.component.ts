import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { PUNCH_LOG_HEADING, PUNCH_LOG_TABLE_DATA } from './punch-log-data';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datasource = new MatTableDataSource<any>(PUNCH_LOG_TABLE_DATA);
  headings = PUNCH_LOG_HEADING;


}

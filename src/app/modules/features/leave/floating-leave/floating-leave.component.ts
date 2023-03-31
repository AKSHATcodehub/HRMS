import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { FLOATING_LEAVE_HEADING, FLOATING_LEAVE_TABKE_DATA } from './floating-leave-data';

@Component({
  selector: 'app-floating-leave',
  templateUrl: './floating-leave.component.html',
  styleUrls: ['./floating-leave.component.scss']
})
export class FloatingLeaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datasource = new MatTableDataSource<any>(FLOATING_LEAVE_TABKE_DATA);
  headings = FLOATING_LEAVE_HEADING;
}

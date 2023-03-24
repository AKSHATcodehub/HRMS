import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DEPARTMENT_OPTIONS, INTERVIEW_DATA, INTERVIEW_STATUS } from './interview-data';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  // S. No.	Department	Name	Email	Mobile No.	Round Type	Interview Date	Interview Time	Final Status	Action

  datasource = new MatTableDataSource<any>(INTERVIEW_DATA);
  headings = [
    { heading: 'S.No.', key: 's_no', type: 'text'},
    { heading: 'Department', key: 'department', type: 'text' },
    { heading: 'Name', key: 'name', type: 'text' },
    { heading: 'Email', key: 'email', type: 'text'},
    { heading: 'Mobile No.', key: 'mobile_number', type: 'text'},
    { heading: 'Round Type', key: 'round_type', type: 'text', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Interview Date', key: 'interview_date', type: 'text', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Interview Time', key: 'interview_time', type: 'text'},
    { heading: 'Final Status', key: 'final_status', type: 'text'},
    { heading: 'Action', key: 'Action', type: 'text'},


  ]
  Table_DATA: any[] = [];
  deparrtmentPlaceholder='Select Department';
  statusPlaceholder = 'Select Status';
  departmentDropdown = DEPARTMENT_OPTIONS;
  interviewStatusDropdown=INTERVIEW_STATUS;
  constructor() { }

  ngOnInit(): void {
    // this.datasource = new MatTableDataSource<any>(this.Table_DATA)

  }

}



import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  // S. No.	Department	Name	Email	Mobile No.	Round Type	Interview Date	Interview Time	Final Status	Action


  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No.', key: 'S.No', type: 'text'},
    { heading: 'Department', key: 'Department', type: 'text' },
    { heading: 'Name', key: 'Name', type: 'text' },
    { heading: 'Email', key: 'Email', type: 'text'},
    { heading: 'Mobile No.', key: 'Mobile No.', type: 'text'},
    { heading: 'Round Type', key: 'Round Type', type: 'action', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Interview Date', key: 'Interview Date', type: 'download', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Interview Time', key: 'Interview Time', type: 'text'},
    { heading: 'Final Status', key: 'Final Status', type: 'text'},
    { heading: 'Action', key: 'Action', type: 'text'},


  ]
  Table_DATA: any[] = [];
  deparrtmentPlaceholder='Select Department';
  statusPlaceholder = 'Select Status';
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}

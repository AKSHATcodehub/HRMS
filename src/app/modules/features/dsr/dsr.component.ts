import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../recruitment/interview/interview-data';
import { PROJECT_DROPDOWN } from './dsr-data';

@Component({
  selector: 'app-dsr',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.scss']
})
export class DsrComponent implements OnInit {

  isOpen!: boolean;
  panelOpenState: boolean = false;
  projectDropdown=PROJECT_DROPDOWN;
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
    // { heading: 'Action', key: 'action', type: 'text'},

  ]
  constructor() { }

  ngOnInit(): void {

    this.isOpen = false;

  }


  togglePanel() {
     
    console.log("kkkkkkkkkkkkkk");

    this.panelOpenState = !this.panelOpenState;
    
  }

  toggleCard(){
    this.isOpen = !this.isOpen
  }
 

}

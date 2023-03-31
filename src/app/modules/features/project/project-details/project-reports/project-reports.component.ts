import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DSR_LIST_HEADING, DSR_LIST_TABLE_DATA, PROJECT_DATA_ANALYTICS } from './project-reports-data';

@Component({
  selector: 'app-project-reports',
  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.scss']
})
export class ProjectReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataAnalytics = PROJECT_DATA_ANALYTICS;
  dsrListHeading = DSR_LIST_HEADING;
  dsrListTableData = new MatTableDataSource(DSR_LIST_TABLE_DATA) ;

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PLANNED_DELIVERIES_HEADING,PLANNED_DELIVERIES_TABLE_DATA, TEAM_DETAILS_HEADING, TEAM_DETAILS_TABLE_DATA } from './project-overview-data';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  teamDetailsHeadings:any[] = TEAM_DETAILS_HEADING;
  teamDetailsDatasource = new MatTableDataSource<any>(TEAM_DETAILS_TABLE_DATA);
  plannedDeliveriesHeading = PLANNED_DELIVERIES_HEADING;
  plannedDeliveriesTableData = new MatTableDataSource<any>(PLANNED_DELIVERIES_TABLE_DATA);

}

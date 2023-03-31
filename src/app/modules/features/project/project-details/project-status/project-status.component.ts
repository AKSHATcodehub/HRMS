import { Component, OnInit } from '@angular/core';
import { PROJECT_DETAILS } from '../project-notes/project-details-data';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss']
})
export class ProjectStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  notesDetails = PROJECT_DETAILS

}

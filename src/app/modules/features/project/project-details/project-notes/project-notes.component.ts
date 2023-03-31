import { Component, OnInit } from '@angular/core';
import { PROJECT_DETAILS } from './project-details-data';

@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.scss']
})
export class ProjectNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notesDetails = PROJECT_DETAILS

}

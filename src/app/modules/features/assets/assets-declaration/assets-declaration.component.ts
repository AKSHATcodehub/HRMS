import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { ASSETS_DECLARATION_HEADING, ASSETS_DECLARATION_TABLE_DATA } from './assets-declaration-data';

@Component({
  selector: 'app-assets-declaration',
  templateUrl: './assets-declaration.component.html',
  styleUrls: ['./assets-declaration.component.scss']
})
export class AssetsDeclarationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = false;
  datasource = new MatTableDataSource<any>(ASSETS_DECLARATION_TABLE_DATA);
  headings = ASSETS_DECLARATION_HEADING;
  OsDropdown = ['Android','IOS'];
  deviceWorkingDropdown = ['Yes','No'];

  toggleCard(){
    this.isOpen = !this.isOpen
  }
}

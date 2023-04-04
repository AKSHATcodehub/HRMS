import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { ASSETS_INVENTORY_HEADING, ASSETS_INVENTORY_TABLE_DATA } from './my-assets-data';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.scss']
})
export class MyAssetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datasource = new MatTableDataSource<any>(ASSETS_INVENTORY_TABLE_DATA);
  headings = ASSETS_INVENTORY_HEADING
}

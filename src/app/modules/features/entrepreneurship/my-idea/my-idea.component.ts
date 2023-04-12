import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MY_IDEAS_HEADING, MY_IDEAS_TABLE_DATA } from './my-idea-data';

@Component({
  selector: 'app-my-idea',
  templateUrl: './my-idea.component.html',
  styleUrls: ['./my-idea.component.scss']
})
export class MyIdeaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headings = MY_IDEAS_HEADING;
  dataSource = new MatTableDataSource<any>(MY_IDEAS_TABLE_DATA)
}

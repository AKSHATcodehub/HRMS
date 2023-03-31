import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hashTags:string[]=['#H','#Hello !','#Hiii','#Sdfgkkdfkd ']

  addHashTag(){
    this.hashTags.push('hyy');
  }

}

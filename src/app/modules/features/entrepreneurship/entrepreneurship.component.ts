import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrepreneurship',
  templateUrl: './entrepreneurship.component.html',
  styleUrls: ['./entrepreneurship.component.scss']
})
export class EntrepreneurshipComponent implements OnInit {

  constructor() { 
    console.log("ent loaded");
    
  }

  ngOnInit(): void {
  }

}

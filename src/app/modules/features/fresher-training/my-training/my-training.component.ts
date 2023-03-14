import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  cards = ['card1','card2'];
  
  openDialog() {
  throw new Error('Method not implemented.');
  }
}

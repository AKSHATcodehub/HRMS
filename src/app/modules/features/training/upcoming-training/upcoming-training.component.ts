import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-training',
  templateUrl: './upcoming-training.component.html',
  styleUrls: ['./upcoming-training.component.scss']
})
export class UpcomingTrainingComponent implements OnInit {
  constructor(private _router:Router,
              private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  cards = ['card1','card2','card3'];
  
  openDialog() {
    throw new Error('Method not implemented.');
  }
  
  viewDetails() {
    this._router.navigate(['../job-details'],{relativeTo:this.route});
  }
    
}

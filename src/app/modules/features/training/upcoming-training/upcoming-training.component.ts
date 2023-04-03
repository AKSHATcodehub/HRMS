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
  seats:string='seats';
  cards = [
      {
        trainingName:'Micro Froented 2023',
        trainingStatus:'Completed',
        startDate:'20-03-2022',
        endDate:'20-05-2023',
        seats:'38',
        id:'101',
        firstButtonName:'View Details',
        secondButtonName:'Enrollment'
      },
  ];
  
  openDialog() {
    throw new Error('Method not implemented.');
  }
  
  viewDetails() {
    this._router.navigate(['../training-details'],{relativeTo:this.route});
  }
    
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  
  ngOnInit(): void {
  }
  mode:string='Mode';
  
  cards = [
    {
      trainingName:'Angular Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'101',
      firstButtonName:'View Details',
      secondButtonName:'Feedback'
    },
    {
      trainingName:'UI/UX Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'102',
      firstButtonName:'View Details',
      secondButtonName:'Feedback'
      
    },
    {
      trainingName:'JavaScript Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'103',
      firstButtonName:'View Details',
      secondButtonName:'Feedback'
    },
    {
      trainingName:'Angular Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'104',
      firstButtonName:'View Details',
      secondButtonName:'Feedback'
    }
  ];
  
  constructor(public dialog: MatDialog,
              private _router:Router,
              private route: ActivatedRoute) {}


  openViewDetails() {
    this._router.navigate(['../training-details-traine'],{relativeTo:this.route});
  }
  openFeedbackDialog() {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }


}




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
  
  cards = ['card1','card2','card2','card2','card2','card2','card2','card2'];
  
  constructor(public dialog: MatDialog,
              private _router:Router,
              private route: ActivatedRoute) {}


  openViewDetails() {
    this._router.navigate(['../job-details'],{relativeTo:this.route});
  }
  openFeedbackDialog() {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }


}

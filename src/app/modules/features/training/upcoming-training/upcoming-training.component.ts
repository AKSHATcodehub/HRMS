import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/modules/common/modules/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-upcoming-training',
  templateUrl: './upcoming-training.component.html',
  styleUrls: ['./upcoming-training.component.scss']
})
export class UpcomingTrainingComponent implements OnInit {
  constructor(private _router:Router,
              private route:ActivatedRoute,
              private _dialog:MatDialog) { }
  
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
  
  openDialog(event:any) {
    let config = {
      data:{
        heading:'Micro Frontend Training',
        title:'Are you sure , want to enroll in Training',
      }
    }
    this._dialog.open(ConfirmationDialogComponent,config)
  }
  
  viewDetails() {
    console.log("upcoming");
    this._router.navigate(['../training-details'],{relativeTo:this.route});
  }
    
}

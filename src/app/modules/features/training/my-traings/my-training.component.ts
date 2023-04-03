import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestedTrainingPopupComponent } from './requested-training-popup/requested-training-popup.component';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  
  constructor(private dialog:MatDialog,
              private _router:Router,
              private route: ActivatedRoute) { }
  
  mode:string='Mode';
  cards = [
    {
      trainingName:'Micro Froented 2023',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'101',
      firstButtonName:'View Details',
      secondButtonName:'Enrollment'
    },];
  
  ngOnInit(): void {
  }
  
  requestForTraining(){
    
    const dialogRef = this.dialog.open(RequestedTrainingPopupComponent, {
      // data: {name: "mistu", animal: "dog"},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
    
  }
  
  viewDteails() {
    this._router.navigate(['../training-details'],{relativeTo:this.route});
  }
  openEntrollmentPopup() {
    throw new Error('Method not implemented.');
  }


}

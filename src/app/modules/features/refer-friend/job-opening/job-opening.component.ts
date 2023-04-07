import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JOB_OPENINGS } from '../../home/latest-job-cards/latest-job-card-data';
import { DialogComponent } from 'src/app/modules/common/modules/dialog/dialog.component';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {
  cards=['card1','card2','card3','card4','card5'];
  jobOpeningsData = JOB_OPENINGS;
  
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
  
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      // data: {name: "mistu", animal: "dog"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

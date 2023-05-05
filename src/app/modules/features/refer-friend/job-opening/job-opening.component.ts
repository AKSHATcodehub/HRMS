import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JOB_OPENINGS } from '../../home/latest-job-cards/latest-job-card-data';
import { DialogComponent } from 'src/app/modules/common/modules/dialog/dialog.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss'],
})
export class JobOpeningComponent implements OnInit {
  cards = ['card1', 'card2', 'card3', 'card4', 'card5'];
  jobOpeningsData = JOB_OPENINGS;

  constructor(public dialog: MatDialog,
              private _snackbar:SnackbarService) {}

  ngOnInit(): void {}

  openDialog(job: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: job,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed home page>>>>');
      // this._snackbar.showSuccess('Referal Submitted!','')
    });
  }
}


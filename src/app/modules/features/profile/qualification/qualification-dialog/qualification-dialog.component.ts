import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qualification-dialog',
  templateUrl: './qualification-dialog.component.html',
  styleUrls: ['./qualification-dialog.component.scss']
})
export class QualificationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QualificationDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

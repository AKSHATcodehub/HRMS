import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-performance-dialog',
  templateUrl: './performance-dialog.component.html',
  styleUrls: ['./performance-dialog.component.scss']
})
export class PerformanceDialogComponent implements OnInit {

  constructor(private diialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog(){
    
  }


}

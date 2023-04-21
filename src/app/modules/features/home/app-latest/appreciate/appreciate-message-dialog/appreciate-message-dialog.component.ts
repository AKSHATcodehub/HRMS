import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appreciate-message-dialog',
  templateUrl: './appreciate-message-dialog.component.html',
  styleUrls: ['./appreciate-message-dialog.component.scss']
})
export class AppreciateMessageDialogComponent implements OnInit {

  
  ngOnInit(): void {
  }
  
  constructor(private dialogRef: MatDialogRef<AppreciateMessageDialogComponent>){ }

  closeDialog(){
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(result=>console.log('closed'));
    
  }
}

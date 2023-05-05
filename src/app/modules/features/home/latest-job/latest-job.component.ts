import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FEATURES, JOBDETAILS } from 'src/app/constant/routes';
import { LoginComponent } from 'src/app/modules/account/login/login.component';
import { DialogComponent } from 'src/app/modules/common/modules/dialog/dialog.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-latest-job',
  templateUrl: './latest-job.component.html',
  styleUrls: ['./latest-job.component.scss']
})
export class LatestJobComponent implements OnInit {


  constructor(public dialog: MatDialog,
              private render:Renderer2,
              private  elementRef:ElementRef,
              private router:Router,
              private _snackbar:SnackbarService) { }

  @Input() singleJobData:any;
    
  slideIndex = 1;

  slides:any;

  counter = 1;

  cards=['card1','card2','card3','card4','card5'];

  ngOnInit(): void {

    // setTimeout(() => {

      
    //   this.slides = this.elementRef.nativeElement.querySelectorAll('.card-body');

    //   this.slides.forEach((item:any,index:any) => {
    //     this.render.setStyle(item,'left',`${index*100}%`)
    //   });

    //   setInterval(() =>{
    //     this.slideImage();
    //     this.counter=this.counter+1;
    //     if(this.counter==5){
    //       this.counter=1;
    //     }
    //   }, 2000);


    // }, 1000);
  }

  // slideImage=()=>{
  //   // console.log("slide image called..");
    
  //   this.slides.forEach((item:any) => {
      
  //     this.render.setStyle(item,'transform',`translateX(-${this.counter*100}%)`)
      
  //   });
  // }

  openDialog(job:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: job,
      
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed 1',result);
      
      // this._snackbar.showSuccess('Referal Submitted!','')
    });

  }


 
}

import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppreciateMessageDialogComponent } from './appreciate-message-dialog/appreciate-message-dialog.component';

@Component({
  selector: 'app-appreciate',
  templateUrl: './appreciate.component.html',
  styleUrls: ['./appreciate.component.scss']
})
export class AppreciateComponent implements OnInit {

  constructor(
    private _dialog:MatDialog
  ) { }

  ngOnInit(): void {

  }
  
  appreciateGridConfig= {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 650, md: 800, lg: 1300, xl: 1900},
    load: 3,
    interval: {timing: 10000, initialDelay: 10000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  arr = [
    {
      card_name:'Appreciation for Team',
      message:'this is to inform you that reading this you are wasting your time it entiretly futile as it is dummy text this is to inform you that reading this you are wasting your time it entiretly futile as it is dummy textthis is to inform you that reading this you are wasting your time it entiretly futile as it is dummy textthis is to inform you that reading this you are wasting your time it entiretly futile as it is dummy textthis is to inform you that reading this you are wasting your time it entiretly futile as it is dummy textthis is to inform you that reading this you are wasting your time it entiretly futile as it is dummy text'
    },
    {
      card_name:'Appreciation | ABP News',
      message:'this is to inform you that reading this you are wasting your time it entiretly futile as it is dummy text this is to inform you that reading this you are wasting your time it entiretly futile as it is dummy textthis is to inform you that reading this you are wasting your time it entiretly futile as it is dummy text'
    },
    {
      card_name:'Appreciation | Cars24',
      message:'Jack and jill went up the hill to fetch a pale of water jack and jilllllyyyy Jack went down and dumped his crown and jll came tumbling after'
    }
  ]


  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newOpeningsData = {
    showButtons:false
  }

  ngAfterViewInit(){
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    // console.log(this.dataSource,"DSF");
    
    setTimeout(()=>{
      this.render_child = true;
    },10)

  }

  appreciationMessage(){
    let options:MatDialogConfig = {
      maxWidth:"500px"
    }
    this._dialog.open(AppreciateMessageDialogComponent,options)
  }

}

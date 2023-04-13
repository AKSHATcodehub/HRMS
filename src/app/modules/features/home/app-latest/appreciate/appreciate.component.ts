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
      message:'We would like to really appreciate the hard work of each individual and show our gratitude. We really appreciate the efforts and good work. Keep Shining and growing!&nbsp; All of us are putting our best efforts we are sure, so keep spreading your awesomeness. '
    },
    {
      card_name:'Appreciation | ABP News',
      message:'With immense pleasure, I would like to take this moment and appreciate the efforts that you are putting into your work. I am really very happy with your performance in the current project. Your diligence, self-motivation as well as dedication to always go the extra mile in order to achieve the best possible results is really admirable. I want to assure you that your all efforts are significantly appreciated. '
    },
    {
      card_name:'Appreciation | Cars24',
      message:'We would like to really appreciate the hard work of each individual and show our gratitude. We really appreciate the efforts and good work. Keep Shining and growing!  All of us are putting our best efforts we are sure, so keep spreading your awesomeness.'
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

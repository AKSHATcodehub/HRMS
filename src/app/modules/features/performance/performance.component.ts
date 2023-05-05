import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MONTHLY_RATINGS } from './performance-data';
import { PerformanceDialogComponent } from './performance-dialog/performance-dialog.component';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  constructor(private _matDialog:MatDialog) { }

  x:null=null;

  ngOnInit(): void {
    console.log("type x>>>>>>>>>>>>",typeof(this.x));
    
  }

  dropdownRatingData = ['2022','2023'];
  monthlyYearData = MONTHLY_RATINGS;
  filterRating:any= MONTHLY_RATINGS[0].ratings;
  placeholder = '2022';

  selectedOption(event:Event){
    
    this.monthlyYearData.forEach((item:any)=>{
        if(item.year == event){
          this.filterRating = item.ratings;
        }
    })
    
  }

  openDialog(){
    const dialogRef =  this._matDialog.open(PerformanceDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed 1',result);
    });
  }

}

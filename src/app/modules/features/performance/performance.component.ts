import { Component, OnInit } from '@angular/core';
import { MONTHLY_RATINGS } from './performance-data';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  constructor() { }
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

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DSR_TABLEDATA } from '../dsr-data';

@Component({
  selector: 'app-dsr-details',
  templateUrl: './dsr-details.component.html',
  styleUrls: ['./dsr-details.component.scss'],
})
export class DsrDetailsComponent implements OnInit {
  dsrData :any[]= DSR_TABLEDATA;
  filterData: any;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.catchParameter();
  }

  catchParameter() {
    console.log('hyy ther>>>', this.activateRoute.snapshot.queryParams);

    this.dsrData.forEach((item: any) => {
      
      if (item.s_no == this.activateRoute.snapshot.queryParams.data) {
        
        this.filterData =  item;
      }
    });
    
  }
}

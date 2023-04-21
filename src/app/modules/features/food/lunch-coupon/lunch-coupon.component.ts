import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponsHistoryComponent } from './coupons-history/coupons-history.component';
import { FoodCalendarDataService } from './food-calendar-data.service';

@Component({
  selector: 'app-lunch-coupon',
  templateUrl: './lunch-coupon.component.html',
  styleUrls: ['./lunch-coupon.component.scss'],
})
export class LunchCouponComponent implements OnInit {
  constructor( private _foodCalendarService:FoodCalendarDataService, 
               private _dialog:MatDialog,
               private _router:Router,
               private _activatedRoute:ActivatedRoute ) { }

showTable = false;
myCalendar = [];
options = {
 edit:false,
 cancel:true,
 select:true
}
ngOnInit(): void {

 
 if(this._foodCalendarService.myCalendar.length == 0){
   console.log("new Formation");
   this._foodCalendarService.createCalendarData()
   this.myCalendar = this._foodCalendarService.myCalendar
 }else{
   this.myCalendar = this._foodCalendarService.myCalendar
   console.log('usingOld');
 }
 
 console.log(this._foodCalendarService.myCalendar,"9999");
}
  purchaseCoupons() {
    this._router.navigate(['../purchase-lunch-coupon'],{relativeTo: this._activatedRoute})
  }

  viewDetails(){
    let config = {
      minWidth:'29rem',
      data:'',
      minHeight:'50vh',
      panelClass:'app-full-bleed-dialog'
    }
    this._dialog.open(CouponsHistoryComponent,config);
  }

  updateCalendarData(data:any){

    console.log(data,"JUMPKAR2");
    this.myCalendar = data;
    this._foodCalendarService.myCalendar = data
    
  }
}

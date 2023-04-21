import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodCalendarDataService {


  calendarData:any = [];
  myCalendar:any = [];

  constructor() { 
    
    
  }
  
  createCalendarData(){
    // 👇️ Current Month 0 ->sun, 1->mon
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let counter_days = 1;
    for(let i=0; i<35; i++){
      let temp:any = {};
      if(i >= firstDay.getDay() - 1 && counter_days<=30){   // no of days in month 30 or 31 or 28
        let currentDay =  this.getWeekDay(counter_days);
        temp['dayInWeek'] = this.weekDayData[currentDay.getDay()];
        temp['date'] = currentDay.getDate();
        if(temp.dayInWeek == 'Mon' || temp.dayInWeek == 'Tue' || temp.dayInWeek == 'Wed' || temp.dayInWeek == 'Thu' || temp.dayInWeek == 'Fri' ){
          if(temp.date > date.getDate()){
            // console.log(date.getDate(),"TODAY");
            
            temp['couponPurchased'] = false;
            temp['booked'] = false;
          }
        }
        counter_days++;
        this.calendarData.push(temp);
      }else{
        this.calendarData.push(temp);
      }      
    }
    this.createCalendar()
  }

  createCalendar(){
    const ans = [];
    for (let i = 0; i < this.calendarData.length; i += 7) {
        const chunk = this.calendarData.slice(i, i + 7);
        ans.push(chunk);

      }
    this.myCalendar = ans;
  }

  getWeekDay(day:number){
    let date = new Date();
    let weekDay = new Date(date.getFullYear(), date.getMonth(),day);
    return weekDay;
  }

  weekDayData = [
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
  ]

}

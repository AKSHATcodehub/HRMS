import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  getTimeOfTwoDates(date1:any,date2:any):string{

    //calculate total number of seconds between two dates  
    let total_seconds = Math.abs(date2 - date1) / 1000;  

    //calculate days difference by dividing total seconds in a day  
    let days_difference = Math.floor (total_seconds / (60 * 60 * 24)); 
    
    return `${days_difference}`;
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

  todayDate() {
    var today:any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }
  
}

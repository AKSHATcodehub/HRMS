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
}

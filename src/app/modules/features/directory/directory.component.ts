import { Component, OnInit } from '@angular/core';
import { ALL_DIRECTORY_TEAM_DATA, DIRECTORY_TEAM_DATA, IdirectoryInteface } from './directory-data';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  
  keyupData:any;
  showList:any;
  filter:any;
  reset:string='';
  departmentPlaceholder:string='Department';
  filterData=ALL_DIRECTORY_TEAM_DATA;
  selectedValue!:string;
  directoryData:any = DIRECTORY_TEAM_DATA;
  selectedDropdownData:any[]=[]
  dropDown:string[] = ['admin','.net'];
  data=['Aahan Verma','Abhishek Kumar','Abhishek Shukla','Bhavya Goel','Bikramjeet Singh','Deepak Sindhu','Deepak Pokhriyal','Harsh Kukreti','Harshit Pathak']
  dropDownData:any[]=[];
  
  constructor() { }
  
  ngOnInit(): void {
    this.showList = this.directoryData;

    this.directoryData.forEach((item:any) => {

      if(!this.dropDownData.includes(item.team)){

        this.dropDownData.push(item.team);
      }
      
    });
  }
  filterDataHandler(filterData:any){
    console.log("this is filter data...",filterData);
    this.filterData = filterData;

      // filterData.forEach((item:any) => {
      //   if(item.team == this.selectedValue){
      //     this.filterData.push(item);
      //   }
      // });
    
  }
  click(){
    console.log("this is dropdown>>>>>>>",this.dropDownData);
    
  }

  clickSearch(){
    this.filterData = this.filter;
  }

  clickReset(){
    this.reset = '';
    console.log("reset");
  }

  keyfunc(event:any){
    this.keyupData = event.target.value;
    if(this.keyupData.length == 0){
      this.directoryData= this.directoryData;
    }
  }

  eventHandler(event:any){

    this.selectedValue = event;

    this.selectedDropdownData = [];
    
    ALL_DIRECTORY_TEAM_DATA.forEach((item:any)=>{

      if(item.team == event){

        console.log("event Handler>>>>",item.team,event);
        
        this.selectedDropdownData.push(item);
      }
     
    })

    if( event == 'all' ){
        this.filterData = ALL_DIRECTORY_TEAM_DATA;
    }else{

      this.filterData = this.selectedDropdownData;
    }
  }


}

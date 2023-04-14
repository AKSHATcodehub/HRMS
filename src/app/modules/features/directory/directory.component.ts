import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ALL_DIRECTORY_TEAM_DATA, DIRECTORY_TEAM_DATA } from './directory-data';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  
  keyupData:any;
  showList:any;
  filter:any;
  reset:any=null;
  departmentPlaceholder:string='Department';
  filterData=ALL_DIRECTORY_TEAM_DATA;
  selectedValue!:string;
  directoryData:any = DIRECTORY_TEAM_DATA;
  selectedDropdownData:any[]=[]
  dropDown:string[] = ['admin','.net'];
  data=['Aahan Verma','Abhishek Kumar','Abhishek Shukla','Bhavya Goel','Bikramjeet Singh','Deepak Sindhu','Deepak Pokhriyal','Harsh Kukreti','Harshit Pathak']
  dropDownData:any[]=[];
  dropdownReset: any;
  directoryFilterForm!:FormGroup;
  
  constructor(private _fb:FormBuilder) { }
  
  ngOnInit(): void {

    this.createForm();
    
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

  createForm(){
    return this.directoryFilterForm = this._fb.group({
      searchBar:[null],
      dropdown:[null]
    })
  }
  
  click(){
    console.log("this is dropdown>>>>>>>",this.dropDownData);
    
  }

  clickSearch(){
    this.filterData = this.filter;
  }

  clickReset(){
    console.log("it is all directory data>>>>>",DIRECTORY_TEAM_DATA);
    this.directoryFilterForm.reset();
    this.dropdownReset = 'all'; 
    this.reset = ' ';
    this.filterData = ALL_DIRECTORY_TEAM_DATA;
    this.directoryData = ALL_DIRECTORY_TEAM_DATA
    console.log("reset");
  }

  keyfunc(event:any){
    this.keyupData = event.target.value;
    if(this.keyupData.length == 0){
      this.directoryData= this.directoryData;
    }
  }

  dataAccordingToSelectedDropdownValue:any;

  eventHandler(event:any){
    
    this.directoryFilterForm.controls.dropdown.setValue(event);

    this.selectedValue = event;

    this.selectedDropdownData = [];
    
    this.dataAccordingToSelectedDropdownValue=ALL_DIRECTORY_TEAM_DATA.filter((item:any)=>{

      if(item.team == event){

        console.log("event Handler>>>>",item.team,event);
        
        this.selectedDropdownData.push(item);

        return item;
      }
     
    })

    console.log(">>>>>>>>>>>>>>>>>>>>",this.dataAccordingToSelectedDropdownValue)


    if( event == 'all' ){
        this.filterData = ALL_DIRECTORY_TEAM_DATA;

        this.directoryData = ALL_DIRECTORY_TEAM_DATA;

    }else{

      this.filterData = this.selectedDropdownData;

      this.directoryData = this.dataAccordingToSelectedDropdownValue;
    }
  }

  func(event:any){


    

    let arr = this.directoryData.filter((item:any)=>{
      if(item.name?.toLowerCase()?.startsWith(event.target.value)){
        return item;
      }else{
        return 
      }
    });

    this.filterDataHandler(arr)
  }

}

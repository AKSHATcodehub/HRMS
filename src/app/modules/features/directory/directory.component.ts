import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilitiesService } from 'src/app/services/utilities.service';
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
  departmentPlaceholder:string='Department';
  filterData=ALL_DIRECTORY_TEAM_DATA;
  selectedValue!:string;
  directoryData:any = DIRECTORY_TEAM_DATA;
  dropDownData:any[]=[];
  dropdownReset: any;
  directoryFilterForm!:FormGroup;
  searchbarVale:any;
  
  constructor(private _fb:FormBuilder,
              private _utilitiessService:UtilitiesService) { }
  
  ngOnInit(): void {

    this.createForm();

    this.dropdownReset = 'all'; 
    
    this.showList = this.directoryData;

    this.directoryData.forEach((item:any) => {

      if(!this.dropDownData.includes(item.team)){

        this.dropDownData.push(item.team);
      }
      
    });
  }

  createForm(){
    return this.directoryFilterForm = this._fb.group({
      searchBar:[null],
      dropdown:[null]
    })
  }
  
  clickSearch(){

    this.filterData = ALL_DIRECTORY_TEAM_DATA;

    if(this.selectedValue == 'all'){

      this.filterData = this.filterData.filter((item:any)=>{
  
        const a = !this.searchbarVale || item.name?.toLowerCase()?.startsWith(this.searchbarVale.target.value);
  
        if( a ){
          return item
        }
      })

    }else{

      this.filterData = this.filterData.filter((item:any)=>{
  
        const a = !this.selectedValue || item.team == this.selectedValue;
  
        const b = !this.searchbarVale || item.name?.toLowerCase()?.startsWith(this.searchbarVale.target.value);
  
        if( a && b){
          return item
        }
      })
    } 
  }

  clickReset(){
    this.directoryFilterForm.reset();
    this._utilitiessService.setValue('all');
    this.dropdownReset = 'all'; 
    this.filterData = ALL_DIRECTORY_TEAM_DATA;
    console.log("reser function called>>>>>>>");
    
  }

  eventHandler(event:any){
    this.selectedValue = event;
  }

  func(event:any){
    this.searchbarVale = event;
  }

}

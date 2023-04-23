import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DEPARTMENT_OPTIONS, INTERVIEW_DATA, INTERVIEW_HEADING, INTERVIEW_STATUS } from './interview-data';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  // S. No.	Department	Name	Email	Mobile No.	Round Type	Interview Date	Interview Time	Final Status	Action

  datasource = new MatTableDataSource<any>(INTERVIEW_DATA);
  headings = INTERVIEW_HEADING;
  Table_DATA: any[] = [];
  deparrtmentPlaceholder='Select Department';
  statusPlaceholder = 'Select Status';
  departmentDropdown = DEPARTMENT_OPTIONS;
  interviewStatusDropdown=INTERVIEW_STATUS;
  filterValues:any;
  filterSelectObj:{ name: string,columnProp: string,data:any[],placeholder:string,label:string,controlName:string }[]=[];
  interviewForm!:FormGroup;
  f:any;

  constructor(private _fb:FormBuilder) {
    this.filterSelectObj = [
      {
        name: 'Status',
        columnProp: 'status',
        data:this.departmentDropdown,
        placeholder:this.deparrtmentPlaceholder,
        label:'Department',
        controlName:'department'
        
      },
      {
        name: 'Dept',
        columnProp: 'dept',
        data:this.interviewStatusDropdown,
        placeholder:this.statusPlaceholder,
        label:'Status',
        controlName:'status'
      }
    ];

    this.createForm();

    this.interviewForm.valueChanges.subscribe((value:any)=>{

      console.log("interview form >>>>>",this.datasource);

      let filter = {...value} ;

      this.datasource.filter =  JSON.stringify(filter);
      
      this.datasource.filterPredicate = ((data, filter) => {
  
        let result = this.testJSON(filter)
  
        if(result){
          let filterObject = JSON.parse(filter)      
          
                const a = !filterObject.status || data.status === filterObject.status;
          
                const b = !filterObject.department || data.team == filterObject.department;
                
                console.log(a && b);
          
                return a && b  ;
        }else{
          let filterObjectKeys = Object.keys(data);
          // console.log("filterobjectkeydddd>>>>>>>>>>",filterObjectKeys);
          
          this.f =false;
  
          filterObjectKeys.forEach((item)=>{
  
            console.log("data.[item]>>>>>>>>",data[item]);
            
           
             if(data[item].includes(filter)){
              this.f =true;
             };
  
          }) 
  
          console.log("this is this.f>>>>>>>>",this.f);
          
  
          return this.f
  
        }
  
      }) 
    })


   }

  ngOnInit(): void {
    // this.datasource = new MatTableDataSource<any>(this.Table_DATA)
 
  }

  filterChange( event:any,controlName:any) {
    console.log(">>>>>>>>>>",event);

    this.interviewForm.get(controlName)?.setValue(event);

    // let selectedOption = event.trim().toLowerCase();
    // this.datasource.filter = selectedOption;
    console.log(">>>>>>>>>>",this.datasource);
    
  }

  createForm(){
    return this.interviewForm = this._fb.group({
      department:[''],
      status:['']
    })
  }

  testJSON(text:any) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}

}



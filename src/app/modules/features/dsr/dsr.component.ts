import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../recruitment/interview/interview-data';
import { DSR_TABLEDATA, PROJECT_DROPDOWN,APPROVING_AUTHORITY,CHOOSE_AM } from './dsr-data';
import { LEAVE_TABLEDATA } from './../leave/my-leave/my-leave-data';



@Component({
  selector: 'app-dsr',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.scss']
})
export class DsrComponent implements OnInit {

  isOpen!: boolean;
  panelOpenState: boolean = false;
  projectDropdown=PROJECT_DROPDOWN;
  datasource = new MatTableDataSource<any>(DSR_TABLEDATA);
  dsrForm!:FormGroup;
  headings = [
    { heading: 'S.No.', key: 's_no', type: 'text'},
    { heading: 'Employee Name', key: 'emp_name', type: 'text' },
    { heading: 'Employee Id', key: 'emp_id', type: 'text' },
    { heading: 'Email', key: 'email', type: 'text'},
    { heading: 'Employee Type', key: 'employment_type', type: 'text'},
    { heading: 'Date', key: 'date', type: 'text', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Logged Hr', key: 'logged_hr', type: 'text', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Approval Status', key: 'approval_status', type: 'dsr_status' , link:'dsr-details'},

  ]
  pipe: DatePipe;
  filterForm!:FormGroup;
  submissionStatusData = ['All','Submitted','Due'];
  projectDataDropdown = ['All','Training Project React.js'];
  finalApprovalDropdown = ['All','Pending','Approved','Rejected'];
  hoursDropdown = ['Hours','Less than 5 Hours','Greater than 5, Less than equal to 8','Greater than 8','Greater than 10']
  selctedProject:string='';
  approvingAuthority:string[] = APPROVING_AUTHORITY;
  chooseAM:string[] = CHOOSE_AM;
  TABLE_DATA:any[]=[];

  constructor(private _fb:FormBuilder) {

    this.pipe = new DatePipe('en');
   
  }

  ngOnInit(): void {
    this.isOpen = false;
    this.createDsrFilterForm();
    this.createDsrForm();
    console.log("this is data come from my leave section }}}}}}}}}}}}}",LEAVE_TABLEDATA);
    
    this.datasource.filterPredicate = (data,filter) =>{
       

      console.log("filter predicate called>>>>>>>>>");
      
      
      if (this.fromDate!=null && this.toDate!=null) {
        console.log("date filter called>>>>>>");
        
        if(data.date >= this.fromDate && data.date <= this.toDate){
          this.TABLE_DATA.push(data);
        }
      }

      if( this.filterForm?.controls.submissionStatus.value){
        console.log("submation status called>>>>>>>>>>",this.filterForm?.controls.submissionStatus.value);
        
        if(data.status == this.filterForm?.controls.submissionStatus.value){
          this.TABLE_DATA.push(data);
        }
      }

      if(this.filterForm?.controls.project.value){
        console.log("project  called>>>>>>>>>>",this.filterForm?.controls.project.value);
        if(data.status == this.filterForm?.controls.project.value){
          this.TABLE_DATA.push(data);
        }
      }
      
      if(this.filterForm?.controls.finalApprovalStatus.value){
        console.log("finalApprovalStatus called",this.filterForm.get('finalApprovalStatus')?.value);
        if(data.logged_hr == this.filterForm?.controls.finalApprovalStatus.value){
          this.TABLE_DATA.push(data);
        }
      }

      if(this.filterForm?.controls.hours.value){
        console.log("hours called",this.filterForm.get('hours')?.value);
        if(data.status == this.filterForm?.controls.hours.value){
          this.TABLE_DATA.push(data);
        }
      }
      
      this.datasource = new MatTableDataSource<any>(this.TABLE_DATA);
      return true;
    }


  }

  get fromDate() {
    this.filterForm?.controls.fromDate.setValue(this.convert(`${this.filterForm.get('fromDate')?.value}`));
    // console.log("form Date >>>",this.filterForm.get('fromDate')?.value=='NaN-aN-aN');

    if(this.filterForm.get('fromDate')?.value!='NaN-aN-aN'){
      
      return this.filterForm.get('fromDate')?.value;
    }else{
      // console.log("null return>>>>>>>>>");
      
      return null;
    }
    
   }
  get toDate() { 
    this.filterForm?.controls.toDate.setValue(this.convert(`${this.filterForm.get('toDate')?.value}`));
    return this.filterForm.get('toDate')?.value; 
  }



  applyFilter() {

    // console.log("date change>>>>>>>>>.",this.filterForm.controls.toDate.value);
    

    this.datasource.filter = ''+Math.random();

  }

    
  convert(str:any) :any{
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  
  createDsrForm(){
    return this.dsrForm = this._fb.group({
      dsrProject:['',Validators.required],
      dsrDate:['',Validators.required],
      dsrHours:['',Validators.required],
      dsrContent:['',Validators.required]
    })
  }
  
  togglePanel() {
    
    this.panelOpenState = !this.panelOpenState;
    
  }
  
  toggleCard(){
    this.isOpen = !this.isOpen
  }
  
  createDsrFilterForm(){
   return this.filterForm = this._fb.group({
    fromDate: [null],
    toDate:[null],
    submissionStatus:[null],
    project:[null],
    finalApprovalStatus:[null],
    hours:[null]
  });
  }


  dropdownFilter(event:string,controlName:string){
    this.filterForm.get(controlName)?.setValue(event);
    console.log("selected dropdown value>>",this.filterForm.get(controlName)?.value);
    // this.datasource.filter = event;
    // this.applyFilter();
    this.datasource.filter = ''+Math.random();

    
  }

  
  selectDropdown(event :string,control:string){
    this.dsrForm.controls[control].setValue(event);
    this.selctedProject = event;
  }

  dsrSummit(){
    this.dsrForm.markAllAsTouched();
    let dsrObject = {
      s_no: DSR_TABLEDATA.length+1,
      emp_name: 'akshat',
      emp_id: '1553',  
      email: 'akshat@appinventiv.com',
      employment_type: 'Permanent',
      date: '2023-03-08',
      logged_hr: this.dsrForm.controls.dsrHours.value,
      approval_status: 2,
      status: 'Due',
      link:`/features/dsr-details?data=3`,
      dsr_description: this.dsrForm.controls.dsrContent.value,
    }
    DSR_TABLEDATA.push(dsrObject);

    this.datasource = new MatTableDataSource<any>(DSR_TABLEDATA);

    console.log('dsr updated data',DSR_TABLEDATA );
    
  }
  
  openFilledDsr(element:any){
    
  }

}



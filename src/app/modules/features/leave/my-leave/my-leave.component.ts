import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { LEAVE_HEADING, LEAVE_STATUS, LEAVE_TABLEDATA, LEAVE_TYPE } from './my-leave-data';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {

  isOpen:boolean = true;
  leaveTypeData = LEAVE_TYPE;
  datasource = new MatTableDataSource<any>(LEAVE_TABLEDATA);
  headings = LEAVE_HEADING;
  leaveStatus = LEAVE_STATUS;
  leaveForm!:FormGroup;

  constructor(private _fb:FormBuilder,
              private formService:FormService,
              private utilities:UtilitiesService) { }

  ngOnInit(): void {
    this.createForm();
    console.log("this is leavea form>>>>>>>>",this.createForm());
    
  }

  addLeave(){
    this.isOpen = !this.isOpen;
  }

  createForm(){
    return this.leaveForm = this._fb.group({
      leaveType:this.formService.getControl('leaveType'),
      leaveStartDate:this.formService.getControl('fromDate'),
      leaveEndDate:this.formService.getControl('toDate'),
      leaveRemark:this.formService.getControl('remark'),
      leaveDescription:this.formService.getControl('description'),
    })
  }

  selectedLeave(event:string){
    // alert(`event>${event}`);
    this.leaveForm.controls.leaveType.setValue(event);
    console.log("selected leave type>>>>>>>>", this.leaveForm.controls.leaveType.value);
    
  }

  // getControl(control:any){
  //   return this.leaveForm
  // }

  addLeaveAction(){
    this.leaveForm.markAllAsTouched();
    if(this.leaveForm.valid){
      let newID = LEAVE_TABLEDATA.length+1;
      let timeDuration = this.utilities.getTimeOfTwoDates(this.leaveForm.get('leaveStartDate')?.value,this.leaveForm.get('leaveEndDate')?.value);
      
      let leaveObject = {
        id:newID,
        action: 'e',
        leave_type: this.leaveForm.get('leaveType')?.value,
        request_from: this.leaveForm.get('leaveStartDate')?.value,
        request_to: this.leaveForm.get('leaveEndDate')?.value,
        applied_on: new Date(),
        time_duration:timeDuration,
        status: 'pending',
        level1: 'Suyash Saxena(AI057)',
        level2:'HR (Human Resourse)',
        link:`/features/leave-details/${newID}`

      }
      LEAVE_TABLEDATA.push(leaveObject);
      this.datasource = new MatTableDataSource(LEAVE_TABLEDATA);
    }
  }
}

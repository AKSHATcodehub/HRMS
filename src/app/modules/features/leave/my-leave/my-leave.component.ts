import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ElementScrollController } from '@fullcalendar/core/internal';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { SnackbarComponent } from 'src/app/modules/common/modules/snackbar/snackbar.component';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { LEAVE_HEADING, LEAVE_STATUS, LEAVE_TABLEDATA, LEAVE_TYPE, SHORT_LEAVE_DETAILS, SHORT_LEAVE_FIRST_TIME, SHORT_LEAVE_SECOND_TIME } from './my-leave-data';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {

  isOpen:boolean = false;
  leaveTypeData = LEAVE_TYPE;
  datasource = new MatTableDataSource<any>(LEAVE_TABLEDATA);
  headings = LEAVE_HEADING;
  leaveStatus = LEAVE_STATUS;
  leaveForm!:FormGroup;
  halfDayOpen = false;
  leaveTypePlaceholder = 'Select Leave Type';
  showShortLeaveTime=false;
  halfDayContainerOpen = true;
  shortLEaveDetails = SHORT_LEAVE_DETAILS;
  shortLeaveFirstTime= SHORT_LEAVE_FIRST_TIME;
  shortLeaveSecondTime= SHORT_LEAVE_SECOND_TIME;
  
  editorConfig: AngularEditorConfig= {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '15vw',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
  };
  

  constructor(private _fb:FormBuilder,
              private formService:FormService,
              private utilities:UtilitiesService,
              private _snackBar:MatSnackBar,
              private snackbarService:SnackbarService,
              private _elementRef:ElementRef) { }

  ngOnInit(): void {
    this.createForm();
    console.log("this is leavea form>>>>>>>>",this.createForm());
    
  }

  addLeave(){
    this.isOpen = !this.isOpen;
    var content = this._elementRef.nativeElement.querySelector('.my-card-content');
    console.log("toggle card called>>>>>>.",content.scrollHeight);
    
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      // content.style.overflow = 'hidden'
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
      // content.style.overflow = 'visible'

    } 
  }

  createForm(){
    return this.leaveForm = this._fb.group({
      leaveType:this.formService.getControl('leaveType'),
      leaveStartDate:this.formService.getControl('fromDate'),
      leaveEndDate:this.formService.getControl('toDate'),
      leaveRemark:this.formService.getControl('name'),
      leaveDescription:this.formService.getControl('description'),
      shortLeaveEndTme:['12 PM']
    })
  }

  selectedLeave(event:string){
    // alert(`event>${event}`);

    if(event == 'Short Leave'){
      this.showShortLeaveTime = true;
      this.halfDayContainerOpen = false;
    }else{
      this.halfDayContainerOpen=true;
      this.showShortLeaveTime = false;
    }

    this.leaveForm.controls.leaveType.setValue(event);
    console.log("selected leave type>>>>>>>>", this.leaveForm.controls.leaveType.value);
    
  }

  cancelAction(){
    this.isOpen = !this.isOpen;
    var content = this._elementRef.nativeElement.querySelector('.my-card-content');
    console.log("toggle card called>>>>>>.",content.scrollHeight);
    
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.overflow = 'hidden'
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
      content.style.overflow = 'visible'

    } 
  }

  // getControl(control:any){
  //   return this.leaveForm
  // }

  addLeaveAction(){

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
      this.snackbarService.showSuccess('Leave Submitted!','')
      this.leaveForm.reset();
      this.addLeave();
      this.isOpen = !this.isOpen
    
    }else{
      this.leaveForm.markAllAsTouched();
    }
  }

  halfDay(){
    this.halfDayOpen = !this.halfDayOpen;
  }

  selectedValue(seletedValue:string){
    if(seletedValue == '10 AM'){
      this.leaveForm.controls.shortLeaveEndTme.setValue('12 PM');
    }else{
      this.leaveForm.controls.shortLeaveEndTme.setValue('7 PM');
    }
  }
}

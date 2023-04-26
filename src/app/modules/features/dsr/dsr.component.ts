import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DSR_TABLEDATA, PROJECT_DROPDOWN,APPROVING_AUTHORITY,CHOOSE_AM, HOURS_STATUS } from './dsr-data';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../common/modules/snackbar/snackbar.component';
import {DSR_HEADING} from './dsr-data';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-dsr',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.scss']
})
export class DsrComponent implements OnInit {

  today= new Date();
  isOpen!: boolean;
  panelOpenState: boolean = false;
  projectDropdown=PROJECT_DROPDOWN;
  datasource = new MatTableDataSource<any>(DSR_TABLEDATA);
  dsrForm!:FormGroup;
  headings = DSR_HEADING;
  pipe: DatePipe;
  filterForm!:FormGroup;
  submissionStatusData = ['Submitted','Due'];
  projectDataDropdown = ['Training Project React.js'];
  finalApprovalDropdown = ['Pending','Approved','Rejected'];
  hoursDropdown = ['Less than 5 Hours','Greater than 5, Less than equal to 8','Greater than 8','Greater than 10']
  selctedProject:string='';
  approvingAuthority:string[] = APPROVING_AUTHORITY;
  chooseAM:string[] = CHOOSE_AM;
  TABLE_DATA = new MatTableDataSource<any>([]);
  statusPlaceHolder="Select Status";
  projectPlaceholder='Select Project';
  approvalstatusPlaceholer = 'Select Approval status'
  hoursPlaceholder = 'Hours'
  filterObject:any;
  reset = false;
  authorityPlaceholder = 'Select Authority'
  AMPlaceholder = "Select AM"

  editorConfig: AngularEditorConfig = {
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
  pageSize!: number;
  @Input() ngxMatTimepicker:any;
  dsrFilterObject: any;

  constructor(private _fb:FormBuilder,
              private _snackbar:MatSnackBar,
              public _utilities:UtilitiesService,
              private _snackbarService:SnackbarService,
              private _elementRef:ElementRef,
              private _formService:FormService) {

    this.createDsrFilterForm();

    this.pipe = new DatePipe('en');

    this.filterForm.valueChanges.subscribe((value:any)=>{

      console.log("value>>>>>",value);
 
      this.filterFunction(value)
      
    })
  }

  filterFunction(value:any){

    if(value.fromDate!=''){

      value.fromDate = this.convert(value.fromDate);

    }
    if(value.toDate!=''){

      value.toDate = this.convert(value.toDate);

    }

    let filter = {...value} ;

    console.log("111");

    this.datasource.filter =  JSON.stringify(filter);
   
    this.datasource.filterPredicate = ((data, filter) => {

      console.log("filter predicate called>>>>>>>>>>>>>",filter);

      console.log("type of filter>>>>>",this.testJSON(filter));

      if(this.testJSON(filter)){

        var filterObject = JSON.parse(filter)      
  
        const a = !filterObject.status || data.status === filterObject.status;
  
        const b = !filterObject.approval_status || data.approval_status == filterObject.approval_status;
  
        const c = !filterObject.fromDate || data.date >= filterObject.fromDate;
  
        const d = !filterObject.toDate || data.date <= filterObject.toDate;

        var e = !filterObject.logged_hr;
        
        if(filterObject.logged_hr == 1){
          e = !filterObject.logged_hr || data.logged_hr < 5;
        }

        if(filterObject.logged_hr == 2){
          e = !filterObject.logged_hr || (data.logged_hr > 5 && data.logged_hr < 8 );
        }        

        if(filterObject.logged_hr == 3){
          e = !filterObject.logged_hr || data.logged_hr > 8;
        }        

        if(filterObject.logged_hr == 4){
          e = !filterObject.logged_hr || data.logged_hr > 10;
        }
  
        console.log(a && b && c && d );
        
        return a && b && c && d && e;
      }
      else{

        return data.emp_name.toLowerCase().includes(filter) 
              
      }
      
    }
      
    )      
  }

  ngOnInit(): void {
    this.isOpen = false;
 
    this.createDsrForm();

    this.dsrFilterObject = this.createFilterObject(this.filterForm);    

  }

  get fromDate() {
    this.filterForm?.controls.fromDate.setValue(this.convert(`${this.filterForm.get('fromDate')?.value}`));
    return this.filterForm.get('fromDate')?.value; 
    
   }

  get toDate() { 
    this.filterForm?.controls.toDate.setValue(this.convert(`${this.filterForm.get('toDate')?.value}`));
    return this.filterForm.get('toDate')?.value; 
  }
    
  convert(str:any) :any{
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  
  createDsrForm(){
    return this.dsrForm = this._fb.group({
      dsrProject:this._formService.getControl('mandatory'),
      dsrDate:this._formService.getControl('mandatory'),
      dsrHours:this._formService.getControl('mandatory'),
      dsrNoWork:this._formService.getControl('mandatory'),
      dsrContent:this._formService.getControl('name'),
    })
  }
  

  toggleCard(){
    
    this.isOpen = !this.isOpen;

    this.panelOpenState = !this.panelOpenState;

    var content = this._elementRef.nativeElement.querySelector('.my-card-content');

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
    } 
    
  }
  
  createDsrFilterForm(){
   return this.filterForm = this._fb.group({
    fromDate: [''],
    toDate:[''],
    status:[''],
    project:[''],
    approval_status:[''],
    logged_hr:['']
  });
  }

  createFilterObject(form: FormGroup){
    return{

      loggedHours: {
        label: 'Logged Hours',
        list: HOURS_STATUS,
        control: form.controls.logged_hr
      },
    }
  }

  dropdownFilter(event:string,controlName:string){

    this.filterForm.get(controlName)?.setValue(event);
  
  }

  selectDropdown(event :string,control:string){
    this.dsrForm.controls[control].setValue(event);
    this.selctedProject = event;
  }

  dsrSummit(){

    if(this.dsrForm.valid){

      console.log('1',DSR_TABLEDATA);
      
      let dsrExixt = DSR_TABLEDATA.filter((dsr:any)=>{
        console.log("comparision>>>>>",dsr.date , this.convert(this.dsrForm.controls.dsrDate.value));
        
        if(dsr.date == this.convert(this.dsrForm.controls.dsrDate.value)){
          console.log('2');
          
          return dsr;
        }
      }
      )

      console.log('3');
      
      console.log("dsr exist>>>>",dsrExixt);

      if(dsrExixt.length>0){
        this._snackbarService.showError('DSR already Exist!','')
      }else{
      
          let dsrObject = {
            s_no: DSR_TABLEDATA.length+1,
            emp_name: 'akshat',
            emp_id: '1553',  
            email: 'akshat@appinventiv.com',
            employment_type: 'Permanent',
            date: this.convert(this.dsrForm.controls.dsrDate.value),
            logged_hr: this.dsrForm.controls.dsrHours.value,
            approval_status: 'Pending',
            status: 'Due',
            link:`/features/dsr-details?data=3`,
            dsr_description: this.dsrForm.controls.dsrContent.value,
          }
          DSR_TABLEDATA.push(dsrObject);
      
          this.datasource.data = (DSR_TABLEDATA);
    
          this._snackbarService.showSuccess('DSR Submitted!','');

          this.dsrForm.reset();
    
          this.isOpen = !this.isOpen;

      }
    
    }else{

      this.dsrForm.markAllAsTouched();
    }

    console.log('dsr updated data',DSR_TABLEDATA );
    
  }
  
  openFilledDsr(element:any){
    
  }

  resetDsrFilter(){
    
    let filterObjectKeys = Object.keys(this.filterForm.controls);

    filterObjectKeys.forEach((item)=>{
      this.filterForm.get(item)?.patchValue('')
    })

    this.progValueLoggedHr = ''
    // this.filterForm.reset();

    console.log("this is reset filter form>>>>>>>",this.filterForm);
    
    this.datasource = new MatTableDataSource(DSR_TABLEDATA);

    console.log("this is table data>>>>>>>",this.datasource);


  }

  noWork(){
    console.log("no wwork function called>>>>>>>>>");
    
    if(this.dsrForm.controls.dsrNoWork.value){
      this.dsrForm.controls.dsrContent.setValue('Today no work has been done on this project');
    }else{
      this.dsrForm.controls.dsrContent.setValue('');
    }
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

  progValueLoggedHr = ''

  dropDownChange(event:any){
    console.log("new dropdown selectd>>>>>",event);
    this.filterForm.controls.logged_hr.setValue(event.value)
    this.progValueLoggedHr = event.viewValue
  }

}



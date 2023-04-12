import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PATTERN } from '../constant/patterns';
import { Regex } from '../constant/regex';
import { VALIDATION_CRITERIA } from '../constant/validation-criteria';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor() { }

  akshat:any

  get value(){
    return this.akshat;
  }

  VALIDATION:any = {
    emptyControl:[],
    name:[
      Validators.pattern(Regex.name),
    ],
    email:[
      Validators.email,
      Validators.pattern(Regex.email),
    ],
    password:[
      Validators.pattern(Regex.password),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength)
    ],
    university:[],
    education:[],
    language:[],
    description:[],
    fromTimePerioed:[],
    toTimePerioed:[ ],
    empName:[],
    empId:[],
    DOB:[],
    pitchTitle:[],
    pitchIndustry:[],
    pitchType:[],
    departmentName:[],
    jobCode:[],
    location:[],
    experience:[],
    jobLocation:[],
    projectTitle:[],
    phoneNumber:[Validators.pattern(Regex.phone)],
    skill:[],
    file:[],
    leaveType:[],
    fromDate:[],
    toDate:[],
    remark:[],
    mandatory:[],

  }

  getControl(name:any,required=true,prerfilled?:any){
    if(prerfilled === undefined){
      prerfilled = '';
    } 

    // console.log("this is form control ....",this.VALIDATION['email']);

    let compose = [...this.VALIDATION[name]];

    console.log("this is form control ....",compose);

    if(required){
      if(name === "checkbox"){
        compose.splice(0,0,Validators.requiredTrue);
      }else{
        compose.splice(0,0,Validators.required);
      }
    }

    return [prerfilled, Validators.compose(compose)];
  }

  getFormControl(formGroup:FormGroup,control:string){
    return formGroup.get(control)?.value;
  }

}

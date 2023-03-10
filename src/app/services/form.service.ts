import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN } from '../constant/patterns';
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
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength)
    ],
    email:[
      Validators.email,
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)
    ],
    password:[
      Validators.pattern(PATTERN.password),
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
    phoneNumber:[],
    skill:[],
    file:[]
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

}

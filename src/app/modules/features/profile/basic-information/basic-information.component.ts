import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { userInfoTitle } from '../profile-data';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  constructor(private ref:ElementRef,
              private render:Renderer2,
              private fb:FormBuilder
              ) { }
  
  today = new Date();
  slidePosition = 1;
  maxNumberOfTab:number=4;
  tabIndex:number=0;
  wrapper:any;
  selectBtn:any;
  searchInp:any;
  options:any;
  countries:any;
  filterCountries:any;
  gender=['Male','Female'];
  genderPlaceHolder:string = 'Gender';
  marriage=['Single','Married','Divorced'];
  marriagePlaceHolder:string='Marriage Status'
  alpha=['a','b','c'];
  toggleStatus=false;
  basicInfoForm!:FormGroup;

  ngOnInit(): void {

    this.basicInfoForm = this.createForm();
    
    setTimeout(() => {

      this.wrapper = this.ref.nativeElement.querySelector(".wrapper");
      this.selectBtn = document.querySelector(".select-btn");
      this.searchInp = document.querySelector(".searchbar"),
      this.options =document.querySelector(".options");
      this.filterCountries=this.countries;
  
    }, 2000);
  }

  createForm(){
    return this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      dateOfBirth:['',Validators.required],
      genderr:[null,Validators.required],
      marriageStatus:[null,Validators.required],
      contactNumber:['',Validators.required],
      YearOfExperience:['',Validators.required],
      relevantExperience:['',Validators.required]
    })
  }

  saveBasicInfo(){
    this.basicInfoForm.markAllAsTouched();
    if(this.basicInfoForm.errors){
      alert("sucess");
    }
  }

  tabNext(){
    if(this.tabIndex != this.maxNumberOfTab)
    this.tabIndex++;

  }

  optionClicked(wapper:any){

    this.toggleStatus=!this.toggleStatus;

    console.log("toggle sta tus..",this.toggleStatus);
    
    if(this.toggleStatus){
      this.render.addClass(wapper,'active');

    }
    if(!this.toggleStatus){
      this.render.removeClass(wapper,'active');

    }
  }


  keyFunc(event:any){
    console.log("event......",event.target.value);

    let arr = [];
    let searchWord = event.target.value.toLowerCase();
    arr = this.gender.filter((data:any) => {
        return data.toLowerCase().startsWith(searchWord);
    })

    console.log("arr>>>>",arr);
    
    this.filterCountries = arr.length>0 ? arr : ['No Result! '];

    if(event.target.value.toLowerCase().length==0){
      this.filterCountries=this.countries;
    }
    
  }



  updateName(selectedLi:any,selectbtn:any,wapper:any,control:any) {

    this.searchInp.value = "";
    wapper.classList.remove("active");
    selectbtn.firstElementChild.value = selectedLi;
    this.basicInfoForm?.get(control)?.setValue(selectedLi);

  }



}

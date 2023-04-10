import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FEATURES } from 'src/app/constant/routes';
import { FormService } from 'src/app/services/form.service';
import { Industry } from './pitch-data';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {
  
  selectedFile: any;
  onFileSelected($event: Event) {
  throw new Error('Method not implemented.');
  }
  
  toggleStatus:boolean = false;
  pitchForm!:FormGroup;
  IndustryData:string[]=Industry;
  options: any;
  searchInp: any;
  selectBtn: any;
  wrapper: any;
  today = new Date();
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

  constructor(private ref:ElementRef,
    private render:Renderer2,
    private fb:FormBuilder,
    private _form:FormService,
    private _route:Router) { }

  ngOnInit(): void {

    setTimeout(() => {

      this.wrapper = this.ref.nativeElement.querySelector(".wrapper");
      this.selectBtn = document.querySelector(".select-btn");
      this.searchInp = document.querySelector(".searchbar"),
      this.options =document.querySelector(".options");
      this.IndustryData=this.IndustryData;
  
    }, 2000);

    this.createPitchForm();
  }

  createPitchForm(){
    return this.pitchForm = this.fb.group({
      empName:this._form.getControl('empName'),
      empId:this._form.getControl('empId'),
      DOB:this._form.getControl('DOB'),
      pitchTitle:this._form.getControl('pitchTitle'),
      pitchIndustry:this._form.getControl('pitchIndustry'),
      pitchType:this._form.getControl('pitchType')
    })
  }

  actionbtn(){
    this.pitchForm.markAllAsTouched();
    if(this.pitchForm.valid){
      this._route.navigate([FEATURES.fullUrl])
    }
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
    arr = this.IndustryData.filter((data:any) => {
        return data.toLowerCase().startsWith(searchWord);
    })

    console.log("arr>>>>",arr);
    
    this.IndustryData = arr.length>0 ? arr : ['No Result! '];

    if(event.target.value.toLowerCase().length==0){
      this.IndustryData=this.IndustryData;
    }
    
  }



  updateName(selectedLi:any,selectbtn:any,wapper:any,control:any) {

    this.searchInp.value = "";
    wapper.classList.remove("active");
    selectbtn.firstElementChild.value = selectedLi;
    console.log("this is psatch control>>>",this.pitchForm?.get(control));
    
    this.pitchForm?.get(control)?.setValue(selectedLi);

  }

  selectedValue(event:string,controlName:string){
    this.pitchForm.get(controlName)?.setValue(event) 
  }
}

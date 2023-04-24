import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { REQUESTED_DINNER_DATA } from './requested-dinner-data';

@Component({
  selector: 'app-requested-dinner',
  templateUrl: './requested-dinner.component.html',
  styleUrls: ['./requested-dinner.component.scss']
})
export class RequestedDinnerComponent implements OnInit {

  dropdownData:any;
  isOpen=false;
  requestDinnerForm!:FormGroup;
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

  constructor(private _fb:FormBuilder,
              private _formService:FormService,
              private _snackBar:SnackbarService,
              private _elementRef:ElementRef) {
    this.createForm();
   }

  ngOnInit(): void {

    this.dropdownData = this.createDropdownObject();

  }

  createDropdownObject(){
    return {
      projectDropdown:{
        label:'Select Project',
        list:REQUESTED_DINNER_DATA,
      }
    }
  }

  requestDinner(){
    console.log("re");
    this.isOpen = !this.isOpen;
    var content = this._elementRef.nativeElement.querySelector('.my-card-content');
    console.log("toggle card called>>>>>>.",content.scrollHeight);
    
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      console.log('1111111')
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      console.log('2222222')

    } 
  }

  createForm(){
    this.requestDinnerForm = this._fb.group({
      dinnerDate:this._formService.getControl('mandatory'),
      project:this._formService.getControl('mandatory'),
      dinnerDescription:this._formService.getControl('mandatory')
    })
  }

  selectedValue(event:{viewValue:string,value:string},controlName:string){
    this.requestDinnerForm.get(controlName)?.setValue(event.value)
  }

  requestedDinnerSubmit(){
    console.log(">>>>>>>",this.requestDinnerForm);
    
    if(this.requestDinnerForm.valid){
      this._snackBar.showSuccess('Requested Dinner Submitted!','');
      this.requestDinnerForm.reset();
      this.requestDinner() 
    }else{
      this.requestDinnerForm.markAllAsTouched()
    }
  }

}

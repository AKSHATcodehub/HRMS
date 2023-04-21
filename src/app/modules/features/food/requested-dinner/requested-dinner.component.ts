import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { REQUESTED_DINNER_DATA } from './requested-dinner-data';

@Component({
  selector: 'app-requested-dinner',
  templateUrl: './requested-dinner.component.html',
  styleUrls: ['./requested-dinner.component.scss']
})
export class RequestedDinnerComponent implements OnInit {

  dropdownData:any;
  isOpen=false;
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

  constructor() { }

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
    
  }

}

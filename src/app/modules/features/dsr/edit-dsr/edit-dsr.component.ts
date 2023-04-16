import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-edit-dsr',
  templateUrl: './edit-dsr.component.html',
  styleUrls: ['./edit-dsr.component.scss'],
})
export class EditDsrComponent implements OnInit {
  constructor(private _fb: FormBuilder, 
              private _formService: FormService,
              private _snackbarService:SnackbarService
              ) {}

  ngOnInit(): void {
    this.editDsrForm = this.createForm();
  }

  @Input() ngxMatTimepicker: any;
  projectDataDropdown = ['Training Project React.js'];
  editDsrPlaceholder = 'Select Project';
  editDsrForm!: FormGroup;
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

  createForm() {
    
    return this._fb.group({
      dsrProject: ['Training Project React.js', [Validators.required]],
      dsrDate: [new Date(), [Validators.required]],
      dsrTime: ['', [Validators.required]],
      dsrDescription: ['This is dsr description', [Validators.required]],
    });
  }

  dsrSummit() {
    if (this.editDsrForm.valid) {
      this._snackbarService.showSuccess('DSR Updated!','')
    } else {
      this._snackbarService.showError('Please Fill All Field','');
    }
  }
}

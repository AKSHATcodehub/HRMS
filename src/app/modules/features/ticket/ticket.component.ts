import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SnackbarComponent } from '../../common/modules/snackbar/snackbar.component';
import { INTERVIEW_DATA } from '../recruitment/interview/interview-data';
import { DROPDOWN_DATA, TICKET_HEADING, TICKET_TABLE_DATA } from './ticket-data';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  dropdownData = DROPDOWN_DATA;
  isOpen!: boolean;
  panelOpenState: boolean = false;
  datasource = new MatTableDataSource<any>(TICKET_TABLE_DATA);
  headings = TICKET_HEADING;
  ticketForm!:FormGroup;
  TABLE_DATA:any[]=TICKET_TABLE_DATA;
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
              private _snackbar:MatSnackBar,
              private _formservice:FormService,
              private _snackbarService:SnackbarService,
              private _elementRef:ElementRef) { }

  ngOnInit(): void {

    this.isOpen = false;
    this.createForm();

  }

  createForm(){
    return this.ticketForm = this._fb.group({
      subject:this._formservice.getControl('name'),
      department:this._formservice.getControl('mandatory'),
      ticketCategory:this._formservice.getControl('mandatory'),
      piority:this._formservice.getControl('mandatory'),
      description:this._formservice.getControl('name'),
    })
  }

  togglePanel() {
     
    console.log("kkkkkkkkkkkkkk");

    this.panelOpenState = !this.panelOpenState;
 
  }

  toggleCard(){
    this.isOpen = !this.isOpen;
    var content = this._elementRef.nativeElement.querySelector('.my-card-content');
    console.log("toggle card called>>>>>>.",content.scrollHeight);
    
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      // content.style.overflow = 'hidden';
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
      // content.style.overflow = 'visible';
    } 
  }

  selectedValue(event:string,controlName:string){
    console.log("thid id elected value>>>>>>>>>",this.ticketForm.get(controlName)?.value);
    
    this.ticketForm.get(controlName)?.setValue(event);

    console.log("thid id elected value>>>>>>>>>",this.ticketForm.get(controlName)?.value);

  }
 
  addTicket(){
    console.log("thi ticket value>>",this.ticketForm);
    
    if(this.ticketForm.valid){
      let ticketObject = {
        action:this.TABLE_DATA.length+1,
        ticket_code:7634527,
        priority:this.ticketForm.controls.piority.value,
        employee:'Permanet',
        subject:this.ticketForm.controls.subject?.value,
        status:'pending',
        date:new Date()
      }
      this.TABLE_DATA.push(ticketObject);
      this.datasource = new MatTableDataSource<any>(this.TABLE_DATA);
      this._snackbarService.showSuccess('Ticket Add','');
      this.ticketForm.reset();
      this.toggleCard();
      this.isOpen = !this.isOpen;

    }else{
      this.ticketForm.markAllAsTouched();
    }
  }

}

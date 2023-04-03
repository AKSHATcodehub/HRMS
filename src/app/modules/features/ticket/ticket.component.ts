import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../recruitment/interview/interview-data';
import { TICKET_HEADING, TICKET_TABLE_DATA } from './ticket-data';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  isOpen!: boolean;
  panelOpenState: boolean = false;
  // projectDropdown=PROJECT_DROPDOW;
  datasource = new MatTableDataSource<any>(TICKET_TABLE_DATA);
  headings = TICKET_HEADING;
  ticketForm!:FormGroup;
  departmentDropdown = ['IT','Admin'];
  tiketCategoryDropdown = ['Ticket Category 1','Ticket Category 2'];
  priorityDropdown = ['High','Low','Normal'];
  TABLE_DATA:any[]=TICKET_TABLE_DATA;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.isOpen = false;
    this.createForm();

  }

  createForm(){
    return this.ticketForm = this._fb.group({
      subject:['',Validators.required],
      department:['',Validators.required],
      ticketCategory:['',Validators.required],
      piority:['ii',Validators.required],
      description:['',Validators.required]
    })
  }

  togglePanel() {
     
    console.log("kkkkkkkkkkkkkk");

    this.panelOpenState = !this.panelOpenState;
    
  }

  toggleCard(){
    this.isOpen = !this.isOpen
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

    }else{
      this.ticketForm.markAllAsTouched();
    }
  }

}

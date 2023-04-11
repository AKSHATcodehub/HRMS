import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dialogForm!:FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb:FormBuilder,
    private _form:FormService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm(){
    return this.dialogForm = this._fb.group({
      departmentName:this._form.getControl('departmentName'),
      jobCode:this._form.getControl('jobCode'),
      location:this._form.getControl('location'),
      experience:this._form.getControl('experience'),
      jobLocation:this._form.getControl('jobLocation'),
      empName:this._form.getControl('empName'),
      projectTitle:this._form.getControl('projectTitle'),
      phoneNumber:this._form.getControl('phoneNumber'),
      skill:this._form.getControl('skill'),
      // description:this._form.getControl('description'),
      email:this._form.getControl('email'),
      file:this._form.getControl('file')
    })
  }

  onSubmit(){
    console.log("this is on submit function 1 >>>>>>>>>>>>",this.dialogForm);


    if(this.dialogForm.valid){
      this.dialogRef.close();
      console.log("this is on submit function 2>>>>>>>>>>>>");
      
    }else{
      this.dialogForm.markAllAsTouched()
      console.log("this is on submit function 3>>>>>>>>>>>>");

    }

  }

}

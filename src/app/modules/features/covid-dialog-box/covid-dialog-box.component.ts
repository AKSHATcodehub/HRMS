import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-covid-dialog-box',
  templateUrl: './covid-dialog-box.component.html',
  styleUrls: ['./covid-dialog-box.component.scss']
})
export class CovidDialogBoxComponent implements OnInit {
  
  constructor(private _fb:FormBuilder,
              private _formService:FormService,
              public dialogRef: MatDialogRef<CovidDialogBoxComponent>,) { }

  ngOnInit(): void {
    this.createForm()
  }

  covidForm!:FormGroup;

  createForm(){
    return this.covidForm = this._fb.group({
      title:this._formService.getControl('name'),
      mobile:this._formService.getControl('phoneNumber'),
      address:this._formService.getControl('name'),
      description:this._formService.getControl('description')
    })
  }

  onSubmit() {
    if(this.covidForm.valid){
      this.dialogRef.close()
    }else{
      this.covidForm.markAllAsTouched()
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/constant/regex';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm!:FormGroup;

  constructor( private fb:FormBuilder,
               private _snackBar:SnackbarService,
               private _formService:FormService
               ) { 
    this.passwordForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){  
    return this.fb.group({
      oldPassword:this._formService.getControl('password'),
      password:this._formService.getControl('password'),
      confirmPassword:this._formService.getControl('password')
    })
  }

  passwordChanged(){

    if(this.passwordForm.valid){
      if(this.passwordForm.controls.password.value === this.passwordForm.controls.confirmPassword.value){
        this.passwordForm.reset();
        this._snackBar.showSuccess('Password Changed!','');
    
      }else{
        this._snackBar.showError('Password are diffrent','')
      }
    }else{
      this.passwordForm.markAllAsTouched();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/constant/regex';
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
               ) { 
    this.passwordForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){  
    return this.fb.group({
      oldPassword:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }

  passwordChanged(){

    if(this.passwordForm.valid){
      if(this.passwordForm.controls.password.value === this.passwordForm.controls.confirmPassword.value){
        this.passwordForm.reset();
        this._snackBar.snackBar("Password Changed ");
    
      }else{
        this._snackBar.snackBar("Password are diffrent ")
      }
    }else{
      this.passwordForm.markAllAsTouched();
    }
  }

}

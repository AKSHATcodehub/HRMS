import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/constant/regex';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm!:FormGroup;

  constructor( private fb:FormBuilder,
               private _snackBar:SnackbarService) { 
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
      this._snackBar.snackBar("Password Changed ")
    }
    if(this.passwordForm.invalid){
      this.passwordForm.markAllAsTouched();
    }else{
      
        this._snackBar.snackBar("new & confirm password is diffrent",);
  
    
    }
  }

}

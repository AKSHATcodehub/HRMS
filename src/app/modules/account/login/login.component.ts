import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Regex } from 'src/app/constant/regex';
import { DASHBOARD, FEATURES } from 'src/app/constant/routes';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SnackbarComponent } from '../../common/modules/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  lo = true;
  hide: any = true;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _snackbarService:SnackbarService
  ) {
    // this.loginForm=this.createLoginForm()
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  emaill = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.emaill.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emaill.hasError('email') ? 'Not a valid email' : '';
  }

  showLoginWithGoogle: boolean = false;

  onLoginwithCredential() {
    this.showLoginWithGoogle = true;
  }
  onLoginWithGoogle() {
    this.showLoginWithGoogle = false;
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1 * 1000,
      verticalPosition: 'top',
      data: 'Login Sucessfully!',
    });
  }

  onLogin() {
    console.log('form...', this.loginForm);

    if (this.loginForm.valid) {
      sessionStorage.setItem('token', '12345');
      this._snackbarService.showSuccess('Login Sucessfully!','');
      setTimeout(() => {
        this.router.navigate([FEATURES.fullUrl]);
      }, 1000);
    }
  }

  // createLoginForm():FormGroup{
  //   return this.fb.group({
  //     email:this.formService.getControl("email"),
  //     password:this.formService.getControl("password")
  //   })
  // }

  createLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(Regex.email),
          Validators.maxLength(25),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(Regex.password),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  noSpace(e: any) {
    if (e.which === 32 || e.which == 189 || e.which == 17) {
      e.preventDefault();
    }
  }
}

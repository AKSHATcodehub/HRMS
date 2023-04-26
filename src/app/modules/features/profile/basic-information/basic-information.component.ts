import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/modules/common/modules/snackbar/snackbar.component';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { GENDER_DATA, MARITAL_STATUS_DATA } from './basic-information-data';
// import { userInfoTitle } from '../profile-data';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent implements OnInit {
  constructor(
    private ref: ElementRef,
    private render: Renderer2,
    private fb: FormBuilder,
    public _utilities: UtilitiesService,
    private _snackBar: SnackbarService,
    private _formService: FormService
  ) {}

  today = new Date();
  slidePosition = 1;
  maxNumberOfTab: number = 4;
  tabIndex: number = 0;
  gender = ['Male', 'Female'];
  genderPlaceHolder: string = 'Gender';
  marriage = ['Single', 'Married', 'Divorced'];
  marriagePlaceHolder: string = 'Marriage Status';
  toggleStatus = false;
  basicInfoForm!: FormGroup;
  reset: string = '';

  ngOnInit(): void {
    this.basicInfoForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: this._formService.getControl('name'),
      lastName: this._formService.getControl('name'),
      dateOfBirth: ['', Validators.required],
      genderr: [null, Validators.required],
      marriageStatus: [null, Validators.required],
      contactNumber: this._formService.getControl('phoneNumber'),
      YearOfExperience: ['', Validators.required],
      yearOfExperienceMonth: ['', Validators.required],
      relevantExperience: ['', Validators.required],
      relevantExperienceMonth: ['', Validators.required],
    });
  }

  saveBasicInfo() {

    if (this.basicInfoForm.valid) {
      this._snackBar.showSuccess('Basic Info Updated','');
      this.basicInfoForm.reset();
    } else {
      this.basicInfoForm.markAllAsTouched();
    }
  }

  tabNext() {
    if (this.tabIndex != this.maxNumberOfTab) this.tabIndex++;
  }

  optionClicked(wapper: any) {
    this.toggleStatus = !this.toggleStatus;

    console.log('toggle sta tus..', this.toggleStatus);

    if (this.toggleStatus) {
      this.render.addClass(wapper, 'active');
    }
    if (!this.toggleStatus) {
      this.render.removeClass(wapper, 'active');
    }
  }

  selectedValue(event: string, controlName: string) {
    this.basicInfoForm.get(controlName)?.setValue(event);
    
  }

  
}

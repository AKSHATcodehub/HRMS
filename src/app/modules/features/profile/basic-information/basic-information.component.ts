import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/modules/common/modules/snackbar/snackbar.component';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
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
  wrapper: any;
  selectBtn: any;
  searchInp: any;
  options: any;
  countries: any;
  filterCountries: any;
  gender = ['Male', 'Female'];
  genderPlaceHolder: string = 'Gender';
  marriage = ['Single', 'Married', 'Divorced'];
  marriagePlaceHolder: string = 'Marriage Status';
  alpha = ['a', 'b', 'c'];
  toggleStatus = false;
  basicInfoForm!: FormGroup;
  reset: string = '';

  ngOnInit(): void {
    this.basicInfoForm = this.createForm();

    setTimeout(() => {
      this.wrapper = this.ref.nativeElement.querySelector('.wrapper');
      this.selectBtn = document.querySelector('.select-btn');
      (this.searchInp = document.querySelector('.searchbar')),
        (this.options = document.querySelector('.options'));
      this.filterCountries = this.countries;
    }, 2000);
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
    console.log('basic form>>>>>>>', this.basicInfoForm.controls.firstName);

    if (this.basicInfoForm.valid) {
      // this.basicInfoForm.reset();
      console.log('reset basic info form >>>>>>>', this.basicInfoForm);

      this.reset;
      this._snackBar.showSuccess('Basic Info Updated','');
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

  keyFunc(event: any) {
    console.log('event......', event.target.value);

    let arr = [];
    let searchWord = event.target.value.toLowerCase();
    arr = this.gender.filter((data: any) => {
      return data.toLowerCase().startsWith(searchWord);
    });

    console.log('arr>>>>', arr);

    this.filterCountries = arr.length > 0 ? arr : ['No Result! '];

    if (event.target.value.toLowerCase().length == 0) {
      this.filterCountries = this.countries;
    }
  }

  updateName(selectedLi: any, selectbtn: any, wapper: any, control: any) {
    this.searchInp.value = '';
    wapper.classList.remove('active');
    selectbtn.firstElementChild.value = selectedLi;
    this.basicInfoForm?.get(control)?.setValue(selectedLi);
  }

  selectedValue(event: string, controlName: string) {
    this.basicInfoForm.get(controlName)?.setValue(event);
    
  }

  
}

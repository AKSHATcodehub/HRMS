import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import {
  ASSETS_DECLARATION_HEADING,
  ASSETS_DECLARATION_TABLE_DATA,
} from './assets-declaration-data';

@Component({
  selector: 'app-assets-declaration',
  templateUrl: './assets-declaration.component.html',
  styleUrls: ['./assets-declaration.component.scss'],
})
export class AssetsDeclarationComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _form: FormService,
    public _utilities: UtilitiesService,
    private _snacbarService: SnackbarService,
    private _elementRef:ElementRef
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  isOpen = false;
  datasource = new MatTableDataSource<any>(ASSETS_DECLARATION_TABLE_DATA);
  headings = ASSETS_DECLARATION_HEADING;
  OsDropdown = ['Android', 'IOS'];
  deviceWorkingDropdown = ['Yes', 'No'];
  assetsDeclarationForm!: FormGroup;
  TABLE_DATA: any[] = [];
  osPlaceholer = "Select OS";
  deviceWorkingPlaceholder = "Select";

  toggleCard() {
    this.isOpen = !this.isOpen;
    var content = this._elementRef.nativeElement.querySelector('.my-card-content');

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
    } 
  }

  createForm() {
    return (this.assetsDeclarationForm = this._fb.group({
      employeeId: this._form.getControl('noandcharactor'),
      uniqueAssetCode: this._form.getControl('noandcharactor'),
      serialNumber: this._form.getControl('noandcharactor'),
      modelNumber: this._form.getControl('noandcharactor'),
      os: this._form.getControl('mandatory'),
      osVersion: this._form.getControl('mandatory'),
      brand: this._form.getControl('mandatory'),
      color: this._form.getControl('mandatory'),
      workingCondition: this._form.getControl('mandatory'),
      assetsImage: this._form.getControl('mandatory'),
    }));
  }

  getControlValue(controlName: string) {
    return this.assetsDeclarationForm.get(controlName)?.value;
  }

  selectedValue(event: string, controlName: string) {
    this.assetsDeclarationForm.get(controlName)?.setValue(event);
  }

  assetsDeclarationSubmit() {
    if (this.assetsDeclarationForm.valid) {
      this.TABLE_DATA = ASSETS_DECLARATION_TABLE_DATA;
      let assetsDeclarationObject = {
        s_no: this.TABLE_DATA.length + 1,
        Employee_Id: this.getControlValue('employeeId'),
        Unique_Asset_Code: this.getControlValue('uniqueAssetCode'),
        Serial_Number: this.getControlValue('serialNumber'),
        Model_Number: this.getControlValue('modelNumber'),
        OS: this.getControlValue('os'),
        OS_version: this.getControlValue('osVersion'),
        Brand: this.getControlValue('brand'),
        Colour: this.getControlValue('color'),
        Images: this.getControlValue('assetsImage'),
        Is_Working: this.getControlValue('workingCondition'),
        Added: 'Yes',
      };

      this.TABLE_DATA.push(assetsDeclarationObject);
      this.datasource = new MatTableDataSource<any>(this.TABLE_DATA);
      this.isOpen = !this.isOpen;
      this._snacbarService.showSuccess('Assets Declaration Submit!', '');
    } else {
      this.assetsDeclarationForm.markAllAsTouched();
    }
  }

  noSpace(event: any) {
    if (event.target.selectionStart == 0 && event.code == 'Space') {
      event.preventDefault();
    }
  }
}

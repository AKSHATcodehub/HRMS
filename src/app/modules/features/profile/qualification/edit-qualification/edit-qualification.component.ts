import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-edit-qualification',
  templateUrl: './edit-qualification.component.html',
  styleUrls: ['./edit-qualification.component.scss']
})
export class EditQualificationComponent implements OnInit  , AfterViewChecked {
  
  datasource = new MatTableDataSource<any>();
  editQualificationForm!:FormGroup;
  qualifications: any[] = [
    {value: 'High School Diploma/GED', viewValue: 'High School Diploma/GED'},
    {value: 'B.Tech', viewValue: 'B.Tech'},
    {value: 'M.Tech', viewValue: 'M.Tech'},
    {value: 'BCA', viewValue: 'BCA'},
    {value: 'MCA', viewValue: 'MCA'},
    {value: 'BBA', viewValue: 'BBA'},
    {value: 'MBA', viewValue: 'MBA'},
    {value: 'B.Sc', viewValue: 'B.Sc'},
    {value: 'M.Sc', viewValue: 'M.Sc'},
    {value: 'BA', viewValue: 'BA'},
    {value: 'MA', viewValue: 'MA'},
    {value: 'Phd', viewValue: 'Phd'},
    {value: 'Diploma', viewValue: 'Diploma'},
    {value: 'B.Sc Animation & Flim Making', viewValue: 'B.Sc Animation & Flim Making'},
    
  ];
  dp4: any;
  dp3: any;
  Table_DATA: any;

  
  constructor(private _fb:FormBuilder,
    private _form:FormService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditQualificationComponent>,
    private _snackBar:SnackbarService,

    ) { }
    
  ngOnInit(): void {
    this.createForm();
    console.log("this is qualificiation form>>>>>>>",this.data);
    // this.editQualificationForm = this.data.form;
    // this.Table_DATA = this.data.value;

  }
  
  
  ngAfterViewChecked(): void{
    // this.editQualificationForm = this.data ;
    // this.editQualificationForm = this.data;
  }
  
  
  createForm(){
    return this.editQualificationForm = this._fb.group({
      university:this._form.getControl('university'),
      education:this._form.getControl('education'),
      language:this._form.getControl('language'),
      description:this._form.getControl('description'),
      fromTimePerioed:this._form.getControl('fromTimePerioed'),
      toTimePerioed:this._form.getControl('toTimePerioed')
    })
  }

  actionSave(){

    if(this.editQualificationForm.valid){
      this.dialogRef.close({form:this.editQualificationForm,data:this.data});

    }else{

      this.editQualificationForm.markAllAsTouched();
    }
  }

  convert(str:any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  

}

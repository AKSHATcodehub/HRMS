import {  Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/modules/common/modules/dialog/dialog.component';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit{
  
  
  constructor(public dialog: MatDialog,
    private ref:ElementRef,
    private render:Renderer2,
    private _fb:FormBuilder,
    private _form:FormService,
    private _snackBar:SnackbarService,
    ) { }
    slidePosition = 1;
    wrapper:any;
  dp4: any;
  dp3: any;
  selectBtn:any;
  searchInp:any;
  options:any;
  countries:any;
  filterCountries:any;
  qualificationForm!:FormGroup;
  languagePlaceHolder:string='Language';
  language=['Hindi','English'];
  datasource = new MatTableDataSource<any>();
  pageOptions = ['5','10']
  headings = [
    { heading: 'Action', key: 'status', type: 'action', sort: true, action: [1]},
    { heading: 'School/University', key: 'SUName', type: 'text', sort:true },
    { heading: 'Time Period', key: 'Time_Period', type: 'text',sort: true },
    { heading: 'Education level', key: 'ElName', type: 'text',sort: true },
  ]
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

  Table_DATA: any[] = []
  
  ngOnInit(): void {

    this.qualificationForm = this.createForm();
  
    console.log("this is qualiuification form ", this.qualificationForm);
    
    setTimeout(() => {
      this.wrapper = this.ref.nativeElement.querySelector(".wrapper");
      this.selectBtn = document.querySelector(".select-btn");
      this.searchInp = document.querySelector(".searchbar"),
      this.options =document.querySelector(".options");
      this.countries=['English','Hindi'];
      this.filterCountries=this.countries;
  
    }, 2000);
  
  }

  toggleStatus=false;

  optionClicked(wapper:any){

    this.toggleStatus=!this.toggleStatus;

    console.log("toggle sta tus..",this.toggleStatus);

    if(this.toggleStatus){
      this.render.addClass(wapper,'active');
    }
    if(!this.toggleStatus){
      this.render.removeClass(wapper,'active');
    }

    
  }

  keyFunc(event:any){
    console.log("event......",event.target.value);

    let arr = [];
    let searchWord = event.target.value.toLowerCase();
    arr = this.countries.filter((data:any) => {
        return data.toLowerCase().startsWith(searchWord);
    })

    console.log("arr>>>>",arr);
    
    this.filterCountries = arr.length>0 ? arr : ['No Result! '];

    if(event.target.value.toLowerCase().length==0){
      this.filterCountries=this.countries;
    }
    
  }

  updateName(selectedLi:any,selectbtn:any,wapper:any,control:any) {

    this.searchInp.value = "";
    wapper.classList.remove("active");
    selectbtn.firstElementChild.value = selectedLi;
    this.qualificationForm?.get(control)?.setValue(selectedLi);
  }

  createForm(){
    return this._fb.group({
      university:this._form.getControl('university'),
      education:this._form.getControl('education'),
      language:this._form.getControl('language'),
      description:this._form.getControl('description'),
      fromTimePerioed:this._form.getControl('fromTimePerioed'),
      toTimePerioed:this._form.getControl('toTimePerioed')
    })
  }

  
  convert(str:any) :any{
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  
  editEvent(event:any){
    console.log("edit event callled in the qualification",event);
    this.openDialog(event);
  }
  
  deleteEvent(event:any){
    console.log("delete evrnt", event);
    
    this.Table_DATA = this.Table_DATA.filter((item:any)=>{
      if(item!=event){
        return item;
      }
    })
    this.datasource = new MatTableDataSource<any>(this.Table_DATA);
    
  }
  
  actionSave(){
    
    console.log("quali",this.qualificationForm);
    
    this.qualificationForm.markAllAsTouched();
    
    if(this.qualificationForm.valid){
      
      this.dp4=this.convert(`${this.qualificationForm.controls?.['fromTimePerioed'].value}`)
      this.dp3=this.convert(`${this.qualificationForm.controls?.['toTimePerioed'].value}`)
      this.Table_DATA.push(
      { SUName:`${this.qualificationForm.controls?.['university'].value}`, Time_Period:`${this.dp4} - ${this.dp3}`, ElName:`${this.qualificationForm.controls?.['education'].value}`}
      )
      this.datasource = new MatTableDataSource<any>(this.Table_DATA)

      this._snackBar.snackBar('Qualification Updated!')
      
    }
    setTimeout(() => {
        
      console.log("this is TABLE DATAA>>>>>>>>>>",this.Table_DATA);
      
    }, 3000);

    console.log("this is data soucrce>>>>>>>>>>",this.datasource);
    
  }

  openDialog(event:any): void {
    
    const dialogRef = this.dialog.open(EditQualificationComponent,{
      data: event
    }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
  
    this.Table_DATA.filter((item:any)=>{
      console.log("filter loop>>>>>",item.SUName, result.data.SUName);
      
      if(item.SUName == result.data.SUName){
        console.log("data fined>>>>");
        let data1 = this.convert(`${result.form.value.fromTimePerioed}`);
        let data2 = this.convert(`${result.form.value.toTimePerioed}`);
        
        item.SUName = result.form.value.university;
        item.Time_Period =  `${data1} - ${data2}`;
        item.ElName = result.form.value.education
      }
    })

    this.datasource = new MatTableDataSource<any>(this.Table_DATA);

    console.log("updated table data set >>>>>>>>>>");
    
  });
}

  selectedDropdown(event:any){
    this.qualificationForm.controls.language.setValue(event);
    
  }

}





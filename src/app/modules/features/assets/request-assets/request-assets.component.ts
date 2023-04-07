import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarComponent } from 'src/app/modules/common/modules/snackbar/snackbar.component';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { REQUESTED_ASSETS_HEADING, REQUESTED_ASSETS_TABLE_DATA } from './request-asset-data';

@Component({
  selector: 'app-request-assets',
  templateUrl: './request-assets.component.html',
  styleUrls: ['./request-assets.component.scss']
})
export class RequestAssetsComponent implements OnInit {

  constructor(private _fb:FormBuilder,
              private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  isOpen = false;
  datasource = new MatTableDataSource<any>(REQUESTED_ASSETS_TABLE_DATA);
  assetsCategoryDropdown = ['Laptop','Desktop','Mobile'];
  quantityDropdown = ['1','2','3','4','5'];
  priorityDropdown = ['Low','Medium','High'];
  allocationTypeDropdown = ['Permanent','Temporary'];
  headings = REQUESTED_ASSETS_HEADING;
  requestAssetsForm!:FormGroup;
  TABLE_DATA:any[]=[];

  toggleCard(){
    this.isOpen = !this.isOpen
  }

  createForm(){
    return this.requestAssetsForm = this._fb.group({
      assetsCategory:['',Validators.required],
      quantity:['',Validators.required],
      priority:['',Validators.required],
      requestedDate:['',Validators.required],
      allocationType:['',Validators.required],
      requestReason:['',Validators.required]

    })
  }

  requestAssetsSubmit(){
    if(this.requestAssetsForm.valid){
      this.TABLE_DATA = REQUESTED_ASSETS_TABLE_DATA;
      let requestedAssetsObject = {
        s_no:REQUESTED_ASSETS_TABLE_DATA.length+1,
        Status:'none',
        Request_Reason:this.requestAssetsForm.controls.requestReason.value,
        Priority:this.requestAssetsForm.controls.priority.value,
        Requested_At:this.requestAssetsForm.controls.requestedDate.value,
        Assets_Category:this.requestAssetsForm.controls.assetsCategory.value,
        Allocation_type:this.requestAssetsForm.controls.allocationType.value,
        Company:'HP'
      }

      this.TABLE_DATA.push(requestedAssetsObject);
      this.datasource = new MatTableDataSource<any>(this.TABLE_DATA);
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 1* 1000,
        verticalPosition:'top',
        data:'Assets Requested Submitted!'
      });

    }else{
      this.requestAssetsForm.markAllAsTouched();
    }
  }

  selectedValue(event:string,controlName:string){
    this.requestAssetsForm.get(controlName)?.setValue(event);
  }
}

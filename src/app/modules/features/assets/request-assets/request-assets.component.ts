import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from '../../recruitment/interview/interview-data';
import { REQUESTED_ASSETS_HEADING, REQUESTED_ASSETS_TABLE_DATA } from './request-asset-data';

@Component({
  selector: 'app-request-assets',
  templateUrl: './request-assets.component.html',
  styleUrls: ['./request-assets.component.scss']
})
export class RequestAssetsComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

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
}

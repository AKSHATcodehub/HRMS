import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  constructor(private _fb:FormBuilder,
              private service:SnackbarService,
              private dialogRef:MatDialogRef<any,any>) { }

  ngOnInit(): void {
    this.createForm();
  }

  trainingFeedbackForm!:FormGroup;

  createForm(){
    return this.trainingFeedbackForm = this._fb.group({
      objective:['',Validators.required],
      trainingRatingForJob:['',Validators.required],
      trainingRating:['',Validators.required],
      sessionContentRating:['',Validators.required],
      overallFeedback:['',Validators.required]
    })
  }

  submitFeedback(){
    if(this.trainingFeedbackForm.valid){
      this.service.showSuccess('Feedback Submittd!','')
      this.dialogRef.close();
    }else{
      this.service.showError('Objective/Goal Fulfilled field is required','')
    }
  }

}

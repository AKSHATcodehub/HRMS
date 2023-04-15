import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-requested-training-popup',
  templateUrl: './requested-training-popup.component.html',
  styleUrls: ['./requested-training-popup.component.scss']
})
export class RequestedTrainingPopupComponent implements OnInit {

  constructor(private _fb:FormBuilder,
              private _formServoce:FormService,
              private _snackbarServices:SnackbarService,
              public dialogRef: MatDialogRef<RequestedTrainingPopupComponent>) { }

  ngOnInit(): void {
    this.createForm()
  }

  requestedTrainingFeedback!:FormGroup;
  training = ['Micro Frontend '];
  teamName = ['Node.js','Angular','Android','IOS'];
  trainingPlaceholder = 'Select Training';
  teamPlaceholder = 'Select Team';

  createForm(){
    return this.requestedTrainingFeedback = this._fb.group({
      trainingName:this._formServoce.getControl('mandatory'),
      teamName:this._formServoce.getControl('mandatory'),
      learningArea:this._formServoce.getControl('name'),
      skillsArea:this._formServoce.getControl('name'),
      giveTraining:this._formServoce.getControl('mandatory'),
      conductTraining:this._formServoce.getControl('mandatory')
    })
  }

  submitFeedback(){
    if(this.requestedTrainingFeedback.valid){
      this._snackbarServices.showSuccess('Feedback Submitted!','');
      this.dialogRef.close()
    }else{
      this.requestedTrainingFeedback.markAllAsTouched();
    }
  }

  selctedValue(event:any,controlName:string){
    this.requestedTrainingFeedback.get(controlName)?.setValue(event)
  }

}

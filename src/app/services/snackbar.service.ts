import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../modules/common/modules/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar:MatSnackBar) { }

  snackBar(mesages:string){
    this._snackbar.openFromComponent(SnackbarComponent,{
      duration:2000,
      verticalPosition: 'top',
      data:mesages
    })
  }
}

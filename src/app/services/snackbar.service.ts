import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar:MatSnackBar) { }

  snackBar(mesages:string){
    this._snackbar.open(mesages,'',{
      duration:2000,
      panelClass: ['mat-toolbar', 'mat-primary'],
      verticalPosition: 'top',
    })
  }
}

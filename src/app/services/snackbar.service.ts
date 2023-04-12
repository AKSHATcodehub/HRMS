import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../modules/common/modules/snackbar/snackbar.component';
import {ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar:MatSnackBar,
    private toastrService: ToastrService) { }

  snackBar(mesages:string){
    this._snackbar.openFromComponent(SnackbarComponent,{
      duration:2000,
      verticalPosition: 'top',
      data:mesages
    })
  }

  public showSuccess(message:string,title:string): void {
    this.toastrService.success(message,title);
  }

  public showInfo(message:string,title:string): void {
    this.toastrService.info(message,title);
  }

  public showWarning(message:string,title:string): void {
    this.toastrService.warning(message,title);
  }

  public showError(message:string,title:string): void {
    this.toastrService.error(message,title);
  }


}

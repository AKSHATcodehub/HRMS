import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureRoutingModule } from './profile-picture-routing.module';
import { ProfilePictureComponent } from './profile-picture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SnackbarModule } from 'src/app/modules/common/modules/snackbar/snackbar.module';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [  
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    ProfilePictureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
  
    MatSnackBarModule
  ],
  exports:[
    ProfilePictureComponent
  ],
  providers:[
    SnackbarService
  ]
})
export class ProfilePictureModule { }

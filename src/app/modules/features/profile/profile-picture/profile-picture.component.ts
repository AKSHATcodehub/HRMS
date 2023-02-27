import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  profileForm!:FormGroup;
  val:any;
  realpath:any;
  url!: string | ArrayBuffer | null;
  constructor(private fb:FormBuilder,
              private render:Renderer2,
              private _snackBar:SnackbarService) { 

    this.profileForm = this.createForm();

  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.profileForm);
      
    }, 2000);
  }

  createForm(){
    return this.fb.group({
      profilePicture:['',Validators.required],
      checkbox:[null,Validators.required]
    })
  }

  readURL(input:any) {
    console.log("333333333333333");
    
    if (input.files && input.files[0]) {
      var reader = new FileReader();
   
      reader.readAsDataURL(input.files[0]);

      reader.onload = (_event) => {
			  this.url = reader.result; 
		}

    }

    console.log("url....",this.url,input.files, input.files[0]);
    
  }

  selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
		
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.url = reader.result; 
		}
	}

  saveProfile(){
    console.log("form >>>>> ",this.profileForm);
    this._snackBar.snackBar("prifile updated");

    if(this.profileForm.controls.checkbox.value){
      this.removeImage();
      this._snackBar.snackBar("profile updated");
      this.profileForm.controls.checkbox.reset();
    }
    // if(this.profileForm.invalid){
    //   alert("select profile pic")
    // }
  }

  removeImage(){
    this.profileForm.controls.profilePicture.reset();
    this.url='';
  }

}

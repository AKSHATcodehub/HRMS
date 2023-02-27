import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Industry } from './pitch-data';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {
selectedFile: any;
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
  
  toggleStatus:boolean = false;
  pitchForm!:FormGroup;
  IndustryData:string[]=Industry;
  options: any;
  searchInp: any;
  selectBtn: any;
  wrapper: any;


  constructor(private ref:ElementRef,
    private render:Renderer2,
    private fb:FormBuilder) { }

  ngOnInit(): void {

    setTimeout(() => {

      // console.log("data of gender....",this.data);
      
      this.wrapper = this.ref.nativeElement.querySelector(".wrapper");
      this.selectBtn = document.querySelector(".select-btn");
      this.searchInp = document.querySelector(".searchbar"),
      this.options =document.querySelector(".options");
  
 
    this.IndustryData=this.IndustryData;
  
    }, 2000);
  }


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
    arr = this.IndustryData.filter((data:any) => {
        return data.toLowerCase().startsWith(searchWord);
    })

    console.log("arr>>>>",arr);
    
    this.IndustryData = arr.length>0 ? arr : ['No Result! '];

    if(event.target.value.toLowerCase().length==0){
      this.IndustryData=this.IndustryData;
    }
    
  }



  updateName(selectedLi:any,selectbtn:any,wapper:any,control:any) {

    this.searchInp.value = "";
    wapper.classList.remove("active");
    selectbtn.firstElementChild.value = selectedLi;
    this.pitchForm?.get(control)?.setValue(selectedLi);
  }
}

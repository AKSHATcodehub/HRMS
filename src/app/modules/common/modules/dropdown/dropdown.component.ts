import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data!:any;
  @Input() formName!:FormGroup ;
  @Input() controlName!:AbstractControl;
  @Input() placeHolder!:string;
  @Output() outputData :EventEmitter<any> = new EventEmitter();

  
  constructor(private ref:ElementRef,private render:Renderer2) { }
  slidePosition = 1;
  wrapper:any;
  selectBtn:any;
  searchInp:any;
  options:any;  
  parentData:any;
  filterData:any;
  control!:FormControl ;
  
  ngOnInit(): void {
    
    this.control = new FormControl(this.controlName);
    // console.log("control....",this.controlName);

    setTimeout(() => {
      
      this.wrapper = this.ref.nativeElement.querySelector(".input-wrapper");
      this.selectBtn = this.ref.nativeElement.querySelector(".select-btn");
      this.searchInp =this.ref.nativeElement.querySelector(".searchbar"),
      this.options =this.ref.nativeElement.querySelector(".options");
  
    this.parentData=this.data;
    this.filterData=this.parentData;
  
  
    }, 100);

  }


  toggleStatus=false;

  optionClicked(){

    this.toggleStatus=!this.toggleStatus;

    console.log("toggle sta tus..",this.toggleStatus);
    

    if(this.toggleStatus){
      this.render?.addClass(this.wrapper,'active');

    }
    if(!this.toggleStatus){
      this.render?.removeClass(this.wrapper,'active');

    }
  }

  keyFunc(event:any){
    console.log("event......",event.target.value);

    let arr = [];
    let searchWord = event.target.value.toLowerCase();
    arr = this.parentData.filter((data:any) => {
        return data.toLowerCase().includes(searchWord);
    })

    console.log("arr>>>>",arr);
    
    this.filterData = arr.length>0 ? arr : ['No Result! '];

    if(event.target.value.toLowerCase().length==0){
      this.filterData=this.parentData;
    }
  }

  updateName(selectedLi?:any,selectbutton?:any) {

    this.searchInp.value = "";

    this.render.removeClass(this.wrapper,'active');

    this.selectBtn.firstElementChild.value = selectedLi;

    this.outputData.emit(selectedLi);  
  }

 
  
}

import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup } from '@angular/forms';
import {
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};
enum DropdownMouseState {
  inside,
  outside,
}

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
  @Input() progchangedValue:string = '';
  @Input() initialValue:any;
  @Output() outputData :EventEmitter<any> = new EventEmitter();
  @HostListener('document:click') clickedOutside() {
    // console.log("hyy");
    
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false; // hide the dropdown...
    }
  }
  
  constructor(private ref:ElementRef,private render:Renderer2) {
    this.showMenu = false;
    this.state = DropdownMouseState.outside;
    console.log("this is initial value of dropdown>>",this.initialValue);
    
   }
  state!: DropdownMouseState;
  showMenu!: boolean;
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
    // this.initialValue = this.data[0];
    // this.outputData.emit(this.initialValue); 

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

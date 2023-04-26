import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR,} from '@angular/forms';
import { UtilitiesService } from 'src/app/services/utilities.service';
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {provide: NG_VALUE_ACCESSOR,useExisting: forwardRef(() => DropdownComponent),multi: true,};
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
  @Input() progchangedValue:any;
  @Output() outputData :EventEmitter<any> = new EventEmitter();

  
  constructor(private ref:ElementRef,
              private render:Renderer2,
              private _utilitiessService:UtilitiesService) {
    this.showMenu = false;
    this.state = DropdownMouseState.outside;
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
  isMenuOpened: boolean = false;

  ngOnInit(): void {

    
    setTimeout(() => {
      
      this.wrapper = this.ref.nativeElement.querySelector(".input-wrapper");
      this.selectBtn = this.ref.nativeElement.querySelector(".select-btn");
      this.searchInp =this.ref.nativeElement.querySelector(".searchbar"),
      this.options =this.ref.nativeElement.querySelector(".options");
  
    this.parentData=this.data;
    this.filterData=this.parentData;
    
  }, 100);
  
  this._utilitiessService.subject.subscribe((value:any)=>{
    
    this.selectBtn = this.ref.nativeElement.querySelector(".select-btn");
    this.selectBtn.firstElementChild.value = value;
  })
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
    
    let arr = [];
    let searchWord = event.target.value.toLowerCase();
    arr = this.parentData.filter((data:any) => {
        return data.toLowerCase().includes(searchWord);
    })
    
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


  toggleMenu(): void {
    // this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {

    if(this.toggleStatus){
      this.optionClicked();
    }
  }

  
  
}

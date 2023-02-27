import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data:any;
  @Input() formName:any ;
  @Input() controlName:any;
  

  constructor(private ref:ElementRef,private render:Renderer2) { }
  slidePosition = 1;
  wrapper:any;
  selectBtn:any;
  searchInp:any;
  options:any;
  countries:any;
  filterCountries:any;
  control!:FormControl ;
  
  ngOnInit(): void {
    
    this.control = new FormControl(this.controlName);
    // console.log("control....",this.controlName);

    setTimeout(() => {
      
      this.wrapper = this.ref.nativeElement.querySelector(".wrapper");
      this.selectBtn = document.querySelector(".select-btn");
      this.searchInp = document.querySelector(".searchbar"),
      this.options =document.querySelector(".options");
  
    this.countries=this.data;
    this.filterCountries=this.countries;
  
    }, 2000);

  }


  toggleStatus=false;

  optionClicked(){

    this.toggleStatus=!this.toggleStatus;

    console.log("toggle sta tus..",this.toggleStatus);
    

    if(this.toggleStatus){
      this.render?.addClass(this.wrapper,'active');

    }
    if(!this.toggleStatus){
      this.render.removeClass(this.wrapper,'active');

    }
  }

  keyFunc(event:any){
    console.log("event......",event.target.value);

    let arr = [];
    let searchWord = event.target.value.toLowerCase();
    arr = this.countries.filter((data:any) => {
        return data.toLowerCase().includes(searchWord);
    })

    console.log("arr>>>>",arr);
    
    this.filterCountries = arr.length>0 ? arr : ['No Result! '];

    if(event.target.value.toLowerCase().length==0){
      this.filterCountries=this.countries;
    }
  }

  updateName(selectedLi?:any,selectbutton?:any) {

    console.log("control....",this.formName.get(this.controlName));

    console.log("upadted function called...");
    this.searchInp.value = "";
    // this.addCountry(selectedLi.innerText);
    this.wrapper.classList.remove("active");
    this.formName.get(this.controlName).setValue(selectedLi);
    // selectbtn.firstElementChild.innerText = selectedLi.innerText;
  }
  
}

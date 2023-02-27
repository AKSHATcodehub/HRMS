import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { FormService } from 'src/app/services/form.service';
import { sideNavList } from './feature-data';
import { MatExpansionPanel } from '@angular/material/expansion';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

 

  constructor(private service:FormService,
    private ref:ElementRef,
    private render:Renderer2,
    private _router:Router){}

  @ViewChild('sidenav') sidenav!: MatSidenav; 
   
  panelOpenState = false;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  sideNavBarData=sideNavList;
  showNavbarFeature:boolean=true;
  layoutNavbarElement!:HTMLElement;
  slidePosition = 1;
  selectedID:any;
  ngOnInit(): void {
    // this.ref.nativeElement.querySelector('.navbar-features');
    // setTimeout(()=>{
    //   this.layoutNavbarElement=this.ref.nativeElement.querySelector('.layout-navbar');
    //   console.log("native element ... ",this.layoutNavbarElement.offsetWidth);
      

    // },2000)

    // [ngClass]="{'open': panelOpenState== false,'close':panelOpenState==true}"

      // forward/Back controls
      // setTimeout(() => {
      //   if(this.panelOpenState){

      //     let element = this.ref.nativeElement.querySelectorAll('.c')
    
      //     console.log("if part called..ngOnontt.",element);
    
    
      //     element.forEach((element:any) => {
      //       this.render.addClass(element,'close');

      //     });
          
      //   }   
      //   else{
          
      //     let element = this.ref.nativeElement.querySelectorAll('.c');

      //     console.log("else part called...ngOnoit.",element);

      //     element.forEach((element:any) => {
      //       this.render.addClass(element,'open');

      //     });

  
    
      //   }
        
      // }, 0.2);

    
  }
  
  panelClick(event?:any){ 

 
    console.log("event send by..",event );
    
    // let idd = event?.id;

    // this.selectedID = event?.id;

    // if(this.panelOpenState){

    //   let element = this.ref.nativeElement.querySelector(`#${idd}`)

    //   console.log("if part called...",element);

    //   this.render.removeClass(element,'open');


    //   this.render.addClass(element,'close');
      
    // }
    // else{
      
    //   let element = this.ref.nativeElement.querySelector(`#${idd}`);
 
    //   console.log("else part called....",element);

    //   this.render.removeClass(element,'close');



    //   this.render.addClass(element,'open');

    // }
  }

  mouseenter() {
    if (!this.isExpanded) {   
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  mouseEnter(){
    console.log("mouse enter working.......");
    this.isExpanded = !this.isExpanded
    
  }

  logout(){
    sessionStorage.removeItem('token');

    this._router.navigate(['']);
  }

 

}
   
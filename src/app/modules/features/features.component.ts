import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { FormService } from 'src/app/services/form.service';
import { navBarData, sideNavList } from './feature-data';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NavbarItem } from 'src/app/interfaces/navBar.interface';
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
    
  localNavBarData: Array<NavbarItem>= navBarData;
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
  sidenavv = sideNavList;

  ngOnInit(): void {
    
  }
  
  panelClick(event?:any){ 
    console.log("event send by..",event );
  }

  openSubMenu(navBarItem: any) {
   
    if (navBarItem.subMenu) {
      navBarItem.subMenuClicked = !navBarItem.subMenuClicked;
    }
  }

  expandAction() {
    console.log("showsexxpanf action function called>>>>>>>");

    this.isExpanded = !this.isExpanded;
    if(!this.isExpanded){
      let element = this.ref.nativeElement.querySelector('.example-sidenav');
      this.render.setStyle(element,'width','auto');
    }else{
      let element = this.ref.nativeElement.querySelector('.example-sidenav');
      this.render.setStyle(element,'width','250px');
      this.render.setStyle(element,'display','block');

    } 
    this.collapseSubMenu();
    
  }



  onResize(event:any) {
    console.log("jjjjjjjjjjjjj");
    
    if(window.innerWidth >= 992){
      let sideNavID = document.getElementById("side-nav-id") as HTMLElement || null
      sideNavID.style.display = "block" 
    } 
    if(window.innerWidth <= 992){
      let sideNavID = document.getElementById("side-nav-id") as HTMLElement || null
      sideNavID.style.display = "none" 
      let sideNavIcon = document.getElementById("sidenev-icon") as HTMLElement || null
      sideNavID.style.display = 'none'
    }
  }
  
  collapseSubMenu() {
    this.localNavBarData.map((navBarItem: any) => {
      navBarItem.subMenuClicked = false;
    })
  }

  showSubMenu(){
    console.log("showsubmenu function called>>>>>>>");
    
    this.showSubmenu = !this.showSubmenu;
    // if(!this.showSubmenu){
    //   let element = this.ref.nativeElement.querySelector('.example-sidenav');
    //   this.render.setStyle(element,'width','auto');
    // }else{
    //   let element = this.ref.nativeElement.querySelector('.example-sidenav');
    //   this.render.setStyle(element,'width','250px');
    // } 

  }

  mouseenter() {
    // alert("moouse enter called>>>")
    if (!this.isExpanded) {   
      this.isShowing = true;
      this.expandAction();
    }
    
  }

  mouseleave() {

    if (this.isExpanded) {
      this.isShowing = false;
      this.expandAction();
      
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
   
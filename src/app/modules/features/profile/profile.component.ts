import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { userInfoTitle } from './profile-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  titleData=userInfoTitle;
  selectedIndex0=0;
  selectedIndex1=1;
  selectedIndex2=2;
  selectedIndex3=3;
  selectedIndex4=4;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  selectedTitleName!:HTMLElement;

  ngOnInit(): void {
  }

  onSelectTitle(selectedTitle:any){
    
    console.log("selected element...",selectedTitle);
    

    this.renderer.setProperty(selectedTitle,'width','700px');


  }


}

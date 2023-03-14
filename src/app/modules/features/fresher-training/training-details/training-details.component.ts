import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openCity(evt:any, cityName:any) {
    var i;
    let tabcontent:any;
    let  tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    let element = document.getElementById(cityName) as HTMLElement || null;
    element.style.display  = "block";
    evt.currentTarget.className += " active";
  }

}

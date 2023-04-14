import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-app-latest',
  templateUrl: './app-latest.component.html',
  styleUrls: ['./app-latest.component.scss']
})
export class AppLatestComponent implements OnInit {

  constructor() { }
  
   appLatestGridConfig= {
    grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
    gridBreakpoints:{sm: 650, md: 800, lg: 1200, xl: 1300},
    load: 3,
    interval: {timing: 3000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

   arr = [
    {
      card_name:'Appreciation for Team',
      message:'Lorem23 Lorem23 Lorem23 Lorem23 Lorem23 Lorem23 Lorem23 Lorem23Lorem23 Lorem23 Lorem23Lorem23 Lorem23 Lorem23'
    },
    {
      card_name:'Appreciation | ABP News',
      message:'Lorem23asdf asdf Lorem23 asLorem2dsf3 Lorem23 Lorem23 Lorem23 Lorem23 Lorem23Lorem23 Lorem23 Lorem23Lorem23 Lorem23 Lorem23'
    },
    {
      card_name:'Appreciation | Cars24',
      message:'Jack and jill went up the hill to fetch a pale of water jack and jilllllyyyy'
    }
  ]


  appinventiv_latest = [
    {
      division_name:'Apprecitaion'
    },
    {
      division_name:'Birthday Celebration'
    },
    {
      division_name:'Work Anniversary'
    },
    {
      division_name:'Awards'
    }

  ]

  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newOpeningsData = {
    showButtons:false
  }

  ngOnInit(): void {
    // console.log(/"JOD");
  }

  ngAfterViewInit(){
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    // console.log(this.dataSource,"DS");
    
    setTimeout(()=>{
      this.render_child = true;
    },10)

  }


}

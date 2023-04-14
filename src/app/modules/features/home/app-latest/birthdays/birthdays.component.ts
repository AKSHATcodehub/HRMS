import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  birthdaysGridConfig= {
    grid: { xs: 1, sm: 1, md: 1, lg: 2, all: 0 },
    gridBreakpoints:{sm: 650, md: 800, lg: 1300, xl: 1900},
    load: 3,
    interval: {timing: 3000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.9
  }

  arr = [
    {
      member_name:'Ankit Mathur',
      image_name:'profile_2.jpg',
      member_designation:'Angular Software Engineer'
    },
    {
      member_name:'Chetan singh',
      image_name:'profile_7.jpg',
      member_designation:'React JS Software Engineeer'
    },
    {
      member_name:'Anubhav ',
      image_name:'profile_3.jpeg',
      member_designation:'Marketing Team'
    },
    {
      member_name:'Vivek Singh',
      image_name:'profile_4.jpeg',
      member_designation:'Marketing Team'
    }
    
  ]


  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newOpeningsData = {
    showButtons:false
  }

  ngAfterViewInit(){
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    
    
    setTimeout(()=>{
      this.render_child = true;
    },10)

  }


}

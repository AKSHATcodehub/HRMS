import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-new-join',
  templateUrl: './new-join.component.html',
  styleUrls: ['./new-join.component.scss']
})
export class NewJoinComponent implements OnInit,AfterViewInit {

  constructor() { }
  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newJoinGridConfig= {
    grid: { xs: 1, sm: 2, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 850, md: 1300, lg: 2000, xl: 2000},
    load: 3,
    interval: {timing: 3500, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  newJoinings=['aakritiSingh.png','amanGaur.png','chitransh.png','saurabh.png']
  newJoinData = {
    heading:'New Family Members',
    showButtons:true,
  }

  ngOnInit(): void {

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

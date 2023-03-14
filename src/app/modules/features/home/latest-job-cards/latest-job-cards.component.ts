import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-latest-job-cards',
  templateUrl: './latest-job-cards.component.html',
  styleUrls: ['./latest-job-cards.component.scss']
})
export class LatestJobCardsComponent implements OnInit {
openDialog() {
throw new Error('Method not implemented.');
}

  constructor() { }
  render_child = false;
  dataSource:any = []
  ngOnInit(): void {
  }
  arr = [1,2,3,4]
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;


 
  gridConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 3500, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
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

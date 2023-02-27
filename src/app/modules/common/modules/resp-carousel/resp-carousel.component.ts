import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-resp-carousel',
  templateUrl: './resp-carousel.component.html',
  styleUrls: ['./resp-carousel.component.scss']
})
export class RespCarouselComponent implements OnInit {

  constructor(private cd:ChangeDetectorRef){
    
  }

  carouselConfig1:any
  ngAfterViewInit(): void {
    
      this.cd.detectChanges()
  }
  
  ngOnInit(): void { 
    console.log(this.listToShow,"4");
    
    // console.log(this.carouselConfigData,"carouselConfigData");
    if(this.gridConfig){
      this.carouselConfig1 = this.gridConfig
    }
  }

  @Input() gridConfig:any;
  @Input() listToShow!:any
  @Input() carouselConfigData:any
  @Input() carouselPointNumbers:any
  @ViewChild('myCarousel1') myCarousel1!: NguCarousel<any>;
  withAnim = true;

  // carouselConfig1: NguCarouselConfig;
  carouselItems1 = [1,2,3];
  

  moveTo(slide:number) {
    this.myCarousel1.moveTo(slide, !this.withAnim);
  }

}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor(private render:Renderer2,private  elementRef:ElementRef) { }

  slideIndex = 1;

  slides:any;

  counter = 1;

  ngOnInit(): void {

    setTimeout(() => {

      
      this.slides = this.elementRef.nativeElement.querySelectorAll('.slide');

      this.slides.forEach((item:any,index:any) => {
        this.render.setStyle(item,'left',`${index*100}%`)
      });

      setInterval(() =>{
        this.slideImage();
        this.counter=this.counter+1;
        if(this.counter==4){
          this.counter=1;
        }
      }, 2000);


    }, 1000);
  }

  slideImage=()=>{
    // console.log("slide image called..");
    
    this.slides.forEach((item:any) => {
      
      this.render.setStyle(item,'transform',`translateX(-${this.counter*100}%)`)
      
    });
  }


}

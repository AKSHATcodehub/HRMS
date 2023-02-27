import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latest-info',
  templateUrl: './latest-info.component.html',
  styleUrls: ['./latest-info.component.scss']
})
export class LatestInfoComponent implements OnInit {
  constructor(private rendre:Renderer2, private ref:ElementRef) { }

  // counter=0;

  // slides:any;

  // slideIndex=0;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,   
    pullDrag: false,
    dots: true,   
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
    },
    nav: true
  }

  ngOnInit(): void {

    setTimeout(() => {

      console.log("letest info set time out called....");
         
   
      let element1 = this.ref.nativeElement.querySelector('.owl-stage-outer');

      console.log("selected ele.." , element1);

      this.rendre.setStyle(element1,'height', '480px');
      
      let element2 = this.ref.nativeElement.querySelector('.owl-stage ');

      console.log("selected ele.." , element2);

      this.rendre.setStyle(element2,'height', '100%');

      this.rendre.setStyle(element2,'width', '100%');

 

      let element3 = this.ref.nativeElement.querySelectorAll('.owl-item');

      console.log("selected ele.." , element3);

      element3.forEach((item:any) => {

        this.rendre.setStyle(item,'height', '480px');
        
        this.rendre.setStyle(item,'width', '33%');

        // this.rendre.setStyle(item,'margin', '0px 25px');

      });

      let element4 = this.ref.nativeElement.querySelector('.owl-nav');

      this.rendre.setStyle(element4,'width', '100px');


      this.rendre.setStyle(element4,'position', 'absolute');

      this.rendre.setStyle(element4,'top', '-40px');

      this.rendre.setStyle(element4,'right', '-15px');

      let element5 = this.ref.nativeElement.querySelector('.owl-carousel');

      this.rendre.setStyle(element5,'position', 'relative');
      

    //   position: absolute;
    // top: -40px !important;
    // right: -50px !important;
      
        

    }, 100);
  }

}

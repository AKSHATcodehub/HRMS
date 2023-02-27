
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-custom-carossuel',
  templateUrl: './custom-carossuel.component.html',
  styleUrls: ['./style.css']
})
export class CustomCarossuelComponent implements OnInit {

  constructor(private rendre:Renderer2, private ref:ElementRef,private router:Router) { 
    
  }

  // counter=0;     

  // slides:any;

  // slideIndex=0;

  imagesPath=['../../../../../assets/Best Place to work.png','../../../../../assets/Christmas.png','../../../../../assets/Republic Day.png','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg'];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
      items:1,
    responsive: {
      
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
  };

  
  ngOnInit(): void {

   
    setTimeout(() => {

      

      


      this.imagesPath=['../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg','../../../../../assets/abk.jpeg'];

    
      
      console.log("this is custom image ....",$('.custom-img'));
      

      console.log("appinventiv gallery ngoninit called.....");
      

      let element1 = this.ref.nativeElement.querySelector('.owl-stage-outer');

      console.log("selected ele.." , element1);

      this.rendre.setStyle(element1,'height', '256px');
      
      let element2 = this.ref.nativeElement.querySelector('.owl-stage ');

      console.log("selected ele.." , element2); 

      this.rendre.setStyle(element2,'height', '256px');
 
      this.rendre.setStyle(element2,'width', '100%'); 


      let element3 = this.ref.nativeElement.querySelectorAll('.owl-item');

      console.log("selected ele.." , element3);   

      element3.forEach((item:any) => {   

        this.rendre.setStyle(item,'height', '256px');
         
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
      
    //  this.changeOptions();

    //  setTimeout(() => {
    //   this.changeOptions();
    //  }, 1000);

     
 
    }, 100);
  }
  // changeOptions() {
  //   this.customOptions = { ...this.customOptions, loop: true, autoplay:true } // this will make the carousel refresh
  // }
 
  // slide(){
  //   this.slides = document.querySelectorAll('.slide');
  //   console.log("slides...",this.slides);

  //   this.slides.forEach((div:Element,index:any) => {   
      
  //     this.rendre.setStyle(div,'left',`${index*33}%`);


  //   });
  
   
  // }

  // prev(){
  //   this.counter=this.counter-1; 
  //   this.slideImage();
  // }

  // next(){
    
  //   this.counter=this.counter+1; 

  //   if(this.counter<=this.slides.length){
  //     this.slideImage();

  //   }else{
  //     this.counter=0;
  //     this.slideImage();
  //   }
    
  //   // if(this.counter == 4){
  //   //   this.slide();
  //   // }else{
  //   // }

  // } 

  // slideImage = ()=>{

  //   this.slides = document.querySelectorAll('.slide');

  //   this.slides.forEach((div:Element,index:any)=>{
  
  //     this.rendre.setStyle(div,'transform',`translateX(-${this.counter*100}%)`);
      


  //   }); 
 
 
  //  setTimeout(() => { 

  //   if(this.slides.length>this.slideIndex){
  //     this.rendre.setStyle(this.slides[this.slideIndex],'left',`${(this.slides.length+this.slideIndex)*450}px`);

  //     // this.rendre.setStyle(this.slides[this.slideIndex],'transform','translateX(0px)');
  
  //     this.slideIndex = this.slideIndex + 1; 

  //   }else{
  //     this.slideIndex=0

  //     this.rendre.setStyle(this.slides[this.slideIndex],'left',`${(this.slides.length+this.slideIndex)*450}px`);

  //     // this.rendre.setStyle(this.slides[this.slideIndex],'transform','translateX(0%)'); 
  
  //     this.slides.forEach((div:Element,index:any) => {   
      
  //       this.rendre.setStyle(div,'left',`${index*33}%`);
  
  
  //     });


  //     this.slideIndex = this.slideIndex + 1; 
  //   }

   
    
  //  }, 1000);
  // }  
  
}  
  
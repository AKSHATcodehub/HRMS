import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespCarouselComponent } from './resp-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';



@NgModule({
  declarations: [
    RespCarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports:[
    RespCarouselComponent
  ]
})
export class RespCarouselModule { }

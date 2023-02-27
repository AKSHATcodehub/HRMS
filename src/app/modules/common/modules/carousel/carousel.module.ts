import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatCarouselModule.forRoot(),
    MatIconModule
  ],
  exports:[
    CarouselComponent
  ]
})
export class CarouselModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    CardsComponent,
    
  ]
})
export class CardsModule { }

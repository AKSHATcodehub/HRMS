import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatIconModule
  ],
  exports:[
    CardsComponent,
    
  ]
})
export class CardsModule { }

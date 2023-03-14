import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Explore1RoutingModule } from './explore1-routing.module';
import { Explore1Component } from './explore1.component';


@NgModule({
  declarations: [
    Explore1Component
  ],
  imports: [
    CommonModule,
    Explore1RoutingModule
  ]
})
export class Explore1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipRoutingModule } from './entrepreneurship-routing.module';
import { EntrepreneurshipComponent } from './entrepreneurship.component';
import { AddPitchModule } from './add-pitch/add-pitch.module';


@NgModule({
  declarations: [
    EntrepreneurshipComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipRoutingModule,
    AddPitchModule
  ]
})
export class EntrepreneurshipModule { }

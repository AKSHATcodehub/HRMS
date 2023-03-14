import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalendarRoutingModule } from './holiday-calendar-routing.module';
import { HolidayCalendarComponent } from './holiday-calendar.component';


@NgModule({
  declarations: [
    HolidayCalendarComponent
  ],
  imports: [
    CommonModule,
    HolidayCalendarRoutingModule
  ]
})
export class HolidayCalendarModule { }

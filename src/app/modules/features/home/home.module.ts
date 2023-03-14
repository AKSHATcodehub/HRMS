import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCarouselModule } from 'ng-mat-carousel';
import { MatIconModule } from '@angular/material/icon';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { CarouselComponent } from '../../common/modules/carousel/carousel.component';
// import { SlideshowComponent } from './slideshow/slideshow.component';
// import { TeamCarosuelComponent } from './team-carosuel/team-carosuel.component';
// import { LatestInfoComponent } from './latest-info/latest-info.component';
import { LatestJobComponent } from './latest-job/latest-job.component';
import { LatestJobCardsComponent } from './latest-job-cards/latest-job-cards.component';
import { RespCarouselModule } from '../../common/modules/resp-carousel/resp-carousel.module';
import { DialogModule } from '../../common/modules/dialog/dialog.module';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { GalleryDialogComponent } from './app-gallery/gallery-dialog/gallery-dialog.component';
import { JobDetailsModule } from '../job-details/job-details.module';
import { AppLatestComponent } from './app-latest/app-latest.component';
import { BirthdaysComponent } from './app-latest/birthdays/birthdays.component';
import { WorkAnniversaryComponent } from './app-latest/work-anniversary/work-anniversary.component';
import { AppreciateComponent } from './app-latest/appreciate/appreciate.component';
import { AwardsComponent } from './app-latest/awards/awards.component';
import { NewJoinComponent } from './new-join/new-join.component';


@NgModule({
  declarations: [
    HomeComponent,
    // CarouselComponent,
    // SlideshowComponent,
    // TeamCarosuelComponent,
    // LatestInfoComponent,
    LatestJobComponent,
    LatestJobCardsComponent,
    AppGalleryComponent,
    GalleryDialogComponent,
    AppLatestComponent,
    BirthdaysComponent,
    WorkAnniversaryComponent,
    AppreciateComponent,
    AwardsComponent,
    NewJoinComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCarouselModule.forRoot(),
    MatIconModule,
    // CarouselModule,
    RespCarouselModule,
    DialogModule,
    JobDetailsModule,

  ],
  exports:[
    LatestJobComponent
  ]
})
export class HomeModule { }
